import React, { Component } from "react";
import { Icon, Button, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class CartButton extends Component {
  render() {
    return (
      <Button transparent>
        <Text style={{ color: "white" }}>
          {this.props.totalItems}
          <Icon
            onPress={() => this.props.navigation.navigate("CoffeeCart")}
            name="shoppingcart"
            type="AntDesign"
          />
        </Text>
      </Button>
    );
  }
}
const mapStateToProps = state => ({
  totalItems: state.cartReducer.totalItems
});

export default withNavigation(connect(mapStateToProps)(CartButton));
