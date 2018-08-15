import React from "react";
import {createStore, combineReducers} from "redux";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {WithAuth} from "./WithAuth";
import {Provider} from "react-redux";
import TestFormEdit from "../TestFormEdit/TestFormEdit";
import {mockApiCall} from "../../index";
import wait from "waait";
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

describe("WithAuth", () => {
    let props;
    let MountedDummyFormWithAuth;
    let AuthSettings;

    const CreateDummyFormWithAuth = () => {
        if (!MountedDummyFormWithAuth) {
            const TestFormEditWithOAuth = WithOAuth(AuthSettings)(TestFormEdit);
            MountedDummyFormWithAuth = mount(
                <Provider store={store}><TestFormEditWithOAuth {...props} /></Provider>
            );
        }
        return MountedDummyFormWithAuth;
    };

    beforeEach(() => {
        AuthSettings = {
            getter: mockApiCall
        };
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

        expectedEnhancedPropKeys.map(propKey => {
            expect(propKey in testFormProps).toEqual(true);
        });
    });

    /**
     * HOC should handle loading flags properly
     */
    it("Provides proper loading flags when loading", async () => {

        MountedDummyFormWithAuth = CreateDummyFormWithAuth();
        let testForm = MountedDummyFormWithAuth.find('TestFormEdit');

        // When the component first mounts, nothing should be loading or loaded
        expect(testForm.prop('loaded')).toEqual(false);
        expect(testForm.prop('loading')).toEqual(true);

        await wait(220);


        testForm = MountedDummyFormWithAuth.update().find('TestFormEdit');

        expect(testForm.prop('loaded')).toEqual(false);
        expect(testForm.prop('loading')).toEqual(true);

    });

    it("Provides proper loading flags when loaded.", async () => {

        MountedDummyFormWithAuth = CreateDummyFormWithAuth();

        setTimeout(()=>{}, 3050);

        await wait(550);


        let testForm = MountedDummyFormWithAuth.update().find('TestFormEdit');


        expect(testForm.prop('loaded')).toEqual(true);
        expect(testForm.prop('loading')).toEqual(false);

    });

    /**
     * HOC should pass on value it receives from mock call to the component's response
     * prop.
     */
    it("Passes on getter response to response prop.", async () => {
        MountedDummyFormWithAuth = CreateDummyFormWithAuth();

        await wait(550);

        let testForm = MountedDummyFormWithAuth.update().find('TestFormEdit');

        const snapShotData = {data: {
            "token": props.a,
            "id": props.a,
            "isSearchable":true,
            "supplierId":"0d527299-cd31-424c-a03f-ba86a83037d3",
            "listPrice":{"amount":369,"currencyCode":"USD"},
            "sellPrice":{"amount":0,"currencyCode":"USD"},
            "title":"Mock Api Called Success",
            "description":"We've done it here.",
            "images":[
                {
                    "id":"a01c14ea-6870-4db7-b88c-5e32741311ac",
                    "createdAt":"2018-07-09T21:38:25+00:00",
                    "URL":"http:\/\/localhost:8082\/v1\/product\/cada6909-d271-4422-aec3-c32b07d88b78\/image\/a01c14ea-6870-4db7-b88c-5e32741311ac",
                    "length":500,
                    "width":251
                }],
            "quantityAvailable":0,
            "category":"",
            "GTIN":"084253222310",
            "SKU":"",
            "viewURL":null
        }};


        expect(testForm.prop("response")).toEqual(snapShotData);
    });

});