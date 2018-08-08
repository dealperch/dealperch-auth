"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WithAuth = require("../WithAuth");

var _Authenticated = require("../Authenticated");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthInstance = function () {
    function AuthInstance() {
        _classCallCheck(this, AuthInstance);

        if (!AuthInstance.instance) {
            this._oAuthStoreKeyName = "";
            this._oAuthApiPath = "";
            this._clientSecret = "";
            this._clientId = "";
            AuthInstance.instance = this;
        }

        return AuthInstance.instance;
    }

    _createClass(AuthInstance, [{
        key: "clientId",
        set: function set(newClientId) {
            this._clientId = newClientId;
        },
        get: function get() {
            return this._clientId;
        }
    }, {
        key: "clientSecret",
        set: function set(newClientSecret) {
            this._clientSecret = newClientSecret;
        },
        get: function get() {
            return this._clientSecret;
        }
    }, {
        key: "oAuthAPIPath",
        set: function set(newPath) {
            this._oAuthApiPath = newPath;
        },
        get: function get() {
            return this._oAuthApiPath;
        }
    }, {
        key: "oAuthStoreKeyName",
        set: function set(newOAuthKeyName) {
            this._oAuthStoreKeyName = newOAuthKeyName;
        },
        get: function get() {
            return this._oAuthStoreKeyName;
        }
    }, {
        key: "withAuth",
        get: function get() {
            return (0, _WithAuth.WithAuth)(this._oAuthStoreKeyName);
        }
    }, {
        key: "authenticated",
        get: function get() {
            return (0, _Authenticated.Authenticated)(this._oAuthStoreKeyName);
        }
    }]);

    return AuthInstance;
}();

var Auth = new AuthInstance();

exports.default = Auth;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Authenticated = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Authenticated = exports.Authenticated = function Authenticated(oAutOAuthReduxKeyNamehPath) {
    return function (oAuthReduxKeyName) {
        return function (Component) {
            var OAuthWrapper = function (_React$Component) {
                _inherits(OAuthWrapper, _React$Component);

                function OAuthWrapper(props) {
                    _classCallCheck(this, OAuthWrapper);

                    var _this = _possibleConstructorReturn(this, (OAuthWrapper.__proto__ || Object.getPrototypeOf(OAuthWrapper)).call(this, props));

                    _this.state = {
                        authenticating: false,
                        authenticated: true,
                        error: null
                    };

                    _this.checkForExistingToken = _this.checkForExistingToken.bind(_this);
                    _this.signOut = _this.signOut.bind(_this);
                    _this.refreshSession = _this.refreshSession.bind(_this);

                    return _this;
                }

                _createClass(OAuthWrapper, [{
                    key: "signOut",
                    value: function signOut() {}
                }, {
                    key: "checkForExistingToken",
                    value: function checkForExistingToken() {}
                }, {
                    key: "refreshSession",
                    value: function refreshSession() {}
                }, {
                    key: "render",
                    value: function render() {
                        return _react2.default.createElement(Component, _extends({}, this.props, this.state));
                    }
                }]);

                return OAuthWrapper;
            }(_react2.default.Component);

            return (0, _reactRedux.connect)(function (store) {
                return { OAuth: store[OAuthReduxKeyName] };
            })(OAuthWrapper);
        };
    };
};
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
"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _redux = require("redux");

var _enzyme = require("enzyme");

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require("enzyme-adapter-react-16");

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _index = require("./index");

var _reactRedux = require("react-redux");

var _TestFormEdit = require("../TestFormEdit");

var _TestFormEdit2 = _interopRequireDefault(_TestFormEdit);

var _index2 = require("../../index");

var _waait = require("waait");

var _waait2 = _interopRequireDefault(_waait);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Prep test
_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

// Prep With Auth
var WithOAuth = (0, _index.WithAuth)("Auth");

// Prep fake store
var Auth = function Auth() {
    return {
        refresh_token: null,
        access_token: "cada6909-d271-4422-aec3-c32b07d88b78",
        expires_in: null,
        last_login: null
    };
};
var store = (0, _redux.createStore)((0, _redux.combineReducers)({ Auth: Auth }));

