import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import MarketTickerCard, { TickerItem } from "./MarketTickerCard";


export default function HorizontalTickerList({ data }) {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
            {data.map((item) => (
                <MarketTickerCard key={item.title} {...item} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    row: {
        marginTop: 34,
        paddingHorizontal: 24,
       
        
    },
});
