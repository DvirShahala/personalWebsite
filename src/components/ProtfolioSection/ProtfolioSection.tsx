import React from "react";
import { Card } from "react-bootstrap";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import weatherPageImg from "../../img/weatherPage.png";
import apiImg from "../../img/restApi.png";

const useStyles = makeStyles((theme: Theme) => ({
  buttonStyle: {
    fontSize: "14px",
    width: 110,
    textTransform: "capitalize",
    color: "white",
    border: "1px solid rgb(29, 45, 80)",
    backgroundColor: "rgb(29, 45, 80)",
    borderRadius: "25px",
    textAlign: "center",
    marginLeft: "5px",
  },
}));

const ProtfolioSection: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
      style={{
        backgroundColor: "black",
        paddingTop: "10%",
        paddingBottom: "10%",
      }}
    >
      <h1 data-aos="zoom-in">Protfolio</h1>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{
          backgroundColor: "black",
          paddingTop: "5%",
          paddingBottom: "10%",
        }}
      >
        <Card style={{ width: "24rem", height: "20rem", borderRadius: "12px" }} data-aos="zoom-in">
          <Card.Img
            variant="top"
            src={weatherPageImg}
            style={{
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          />
          <Card.Body>
            <Card.Title>Weather website</Card.Title>
            <Card.Text>
              A website developed using Angular, Nodejs and postgerSQL
              that displays the weather forecast and additional data from cities
              around the world.
            </Card.Text>
            <Card.Link>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Button
                    className={classes.buttonStyle}
                    variant="outlined"
                    href="https://weathairapp.herokuapp.com/"
                    target="_blank"
                  >
                    Website
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.buttonStyle}
                    variant="outlined"
                    href="https://github.com/DvirShahala/FinalProject"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Grid>
              </Grid>
            </Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "24rem", height: "20rem", borderRadius: "12px" }} data-aos="zoom-in">
          <Card.Img
            className="cardImg"
            variant="top"
            src={apiImg}
            style={{
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              width: "24rem",
              height: "8rem",
            }}
          />
          <Card.Body>
            <Card.Title>Posts Platform</Card.Title>
            <Card.Text>
              Nest.js project that manages users and posts, like facebook, twitter etc.
              Using docker and custom REST API.
            </Card.Text>
            <Card.Link>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Button
                    className={classes.buttonStyle}
                    variant="outlined"
                    href="https://github.com/DvirShahala/Nest.js-API"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Grid>
              </Grid>
            </Card.Link>
          </Card.Body>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProtfolioSection;
