import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function MarketChartCard({ title, value, change, isUp = true }) {
    return (
        <View style={styles.card}>
            <View style={styles.infoRow}>
                <Text style={styles.main}>{title}</Text>
                <Text style={styles.value}>{value}</Text>

                <View style={[styles.badge, { backgroundColor: isUp ? "#EAF7EF" : "#FEE2E2" }]}>
                    <Text style={[styles.badgeText, { color: isUp ? "#16A34A" : "#EF4444" }]}>
                        {isUp ? "↑ " : "↓ "}
                        {change}
                    </Text>
                </View>
            </View>

            {/* chart placeholder */}
            <View style={styles.chartPlaceholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
      
        paddingHorizontal:24
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap"
    },
    main: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1A294E"
    },
    value: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1A294E"
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999
    },
    badgeText: {
        fontWeight: "400"
        
    },
    chartPlaceholder: {
        height: 220,
        borderRadius: 14,
        backgroundColor: "#F3F4F6",
        marginTop: 14
    },
});
