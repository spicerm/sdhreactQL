import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Header from "../header/header";
import Footer from "../footer/footer";

@connect(state => ({ appState: state.reducer }))
class Dashboard extends React.Component{
    static propTypes = {
        appState: PropTypes.shape({
            usermail: PropTypes.string
        })
    }

    static defaultProps = {
        appState: {
          usermail:""
        },
    }
    render (){
        return(
            <div>
                <p>hello {this.props.appState.usermail}</p>
            </div>
        );
    }
}

export default Dashboard;