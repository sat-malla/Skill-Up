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
    title: "What to Do Each Month",
    subtitle: "When it comes to high school...",
    screen: "ArticleOne",
  },
  {
    id: "2",
    title: "Master Every Swim Stroke",
    subtitle: "Swimming is one of the most...",
    screen: "ArticleTwo",
  },
  {
    id: "3",
    title: "Reviewing Car Favorites",
    subtitle: "I love cars. I loved cars since the...",
    screen: "ArticleThree",
  },
  {
    id: "4",
    title: "Improve Organization",
    subtitle: "In middle school, high school, and...",
    screen: "ArticleFour",
  },
  {
    id: "5",
    title: "Programming Advanta...",
    subtitle: "Software engineering has...",
    screen: "ArticleFive",
  },
];
const data1 = [
  {
    id: "1",
    title: "Plan Room Makeover",
    subtitle: "Room makeovers are very fun but...",
    screen: "ArticleSix",
  },
  {
    id: "2",
    title: "OAuth",
    subtitle: "This is test subtitle",
    screen: "ArticleSeven",
  },
  {
    id: "3",
    title: "Monsters' Opinions",
    subtitle: "This world is full of mysteries. I...",
    screen: "ArticleEight",
  },
  {
    id: "4",
    title: "5 Things to Explore",
    subtitle: "When there is nothing to do, I...",
    screen: "ArticleNine",
  },
  {
    id: "5",
    title: "NFL Team Predictions",
    subtitle: "Ok yes, I know it's not an article...",
    screen: "ArticleTen",
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
                style={{ color: "black", fontWeight: "bold", fontSize: 15, paddingHorizontal: 8 }}
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
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 15, paddingHorizontal: 8 }}
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
