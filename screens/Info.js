import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

const Info = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Info",
      headerBackTitle: "Back to Home",
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: 80,
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Suggest")}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={20} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          padding: 20,
          alignSelf: "center",
        }}
      >
        What is this?
      </Text>
      <Text style={styles.text}>
        This app, Skill-Up, provides articles, tutorials, and games to improve
        everyday life for everyone using this app. From reading about (some
        article info that you will write about later) to guessing a word, this
        app can kickstart your day, week, month, or year!
      </Text>
      <Text style={styles.text}>
        Currently, there are ten articles and tutorials with five short games.
        Over the course of new updates, there will be more articles, tutorials,
        and games that I will provide. You may also ask or suggest an article,
        tutorial, or game that you want to play by pressing on the pencil in the
        top right corner. If you want Minecraft in this app, I would suggest
        going to the game itself 😁.
      </Text>
      <Text style={styles.text}>
        There is no account setup required or anything of that sort. I want you
        to have the most amazing experience with this app the moment you install
        or open it. Get started by pressing the back button on the top left
        corner and choose which one you like. Have fun!
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15 }}>
        About the creator:{" "}
      </Text>
      <Text style={styles.text}>
        My name is Sathvik Malla. I am going to 10th grade this fall, attending
        Mission San Jose High School. My hobbies and interests are programming,
        watching football, video games, swimming, and robotics. The reason I
        created this app is so I can learn about React Native, as it is one of
        my favorite programming languages, and it's a beneficial app for any age
        group. I hope you enjoy it, and please do give me feedback if you can on
        the top right corner. Thanks!
      </Text>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
    padding: 10,
    marginTop: -5,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center",
  },
});
