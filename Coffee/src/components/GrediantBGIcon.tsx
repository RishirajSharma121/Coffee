import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, SPACING } from "../theme/theme";
import CustomIcon from "./CustomIcon";
interface GrediantBGIconProps {
  name: string;
  color: string;
  size: number;
}

const GrediantBGIcon: React.FC<GrediantBGIconProps> = ({
  name,
  color,
  size,
}) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.LinearGrediantBG}>
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryGreyHex,
    overflow: "hidden",
  },
  LinearGrediantBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GrediantBGIcon;
