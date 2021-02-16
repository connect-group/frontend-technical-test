import React, { Component } from "react";
import { getData, getVehicleAdditionalInformation } from "../api";
import Vehicle from "./Vehicle";
import { Container, Grid } from "@material-ui/core";

const styles = {
  root: {
    padding: 8,
    backgroundColor: "white",
  },
};

export default class VehicleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      error: null,
    };
  }

  async componentDidMount() {
    document.body.style.margin = 0;
    try {
      const response = await getData();
      this.setState({
        data: response.vehicles,
      });
    } catch (e) {
      console.log(e);
      this.setState({
        error:
          "We are facing internal server error. We apologize for this inconvenience",
      });
    }
  }

  async getVehicleInformation(vehicleId) {
    return await getVehicleAdditionalInformation(vehicleId);
  }

  render() {
    if (!this.state.data && !this.state.error) {
      return <h1>Loading....</h1>;
    }

    if (!this.state.data && this.state.error) {
      return <h1>{this.state.error}</h1>;
    }
	
    return (
      <Container maxWidth={false} style={styles.root}>
        <Grid container spacing={1}>
          {this.state.data.map((item, index) => (
            <Grid key={index} item lg={6} md={4} xs={12}>
              <Vehicle
                key={index}
                vehicle={item}
                getVehicleInformation={this.getVehicleInformation}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}