describe("WithAuth", function () {
    var props = void 0;
    var MountedDummyFormWithAuth = void 0;
    var AuthSettings = void 0;

    var CreateDummyFormWithAuth = function CreateDummyFormWithAuth() {
        if (!MountedDummyFormWithAuth) {
            var TestFormEditWithOAuth = WithOAuth(AuthSettings)(_TestFormEdit2.default);
            MountedDummyFormWithAuth = (0, _enzyme.mount)(_react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react2.default.createElement(TestFormEditWithOAuth, props)
            ));
        }
        return MountedDummyFormWithAuth;
    };

    beforeEach(function () {
        AuthSettings = {
            getter: _index2.mockApiCall
        };
        props = { a: "cada6909-d271-4422-aec3-c32b07d88b78" };
        MountedDummyFormWithAuth = undefined;
    });

    /**
     * Check if HOC has rendered the child form with the id #test-form.
     */
    it("Renders #test-form.", function () {
        MountedDummyFormWithAuth = CreateDummyFormWithAuth();
        var testForm = MountedDummyFormWithAuth.find('#test-form');
        expect(testForm.exists()).toEqual(true);
    });

    /**
     * HOC should enrich test-form with basic props
     */

    it("Passes on enhanced properties:", function () {
        MountedDummyFormWithAuth = CreateDummyFormWithAuth();
        var testForm = MountedDummyFormWithAuth.find('TestFormEdit');

        var expectedEnhancedPropKeys = ["error", "loaded", "loading", "response", "auth", "handleSubmit", "cancelGet", "cancelSet"];

        var testFormProps = testForm.props();

        expectedEnhancedPropKeys.map(function (propKey) {
            expect(propKey in testFormProps).toEqual(true);
        });
    });

    /**
     * HOC should handle loading flags properly
     */
    it("Provides proper loading flags when loading", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var testForm;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:

                        MountedDummyFormWithAuth = CreateDummyFormWithAuth();
                        testForm = MountedDummyFormWithAuth.find('TestFormEdit');

                        // When the component first mounts, nothing should be loading or loaded

                        expect(testForm.prop('loaded')).toEqual(false);
                        expect(testForm.prop('loading')).toEqual(true);

                        _context.next = 6;
                        return (0, _waait2.default)(220);

                    case 6:

                        testForm = MountedDummyFormWithAuth.update().find('TestFormEdit');

                        expect(testForm.prop('loaded')).toEqual(false);
                        expect(testForm.prop('loading')).toEqual(true);

                    case 9:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    })));

    it("Provides proper loading flags when loaded.", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var testForm;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:

                        MountedDummyFormWithAuth = CreateDummyFormWithAuth();

                        setTimeout(function () {}, 3050);

                        _context2.next = 4;
                        return (0, _waait2.default)(550);

                    case 4:
                        testForm = MountedDummyFormWithAuth.update().find('TestFormEdit');


                        expect(testForm.prop('loaded')).toEqual(true);
                        expect(testForm.prop('loading')).toEqual(false);

                    case 7:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    })));

    /**
     * HOC should pass on value it receives from mock call to the component's response
     * prop.
     */
    it("Passes on getter response to response prop.", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var testForm, snapShotData;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        MountedDummyFormWithAuth = CreateDummyFormWithAuth();

                        _context3.next = 3;
                        return (0, _waait2.default)(550);

                    case 3:
                        testForm = MountedDummyFormWithAuth.update().find('TestFormEdit');
                        snapShotData = { data: {
                                "token": props.a,
                                "id": props.a,
                                "isSearchable": true,
                                "supplierId": "0d527299-cd31-424c-a03f-ba86a83037d3",
                                "listPrice": { "amount": 369, "currencyCode": "USD" },
                                "sellPrice": { "amount": 0, "currencyCode": "USD" },
                                "title": "Mock Api Called Success",
                                "description": "We've done it here.",
                                "images": [{
                                    "id": "a01c14ea-6870-4db7-b88c-5e32741311ac",
                                    "createdAt": "2018-07-09T21:38:25+00:00",
                                    "URL": "http:\/\/localhost:8082\/v1\/product\/cada6909-d271-4422-aec3-c32b07d88b78\/image\/a01c14ea-6870-4db7-b88c-5e32741311ac",
                                    "length": 500,
                                    "width": 251
                                }],
                                "quantityAvailable": 0,
                                "category": "",
                                "GTIN": "084253222310",
                                "SKU": "",
                                "viewURL": null
                            } };


                        expect(testForm.prop("response")).toEqual(snapShotData);

                    case 6:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    })));
});
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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TestProfile = exports.mockApiCall = exports.TestFormEdit = undefined;

var _index = require("./components/Auth/index");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./components/TestFormEdit/index");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("./components/TestProfile/index");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _index2.default;

var mockApiCall = function mockApiCall(_ref, token) {
    var _ref$a = _ref.a,
        a = _ref$a === undefined ? "cada6909-d271-4422-aec3-c32b07d88b78" : _ref$a;

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                "data": {
                    "token": token,
                    "id": a,
                    "isSearchable": true,
                    "supplierId": "0d527299-cd31-424c-a03f-ba86a83037d3",
                    "listPrice": { "amount": 369, "currencyCode": "USD" },
                    "sellPrice": { "amount": 0, "currencyCode": "USD" },
                    "title": "Mock Api Called Success",
                    "description": "We've done it here.",
                    "images": [{
                        "id": "a01c14ea-6870-4db7-b88c-5e32741311ac",
                        "createdAt": "2018-07-09T21:38:25+00:00",
                        "URL": "http:\/\/localhost:8082\/v1\/product\/cada6909-d271-4422-aec3-c32b07d88b78\/image\/a01c14ea-6870-4db7-b88c-5e32741311ac",
                        "length": 500,
                        "width": 251
                    }],
                    "quantityAvailable": 0,
                    "category": "",
                    "GTIN": "084253222310",
                    "SKU": "",
                    "viewURL": null
                }
            });
        }, 500);
    });
};

exports.TestFormEdit = _index4.default;
exports.mockApiCall = mockApiCall;
exports.TestProfile = _index6.default;
