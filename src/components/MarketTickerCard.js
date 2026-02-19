import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function MarketTickerCard({ title, value, change, isUp }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>

            <View style={styles.changeRow}>
                <View style={[styles.dot, { backgroundColor: isUp ? "#16A34A" : "#EF4444" }]} />
                <Text style={[styles.change, { color: isUp ? "#16A34A" : "#EF4444" }]}>{change}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 125,
        marginRight: 12,
        borderRadius: 16,
        padding: 12,
        borderWidth: 1.5,
        borderColor: "#E5E7EB",
    },
    title: {
        color: "#64748B",
        fontWeight: "700",
        fontSize: 12
    },
    value: {
        marginTop: 6,
        color: "#0F172A",
        fontWeight: "900",
        fontSize: 18
    },
    changeRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        gap: 8
    },
    dot: {
        width: 18,
        height: 18,
        borderRadius: 9
    },
    change: {
        fontWeight: "900"
    },
});
