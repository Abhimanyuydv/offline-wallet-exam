import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

const TABS = [
  { id: "market", label: "Market Action" },
  { id: "global", label: "Global Markets" },
  { id: "stock", label: "Stock Action" },
];

export default function TopSegmentTabs() {
  const [activeId, setActiveId] = useState("market"); // first selected

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={TABS}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => {
          const isActive = item.id === activeId;

          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setActiveId(item.id)}
              style={[styles.btnContainer, isActive ? styles.activeBg : styles.inactiveBg]}
            >
              <Text style={[styles.btnText, isActive ? styles.activeText : styles.inactiveText]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },

  listContent: {
    paddingHorizontal: 24,
  },

  btnContainer: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    paddingHorizontal: 22,
  },

  activeBg: {
    backgroundColor: "#0A9547",
  },
  inactiveBg: {
    backgroundColor: "#F7F7F7",
  },

  btnText: {
    fontWeight: "700",
    fontSize: 14,
  },
  activeText: {
    color: "white",
  },
  inactiveText: {
    color: "#1A294E",
  },
});
