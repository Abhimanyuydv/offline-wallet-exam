import React from "react";
import { View } from "react-native";
import MarketIndexRow, { IndexRowItem } from "./MarketIndexRow";

export default function MarketIndexList({ data }) {
  return (
    <View>
      {data.map((r) => (
        <MarketIndexRow key={r.name + r.price + r.change} {...r} />
      ))}
    </View>
  );
}
