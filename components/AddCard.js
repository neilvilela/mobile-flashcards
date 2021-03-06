import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { handleAddCard } from '../actions'
import RequiredField from './RequiredField'

function AddCard ({ route, navigation }) {
  const { deck } = route.params
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const dispatch = useDispatch()

  const submit = () => {
    dispatch(handleAddCard(deck.title, question, answer))
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.cardGroup}>
        <Text>Add card to {deck.title}</Text>
        <TextInput label="Question" value={question} onChangeText={(question) => { setQuestion(question) }} />
        <RequiredField value={question} label="Question" />
        <TextInput label="Answer" value={answer} onChangeText={(answer) => { setAnswer(answer) }} />
        <RequiredField value={answer} label="Answer" />
      </View>

      <View style={styles.buttonGroup}>
        <Button disabled={question.length === 0 || answer.length === 0} mode="contained" onPress={submit}>Submit</Button>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
    justifyContent: 'space-around'
  },
  cardGroup: {
    flex: 2,
    justifyContent: 'space-evenly'
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-around'
  }
})

export default AddCard