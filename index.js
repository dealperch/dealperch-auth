import Auth from "./js/components/Auth";
import TestFormEdit from "./js/components/TestFormEdit";
import TestProfile from "./js/components/TestProfile";

export default Auth;


const mockApiCall = ({a = "cada6909-d271-4422-aec3-c32b07d88b78"}, token) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                "data": {
                    "token": token,
                    "id": a,
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
                }
            });
        }, 500);
    });
};

export {TestFormEdit, mockApiCall, TestProfile};