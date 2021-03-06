import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import SearchProductListItem from "./SearchProductListItem";

const renderItemSearch = ({ item }) => (
  <SearchProductListItem producto={item} />
);

const keyExtractor = item => item.producto.idProducto.toString();

const itemSeparator = () => (
  <View
    style={{
      flex: 1,
      marginLeft: 70,
      borderWidth: 0.5,
      borderColor: "#a7a7a7"
    }}
  />
);

function SearchProductList(props) {
  return (
    <View style={{ flex: 5 }}>
      <FlatList
        keyExtractor={keyExtractor}
        data={props.products}
        renderItem={renderItemSearch}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
}

export default SearchProductList;
