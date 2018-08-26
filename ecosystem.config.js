module.exports = {
  apps: [
    {
      name: '',
      script: 'dist/src/index.js',
      instances: 'max',
      exec_mode: 'cluster',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user: 'web',
      host: '',
      port: '',
      ref: 'origin/master',
      repo: '',
      path: '/home/web/services/blaranderna-api',
      'post-deploy':
        'yarn install --production=false && yarn build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
}
