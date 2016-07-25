function index(req, res) {
  res.json({
    welcome: "Welcome to Your Daily Doge!"
  })
}

module.exports.index = index;
