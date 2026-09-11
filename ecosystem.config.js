module.exports = {
  apps: [
    {
      name: 'ucs-website',
      script: 'npm',
      args: 'start',
      instances: 1, // ou 'max' pour utiliser tous les coeurs CPU
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
