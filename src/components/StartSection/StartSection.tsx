import React from "react";
import "./StartSection.css";
import background from "../../img/background.png";
import myImg from "../../img/myImg.png";
import { Grid } from "@material-ui/core";

const StartSection: React.FC = () => {
  return (
    <div className="back" style={{ backgroundImage: `url(${background})` }}>
      <Grid
        className="backContainer"
        container
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={5} data-aos="zoom-in" id="about">
            <h1>About Me</h1>
            <h4>
            An extremely dedicated, self-taught full stack developer with proven experience and projects.
            Highly skilled at self learning, broad view and teamwork.
            Student at the Academic College of Tel Aviv–Yaffo with high average.
            Looking for a challenging position in development scope, where I can grow and contribute to the product.
            </h4>
        </Grid>
        <Grid item xs={3} data-aos="zoom-in">
          <img className="personalImg" src={myImg} />
        </Grid>
      </Grid>
    </div>
  );
};

export default StartSection;
