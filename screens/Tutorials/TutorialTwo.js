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
import { Video } from "expo-av";

const TutorialTwo = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Custom NFL Posters",
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
      <Text style={styles.header}>
        How To Create Custom NFL Posters Using Pixlr
      </Text>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/tut2start.jpeg")}
        style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <View>
        <Text style={styles.text}>
          Hey guys. For this tutorial, I have a video instead of an article. I
          know that some people like to read articles instead of watching
          videos, but the problem is that there’s not much time for me to add
          huge articles for tutorials. I hope you understand this because I will
          do this for the rest of my tutorials. Thanks.
        </Text>
        <Text style={styles.text}>
          If you are an NFL fan and want to make some cool NFL posters, then you
          came to the right place. I made a video showing you guys how to make
          an NFL poster step-by-step in the simplest way possible. I want to
          make this easy for you guys so you can learn and follow along easily.
          I might talk too fast, so if you'd like any clear-up on anything, you
          may press the pencil icon on top to suggest. The video should’ve been
          8 minutes, but since I’m not professional in this stuff, it’s 21
          minutes. You can always skip through the video to skip my
          explanations.
        </Text>
        <Text style={styles.text}>Here's the video:</Text>
        <Video
          ref={video}
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/editnflposters.mp4")}
          useNativeControls
          resizeMode="center"
          onPlaybackStatusUpdate={setStatus}
          volume={1.0}
          style={styles.video}
        />
      </View>
      <View style={{ height: 400 }} />
    </ScrollView>
  );
};

export default TutorialTwo;

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
  video: {
    flex: 2 / 3,
    alignSelf: "stretch",
    borderRadius: 8,
    marginTop: 20,
    width: 400,
    borderWidth: 4,
    borderColor: "#31eb94",
  },
});
