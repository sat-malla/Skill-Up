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

const ArticleEight = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Opinions About Monsters",
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
        My Opinions of The World's Mysterious Monsters
      </Text>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/woods.jpeg")}
        style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <View>
        <Text style={styles.text}>
          This world is full of mysteries. I am the kind of guy that loves to
          learn about and explore monsters. Even though I still don’t want to
          find one right outside my window, I would love to prove that it is
          real. There are many monsters and prehistoric creatures that people
          believe could be real, and I am one of them… kinda. I don’t want to
          say they are real, but if they were, that would be pretty insane. I
          have a list of a few monsters or creatures, and I will discuss
          whether, in my opinion, the monster is real or fake.
        </Text>
        <View>
          <Text style={styles.smallHeader}>Megalodon</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/megalodon.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            I have always been fascinated about the existence of Megalodon today
            since I’ve seen videos about Megalodon sightings. Although most of
            them were probably fake, we still can’t jump to the conclusion that
            it is still extinct. If you didn’t know, only 5% of the ocean has
            been discovered. That means 95% of the sea hasn’t been found yet.
            However, the Megalodon is a giant. Yes, sharks live in the deep sea,
            but sometimes megalodons can come up for food. There are so many
            facts and statements people use to figure out whether it exists. In
            my opinion, I would say the Megalodon does not exist. There is not
            enough evidence out there to prove it exists, but I would love to
            see somebody or something out there proving me wrong.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Mothman</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/mothman.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            A legend in West Virginia beginning in 1966. Mothman is a terrifying
            yet captivating creature. It’s a creature that, when you hear it,
            looks like it’s from a folk tale. However, from descriptions people
            have used when seeing this creature since 1966, it’s hard to tell
            whether it is real or fake. The descriptions from others painted the
            picture for everybody, from “flying dark creature” to “man-like
            creature with wings and red eyes.” Still, the current answer is
            unknown. This creature only appears in the dark, so people don’t
            know what it is. Some people say it could just be some man pranking
            people with this costume, others say it could be an outer-space
            alien or a creature we never discovered before living on Earth.
            Scientists and archaeologists say it could be a prehistoric flying
            dinosaur like the pterodactyl. It’s certainly an interesting
            creature with many views on this, but here’s my opinion: I think it
            is a real creature. I would say that it has been living on Earth for
            quite some time but was always hiding. More than being right, I
            would love to see the answer to this with actual evidence.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>The Bloop</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/bloop.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            The Bloop, according to a few articles, has been uncovered as people
            say it was just an underwater volcanic explosion. According to
            scientists, this hypothesis is very close to correct. However, we
            still don’t have the answer to this, so this investigation is still
            not over. It will never be, and it will probably be a legend in the
            future. It is one of the world's biggest mysteries that is suddenly
            dissipating. If you don’t know what The Bloop is, it is an ultra-low
            frequency and a high-amplitude underwater sound detected by the US
            National Oceanic and Atmospheric Administration in 1997. It left
            scientists and other people curious about where this sound is from.
            If you want to listen to the sound, search “the bloop original
            sound”. People thought it could have been a gigantic underwater
            creature, later named The Bloop, and some thought it was a volcanic
            explosion. It’s a mystery that’s hard to get away with but hard to
            find smoking-gun evidence on it, so to be realistic, it’s just a
            volcanic explosion. There might or might not be more information
            released about this, but definitely a good legend to pass on through
            generations.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>UFOs and Aliens</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/alien.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            Ah, one of the favorites that people love to tackle. Are UFOs and
            aliens real? Let's take a step aside from UFOs for now. Aliens,
            defined in the Merriam-Webster dictionary, is a “being that comes
            from somewhere other than the planet earth.” So, it can be any
            creature, not the ones that look like Skinny Bob. Still, we need a
            visual or a picture representing an alien, so we will take Skinny
            Bob. Speaking of Skinny Bob, it has been a huge mystery on the
            internet since it was released in 2011. Four anonymous and
            mysterious videos were released on Youtube from a youtube channel
            named ivan0135. He posted four videos showing what appears to be old
            footage. There is no background about it and who or what took the
            video. You can watch the videos by searching “ivan0135.” This is
            when the Skinny Bob mystery came to life. It has captivated the
            whole world. Now, on to the UFOs. There have been sightings of
            unidentified flying objects in the sky from government operations
            and flights. Unfortunately, the quality of these videos is not the
            best, but they left people curious about whether they are real or
            not. After some research, I think that aliens are real, the aliens
            living on other planets. I still do not believe aliens with Skinny
            Bob and UFOs are real as there is not much evidence. If it somehow
            turns into reality, I am all into that.
          </Text>
        </View>
        <Text style={styles.text}>
          There are many more mysteries and monsters out there like BigFoot and
          more. Some are legends, and some have the possibility of becoming
          true. These four I discussed are one of the most discussed mysteries
          around the world that we may or may not find answers to. As technology
          and our world advance, we may discover more and more clues to solve
          some current or new mysteries. Remember that the numerous unsolvable
          mysteries out there can only be remembered as legends or folktales.
        </Text>
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default ArticleEight;

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
