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
      ios: 'blue',
      android: 'bg-blue-gray',
      default: 'red',
    }),
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default styles;