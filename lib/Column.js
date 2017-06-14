'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: ', ';\n  max-width: ', ';\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: ', ';\n  @media (min-width: 480px) {\n    flex-basis: ', ';\n    max-width: ', ';\n  }\n  @media (min-width: 992px) {\n    flex-basis: ', ';\n    max-width: ', ';\n  }\n  @media (min-width: 1200px) {\n    flex-basis: ', ';\n    max-width: ', ';\n  }\n  @media (min-width: 1600px) {\n    flex-basis: ', ';\n    max-width: ', ';\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: ', ';\n  max-width: ', ';\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: ', ';\n  @media (min-width: 480px) {\n    flex-basis: ', ';\n    max-width: ', ';\n  }\n  @media (min-width: 992px) {\n    flex-basis: ', ';\n    max-width: ', ';\n  }\n  @media (min-width: 1200px) {\n    flex-basis: ', ';\n    max-width: ', ';\n  }\n  @media (min-width: 1600px) {\n    flex-basis: ', ';\n    max-width: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getPercent = function getPercent() {
  var span = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var totalColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
  return 100 / totalColumns * span + '%';
};

var Column = _styledComponents2.default.div.attrs({
  className: 'rnt-column'
})(_templateObject, function (_ref) {
  var sm = _ref.sm,
      columns = _ref.columns;
  return xs ? getPercent(sm, columns) : '100%';
}, function (_ref2) {
  var sm = _ref2.sm,
      columns = _ref2.columns;
  return xs ? getPercent(sm, columns) : '100%';
}, function (_ref3) {
  var offset = _ref3.offset,
      columns = _ref3.columns;
  return offset ? getPercent(offset, columns) : '0';
}, function (_ref4) {
  var xs = _ref4.xs,
      sm = _ref4.sm,
      md = _ref4.md,
      columns = _ref4.columns;
  return sm ? getPercent(sm, columns) : xs ? getPercent(xs, columns) : '100%';
}, function (_ref5) {
  var xs = _ref5.xs,
      sm = _ref5.sm,
      md = _ref5.md,
      columns = _ref5.columns;
  return sm ? getPercent(sm, columns) : xs ? getPercent(xs, columns) : '100%';
}, function (_ref6) {
  var xs = _ref6.xs,
      sm = _ref6.sm,
      md = _ref6.md,
      columns = _ref6.columns;
  return md ? getPercent(md, columns) : sm ? getPercent(sm, columns) : xs ? getPercent(xs, columns) : '100%';
}, function (_ref7) {
  var xs = _ref7.xs,
      sm = _ref7.sm,
      md = _ref7.md,
      columns = _ref7.columns;
  return md ? getPercent(md, columns) : sm ? getPercent(sm, columns) : xs ? getPercent(xs, columns) : '100%';
}, function (_ref8) {
  var xs = _ref8.xs,
      sm = _ref8.sm,
      md = _ref8.md,
      lg = _ref8.lg,
      columns = _ref8.columns;
  return lg ? getPercent(lg, columns) : md ? getPercent(md, columns) : sm ? getPercent(sm, columns) : xs ? getPercent(xs, columns) : '100';
}, function (_ref9) {
  var xs = _ref9.xs,
      sm = _ref9.sm,
      md = _ref9.md,
      lg = _ref9.lg,
      columns = _ref9.columns;
  return lg ? getPercent(lg, columns) : md ? getPercent(md, columns) : sm ? getPercent(sm, columns) : xs ? getPercent(xs, columns) : '100%';
}, function (_ref10) {
  var xs = _ref10.xs,
      sm = _ref10.sm,
      md = _ref10.md,
      lg = _ref10.lg,
      xl = _ref10.xl,
      columns = _ref10.columns;
  return xl ? getPercent(xLg, columns) : lg ? getPercent(lg, columns) : md ? getPercent(md, columns) : sm ? getPercent(sm, columns) : xs ? getPercent(xs, columns) : '100';
}, function (_ref11) {
  var xs = _ref11.xs,
      sm = _ref11.sm,
      md = _ref11.md,
      lg = _ref11.lg,
      xl = _ref11.xl,
      columns = _ref11.columns;
  return xl ? getPercent(xLg, columns) : lg ? getPercent(lg, columns) : md ? getPercent(md, columns) : sm ? getPercent(sm, columns) : xs ? getPercent(xs, columns) : '100%';
});

Column.propTypes = {
  sm: _propTypes2.default.number,
  md: _propTypes2.default.number,
  lg: _propTypes2.default.number,
  columns: _propTypes2.default.number,
  offset: _propTypes2.default.number
};

exports.default = Column;