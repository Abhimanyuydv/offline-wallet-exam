import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";



export default function SearchBar({ }) {
    const { t } = useTranslation();

    return (
        <View style={{ paddingHorizontal: 24,}}>
        <View style={styles.wrap}>
            <Text style={styles.icon}>⌕</Text>
            <TextInput
                // value={value}
                // onChangeText={onChangeText}
                placeholder={t("searchPlaceholder")}
                placeholderTextColor="#9AA3AF"
                style={styles.input}
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        marginTop: 14,
        flexDirection: "row",
        alignItems: "center",
        height: 52,
        backgroundColor: "#fff",
        borderRadius: 14,
        paddingHorizontal: 14,
        
    },
    icon: {
        fontSize: 28,
        color: "#141B34",
        marginRight: 10
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: "#0F172A",
        backgroundColor: "white"
    },
});
