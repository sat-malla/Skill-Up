import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Input, Button, ButtonGroup, Text } from "@rneui/base";
import { db } from "../firebase";

const Suggest = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const buttons = ["Article", "Tutorial", "Game", "Other"];

  const value = buttons.slice(selectedIndex, selectedIndex + 1);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Suggest",
      headerBackTitle: "Back",
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: 80,
            marginRight: 10,
          }}
        ></View>
      ),
    });
  }, [navigation]);

  const sendMessage = async () => {
    await db
      .collection("suggestions")
      .add({
        name: name,
        email: email,
        type: value,
        suggestion: message,
      })
      .then(() => {
        setModalVisible(true);
      })
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal closed");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.modalView}>
            <Text style={{ marginBottom: 15, textAlign: "center", fontWeight: "bold" }}>Sent</Text>
            <Pressable
              style={[
                { borderRadius: 20, padding: 10, elevation: 2, width: 90 },
                { backgroundColor: "#31eb94" },
              ]}
              onPress={() => navigation.goBack()}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text
        h4
        style={{
          fontWeight: "bold",
          alignSelf: "center",
          marginBottom: 50,
        }}
      >
        Suggest articles, tutorials, or games!
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
          containerStyle={styles.inputStyles}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          multiline={true}
        />
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          containerStyle={styles.inputStyles}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          multiline={true}
        />
        <ButtonGroup
          buttons={buttons}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={styles.buttonGStyle}
          selectedButtonStyle={{ backgroundColor: "#31eb94" }}
          textStyle={{ color: "black", fontWeight: "bold" }}
          selectedTextStyle={{ color: "black", fontWeight: "bold" }}
        />
        <Input
          placeholder="Message"
          autoFocus
          type="text"
          value={message}
          onChangeText={(text) => setMessage(text)}
          containerStyle={[styles.messageContainer]}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          multiline={true}
        />
      </View>
      <Button
        disabled={!name || !email || !message}
        title="Send"
        style={styles.button}
        titleStyle={{
          color: "black",
          fontWeight: "bold",
        }}
        buttonStyle={{
          backgroundColor: "#31eb94",
          borderRadius: 8,
        }}
        onPress={sendMessage}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default Suggest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  inputContainer: {
    width: 400,
    paddingHorizontal: 10,
  },
  inputStyles: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 5,
    marginTop: 20,
    height: 50,
  },
  messageContainer: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 5,
    marginTop: 20,
    height: 200,
  },
  button: {
    width: 200,
    marginTop: 30,
    justifyContent: "center",
  },
  buttonGStyle: {
    marginTop: 20,
    width: 380,
    height: 50,
    alignSelf: "center",
    borderWidth: "2",
    borderColor: "black",
    borderRadius: 8,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
