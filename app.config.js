const config = {
  connectionString: 'mongodb://localhost/frontcamp',
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret'
}

module.exports = config