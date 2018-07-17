import React from "react";
import {createStore, combineReducers} from "redux";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {WithAuth} from "./index";
import {Provider} from "react-redux";
import TestFormEdit from "../TestFormEdit";
// Prep test
Enzyme.configure({adapter : new Adapter()});

// Prep With Auth
const WithOAuth = WithAuth("Auth");

// Prep fake store
const Auth = ()=>({
    refresh_token: null,
    access_token: "cada6909-d271-4422-aec3-c32b07d88b78",
    expires_in: null,
    last_login: null
});
const store = createStore(combineReducers({Auth}));

const mockApiCall = ({a = "cada6909-d271-4422-aec3-c32b07d88b78"}, token) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                data: {
                    "id": a,
                    "isSearchable":true,
                    "supplierId":"0d527299-cd31-424c-a03f-ba86a83037d3",
                    "listPrice":{"amount":369,"currencyCode":"USD"},
                    "sellPrice":{"amount":0,"currencyCode":"USD"},
                    "title":"test",
                    "description":"hello",
                    "images":[{"id":"a01c14ea-6870-4db7-b88c-5e32741311ac","createdAt":"2018-07-09T21:38:25+00:00","URL":"http:\/\/localhost:8082\/v1\/product\/cada6909-d271-4422-aec3-c32b07d88b78\/image\/a01c14ea-6870-4db7-b88c-5e32741311ac","length":500,"width":251}],
                    "quantityAvailable":0,
                    "category":"",
                    "GTIN":"084253222310",
                    "SKU":"",
                    "viewURL":null
                }
            });
        }, 500);
    });
};

describe("WithAuth", () => {
    let props;
    let MountedDummyFormWithAuth;
    let AuthSettings;

    const CreateDummyFormWithAuth = () => {
        if (!MountedDummyFormWithAuth) {
            const WithIt = WithOAuth(AuthSettings)(TestFormEdit);
            MountedDummyFormWithAuth = mount(
                <Provider store={store}><WithIt {...props} /></Provider>
            );
        }
        return MountedDummyFormWithAuth;
    };

    beforeEach(() => {
        AuthSettings = {};
        props = {a: "cada6909-d271-4422-aec3-c32b07d88b78"};
        MountedDummyFormWithAuth = undefined;
    });

    /**
     * Check if HOC has rendered the child form with the id #test-form.
     */
    it("Renders #test-form.", () => {
        MountedDummyFormWithAuth = CreateDummyFormWithAuth();
        const testForm = MountedDummyFormWithAuth.find('#test-form');
        expect(testForm.exists()).toEqual(true);
    });

    /**
     * HOC should enrich test-form with basic props
     */
    it("Passes on enhanced properties:", () => {
        MountedDummyFormWithAuth = CreateDummyFormWithAuth();
        const testForm = MountedDummyFormWithAuth.find('TestFormEdit');

        const expectedEnhancedPropKeys = [
            "error",
            "loaded",
            "loading",
            "response",
            "auth",
            "handleSubmit",
            "cancelGet",
            "cancelSet"
        ];

        const testFormProps = testForm.props();

        console.log("testFormProps", testFormProps);

        expectedEnhancedPropKeys.map(propKey => {
            expect(propKey in testFormProps).toEqual(true);
        });


    });
});