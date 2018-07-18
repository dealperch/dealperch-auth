import React from "react";
import {createStore, combineReducers} from "redux";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {WithAuth} from "./index";
import {Provider} from "react-redux";
import TestFormEdit from "../TestFormEdit";
import {mockApiCall} from "../../../index";
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
     * HOC should handle loading flag properly
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

});