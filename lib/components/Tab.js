'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function onTabClick(selected, onClick, originalKey) {
  return function () {
    return !selected && onClick(originalKey);
  };
}

var Tab = function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.children !== nextProps.children || this.props.selected !== nextProps.selected || this.props.classNames !== nextProps.classNames;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          classNames = _props.classNames,
          selected = _props.selected,
          disabled = _props.disabled,
          panelId = _props.panelId,
          onClick = _props.onClick,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          originalKey = _props.originalKey,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        {
          ref: function ref(e) {
            return _this2.tab = e;
          },
          role: 'tab',
          className: classNames,
          id: id,
          'aria-selected': selected ? 'true' : 'false',
          'aria-expanded': selected ? 'true' : 'false',
          'aria-disabled': disabled ? 'true' : 'false',
          'aria-controls': panelId,
          tabIndex: '0',
          onClick: onTabClick(selected, onClick, originalKey),
          onFocus: onFocus(originalKey),
          onBlur: onBlur
        },
        children
      );
    }
  }]);

  return Tab;
}(_react.Component);

exports.default = Tab;


Tab.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),
  disabled: _propTypes2.default.bool,

  // generic props
  panelId: _propTypes2.default.string.isRequired,
  selected: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onFocus: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired,
  originalKey: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  classNames: _propTypes2.default.string.isRequired
};

Tab.defaultProps = {
  children: undefined,
  disabled: false
};