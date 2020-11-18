import React, { Component, Fragment } from "react";
import "./home.scss";
import { Grid, Typography, Container } from "@material-ui/core";

export default class Home extends Component {
  state = {
    showLogin: false,
    showSignUp: false
  };

  openLogin = open => {
    this.setState({ showLogin: open });
  };

  openSignUp = open => {
    this.setState({ showSignUp: open });
  };

  render() {
    return (
      <Fragment>
        {
          //HERO
        }
        <Grid
          container
          alignItems="flex-start"
          justify="center"
          className="hero-grid"
        >
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="flex-start"
            item
            md={5}
            style={{ paddingRight: "14%" }}
          >
            <Grid item md style={{ paddingTop: "50px" }}>
              <Typography
                variant="h3"
                gutterBottom
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "20px"
                }}
              >
                A better, faster and smarter way of building your offers.
              </Typography>
              <Typography variant="h4" gutterBottom style={{ color: "white" }}>
                Increase revenue and outshine competition. All for the price of
                a coffee.
              </Typography>
            </Grid>
            <Grid item md style={{ marginTop: "100px" }}>
              <div
                className="btnv-1"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: 40,
                  paddingLeft: 40
                }}
                onClick={() => this.openSignUp(true)}
              >
                <span>Register Today</span>
              </div>
            </Grid>
          </Grid>
          <Grid item md={5}>
            <img
              style={{ width: "100%" }}
              src="/images/background/header.png"
              alt="header"
            />
          </Grid>
        </Grid>

        {
          //BAIT
        }
        <div style={{ backgroundColor: "#f5f5f5" }}>
          <div className="container">
            {/*missing icon should go here*/}
            <h4 style={{ padding: "25px 0", fontWeight: "bold" }}>
              What do we do?
            </h4>

            <Grid container style={{ textAlign: "center" }}>
              <Grid item md={4} style={{ padding: "3%" }}>
                <img
                  style={{ widht: 50, height: 50, margin: "10px" }}
                  src="images/icons/offer.png"
                  alt="offer"
                />
                <h3>Amazing looking quotes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidicunt ut labore et dolore magna aliqua.
                </p>
              </Grid>

              <Grid item md={4} style={{ padding: "3%" }}>
                <img
                  style={{ widht: 50, height: 50, margin: "10px" }}
                  src="images/icons/fast.png"
                  alt="time"
                />
                <h3>Lightning fast quoting</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidicunt ut labore et dolore magna aliqua.
                </p>
              </Grid>

              <Grid item md={4} style={{ padding: "3%" }}>
                <img
                  style={{ widht: 50, height: 50, margin: "10px" }}
                  src="images/icons/log.png"
                  alt="log"
                />
                <h3>Live changelog</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidicunt ut labore et dolore magna aliqua.
                </p>
              </Grid>
            </Grid>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="btnv-1"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: 40,
                  paddingLeft: 40,
                  marginBottom: 40
                }}
              >
                <span>Try It Out Today</span>
              </div>
            </div>
          </div>
        </div>
        {
          //BLOG
        }

        <div className="container promotion">
          <h4 style={{ padding: "32px 0", fontWeight: "bold" }}>
            What do we do?
          </h4>
          <Grid container spacing={3}>
            <Grid item md={4}>
            <div style={{ backgroundImage: 'url("/images/background/image-1.png")', backgroundSize: 'cover',  marginBottom: 24, backgroundPosition: "center", width: "100%", height: 250}} />
            <h3>Promotional items</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incidicunt ut labore et dolore magna aliqua.
            </p>
            <a href="#blank" >Read more... </a>
            </Grid>
            <Grid item md={4}>
            <div style={{ backgroundImage: 'url("/images/background/image-2.png")', backgroundSize: 'cover',  marginBottom: 24,backgroundPosition: "center", width: "100%", height: 250}} />
            <h3>Promotional items</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incidicunt ut labore et dolore magna aliqua.
            </p>
            <a href="#blank" >Read more... </a>
            </Grid>
            <Grid item md={4}>
            <div style={{ backgroundImage: 'url("/images/background/image-3.png")', backgroundSize: 'cover',  marginBottom: 24,backgroundPosition: "center", width: "100%", height: 250}} />
            <h3>Promotional items</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incidicunt ut labore et dolore magna aliqua.
            </p>
            <a href="#blank" >Read more... </a>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}
