import React from "react";
import {connect} from "react-redux";

export const Authenticated = (OAuthReduxKeyName)=>(Component) => {
    class OAuthWrapper extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authenticating: false,
                authenticated: true,
                error: null
            };

            this.checkForExistingToken = this.checkForExistingToken.bind(this);
            this.signOut = this.signOut.bind(this);

        }

        signOut() {

        }

        checkForExistingToken() {

        }

        render() {
            return (
                <Component {...this.props} {...this.state}/>
            )
        }
    }

    return connect((store)=>({OAuth : store[OAuthReduxKeyName]}))(OAuthWrapper)

};