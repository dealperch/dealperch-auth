"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestProfile = function (_Component) {
    _inherits(TestProfile, _Component);

    function TestProfile(props) {
        _classCallCheck(this, TestProfile);

        return _possibleConstructorReturn(this, (TestProfile.__proto__ || Object.getPrototypeOf(TestProfile)).call(this, props));
    }

    _createClass(TestProfile, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                description = _props.description,
                loaded = _props.loaded,
                loading = _props.loading;


            if (loading) {
                return _react2.default.createElement(
                    "div",
                    null,
                    "Loading..."
                );
            }

            if (!loaded) {
                return _react2.default.createElement(
                    "div",
                    null,
                    "Nothing loaded"
                );
            }

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    title
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    description
                )
            );
        }
    }]);

    return TestProfile;
}(_react.Component);

TestProfile.propTypes = {
    loaded: _propTypes2.default.bool,
    loading: _propTypes2.default.bool,
    title: _propTypes2.default.string,
    description: _propTypes2.default.string
};

exports.default = TestProfile;