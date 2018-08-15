import {WithAuth} from "../WithAuth/WithAuth";
import {Authenticated} from "../Authenticated/Authenticated";

class AuthInstance {
    constructor(){

        if (!AuthInstance.instance) {
            this._oAuthStoreKeyName = "";
            this._oAuthApiPath = "";
            this._clientSecret = "";
            this._clientId = "";
            AuthInstance.instance = this;
        }

        return AuthInstance.instance;
    }

    set clientId(newClientId) {
        this._clientId = newClientId;
    }

    get clientId() {
        return this._clientId;
    }

    set clientSecret(newClientSecret) {
        this._clientSecret = newClientSecret;
    }

    get clientSecret() {
        return this._clientSecret;
    }

    set oAuthAPIPath(newPath) {
        this._oAuthApiPath = newPath;
    }

    get oAuthAPIPath() {
        return this._oAuthApiPath;
    }

    set oAuthStoreKeyName(newOAuthKeyName) {
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

