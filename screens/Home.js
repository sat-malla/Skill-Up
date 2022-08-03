import { StyleSheet, View, TouchableOpacity, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { AntDesign, MaterialIcons, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import { Text, Button } from "@rneui/base";

const Separator = () => (
    <View style={styles.separator} />
);

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Skill-Up",
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
            onPress={() => navigation.navigate("Info")}
            activeOpacity={0.5}
          >
            <AntDesign name="infocirlceo" size={20} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: 380,
          marginLeft: 35,
          marginTop: -50,
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Welcome to</Text>
        <Image
          source={require('/Users/sathvikm/Documents/Builds/everything-proj/assets/skillup.png')}
          style={{ width: 200, height: 170, marginTop: 8 }}
        />
      </View>
      <Text style={{ margin: 20, fontSize: 17, fontWeight: "bold", marginTop: -15 }}>
        Press a button to read, learn, or play!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Articles")}>
        <MaterialIcons name="article" size={20} color="black" />
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Articles
        </Text>
        <AntDesign name="caretright" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Tutorials")}>
        <FontAwesome5 name="chalkboard-teacher" size={20} color="black" />
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Tutorials
        </Text>
        <AntDesign name="caretright" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Games")}>
        <FontAwesome5 name="gamepad" size={20} color="black" />
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Games
        </Text>
        <AntDesign name="caretright" size={20} color="black" />
      </TouchableOpacity>
      <Separator />
      <Text style={{ margin: 20, fontSize: 17, fontWeight: "bold", marginBottom: 0 }}>Suggest an article, tutorial, or game:</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Suggest")}>
        <SimpleLineIcons name="pencil" size={20} color="black" />
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Suggest
        </Text>
        <AntDesign name="caretright" size={20} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  button: {
    flexDirection: "row",
    width: 200,
    marginTop: 35,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    borderRadius: 16,
    backgroundColor: "#31eb94",
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
