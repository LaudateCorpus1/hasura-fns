module.exports = (req, res) => {
  if (!req.body) {
    return res.status(400).send('Must have body with input')
  }

  const {
    input: { name, times },
  } = req.body.input

  res.status(200).json({
    message: `Hello ${name.repeat(times)}`,
    errors: null,
  })
}
