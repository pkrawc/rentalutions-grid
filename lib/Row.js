'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  margin-bottom: 1rem;\n  box-sizing: border-box;\n  .rnt-column {\n    box-sizing: border-box;\n  }\n'], ['\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  margin-bottom: 1rem;\n  box-sizing: border-box;\n  .rnt-column {\n    box-sizing: border-box;\n  }\n']);

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

var RowWrapper = _styledComponents2.default.div(_templateObject);

Row.propTypes = {
  columns: _propTypes2.default.number
};

function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      columns = _ref.columns,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'columns', 'style']);

  return _react2.default.createElement(
    RowWrapper,
    { className: className, style: style },
    columns ? _react.Children.map(children, function (child, i) {
      return (0, _react.cloneElement)(child, { columns: columns });
    }) : children
  );
}