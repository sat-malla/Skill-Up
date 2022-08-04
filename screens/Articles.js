import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Divider } from '@rneui/base';

const data = [
  {
    id: "1",
    title: "What to do each month",
    subtitle: "When it comes to high school...",
    screen: "ArticleOne",
  },
  {
    id: "2",
    title: "Master every swim stroke",
    subtitle: "Swimming is one of the most...",
    screen: "ArticleTwo",
  },
  {
    id: "3",
    title: "Reviewing car favorites",
    subtitle: "I love cars. I loved cars since the...",
    screen: "ArticleThree",
  },
  {
    id: "4",
    title: "Title 4",
    subtitle: "This is test subtitle",
    screen: "articlefour",
  },
  {
    id: "5",
    title: "Title 5",
    subtitle: "This is test subtitle",
    screen: "articlefive",
  },
];
const data1 = [
  {
    id: "1",
    title: "Title 6",
    subtitle: "This is test subtitle",
    screen: "articlesix",
  },
  {
    id: "2",
    title: "Title 7",
    subtitle: "This is test subtitle",
    screen: "articleseven",
  },
  {
    id: "3",
    title: "Title 8",
    subtitle: "This is test subtitle",
    screen: "articleeight",
  },
  {
    id: "4",
    title: "Title 9",
    subtitle: "This is test subtitle",
    screen: "articlenine",
  },
  {
    id: "5",
    title: "Title 10",
    subtitle: "This is test subtitle",
    screen: "articleten",
  },
];

const Articles = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Articles",
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
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          alignSelf: "center",
          padding: 20,
        }}
      >
        Welcome to Articles!
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "500",
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        Get started by pressing on an article
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FlatList
          data={data}
          scrollEnabled={false}
          containerStyle={{ justifyContent: "center" }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 2,
                height: 110,
                width: 150,
                padding: 15,
                alignItems: "center",
                marginLeft: 30,
                marginTop: 20,
                borderRadius: 16,
              }}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 15, paddingHorizontal: 10 }}
                ellipsizeMode="tail"
              >
                {item.title}
              </Text>
              <Divider orientation="horizontal" width={3}/>
              <Text
                style={{
                  color: "black",
                  fontWeight: "400",
                  fontSize: 12,
                  marginTop: 5,
                  paddingHorizontal: 5,
                }}
              >
                {item.subtitle}
              </Text>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={data1}
          scrollEnabled={false}
          containerStyle={{ justifyContent: "center" }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 2,
                height: 110,
                width: 150,
                padding: 15,
                alignItems: "center",
                marginLeft: 30,
                marginTop: 20,
                borderRadius: 16,
              }}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 15 }}
                ellipsizeMode="tail"
              >
                {item.title}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontWeight: "400",
                  fontSize: 12,
                  marginTop: 5,
                  paddingHorizontal: 5,
                }}
                ellipsizeMode="tail"
              >
                {item.subtitle}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Articles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
