import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

export default function MarketTableHeader() {
    const { t } = useTranslation();

    return (
        <View style={styles.row}>
            <Text style={[styles.th, ]}>{t("index")}</Text>
            <Text style={[styles.th, ]}>{t("price")}</Text>
            <Text style={[styles.th, ]}>{t("change")}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        marginTop: 14,
        backgroundColor: "#F1F5F9",
        paddingVertical: 12,
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent:"space-between"
    },
    th: {
        fontWeight: "600",
        color:"black",
        fontSize:14
    },
});
