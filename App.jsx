import {View, Platform, Alert} from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as ImagePicker from "expo-image-picker";
import {useEffect} from "react";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Content from "./src/pages/Content";
import styles from "./AppStyles";

export default function App() {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {status} =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert("Permission to access media library is required!");
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
}
