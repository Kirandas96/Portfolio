import { Grid, useTheme, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/Work.css";
import bebody from "../images/bebody.png";
import myntra from "../images/myntra.png";
import fraazo from "../images/fraazo.png";
import timely from "../images/timely.png";
import react from "../images/react.svg";
import redux from "../images/redux.svg";
import node from "../images/node.svg";
import express from "../images/express.svg";
import mongo from "../images/mongo.svg";
import js from "../images/js.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import mui from "../images/mui.svg";
import typescript from "../images/typescript.svg";


export const Work = () => {
  const [padding, setpadding] = useState("");

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.only("sm"));
  const large = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    if (small) setpadding("30px");
    else if (medium) setpadding("50px");
    else if (large) setpadding("60px");
  }, [small, medium, large]);

  return (
    <div id="Works">
      <Grid sx={{ py: padding }} container>
        <h1 className="works-heading">PROJECTS</h1>
        <Grid container sx={{ px: "10px" }}>
          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ pt: "10px" }}>
            <Box className="work-container" maxWidth="600px">
              <div className="work-inner-container">
                <h3 className="p-name">TIMELY APP</h3>
                <div className="p-image">
                  <img src={timely} alt="" />
                </div>

                <p className="p-description">
                  It's a centralized automated system that makes
                  it easy for teams to work on all aspects of their programs and
                  projects to ensure efficiency and productivity.
                </p>
                <div className="p-stack">
                  {" "}
                  <img src={react} alt="" />
                  <img src={redux} alt="" />
                  <img src={express} alt="" />
                  <img src={node} alt="" />
                  <img src={mongo} alt="" />
                  <img src={js} alt="" />
                  <img src={typescript} alt="" />
                  {/* React | Redux Thunk | Css | Chakra UI | Express | MongoDB */}
                </div>
                <div className="p-buttons">
                  <a
                    href="https://spareshub-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>LIVE</button>
                  </a>
                  <a
                    href="https://github.com/Kirandas96/Timelyapp-Clone"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>CODE</button>
                  </a>
                  <a
                    href="https://github.com/Kirandas96/Timelyapp-Clone"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>DETAILS</button>
                  </a>
                </div>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ pt: "10px" }}>
            <Box className="work-container" maxWidth="600px">
              <div className="work-inner-container">
                <h3 className="p-name">FRAAZO</h3>
                <div className="p-image">
                  <img src={fraazo} alt="" />
                </div>

                <p className="p-description">
                  Fraazo is the best online store to buy fresh fruits and vegetables, herbs and dry fruits. Buy daily grocery products, beverages, kitchen staples, pulses from fraazo.
                </p>
                <div className="p-stack">
                  {" "}
                  <img src={react} alt="" />
                  <img src={redux} alt="" />
                  <img src={js} alt="" />
                  <img src={html} alt="" />
                  <img src={css} alt="" />
                  <img src={mui} alt="" />
                  {/* React | Redux Thunk | Javascript | HTML | CSS | MUI */}
                </div>
                <div className="p-buttons">
                  <a
                    href="https://extraordinary-blancmange-42c3dc.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>LIVE</button>
                  </a>
                  <a
                    href="https://github.com/Kirandas96/Fraazo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>CODE</button>
                  </a>
                  <a
                    href="https://medium.com/@amankatiyar0002016/fraazo-d0e53e1d1aaa"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>DETAILS</button>
                  </a>
                </div>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ pt: "10px" }}>
            <Box className="work-container" maxWidth="600px">
              <div className="work-inner-container">
                <h3 className="p-name"> BEBODYWISE</h3>
                <div className="p-image">
                  <img src={bebody} alt="" />
                </div>

                <p className="p-description">
                  This website is mainly
                  for women, where they provide women health-related products and
                  services. in this project, we used HTML, CSS, JAVASCRIPT which
                  we have merged by using GITHUB. Our project is dynamic and
                  responsive in work.
                </p>
                <div className="p-stack">
                  <img src={js} alt="" />
                  <img src={html} alt="" />
                  <img src={css} alt="" />
                  {/* Javascript | HTML | CSS */}
                </div>
                <div className="p-buttons">
                  <a
                    href="https://gallant-jackson-573754.netlify.app/index.html"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>LIVE</button>
                  </a>
                  <a
                    href="https://github.com/Kirandas96/BeBodyWise"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>CODE</button>
                  </a>
                  <a
                    href="https://medium.com/@narayanchatalwar/be-bodywise-website-clone-49ef1ab65156"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>DETAILS</button>
                  </a>
                </div>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ pt: "10px" }}>
            <Box className="work-container" maxWidth="600px">
              <div className="work-inner-container">
                <h3 className="p-name">MYNTRA CLONE</h3>
                <div className="p-image">
                  <img src={myntra} alt="" />
                </div>

                <p className="p-description">
                  Our project is typical e-commerce website clone. The flow of our
                  website starts from a landing page then to a product page that
                  leads to a description page and wishlist page which takes to
                  cart and payment page
                </p>
                <div className="p-stack">
                  <img src={js} alt="" />
                  <img src={html} alt="" />
                  <img src={css} alt="" />
                  {/* Javascript | HTML | CSS */}
                </div>
                <div className="p-buttons">
                  <a
                    href="https://cranky-knuth-b30b90.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>LIVE</button>
                  </a>
                  <a
                    href="https://github.com/Kirandas96/Myntra-Clone"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>CODE</button>
                  </a>
                  <a
                    href="https://medium.com/@swainrakeshkumar60/myntra-online-fashion-store-97352e428d6b"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>DETAILS</button>
                  </a>
                </div>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ pt: "10px" }}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};
