import React from "react";
import { Text, StyleSheet } from "react-native";

export default function SectionTitle({ title }) {
    return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
    title: {
        marginTop:14,
        fontSize: 20,
        fontWeight: "600",
        color: "#1A294E",
        paddingHorizontal:20,
    },
});
