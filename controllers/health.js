/* eslint-disable prettier/prettier */
const healthController = {
  getServerHealthStatus(req, res) {
    res.status(200).json({
      status: 'ok'
    });
  }
};

module.exports = healthController;
