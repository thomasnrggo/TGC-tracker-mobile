import { View, Text } from "react-native";

const LogoTitleView = ({ title = "TGC Tracker", size = 18 }) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold", color: "white", fontSize: size }}>
        {title}
      </Text>
    </View>
  );
};

export default LogoTitleView;