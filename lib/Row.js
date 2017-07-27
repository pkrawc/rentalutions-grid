'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  margin-bottom: ', ';\n  box-sizing: border-box;\n  .row-column {\n    box-sizing: border-box;\n  }\n'], ['\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  margin-bottom: ', ';\n  box-sizing: border-box;\n  .row-column {\n    box-sizing: border-box;\n  }\n']);

exports.default = Row;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RowWrapper = _styledComponents2.default.div(_templateObject, function (_ref) {
  var verticalSpacing = _ref.verticalSpacing;
  return verticalSpacing ? '1rem' : '0';
});

Row.propTypes = {
  columns: _propTypes2.default.number
};

function Row(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      columns = _ref2.columns,
      style = _ref2.style,
      verticalSpacing = _ref2.verticalSpacing,
      rest = _objectWithoutProperties(_ref2, ['children', 'className', 'columns', 'style', 'verticalSpacing']);

  return _react2.default.createElement(
    RowWrapper,
    _extends({ className: className, style: style, verticalSpacing: verticalSpacing }, rest),
    columns ? _react.Children.map(children, function (child, i) {
      return (0, _react.cloneElement)(child, { columns: columns });
    }) : children
  );
}