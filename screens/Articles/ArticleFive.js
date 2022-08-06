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

const ArticleFive = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Programming Advantages",
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
        Advantage of Popular Programming Languages
      </Text>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/programming.jpeg")}
        style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <View>
        <Text style={styles.text}>
          Software engineering has become a huge part of today’s world. With
          advanced technology becoming a part of today’s children, the
          competition for computer engineering has increased over the past few
          years. Many people around the world are interested in software
          engineering, and some are already in software engineering jobs. There
          is no problem having an interest in software engineering, but you have
          to go through many challenges. The ones who stand out from these
          challenges become real software engineers. I have a list of several
          programming languages, and I will provide some knowledge you should
          know. I hope this list will give you an idea of what programming
          language to learn if you are a novice, or it will help you decide
          which path you should take when you have many on your plate.
        </Text>
        <View>
          <Text style={styles.smallHeader}>Java</Text>
          <Text style={styles.text}>
            I think everyone knows that Java is one of the most popular
            programming languages in the world. Java is a high-level
            object-oriented programming language that can make reliable
            platforms, applications, and services. It changed this world into
            the digital world we see today. From Twitter to 5G Networking, Java
            has been one of the most reliable programming languages in the
            world. Since it is very powerful, we can assume that it is a
            challenging programming language to learn. Indeed it is. The AP
            Computer Science course uses Java as its chief programming language.
            Even though it is difficult, it is a great programming language to
            learn. Once you learn all about Java, you feel like you can control
            the world in your hands. There are many free online courses, but for
            Java, you need the most practice to be good at it. One annoying
            thing that everyone hates about Java is the semicolon. People might
            forget to put semicolons and have to look through their code to find
            a missing or misplaced semicolon. Java is a frustrating language,
            but I would say the most frustrating part of Java is during the
            learning process. If you have the grit, you can do it. Don’t let all
            that information let you down as it is a powerful language that you
            should learn to get into Google, Twitter, and more.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Python</Text>
          <Text style={styles.text}>
            The most popular programming language of 2022 is Python. Every
            software engineer knows that Python is simple and less of a
            time-waster. Five lines of code in Java is one line in Python to
            write a print statement. It’s one of the most simple yet powerful
            programming languages in the world. Although it does require many
            years of experience to get real good at it, it’s not as sweaty as
            Java. Python doesn’t require semicolons, doesn’t even need a starter
            to start your program, and your code looks much cleaner. In Java,
            you write the data type before declaring and initializing a
            variable. In Python, you just need a variable name, equal assignment
            operator, and value. That’s it! In the future, Python may take over
            Java and become the new revolution of the digital world.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>HTML</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/html.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            Let’s go from powerful to non-powerful, unless you believe you can
            hack NASA with HTML. Even so, HTML is a pretty popular language.
            HTML stands for HyperText Markup Language, and its main purpose is
            web development. It’s not a language for the future, but it is a
            great programming language to start for beginner programmers. HTML
            is generally a great starter for young kids as it is easy to learn,
            and kids can pick up on them very quickly. People also use Scratch
            as another way to start a kid’s programming journey, and it is good
            because it is Java, Python, and others but in a simple format. CSS,
            the stylesheet for HTML, is also a simple and easy programming
            language. When students grow older, they will start paying more
            attention to complex languages like Python and Javascript.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Javascript</Text>
          <Text style={styles.text}>
            Javascript is also a powerful language. If you want to talk about
            the less-powerful version, JS is a back-end programming language
            that does stuff the user can’t see, for instance, signing into an
            account or clicking a button. Javascript allows the fun stuff to
            happen on a website. But that’s not all! In Javascript, there are 83
            powerful different libraries and frameworks. Libraries such as
            Node.js and React.js help to create even more advanced systems for
            websites and apps across all platforms and operating systems. There
            are also powerful JS frameworks, including Tensorflow(machine
            learning and AI), 3D graphics, and more. It’s super powerful, yet it
            is easy to learn. There are different types of Javascript and each
            has its level of difficulty. Normal javascript can be easy to learn,
            while Node.js would take some time for you to grasp all the
            concepts. It’s an amazing language and one that people hold onto for
            their whole career journey.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>C++</Text>
          <Text style={styles.text}>
            We just talked about some recent(okay, not recent but about 30 years
            ago) programming languages, but here is one that is old and tiring.
            C++, invented in the 1980s, is a powerful language similar to Java
            and its features. The problem is that C++ is just too much. To write
            just a simple print statement would take up to about six lines, and
            it is difficult for today’s programmers to learn about algorithms
            and data structures in C++. Even though it’s crazy, it is still a
            powerful language that many applications and platforms use today. It
            would just take longer for you to master concepts that are needed to
            get into software engineering jobs. You can take a look at this
            language, but if you want to dive deeper into it, well then
            hopefully you have the grit to do it.
          </Text>
        </View>
        <Text style={styles.text}>
          Learning and mastering a programming language is not very easy, and in
          fact, it is difficult. However, with practice and determination, you
          can do very well. People, if they show an interest in programming and
          want to show it, will create some small projects such as websites or
          apps that help. I am doing a small React.js project right now while
          creating this article. It’s an up-and-down process, but I didn’t let
          the downs stop me. Everyone’s goal is to rise to the top and create
          technology that improves the world. And as the world progresses,
          software engineers could be something society has to consider a
          substantial part of this world.
        </Text>
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default ArticleFive;

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
