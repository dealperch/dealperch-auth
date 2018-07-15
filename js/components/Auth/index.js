import {WithAuth} from "../WithAuth";
import {Authenticated} from "../Authenticated";

class AuthInstance {
    constructor(){

        if (!AuthInstance.instance) {
            this._oAuthStoreKeyName = "";

            AuthInstance.instance = this;
        }

        return AuthInstance.instance;
    }

    set oAuthStoreKeyName(newOAuthKeyName) {
        console.log("setting _oAuthStoreKeyName = ", newOAuthKeyName);
        this._oAuthStoreKeyName = newOAuthKeyName;
    }

    get oAuthStoreKeyName() {
        return this._oAuthStoreKeyName;
    }

    get withAuth() {
        return WithAuth(this._oAuthStoreKeyName);
    }

    get authenticated() {
        return Authenticated(this._oAuthStoreKeyName);
    }
}

const Auth = new AuthInstance();

export default Auth;

