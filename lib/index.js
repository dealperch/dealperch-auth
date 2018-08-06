"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TestProfile = exports.mockApiCall = exports.TestFormEdit = undefined;

var _Auth = require("./js/components/Auth");

var _Auth2 = _interopRequireDefault(_Auth);

var _TestFormEdit = require("./js/components/TestFormEdit");

var _TestFormEdit2 = _interopRequireDefault(_TestFormEdit);

var _TestProfile = require("./js/components/TestProfile");

var _TestProfile2 = _interopRequireDefault(_TestProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Auth2.default;


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

exports.TestFormEdit = _TestFormEdit2.default;
exports.mockApiCall = mockApiCall;
exports.TestProfile = _TestProfile2.default;