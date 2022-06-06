import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import React, { Component } from "react";
class Home extends Component {
    render() {
        return (
            <div className="center">
                <h3 className="center">Let's play:</h3>
                <div>
                    <button>ANSWERED</button>
                    <button>UNANSWERED</button>
                </div>
                <div className="page">
                </div>
               <Dashboard />
            </div>
        )
    }
}

export default connect()(Home)