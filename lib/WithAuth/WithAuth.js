"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WithAuth = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _projectHelpers = require("project-helpers");

var _reactRedux = require("react-redux");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WithAuth = exports.WithAuth = function WithAuth(oAuthKeyName) {
    return function (_ref) {
        var getter = _ref.getter,
            _ref$mapResponse = _ref.mapResponse,
            mapResponse = _ref$mapResponse === undefined ? function (response) {
            return response.data;
        } : _ref$mapResponse,
            _ref$mapResponseToPro = _ref.mapResponseToProps,
            mapResponseToProps = _ref$mapResponseToPro === undefined ? true : _ref$mapResponseToPro,
            setter = _ref.setter,
            mapSetData = _ref.mapSetData,
            _ref$renderOnGetterSu = _ref.renderOnGetterSucceed,
            renderOnGetterSucceed = _ref$renderOnGetterSu === undefined ? false : _ref$renderOnGetterSu,
            _ref$authGetter = _ref.authGetter,
            authGetter = _ref$authGetter === undefined ? true : _ref$authGetter,
            _ref$authSetter = _ref.authSetter,
            authSetter = _ref$authSetter === undefined ? true : _ref$authSetter;
        return function (Component) {
            var WithAuth = function (_React$Component) {
                _inherits(WithAuth, _React$Component);

                function WithAuth(props) {
                    _classCallCheck(this, WithAuth);

                    var _this = _possibleConstructorReturn(this, (WithAuth.__proto__ || Object.getPrototypeOf(WithAuth)).call(this, props));

                    _this.state = {
                        error: null,
                        loaded: false,
                        loading: false,
                        response: null
                    };

                    // Setter/getter promises
                    _this.getting;
                    _this.setting;

                    // Child reference
                    _this.child;

                    // Bind methods to this
                    _this.handleSubmit = _this.handleSubmit.bind(_this);
                    _this.startGetter = _this.startGetter.bind(_this);
                    _this.cancelGet = _this.cancelGet.bind(_this);
                    _this.cancelSet = _this.cancelSet.bind(_this);
                    return _this;
                }

                /**
                 * Call methods that should be called before this component dismounts.
                 */


                _createClass(WithAuth, [{
                    key: "componentWillUnmount",
                    value: function componentWillUnmount() {
                        // Lets cancel any promises that may be in progress
                        this.cancelGet();
                        this.cancelSet();
                    }

                    /**
                     * Call methods that should be called whenever this component mounts.
                     */

                }, {
                    key: "componentDidMount",
                    value: function componentDidMount() {
                        // Handle methods on component
                        this.startGetter();
                    }

                    /**
                     * Cancels getter promise
                     */

                }, {
                    key: "cancelGet",
                    value: function cancelGet() {
                        this.getting && (0, _projectHelpers.ifFunc)(this.getting.cancel);
                    }

                    /**
                     * Cancels setter promise
                     */

                }, {
                    key: "cancelSet",
                    value: function cancelSet() {
                        this.setting && (0, _projectHelpers.ifFunc)(this.setting.cancel);
                    }

                    /**
                     * Start getter operation if getter function is set.
                     */

                }, {
                    key: "startGetter",
                    value: function startGetter() {
                        var _this2 = this;

                        var access_token = this.props.auth.access_token;

                        // Are we getting anything?

                        if (typeof getter !== "function") return;

                        this.setState({ loading: true });

                        // If this is to be an auth-based get
                        if (authGetter) {
                            // Do we have an access_token?
                            this.getting = getter(this.props, access_token);
                        } else {
                            // If this is not an auth-based get
                            this.getting = getter(this.props);
                        }

                        // Handle any errors that result from this.
                        this.getting.catch(function (error) {

                            _this2.setState({
                                loading: false,
                                loaded: true,
                                error: error
                            });
                        });

                        this.getting.then(function (response) {
                            _this2.setState({
                                loading: false,
                                loaded: true,
                                error: null,
                                response: response
                            });
                            // Look for a handleIncomingDefaults method in the child and pass it the response.
                            // This is good for forms to easily set default values.
                            (0, _projectHelpers.ifFunc)(_this2.child.handleIncomingDefaults, mapResponse(response));
                        });
                    }

                    /**
                     * Handles submit, automatically appends auth token if authSetter flag is set to true.
                     *
                     * @param {object} data - the data object representation of what the setter api requires.
                     */

                }, {
                    key: "handleSubmit",
                    value: function handleSubmit(data) {
                        var _this3 = this;

                        var access_token = this.props.auth.access_token;
                        // Is this an auth-based setter?

                        this.setting = authSetter ? setter(data, access_token) : setter(data);
                        this.setState({ loading: true });

                        this.setting.catch(function (err) {
                            _this3.setState({ loading: false, error: err });
                        });

                        this.setting.then(function () {
                            _this3.setState({ loading: false, error: null, success: true });
                        });
                    }
                }, {
                    key: "render",
                    value: function render() {
                        var _this4 = this;

                        // Don't show the component if settings for this is se to true.
                        if (renderOnGetterSucceed && !this.state.loaded) return null;

                        return _react2.default.createElement(Component, _extends({
                            ref: function ref(_ref2) {
                                return _this4.child = _ref2;
                            }
                            // Give component our state
                        }, this.state, this.props, this.state.response && mapResponseToProps ? mapResponse(this.state.response) : {}, {
                            // Enhance with any methods
                            handleSubmit: this.handleSubmit,
                            cancelGet: this.cancelGet,
                            cancelSet: this.cancelSet
                        }));
                    }
                }]);

                return WithAuth;
            }(_react2.default.Component);

            WithAuth.propTypes = {
                auth: _propTypes2.default.object

            };

            return (0, _reactRedux.connect)(function (store) {
                return { auth: store[oAuthKeyName] };
            })(WithAuth);
        };
    };
};