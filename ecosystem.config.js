module.exports = {
  apps: [
    {
      name: 'blaranderna-api',
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
      host: '37.139.16.117',
      port: '22123',
      ref: 'origin/master',
      repo: 'git@github.com:lindesvard/blaranderna-api.git',
      path: '/home/web/services/blaranderna-api',
      'post-deploy':
        'yarn install --production=false && yarn build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
}
