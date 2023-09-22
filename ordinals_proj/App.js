import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, enteredGoalText
    ]);

  placeholdertext.clear();

  };

  return (
<View style={styles.appContainer}>

<Text style={styles.textStyle}> Credential Manager </Text>

<View style={styles.goalContainer}>
</View>

</View>

  );
}

const styles = StyleSheet.create({
appContainer: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16,
  margin: 10,
  backgroundColor:'bisque'
},
inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 24,
  paddingTop: 24,
  borderBottomWidth: 1,
  borderColor: '#cccccc',
  flex: 1
},
textInput: {
  borderWidth: 3,
  borderColor: 'crimson',
  marginRight: 10,
  padding: 5,
  width: '70%'
},
goalContainer: {
  flex: 10,
  paddingTop: 15
},
textStyle: {
  fontFamily: 'arial-narrow',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 30,
},
enteredText: {
  padding: 5,
  fontSize: 20
}

});