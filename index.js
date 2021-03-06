"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactGoogleLogin = _interopRequireDefault(require("react-google-login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Index = function Index(_ref) {
  var clientId = _ref.clientId,
      redirectTo = _ref.redirectTo;

  var responseGoogle = function responseGoogle(data) {
    if (!data) throw Error();
    var tokenId = data.tokenId;
    window.location.href = "".concat(redirectTo, "?token=").concat(tokenId);
  };

  return /*#__PURE__*/_react["default"].createElement("center", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactGoogleLogin["default"], {
    clientId: clientId,
    buttonText: "Login",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: "single_host_origin"
  })));
};

var _default = Index;
exports["default"] = _default;
