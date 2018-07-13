import {WithAuth} from "../WithAuth";
import {Authenticated} from "../Authenticated";
import axios from "axios";

class AuthInstance {

    get withAuth() {
        return WithAuth;
    }

    get authenticated() {
        return Authenticated;
    }
}

export default (AuthInstance);

