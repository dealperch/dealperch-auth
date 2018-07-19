import React, {Component} from "react";
import PropType from "prop-types";

class TestProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, description, loaded, loading} = this.props;

        if (loading) {
            return (<div>Loading...</div>)
        }

        if (!loaded) {
            return (<div>Nothing loaded</div>)
        }

        return(
            <div>
                <h1>{title}</h1>
                <p>
                    {description}
                </p>
            </div>
        )
    }
}

TestProfile.propTypes = {
    loaded: PropType.bool,
    loading: PropType.bool,
    title: PropType.string,
    description: PropType.string
};

export default (TestProfile);