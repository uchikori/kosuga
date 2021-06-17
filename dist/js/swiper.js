"use strict";

var _coreClass = _interopRequireDefault(require("./components/core/core-class"));

var _device = _interopRequireDefault(require("./modules/device/device"));

var _support = _interopRequireDefault(require("./modules/support/support"));

var _browser = _interopRequireDefault(require("./modules/browser/browser"));

var _resize = _interopRequireDefault(require("./modules/resize/resize"));

var _observer = _interopRequireDefault(require("./modules/observer/observer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Swiper Class
// Core Modules
//IMPORT_COMPONENTS
var components = [_device["default"], _support["default"], _browser["default"], _resize["default"], _observer["default"] //INSTALL_COMPONENTS
];

if (typeof _coreClass["default"].use === 'undefined') {
  _coreClass["default"].use = _coreClass["default"].Class.use;
  _coreClass["default"].installModule = _coreClass["default"].Class.installModule;
}

_coreClass["default"].use(components); //EXPORT