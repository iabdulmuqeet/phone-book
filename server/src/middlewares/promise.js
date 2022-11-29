exports.promise = handler => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next)
    } catch (err) {
      let message = 'Server Error'
      let statusCode = 500
      res.status(statusCode).send({ message, error: err.message })
    }
  }
}
