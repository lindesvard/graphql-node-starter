module.exports = {
  port: process.env.PORT || 3000,
  logLevel: 'tiny',
  jwt: {
    secret: '2if83djo385jods03785jehj39984jkryew783mhew84hjwt6!4if39',
    expire: 60 * 60 * 24 * 3, // 3 days
    refresh: {
      secret: 'kl3m(3jsk&2k"djdnleujbwö"lw!mD8#8MlflJU)3mMfelwU3mdbLey',
      expire: 60 * 60 * 24 * 365, // 90 days
    },
  },
  apolloEngine: {
    apiKey: '',
    privateVariables: ['password'],
  },
}
