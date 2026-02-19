import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function MarketIndexRow({ name, price, change, isUp }) {
    return (
        <View style={styles.row}>
            <Text style={[styles.name, { flex: 1, color: isUp ? "#0E7A38" : "#111827" }]}>{name}</Text>
            <Text style={[styles.cell, { flex: 1, textAlign: "center" }]}>{price}</Text>

            <View style={[styles.changeCell, { flex: 1 }]}>
                <View style={[styles.dot, { backgroundColor: isUp ? "#16A34A" : "#EF4444" }]} />
                <Text style={[styles.changeText, { color: isUp ? "#16A34A" : "#EF4444" }]}>{change}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
        alignItems: "center",
    },
    name: {
        fontWeight: "900"
    },
    cell: {
        color: "#0F172A",
        fontWeight: "700"
    },
    changeCell: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 8
    },
    dot: {
        width: 18,
        height: 18,
        borderRadius: 9
    },
    changeText: {
        fontWeight: "900"
    },
});
