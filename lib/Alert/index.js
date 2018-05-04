'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Success = require('../icon/Success');

var _Success2 = _interopRequireDefault(_Success);

var _Failure = require('../icon/Failure');

var _Failure2 = _interopRequireDefault(_Failure);

var _Warning = require('../icon/Warning');

var _Warning2 = _interopRequireDefault(_Warning);

var _Close = require('../icon/Close');

var _Close2 = _interopRequireDefault(_Close);

var _config = require('vtex-tachyons/config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoClose && this.props.onClose) {
        this.timeout = setTimeout(this.props.onClose, this.props.autoClose);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          onClose = _props.onClose;

      var classes = 'pa5 br2 ';
      var showIcon = false;
      var Icon = 'div';
      var color = 'c-default';

      switch (type) {
        case 'success':
          {
            showIcon = true;
            classes += 'bg-success--light ';
            Icon = _Success2.default;
            color = 'c-success';
            break;
          }
        case 'error':
          {
            showIcon = true;
            classes += 'bg-danger--light ';
            Icon = _Failure2.default;
            color = 'c-danger';
            break;
          }
        case 'warning':
          {
            showIcon = true;
            classes += 'bg-warning--light ';
            Icon = _Warning2.default;
            color = 'c-warning';
            break;
          }
        default:
          {
            classes += 'bg-info--light ';
            break;
          }
      }

      return _react2.default.createElement(
        'div',
        { className: 'vtex-alert flex justify-between f5 c-base-8 ' + classes },
        _react2.default.createElement(
          'div',
          { className: 'flex items-center' },
          showIcon && _react2.default.createElement(
            'span',
            { className: color },
            _react2.default.createElement(Icon, { color: 'currentColor', size: 18 })
          ),
          _react2.default.createElement(
            'div',
            { className: '' + (showIcon ? 'ph5 flex' : 'pr5') },
            this.props.children
          )
        ),
        onClose && _react2.default.createElement(
          'div',
          { className: 'vtex-alert__close-icon pointer flex items-center pv2 c-base-8', onClick: onClose },
          _react2.default.createElement(_Close2.default, { color: 'currentColor', size: 10 })
        )
      );
    }
  }]);

  return Alert;
}(_react.Component);

Alert.propTypes = {
  /** Style of the alert */
  type: _propTypes2.default.oneOf(['success', 'error', 'warning', 'info']),
  /** Content of the alert */
  children: _propTypes2.default.node.isRequired,
  /** If this function is defined, a close icon will appear and this function will be called when alert is closed. */
  onClose: _propTypes2.default.func,
  /** Time in ms to auto close the alert */
  autoClose: _propTypes2.default.number
};

Alert.defaultProps = {
  type: 'info'
};

exports.default = Alert;