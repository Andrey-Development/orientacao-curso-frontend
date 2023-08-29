import {Text, View} from "react-native";
import styles from "./styles";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>CPA</Text>
    </View>
  );
}

export default Header;
