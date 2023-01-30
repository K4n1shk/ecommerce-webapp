import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/kanishk-kunal-iiitk/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src=""
              alt="Founder"
            />
            <Typography>Kanishk Kunal</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              E-commerce website made by Kanishk with backend as nodejs and frontend as React
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/kanishk-kunal-iiitk/"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
