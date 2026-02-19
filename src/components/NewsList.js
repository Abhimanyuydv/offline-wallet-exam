import React from "react";
import { View } from "react-native";
import NewsCard, { NewsItem } from "./NewsCard";

export default function NewsList({ data }) {
  return (
    <View>
      {data.map((n) => (
        <NewsCard key={n.id} {...n} />
      ))}
    </View>
  );
}
