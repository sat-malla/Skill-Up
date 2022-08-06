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

const ArticleNine = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "5 Things to Do In Freetime",
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
        5 Things You Should Explore During Your Free Time
      </Text>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/freetime.jpeg")}
        style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <View>
        <Text style={styles.text}>
          When there is nothing to do, I always find the most random things
          online and have fun with them. There are many things out there that
          are fascinating, not just to me, but to everyone. During the lockdown,
          I had to find something interesting if I’m going to sit in front of my
          computer the entire day every day. And yes, I did find some
          interesting and time-consuming things I can do when I’m bored. Here
          are five things you should also explore in your free time.
        </Text>
        <View>
          <Text style={styles.smallHeader}>1. Blender</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/blender.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            Blender has great software with features and tools to build 3D
            models and animations. It’s a downloadable app from the internet
            that you can use for 3D modeling and computer animations. It is
            tough to learn as there is so much to it. However, you should be
            lucky that there are so many tutorials. The best part of Blender is
            that it’s free! Every single feature of Blender is free, but
            third-party textures and models cost money. Don't worry, they have
            nothing to do with Blender. Having very detailed models is a hard
            and time-consuming job, but you don’t have to do that by searching
            for how to make some low-poly models. However, even though you have
            a powerful chip in your laptop, big renders might take hours or even
            days. If you have one of those enormous PCs, the renders might not
            take days but will still be pretty long. I would say it’s a better
            rendering software than Adobe Animate, which costs money. Animators
            for movies use Blender too to create movies. It’s a great app that I
            recommend trying out.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>2. DaVinci Resolve</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/resolve.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            iMovie is a great starter when you want to work on video editing,
            although you can’t do those cool animations and VFX editing. Adobe
            After Effects and Premiere Pro are the real advanced and
            professional ones that video editors use, but there is a way to get
            hands-on with these types of stuff for free. DaVinci Resolve is a
            free advanced video editor that can be easily downloadable from the
            internet. There is no need to buy a DaVinci Resolve keyboard,
            although if you want to get into the business, then sure, why not?
            There are so many cool features in DaVinci Resolve more than just
            titles, transitions, and color changing. There is even a small
            animation feature that you can use to make small animations like 3D
            titles. It is great for short films or movie editing, too. One
            problem is how much RAM it takes up, but it should be no problem
            with those huge PCs. If you want to do some video editing for free,
            I would suggest DaVinci Resolve.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>3. Pixlr</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/pixlr.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            Everyone uses Photoshop when it comes to photo editing. Like,
            literally everyone. Unfortunately, it’s not free. If you don’t want
            to spend money on these things, here is Pixlr! Lightroom is also
            available, but downloading and all that is too much. Pixlr is an
            online photo editing software with cool features that Photoshop has,
            too. Okay, not all of them, but almost all of them. Some features
            require a premium subscription for usage unless you’re okay with
            watermarks. There are not a lot of Pixlr tutorials out there, but
            the majority of the tutorials come from the youtube channel itself.
            I also have a Pixlr tutorial on editing cars if you are interested.
            It’s also great for music covers and more. It should be something
            that I recommend should be on your agenda.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>4. Adobe Aero</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/aero.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            You might be thinking: Wait, this is an adobe app, so it’s probably
            not free, right? Wrong! It is completely free. Adobe Aero is an
            augmented reality software that can display 3D models or animations
            in real life. You may add some blender renders into the app, and it
            displays it wherever you want it to be from your camera. It’s an
            enjoyable software that people use, although it’s not too
            well-known. You should try it out and see how it works. There are
            youtube videos out there showing how to add blender renders to your
            adobe aero software.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>5. Adobe Mixamo</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/mixamo.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            Aw man, an adobe app again? Don’t worry, this one is completely free
            too. And it’s online. Adobe Mixamo is an online website where you
            can download free 3D-modeled characters along with animations. You
            can use it in Blender or Adobe Aero. I’m glad that something like
            this is free and available to use for the world. You might have to
            log in to access these characters, but that’s also completely free.
            It’s an enjoyable app, and you should explore it soon if you
            haven’t.
          </Text>
        </View>
        <Text style={styles.text}>
          There are many other cool things like these out there, but this is
          what I found during the lockdown, which I thought was splendid. If you
          have any cool stuff in your mind that you want to share, you can click
          the pencil on the top-right corner to suggest it. Also, if you want me
          to show you how any of the above works, you can suggest it, and I will
          try my best to update it immediately. I hope you learned something new
          and found something to do today instead of sitting on Facebook or
          Youtube. Adios!
        </Text>
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default ArticleNine;

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
