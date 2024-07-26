import React, { Component, Fragment } from "react";
import { NavLink } from "reactstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

export class Profile extends Component {
  // Profile picture

  // Cover Page

  // Personal Details

  // Interests

  render() {
    return (
      <Fragment>
        <NavLink>Profile</NavLink>
        <NavLink>Buddies</NavLink>
        <NavLink>Discover</NavLink>
      </Fragment>
    );
  }
}

export default Profile;
