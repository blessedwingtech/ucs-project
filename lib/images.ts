/**
 * Universal Image Resolver: Handles direct links, cloud share links (Google Drive, Dropbox, Imgur, MemoTonik),
 * and falls back to extracting OpenGraph / Twitter Card images from web pages.
 */
export async function resolveDirectImageUrl(url: string | null | undefined): Promise<string | null> {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  // 1. Google Drive share links
  // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  const gdriveMatch = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (gdriveMatch && gdriveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${gdriveMatch[1]}`;
  }

  // 2. Dropbox share links
  // Convert dl=0 to raw=1 for direct file streaming
  if (trimmed.includes('dropbox.com')) {
    return trimmed.replace('dl=0', 'raw=1').replace('?dl=1', '?raw=1');
  }

  // 3. Imgur post links
  const imgurMatch = trimmed.match(/imgur\.com\/([a-zA-Z0-9]+)$/);
  if (imgurMatch && imgurMatch[1]) {
    return `https://i.imgur.com/${imgurMatch[1]}.jpg`;
  }

  // 4. MemoTonik share links
  if (trimmed.includes('memo.bittonik.com/share/photo/')) {
    try {
      const response = await fetch(trimmed, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        next: { revalidate: 3600 },
      });
      if (response.ok) {
        const html = await response.text();
        const match = html.match(/"url":"(https:\/\/[^"]+\.(png|jpg|jpeg|webp|gif|svg)[^"]*)"/i);
        if (match && match[1]) {
          return match[1].replace(/\\u0026/g, '&');
        }
      }
    } catch (err) {
      console.error('Error resolving memo image:', err);
    }
  }

  // 5. If it's already a direct image extension, return as is
  if (/\.(jpg|jpeg|png|webp|gif|svg|avif)(\?.*)?$/i.test(trimmed)) {
    return trimmed;
  }

  // 6. Generic web page: try to extract og:image or twitter:image
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(trimmed, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        // If content-type is already an image (e.g. redirected or without extension)
        if (contentType.startsWith('image/')) {
          return trimmed;
        }

        const html = await res.text();
        const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
                        html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
        if (ogMatch && ogMatch[1]) {
          let ogUrl = ogMatch[1];
          if (ogUrl.startsWith('/')) {
            const parsed = new URL(trimmed);
            ogUrl = `${parsed.origin}${ogUrl}`;
          }
          return ogUrl;
        }
      }
    } catch {
      // Return original URL as fallback
    }
  }

  return trimmed;
}
