import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

const ArticleTen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "NFL Team Predictions",
      headerBackTitle: "Back",
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerView}
    >
      <Text style={styles.header}>NFL Team Predictions</Text>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/nfl.jpeg")}
        style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <View>
        <Text style={styles.text}>
          Ok yes, I know it's not an article, but it also is. If you are an NFL
          fan and want to know your teams ceiling and floor for the 2022-2023
          season, scroll down and find out. For your information, these
          predictions are my opinions, so please respect them.
        </Text>
        <View>
          <Text style={styles.smallHeader}>Baltimore Ravens:</Text>
          <Text style={styles.text}>Ceiling: 12-5</Text>
          <Text style={styles.text}>Floor: 8-9</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Cincinnati Bengals:</Text>
          <Text style={styles.text}>Ceiling: 12-5</Text>
          <Text style={styles.text}>Floor: 9-8</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Cleveland Browns:</Text>
          <Text style={styles.text}>Ceiling: 10-7</Text>
          <Text style={styles.text}>Floor: 6-11</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Pittsburg Steelers:</Text>
          <Text style={styles.text}>Ceiling: 9-8</Text>
          <Text style={styles.text}>Floor: 5-12</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Houston Texans:</Text>
          <Text style={styles.text}>Ceiling: 5-12</Text>
          <Text style={styles.text}>Floor: 1-16</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Indianapolis Colts:</Text>
          <Text style={styles.text}>Ceiling: 11-6</Text>
          <Text style={styles.text}>Floor: 8-9</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Jacksonville Jaguars:</Text>
          <Text style={styles.text}>Ceiling: 6-11</Text>
          <Text style={styles.text}>Floor: 1-16</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Tennessee Titans:</Text>
          <Text style={styles.text}>Ceiling: 12-5</Text>
          <Text style={styles.text}>Floor: 9-8</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Buffalo Bills:</Text>
          <Text style={styles.text}>Ceiling: 15-2</Text>
          <Text style={styles.text}>Floor: 11-6</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Miami Dolphins:</Text>
          <Text style={styles.text}>Ceiling: 12-5</Text>
          <Text style={styles.text}>Floor: 8-9</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>New England Patriots:</Text>
          <Text style={styles.text}>Ceiling: 9-8</Text>
          <Text style={styles.text}>Floor: 7-10</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>New York Jets:</Text>
          <Text style={styles.text}>Ceiling: 8-9</Text>
          <Text style={styles.text}>Floor: 4-13</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Denver Broncos:</Text>
          <Text style={styles.text}>Ceiling: 11-6</Text>
          <Text style={styles.text}>Floor: 7-10</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Kansas City Chiefs:</Text>
          <Text style={styles.text}>Ceiling: 13-4</Text>
          <Text style={styles.text}>Floor: 10-7</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Las Vegas Raiders:</Text>
          <Text style={styles.text}>Ceiling: 12-5</Text>
          <Text style={styles.text}>Floor: 8-9</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Los Angeles Chargers:</Text>
          <Text style={styles.text}>Ceiling: 13-4</Text>
          <Text style={styles.text}>Floor: 9-8</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Chicago Bears:</Text>
          <Text style={styles.text}>Ceiling: 6-11</Text>
          <Text style={styles.text}>Floor: 2-15</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Detroit Lions:</Text>
          <Text style={styles.text}>Ceiling: 8-9</Text>
          <Text style={styles.text}>Floor: 4-13</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Green Bay Packers:</Text>
          <Text style={styles.text}>Ceiling: 12-5</Text>
          <Text style={styles.text}>Floor: 9-8</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Minnesota Vikings:</Text>
          <Text style={styles.text}>Ceiling: 10-7</Text>
          <Text style={styles.text}>Floor: 7-10</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Atlanta Falcons:</Text>
          <Text style={styles.text}>Ceiling: 5-12</Text>
          <Text style={styles.text}>Floor: 1-16</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Carolina Panthers:</Text>
          <Text style={styles.text}>Ceiling: 7-10</Text>
          <Text style={styles.text}>Floor: 4-13</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>New Orleans Saints:</Text>
          <Text style={styles.text}>Ceiling: 11-6</Text>
          <Text style={styles.text}>Floor: 8-9</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Tampa Bay Buccaneers:</Text>
          <Text style={styles.text}>Ceiling: 15-2</Text>
          <Text style={styles.text}>Floor: 11-6</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Dallas Cowboys:</Text>
          <Text style={styles.text}>Ceiling: 13-4</Text>
          <Text style={styles.text}>Floor: 7-10</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>New York Giants:</Text>
          <Text style={styles.text}>Ceiling: 6-11</Text>
          <Text style={styles.text}>Floor: 1-16</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Philadelphia Eagles:</Text>
          <Text style={styles.text}>Ceiling: 11-6</Text>
          <Text style={styles.text}>Floor: 7-10</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Washington Commanders:</Text>
          <Text style={styles.text}>Ceiling: 7-10</Text>
          <Text style={styles.text}>Floor: 5-12</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Arizona Cardinals:</Text>
          <Text style={styles.text}>Ceiling: 11-6</Text>
          <Text style={styles.text}>Floor: 7-10</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Los Angeles Rams:</Text>
          <Text style={styles.text}>Ceiling: 14-3</Text>
          <Text style={styles.text}>Floor: 10-7</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>San Francisco 49ers:</Text>
          <Text style={styles.text}>Ceiling: 11-6</Text>
          <Text style={styles.text}>Floor: 10-7</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Seattle Seahawks:</Text>
          <Text style={styles.text}>Ceiling: 7-10</Text>
          <Text style={styles.text}>Floor: 5-12</Text>
        </View>
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default ArticleTen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    padding: 10,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  containerView: {
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    paddingHorizontal: 5,
  },
  smallHeader: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
    paddingHorizontal: 5,
    alignSelf: "flex-start",
  },
});
