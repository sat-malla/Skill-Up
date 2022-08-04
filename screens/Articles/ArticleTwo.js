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
import Unorderedlist from "react-native-unordered-list";

const ArticleTwo = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Master each swim stroke",
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
      <Text style={styles.header}>Mastering each swim stroke</Text>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/swimming.jpeg")}
        style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <View>
        <Text style={styles.text}>
          Swimming is one of the most challenging sports in the world. People
          can easily say that it’s because of the water and the inability for us
          to breathe in water. Professional swimmers, though, say that it’s
          difficult because of how much work you have to put in every day.
          Having the correct technique while focusing on speed isn’t very easy
          to accomplish overnight. But, with daily practice, hard work, and a
          determined mindset, it is possible.
        </Text>
        <Text style={styles.text}>
          I will list a few drills, practices, and tips that should help you get
          faster in every stroke, including IM. These can be for any age group,
          maybe even if you are in the Olympics. When doing these drills, you
          have to have the right mindset. That means, that if you are determined
          when you do these drills, you can improve dramatically.
        </Text>
        <View>
          <Text style={styles.smallHeader}>Freestyle:</Text>
          <Text style={styles.text}>
            Freestyle is the easiest and most common stroke of all. Many people
            know how to do basic freestyle, and it’s easy to go fast. But, if
            you want to go faster, here are some things you should do to improve
            your speed.
          </Text>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Streamline Kick - Streamline kicking is important. If you don’t
              kick powerfully in freestyle, it’s hard to move fast with just
              your arms. It’s also important that you keep your streamline
              tight. If it’s not tight, it will prevent you from going fast when
              kicking. You may use a kickboard, but I would suggest using
              streamline. Also, try not to breathe too often to get the whole
              kicking experience.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Pull buoy freestyle - If you don’t know what a pull buoy is, you
              can do a quick google search on it. Sorry, I’m lazy. I can tell
              you that it helps you improve your pull in freestyle. In this
              drill, you should put the pull buoy between your thighs and hold
              the pull buoy in place with your legs. When you do your freestyle,
              you should not kick and instead use your arms. Your arms are
              supposed to do most of the work here. This drill will help you use
              your arms to pull very far when doing your freestyle. When you do
              freestyle, you should keep your fingers together to pull the
              maximum amount of water with your arm strength. And for every
              stroke in this drill, try to pull the most amount of water you
              can.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Hypoxic breathing - Breathing is the number one thing in freestyle
              that can slow you down. Of course, we want to breathe because we
              can’t breathe underwater. That’s why hypoxic training helps you
              diminish the number of breaths per lap. There are many exercises
              such as breathing every 3, 5, 7, and 9. Your goal is to try to
              have 0-1 breath for a 50. It may not happen very soon, but with
              enough practice, you can get there. If you can get about 0-1
              breath for a 50, your time will improve drastically.
            </Text>
          </Unorderedlist>
        </View>
        <View>
          <Text style={styles.smallHeader}>Backstroke:</Text>
          <Text style={styles.text}>
            Backstroke is an interesting stroke to me. Yes, it’s just swimming
            freestyle on your back, and you have all the air in the world. And
            others will say that you can’t see the wall or the lane lines. It
            can be a tiresome stroke for some people, but here are a few ways to
            improve your speed.
          </Text>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Backstroke streamline kick - Streamline kicking on your back is a
              whole new level for some people, but if you practice maintaining
              your normal streamline, it should happen on your back too. Kicking
              in backstroke is important as it increases your speed, like
              freestyle. But, it’s harder to get the white water out when doing
              the backstroke. Many people use their arms too much, which is
              fine, but they can’t forget about kicking. If you kick powerfully,
              then your time will improve. You may use fins too if you want.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Backstroke stroke count - Stroke count is super important. Since
              you can’t see the wall in the backstroke, you can easily find out
              when to turn yourself over for the flip turn using the stroke
              count. The stroke count is the number of strokes you should take
              before doing a flip turn starting from the flags. If you don’t
              know your stroke count, here’s how to do it. First, start in the
              middle of the pool. Do regular backstroke, try to sprint if you
              can, and as soon as you see the flags start counting until your
              hand touches the wall. Subtract that number by 1. That’s your
              stroke count. Over time, as your speed increases, your stroke
              count will decrease. So every year, you should test your stroke
              count so you won’t collide into the wall.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Backstroke… head above water… thing? - I don’t know what it is
              called, but it is a good drill. For some backstrokers, they might
              have trouble staying in a straight line in a lap. They sometimes
              would go off to the sides and hit the lane lines, which obviously
              would slow down your time. This drill should help you know where
              you are in backstroke to maintain a straight line. When you do
              this drill, do a regular backstroke but with your head way above
              the water so that your head is looking in the direction where you
              came from. Try to keep your head still.
            </Text>
          </Unorderedlist>
        </View>
        <Image
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/breaststroke.jpeg")}
          style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
        />
        <View>
          <Text style={styles.smallHeader}>Breaststroke:</Text>
          <Text style={styles.text}>
            A lot of people like breaststroke. Like, I mean a lot. Breaststroke
            is many people’s favorite stroke besides freestyle. There are two
            different types of breaststrokers. One who pulls more and one who
            glides more. For both, make sure to have the right technique. Here
            are some ways to improve your speed.
          </Text>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Breaststroke pulldown - The pulldown is one of the most
              significant parts of your breaststroke. It’s important to know how
              to do it properly so you can achieve a farther distance. Here’s
              how to do the breaststroke pulldown in the best way. First, do one
              and only one dolphin kick with as much force as you can. Then, use
              both of your arms to pull until both arms reach the sides of your
              body. Use your arm strength for that. Last but not least is the
              upsweep. During your upsweep, it’s important to move your hands
              fast with a powerful kick.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Breaststroke kick - When breaststrokers do their kicks, they have
              powerful ones and helps them achieve a farther distance. How? Some
              people might not kick far, so this is how to do it correctly. When
              you are kicking someone, like out of the water, you don’t kick it
              with the top part of the foot. You kick it with the bottom part of
              the foot with your feet flat. The same thing goes in the water.
              With your feet flat, you should have a more powerful kick and a
              further glide. Keep the soldier position right after your kick as
              it doesn’t slow down your momentum.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Breaststroke arms + flutter kicks - It might seem weird, but it
              will improve your arm pull. While you do constant flutter kicks,
              you need to use your arms to bring yourself up to pull that much
              water. That’s how you can improve your arm pull by a lot.
            </Text>
          </Unorderedlist>
        </View>
        <View>
          <Text style={styles.smallHeader}>Butterfly:</Text>
          <Text style={styles.text}>
            Oh no. Possibly the stroke that everyone agrees on is tiresome. Even
            Olympic swimmers also agree. Some people might not be great at
            butterfly, but there are some ways to be faster.
          </Text>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Rhythm - If you are a fast butterflier, rhythm is important. You
              have to maintain the same rhythm throughout the whole 50. To have
              a good rhythm, here’s a good drill. Two kicks with your left arm,
              two kicks with your right, and two full butterfly kicks. Maintain
              the same rhythm throughout each lap. Without rhythm, your
              butterfly won’t just look awkward, but it can also slow you down.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Butterfly kicks - If you do butterfly kicks correctly, it will
              help improve your speed. To improve, you can do the normal
              butterfly kick. You can either use a kickboard or streamline,
              whatever works for you. I suggest a streamline because you won’t
              have kickboards in the race. However, to start things off, you can
              use a kickboard.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Do… the actual swim - If you want to be good at butterfly, and for
              any stroke, you should do the entire butterfly swim. You can just
              do a 25-yard butterfly and make sure to maintain the right rhythm
              and keep your chin at the same level as the surface. If your chin
              is too high, you are using too much energy. Your goal is to keep
              the chin the same level as the water surface throughout the entire
              race.
            </Text>
          </Unorderedlist>
        </View>
        <View>
          <Text style={styles.smallHeader}>IM:</Text>
          <Text style={styles.text}>
            IM is difficult. I was in a swimming league that just recently
            ended, and I had to do IM every meet. It’s not that fun for sure,
            but when you have to race it, I’m here for you. Here are a couple of
            tips to improve your IM.
          </Text>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Speed - One thing’s for sure during IM, NEVER go all the way out
              on butterfly. Butterfly will make you tired on backstroke, and
              it’s important to not lose your energy. From the beginning of
              butterfly to the end of backstroke, build your way from slow to
              fast. Most people use breaststroke as a catch-up stroke. It
              depends on where your strengths are. If you are a backstroker or a
              flier, you should use those strokes as an advantage to keep ahead
              of everyone else, but don’t choke in free or breaststroke. And
              during freestyle, for everyone, go ALL THE WAY OUT.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 48 }}>
            <Text style={styles.text}>
              Turns - When swimmers reach the wall, that’s when they tend to
              slow down. They use it as a “break” as they do their turn. NO. If
              you want to get a small boost in your IM, try to go faster on your
              strokes when you’re closer to the wall. Back-to-breast turns are
              the hardest. So make sure to practice your IM turns often.
            </Text>
          </Unorderedlist>
        </View>
        <Text style={styles.text}>
          Becoming faster in each stroke is tough and won’t happen the next day.
          But, you should know that it will happen soon or sometime in the
          future. It will happen, and that’s why practice is critical. Unlike
          other sports, everyday practice is required to maintain a good swim
          shape. Okay, maybe get a day off like Sunday. When you are at a swim
          meet, use the warmup wisely, sit down often to rest your legs, and
          possibly listen to some motivational music like rap. I think everyone
          knows that when you are nervous, things may not go well. Get that
          beast out of you and swim well!
        </Text>
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default ArticleTwo;

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
