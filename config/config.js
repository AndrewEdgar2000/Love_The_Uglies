const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
            process.env.MONGO_HOST ||
            'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017')+'/users/'
}
console.log("🚀 ~ file: config.js ~ line 9 ~ config", config)

export default config
