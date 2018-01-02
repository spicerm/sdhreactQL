import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Formx from "./form";

@connect(state => ({ appState: state.reducer }))
export default class formInstance extends React.Component {

  static propTypes = {
    appState: PropTypes.shape({
        isSignedIn: PropTypes.bool,
        usermail: PropTypes.string
    })
  }

  static defaultProps = {
    appState: {
      isSignedIn: false,
      usermail:""
    },
  }

  setUsermail= (usermail)=>{
    this.props.dispatch ({
      type: "SET_USER",
      payload: usermail
    })
  }

  signIn = () =>{
    this.props.dispatch ({
        type: "SET_ISSIGNEDIN",
        payload: true
    })
  }

  render() {
    return (
      <div>
        <Formx setUsermail={this.setUsermail} setIsSignedIn={this.signIn}/>
      </div>
    );
  }
}
