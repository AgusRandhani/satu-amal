"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _application = require('./application'); var _application2 = _interopRequireDefault(_application);

var server_host = process.env.YOUR_HOST || "0.0.0.0";
var server_port = process.env.APP_PORT || process.env.PORT || 3333;
_application2.default.listen(server_port, server_host, () => {
  console.log(`Server is running on :${process.env.APP_URL}`);
});
