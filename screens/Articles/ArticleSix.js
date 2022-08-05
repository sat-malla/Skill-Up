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

const ArticleSix = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Planning Room Makeover",
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
      <Text style={styles.header}>Advice for Planning a Good Room Makeover</Text>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/niceroom.jpeg")}
        style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <View>
        <Text style={styles.text}>
          Room makeovers are very fun but also very tiring. You would have to
          put in a lot of work to make your room look nice. Usually, people
          don’t go for a room makeover and instead just put things in their room
          or on their walls. I have done two room makeovers in my room. The
          number might not seem impressive, but the results were. I will be
          giving several examples so you can make your great room makeover.
        </Text>
        <Text style={styles.text}>
          The first thing that I suggest to do for any room makeover is the
          paint. If you think the color of your walls is great, leave it at that
          and go to the next steps. If you want to do a paint job on your walls,
          that should be the first thing on your agenda. I would suggest light
          color, as from my experience, can start your day fresh when waking up.
          Generally, you should go with the color you like the most and then
          change the brightness and other settings to have the perfect color for
          you. I like the color green, and I wanted to have light green on my
          walls, and it gave me a good feeling. If you don’t want to paint all
          four walls, you may paint only one wall, and it will still look good.
          The best wall to paint is the wall where you set your bed frame. You
          also may add a one-wall design, for example, separated triangles,
          which I did for my room makeover.
        </Text>
        <Text style={styles.text}>
          The next thing I like to focus on is cleaning up the room. If you have
          messy areas, clean them up or plan to organize your stuff better. In
          my room makeover, I cleaned up my closet and my bench cupboard as they
          were messy, and I wanted to organize them. I also had a messy desk, so
          there were some ideas I had that maybe you can use too. You can add a
          separate drawer desk and add some books inside the drawers. You can
          also put some additional stuff on the desk like a pencil box. I also
          got a bigger pencil box to put stuff in it while making it look neat.
          I added a binder holder, a small fan, a table lamp, and other
          decoration pieces like a small fake plant and origami. If you are a
          gamer or feel like you need a bigger screen, you can switch to a
          monitor with a keyboard, mouse, and mousepad.
        </Text>
        <Image
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/shelves.jpeg")}
          style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
        />
        <Text style={styles.text}>
          I like to focus on what to put on my walls next. You can put posters,
          shelves, or anything else. Some common posters are sports posters and
          jerseys, nature posters, city posters, car posters, or self/family
          picture frames. You may also put some shelves, and on top, put some
          decoration pieces, or if you want, showcase some cool toys. In my room
          makeover, I also included some caps hanging on the walls that are
          inset towards the window. You may also put posters that fit your room
          theme, for instance, a red wall with a red poster.
        </Text>
        <Text style={styles.text}>
          The last thing to do is the small finishing touches. If you want to
          add and buy a few decoration pieces, now is the time. You can add some
          small picture frames to put on your desk or add some good decoration
          pieces like a globe lamp on the desk. A thing that many people do to
          add to their room theme is adding LED lights behind their bed or desk.
          You may add a lot to your room until you feel like it’s your unique
          room, but the problem is that it can be too cluttered. Even so, design
          your room so that it feels like you.
        </Text>
      </View>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/gamingroom.jpeg")}
        style={{ width: 400, height: 300, marginTop: 20, borderRadius: 8 }}
      />
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default ArticleSix;

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
