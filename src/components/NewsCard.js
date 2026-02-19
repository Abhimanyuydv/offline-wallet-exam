import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NewsCard({ meta, title, publisher, likes, comments }) {
    return (
        <View style={styles.card}>
            <View style={styles.mainRow}>
                <View style={styles.left}>
                    <Text style={styles.meta} numberOfLines={1}>
                        {meta}
                    </Text>

                    <Text style={styles.title} numberOfLines={3}>
                        {title}
                    </Text>

                    <View style={styles.bottomRow}>
                        <Text style={styles.publisher} numberOfLines={1}>
                            {publisher}
                        </Text>

                        <View style={styles.actions}>
                            <Text style={styles.action}>♡ {likes}</Text>
                            <Text style={styles.action}>💬 {comments}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.thumb} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 12,
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },

    mainRow: {
        flexDirection: "row",
         alignItems: "flex-start",
    },

    left: {
        flex: 1,
        marginRight: 10, 
    },

    meta: {
        color: "#64748B",
        fontWeight: "700",
        fontSize: 12,
    },

    title: {
        marginTop: 8,
        fontSize: 15,
        fontWeight: "900",
        color: "#0F172A",
    },

    bottomRow: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    publisher: {
        flex: 1,
        color: "#334155",
        fontWeight: "700",
        marginRight: 10,
    },

    actions: {
        flexDirection: "row",
        gap: 14,
    },

    action: {
        color: "#334155",
        fontWeight: "800",
    },

    thumb: {
        width: 90,
        height: 90,
        borderRadius: 14,
        backgroundColor: "#F3F4F6",
        flexShrink: 0,
    },
});
