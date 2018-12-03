import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import VerifyEmailMessage from "../messages/VerifyEmailMessage";

const DashboardPage = ({ confirmedEmail }) => (
  <div>{!confirmedEmail && <VerifyEmailMessage />}</div>
);

DashboardPage.propTypes = {
  confirmedEmail: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    confirmedEmail: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(DashboardPage);
