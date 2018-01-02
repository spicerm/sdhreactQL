import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';

import logo from "../images/logo.png";
//import "../css/bootstrap.min.css";
//import "../css/font-awesome.min.css";
import '../../../static/css/styles.global.css'
import "./header.global.scss";
import NavBar from '../navbar';
@connect(state => ({ appState: state.reducer }))
class Header extends React.PureComponent
{
    static propTypes = {
        appState: PropTypes.shape({
            isSignedIn: PropTypes.bool
        })
    }

    static defaultProps = {
        appState: {
          isSignedIn: false,
        },
    }

    signIn = () =>{
        this.props.dispatch ({
            type: "SET_ISSIGNEDIN",
            payload: true
        })
    }

    render = () => {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                </button>
                                <Link className="navbar-brand" to="\">
                                <img src={logo} alt=""/>
                                </Link>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <NavBar {...this.props} signIn={this.signIn}/>
                            </div>
                        </div>
                    </nav>
                    </div>
                    </div>
                </div>
            </header>
        );
    }
}


export default Header;
