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

const ArticleFour = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Improve Your Organization",
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
        Improving Your Organization Skills for School
      </Text>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/organize.jpeg")}
        style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <View>
        <Text style={styles.text}>
          In middle school, high school, and college, work can be
          very stressful. With homework, projects, and tests from different
          teachers with different schedules, it’s hard to be organized and know
          what to do first. If you are disorganized, you may find school hard
          with barely any sleep and more. I created a list of things you can do
          to help be more organized in school, and in this way, you will prepare
          yourself for anything that comes your way. When you are more
          organized, the stress levels will decrease dramatically, and you will
          have more sleep.
        </Text>
        <View>
          <Text style={styles.smallHeader}>Creating a Schedule</Text>
          <Text style={styles.text}>
            Creating an effective schedule doesn’t mean throwing things to do
            here and there, and you may not even have the motivation to do it.
            Here’s a technique that even Elon Musk uses to create an effective
            schedule. It’s called the time-blocking technique. Using google
            calendar or a whiteboard, allocate times for each subject. For
            example, you can list 3:00 - 4:00 PM for math homework, 4:00 - 5:00
            PM for science, and so on. You can also use different colors for
            each subject. To decide the colors, people usually match the colors
            on the calendar with their subject notebook. If your science
            notebook is green, use green on google calendar or a whiteboard.
            Allocate some time depending on what type of work you have each day.
            For instance, let’s say you have some math homework, an English
            essay due tomorrow, and a science test you need to study for. You
            can first spend an hour on your math homework to get that out of the
            way. If you do have some time left, you can either take a break or
            spend some more time practicing some problems you have difficulty
            with. Then, you can go ahead and finish your English essay and get
            it reviewed by some peers. Lastly, study or review for your science
            test. Make sure not to study everything the night before a test.
            Spend time studying what you have learned each day even though it is
            a lecture day. Also, don’t forget extracurriculars! If you have any
            extracurriculars, which are essential for college, you should put
            that in your schedule so you can figure out how to spend on your
            school subjects. These also include school sports.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Taking Notes Properly</Text>
          <Text style={styles.text}>
            Notes are super important. Whenever your teacher is giving a
            lecture, they may teach with slides and later send the slides to
            google classroom. STOP. Don’t be the student who copies everything
            down from the slides once they get home. Instead, while the teacher
            is giving the lecture, you should take notes down. When you are
            copying the slides, it won’t give you much information or
            background. However, when the teacher lectures, they will provide
            more about it than what’s on the slide. That’s where your notes come
            in handy. Note any key information, or possibly all, so you have the
            full picture of the topic.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Collaborative Group Work</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/groupwork.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            When things get stressful in high school, no one can do it on their
            own. That’s when collaboration groups come into place. If you are an
            introvert, then that could be an exception. Over the first couple of
            months, you will find some friends in your class. You and your
            friends can later make a small collaborative group for homework,
            editing essays, and studying tests. Get each other’s discord or
            phone numbers, video call each other, or you can call people to your
            house and study together. As you get older and your workload
            increasingly becomes higher, collaboration groups will rise in
            importance.
          </Text>
        </View>
        <Text style={styles.text}>
          After a few weeks of following these methods, you will realize how
          much better you feel. With better sleeping patterns, you will feel
          less stressed while also getting good grades. It’s not just following
          these methods, but it’s about how determined you are to make an effort
          to strive for success. If you are very committed to it, the results
          will show it.
        </Text>
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default ArticleFour;

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
