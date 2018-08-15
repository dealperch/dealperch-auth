"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WithAuth = require("../WithAuth/WithAuth");

var _Authenticated = require("../Authenticated/Authenticated");

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