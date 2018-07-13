import {WithAuth} from "../WithAuth";
import axios from "axios";

class AuthInstance {
    constructor() {
        this._refreshPath = "";
        this._refreshHeaders = { headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Accept' : 'application/json'
            }};
        this._clientId = "";
        this._clientSecret = "";

        this.setRefresh = this.setRefresh.bind(this);
        this.attemptRefresh = this.attemptRefresh.bind(this);
    }

    attemptRefresh(refresh_token) {
        const refreshData = {
            grant_type: "refresh_token",
            refresh_token: refresh_token,
            client_id: this._clientId,
            client_secret: this._clientSecret
        };

        return axios.post(this._refreshPath, refreshData, this._refreshHeaders);
    }

    /**
     *
     * @param {string} basePath - Base path to the refresh
     * @param {string} refreshPath - path to refresh
     */
    set refreshPath(newRefreshPath){
        this._refreshPath = newRefreshPath;
    }

    get withAuth() {
        return WithAuth(this.attemptRefresh);
    }

    // authenticated() {
    //      @todo
    // }
}

export default (AuthInstance);

