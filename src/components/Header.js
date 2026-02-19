import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { setAppLanguage } from "../localization/i18n";

export default function HeaderBar() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "hi" ? "hi" : "en";

  const toggleLang = async () => {
    await setAppLanguage(lang === "hi" ? "en" : "hi");
  };

  return (
    <View style={styles.row}>
      <Text style={styles.logo}>{t("logo")}</Text>

      <View style={styles.right}>
        <TouchableOpacity style={styles.langBtn} onPress={toggleLang}>
          <Text style={styles.langText}>{lang === "hi" ? "EN" : "हिंदी"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.signInText}>{t("signIn")}</Text>
          <Text style={styles.signInIcon}>⎋</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:24,
  },
  logo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1A294E"
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  langBtn: {
    backgroundColor: "#111827",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10
  },
  langText: {
    color: "#fff",
    fontWeight: "900"
  },

  signInBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#0A9547",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  signInText: {
    color: "#fff",
    fontWeight: "900"
  },
  signInIcon: {
    color: "#fff",
    fontSize: 16
  },
});
