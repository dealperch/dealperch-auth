import React, {Component} from "react";

class TestFormEdit extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleIncomingDefaults = this.handleIncomingDefaults.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit () {
        this.props.handleSubmit({productId: this.props.productId, data: this.state});
    }

    handleInputChange (event) {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    /**
     * This method is special to the withAuth HOC as it is called once the getter API
     * is successfully called and returns a response. The defaultValues that are passed
     * is the value accessed from the map response method (default is response.data, which
     * is typical for Dealperch responses).
     *
     * @param {obj} defaultValues - The default values of the form
     */
    handleIncomingDefaults (defaultValues) {
        this.setState(defaultValues);
    }

    render () {
        // Nothing has loaded yet, lets not show the form just yet.
        if (!this.props.loaded) {
            return (
                <div id={"test-form"}>Please Wait.</div>
            )
        }

        return (
            <div id={"test-form"} className={"container"}>
                <div className={"panel panel-form"}>
                    <div className={"panel-heading"}>
                        <label>Product Title</label>
                        <input value={this.state.title} name={"title"} onChange={this.handleInputChange} />
                    </div>
                    <div className={"panel-body"}>
                        <textarea value={this.state.description} name={"description"} onChange={this.handleInputChange} />
                    </div>
                    <div className={"panel-footer"}>
                        <SubmitButton isLoading={this.props.loading} onSubmit={this.handleSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

export default (TestFormEdit);