"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestFormEdit = function (_React$Component) {
    _inherits(TestFormEdit, _React$Component);

    function TestFormEdit(props) {
        _classCallCheck(this, TestFormEdit);

        var _this = _possibleConstructorReturn(this, (TestFormEdit.__proto__ || Object.getPrototypeOf(TestFormEdit)).call(this, props));

        _this.state = {
            title: "",
            description: ""
        };

        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleIncomingDefaults = _this.handleIncomingDefaults.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(TestFormEdit, [{
        key: "handleSubmit",
        value: function handleSubmit() {
            this.props.handleSubmit({ productId: this.props.productId, data: this.state });
        }
    }, {
        key: "handleInputChange",
        value: function handleInputChange(event) {
            var _event$target = event.target,
                value = _event$target.value,
                name = _event$target.name;

            this.setState(_defineProperty({}, name, value));
        }

        /**
         * This method is special to the withAuth HOC as it is called once the getter API
         * is successfully called and returns a response. The defaultValues that are passed
         * is the value accessed from the map response method (default is response.data, which
         * is typical for Dealperch responses).
         *
         * @param {obj} defaultValues - The default values of the form
         */

    }, {
        key: "handleIncomingDefaults",
        value: function handleIncomingDefaults(defaultValues) {
            this.setState(defaultValues);
        }
    }, {
        key: "render",
        value: function render() {
            // Nothing has loaded yet, lets not show the form just yet.
            if (!this.props.loaded) {
                return _react2.default.createElement(
                    "div",
                    { id: "test-form" },
                    "Please Wait."
                );
            }

            return _react2.default.createElement(
                "div",
                { id: "test-form", className: "container" },
                _react2.default.createElement(
                    "div",
                    { className: "panel panel-form" },
                    _react2.default.createElement(
                        "div",
                        { className: "panel-heading" },
                        _react2.default.createElement(
                            "label",
                            null,
                            "Product Title"
                        ),
                        _react2.default.createElement("input", { value: this.state.title, name: "title", onChange: this.handleInputChange })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "panel-body" },
                        _react2.default.createElement("textarea", { value: this.state.description, name: "description", onChange: this.handleInputChange })
                    ),
                    _react2.default.createElement("div", { className: "panel-footer" })
                )
            );
        }
    }]);

    return TestFormEdit;
}(_react2.default.Component);

exports.default = TestFormEdit;