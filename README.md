# dealperch-auth

This class provides a few tools for OAuth-based development.

## WithAuth HOC

This higher ordered component wraps a child component and
enhances it with values received from a given getter API. It also
gives the component a method to use to call a setter API while
providing props that indicate the state of said setters and getters.

*Please note that this HOC assumes you're using React Redux*

### Set Up

```javascript
import Auth from "dealperch-auth";
// Tell it what key to use when connecting for the store. 
Auth.oAuthStoreKeyName = "auth";
```

Auth expects the store object to be in the following shape:

```json
{
    "access_token": null
}
```

It must have an access token with the key literal of `access_token`.

Finally, you can now decorate or wrap your component with the
the HOC.

```javascript
const MyComponentWithAuth = Auth.withAuth({...})(MyComponent);
```

#### Getter

withAuth allows you to enrich a wrapped component with values from
an API. It handles the call and provides loading

Lets say you have a basic profile component that
looks like this:

```javascript
import React from "react";
import PropType from "prop-types";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
      
    render(){
        const {title, description} = this.props;
          
        return (
            <div>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
        )
    }
}

Profile.propTypes = {
    title: PropType.string,
    description : propType.string,
}
```
*We don't use pure components because the HOC creates an internal reference of the component using `ref`*

Additionally, we have a an API call that returns a promise. The parameters should always go like this:

```javascript
export const getProfile =  function ({profileId}, accessToken) {
    //...
}
```

The HOC expects there to be two parameters. The first is an object and the second is is a string.

The object should contain whatever data needs to be used to perform the call. The second parameter
should expect the access token.


Lets enhance the component with the `getProfile` call.

```javascript
export const ProfileWithAuth = Auth.withAuth({getter: getProfile})(Profile);
```

Then, when we're ready to use the enhanced component, we simply pass the values expected
in the object through the enhanced component's props like so:

```javascript
...
    return (
        <ProfileWithAuth profileId={"12333333"} />
    )
...
```
The HOC will automatically call `getProfile` and pass the values it receives from the
props into the first parameter as an object. Since the HOC has access to the store that
contains the auth, it will then pass as a second argument the access token.

If we were to inspect the enhanced element, we would see that the HOC
has provided a few new props.

| Prop     | Type       | Description |
|----------|:----------:|-------------|
|loading   | `bool`     | A flag that indicates a promise is bing called. |
|loaded    | `bool`     | A flag that indicates the getter call has finished. This is good for preventing components from being rendered if they expect a value. |
|response  | `object`   | The full response the getter call returns.|
|error     | `object`   | If an error occurs, this object will hold the error.|
|cancelGet | `function` | Call this function to cancel the getter method. If the component is to unmount before the promise resolves there is no need to call this. The HOC automatically stops the call.|
|cancelSet | `function` | Call this function to cancel the setter method. Like cancelGet, this will too automatically get called when the component unmounts. |

#### Working with the response

One way to access the response is directly through the response prop.
This may not be the best way to access a response as the entire
response object is here. This is more for utility purposes. There
a few ways to access the response.

The HOC is meant to fit right in with reusable components. The best way
to access the response is right through the props. Suppose the `getProfile`
response returns an object like this:

```json
{
  "links": [...],
  "count": 1,
  "_embedded": {
     "title": "Aliens",
     "description": "After floating in space for 57 years, Lt. Ripley's (Sigourney Weaver) shuttle is found by a deep space salvage team. Upon arriving at LV-426, the marines find only one survivor, a nine year old girl named Newt (Carrie Henn). But even these battle-hardened marines with all the latest weaponry are no match for the hundreds of aliens that have invaded the colony."
  }
}
```

As you can see, the relevant data to our profile component is nested within
the `_embedded` object. The HOC automatically maps any `[data]` object nested
within the response to the props. In our case, however, there is no data object.

###### mapResponse()

We can tell the HOC to map all the values in `_embedded` to the props.

```javascript
export const ProfileWithAuth = Auth.withAuth(
    {
        getter: getProfile,
        mapResponse: (response) => {
            return response._embedded
        }
    }
    )(Profile);
```

##### mapResponse
|argument | type | description |
|---------|:----:|-------------|
|response |object| The entire response object.|

`mapResponse` needs to return an `obj` which is to be mapped into the props.
By default, it returns `response.data`.

Now when we inspect the props of our `ProfileComponent` we will see
the hoc is automatically populating the `title` and `description` props.

