import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import Login from "./Componentes/Login/Login";
import { NavBar } from "./Componentes/Navigation/Nav";
import Carrito from "./Componentes/Venta/Carrito/Carrito";

function mapStateToProps(state) {
  return { token: state.reducerSession.token };
}

class Start extends Component {
  render() {
    if (this.props.token) {
      return (
        <View style={{ flex: 1, marginTop: 19 }}>
          <NavBar />
          <Carrito />
        </View>
      );
    }
    return <Login login={this.props.login} />;
  }
}

export default connect(
  mapStateToProps,
  null
)(Start);
