import React, { Component } from 'react';

class HomeView extends Component {
    constructor(props){
        super(props);

        this.state = {
            showMessage: false
        };

        this.changeUser = this.changeUser.bind(this)
    }

    componentDidMount(){
        this.props.getApps()
    }

    changeUser(){
        this.setState({showMessage: !this.state.showMessage})
    }

    getAllApps(){
        return this.props.apps.map(function (app) {
            return (
                <div key={app.id}>
                    <p>{app.name}</p>
                    <p>{app.description}</p>
                </div>
            )
        })

    }
    render() {
        let apps = this.props.apps ? this.getAllApps() : [];
        return (
            <div>
                <h2>Homepage</h2>
                <button onClick={this.changeUser}>Change user</button>
                <div id="messeage">
                    { this.state.showMessage ?
                        <p>Home page with message</p> :
                        <p>Home page</p>
                    }
                </div>
                {apps}
            </div>
        );
    }
}

HomeView.propTypes = {};
HomeView.defaultProps = {};

export default HomeView;

