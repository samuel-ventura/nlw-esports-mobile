import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ 
  text: {
    color: '#ffff'
  },

  container: {
    flex: 1,
    backgroundColor: '#9483d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
