import { StyleSheet , Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Platform.select({
      ios: 'lightblue',
      android: 'lightgreen',
      default: 'white',
    }),
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Platform.select({
      ios: 'blue',
      android: 'green',
      default: 'black',
    }),
  },
  button: {
    padding: 10,
    backgroundColor: Platform.select({
      ios: 'bg-blue-400',
      android: 'bg-blue-gray',
      default: 'bg-red-400',
    }),
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;