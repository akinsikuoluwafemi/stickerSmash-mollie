import { Pressable, StyleSheet, Text, type ImageSourcePropType } from "react-native";
import { SymbolView, type AndroidSymbol, type SFSymbol } from "expo-symbols";

type Props = {
  icon: {
    android: ImageSourcePropType;
    ios: SFSymbol;
    web: AndroidSymbol;
  };
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <SymbolView
        name={{ ios: icon.ios, android: icon.web, web: icon.web }}
        size={24}
        tintColor="#fff"
      />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  iconButtonLabel: {
    color: "#fff",
    fontSize: 14,
  },
});
