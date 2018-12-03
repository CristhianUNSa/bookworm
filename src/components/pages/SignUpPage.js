import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignUpForm from "../forms/SignUpForm";
import { signup } from "../../actions/user";

export class SignUpPage extends Component {
  signup = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div>
        <SignUpForm submit={this.signup} />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  signup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
