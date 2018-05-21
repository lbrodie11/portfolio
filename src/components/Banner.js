import React from "react";
import SocialLinks from "./SocialLinks";
import logo from "../assets/images/Wolf_only_80K_for_WEB.png";
import { fadeIn } from "react-animations";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '3s',
  },
})

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <div className={css(styles.fadeIn)}>
        <img className="logoimage" src={logo} alt="Logo" />
        <h1 className="responsive-headline">Software Developer/Photographer</h1>
        <SocialLinks />
      </div>
    </div>
  </div>
);

export default Banner;
