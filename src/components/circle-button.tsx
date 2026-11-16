import { Pressable, StyleSheet, View } from "react-native";
import { SymbolView } from "expo-symbols";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <SymbolView
          name={{ ios: "plus", android: "add", web: "add" }}
          size={38}
          tintColor="#25292e"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderRadius: 42,
    overflow: "hidden",
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffd33d",
  },
});
