import { Image } from 'expo-image';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to the coffee corner
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 2,
    flexDirection: 'column',
    marginTop: 'auto',
    backgroundColor: 'pink'
  },
  text: {
    color: 'blue'
  }
});
