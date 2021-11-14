"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _application = require('./application'); var _application2 = _interopRequireDefault(_application);

_application2.default.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on :${process.env.APP_URL}`);
});
