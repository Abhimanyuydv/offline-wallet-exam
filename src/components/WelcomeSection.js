import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

export default function WelcomeSection() {
    const { t } = useTranslation();

    return (
        <View style={styles.wrap}>
            <Text style={styles.title}>{t("welcome")}</Text>
            <Text style={styles.sub}>{t("subtitle")}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        marginTop: 18,
        paddingHorizontal:24,
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#1A294E"
    },
    sub: {
        marginTop: 6,
        fontSize: 14,
        fontWeight:400,
        color: "#1A294E"
    },
});
