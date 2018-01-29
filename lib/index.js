'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HttpsRedirect = function (_React$Component) {
  _inherits(HttpsRedirect, _React$Component);

  function HttpsRedirect() {
    _classCallCheck(this, HttpsRedirect);

    return _possibleConstructorReturn(this, (HttpsRedirect.__proto__ || Object.getPrototypeOf(HttpsRedirect)).apply(this, arguments));
  }

  _createClass(HttpsRedirect, [{
    key: 'isLocalHost',
    value: function isLocalHost(hostname) {
      return !!(hostname === 'localhost' || hostname === '[::1]' || hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          force = _props.force,
          skip = _props.skip;

      if (typeof window !== 'undefined' && window.location && window.location.protocol === 'http:' && (!this.isLocalHost(window.location.hostname) || force) && !skip) {
        window.location.href = window.location.href.replace(/^http(?!s)/, 'https');
      }

      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return HttpsRedirect;
}(_react2.default.Component);

HttpsRedirect.propTypes = {
  children: _propTypes2.default.node,
  force: _propTypes2.default.bool,
  skip: _propTypes2.default.bool
};

exports.default = HttpsRedirect;