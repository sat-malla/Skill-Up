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

const ArticleOne = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "What to do each month",
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
        What to do each month of the year - For highschoolers
      </Text>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/highschoolstudy.jpeg")}
        style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <View>
        <Text style={styles.text}>
          When it comes to high school for many students, it can be tough. There
          are many reasons such as workload, stress, and frequent quizzes and
          tests. Young students may wonder how they work through all of those
          problems for four years. Well, there are many answers, including
          organization, time-management, and more.
        </Text>
        <Text style={styles.text}>
          Organization is key everywhere. It’s an important part of how students
          can succeed through high school, college, and beyond. That’s why I
          created a list of what to do each month, so you can learn how to be
          successful.
        </Text>
        <Text style={styles.month}>JANUARY:</Text>
        <Text style={styles.text}>
          After a long and fun winter vacation, it is time to start school
          again. Although it is irritating for some, it is important to get back
          on track. Now from here, there can be multiple scenarios depending on
          the school. Most schools have midterms before winter break, which is
          good so you start fresh in January. If you have midterms after winter
          break, study, then the first week after midterms is the week where you
          can “rest.” Some schools start on the first week of January or right
          after New Year’s. If you are in one of those schools, I hope you
          prepared for January during the winter break. However, if you didn’t
          that’s fine. High schools usually ease students back from winter
          break, but some strict teachers might even start things on the first
          day. It’s important to know your teachers in the first four months of
          school before winter break, and depending on that, you can figure out
          whether they will be easy on you and should try to prepare for it
          during winter break. Some schools, like mine, begin in the second week
          of January. If you are in a school like that, then you have time to
          prepare in the last week of winter break as there aren’t many holidays
          after New Year’s. January is the month that prepares you for February
          and March, which I consider the peak months. This is when the workload
          becomes increasingly higher. It’s crucial to pay attention in class,
          manage your time after school every day, and collaborate with your
          friends. Since you had four months to make friends with some of your
          classmates, it’s now time to make a collaboration group. Collaboration
          groups are beneficial as they decrease your stress a lot. You can all
          work on homework, or reread each other’s essays while having fun. You
          guys can take a 5-minute break for water, snacks, and other
          refreshments to come back with a refreshed mind. All of this is to
          prepare for the upcoming months.
        </Text>
        <Text style={styles.month}>FEBRUARY:</Text>
        <Text style={styles.text}>
          It is the peak month. This is the month when things get harder and
          more stressful. And if you have organized and prepared in January,
          then you can pretty much handle this. If you haven’t, look at the
          January section and start doing things immediately. Now, for some
          students like me who like to watch NFL games, we would want to watch
          the Superbowl and other games. Although it’s a big event you can’t
          miss, sometimes you MAY have to miss it. If you want to watch the
          Superbowl, that’s ok, but make sure you catch up on other things
          during the weekend and prepare yourself before you watch the game. You
          don’t have to watch the NFL game as some students decide to check the
          game once in a while, but still do their work. As long as it doesn’t
          distract you too much, have fun watching the Superbowl. But in the
          middle of the month is where it becomes very stressful. Many students
          may enroll in spring sports around this time, and this is where your
          time-management skills come to place again. If you are doing a spring
          sport, make sure to manage your time for work and
          practice/competitions. If you did this planning before, then maybe it
          won’t be hectic at the beginning of February with other things coming
          your way.
        </Text>
        <Text style={styles.month}>MARCH:</Text>
        <Text style={styles.text}>
          As many students, teachers, and even principals consider this month is
          the most uneventful month of the year. There may not be many holidays,
          breaks, or fun events this month as it is just non-stop school work.
          If you are a March Madness follower, you might not even consider the
          previous statement. If you want to watch a March Madness game, I hope
          you organize your work and time well. At this point, the workload
          won’t be as high as in February, but it will be slightly lower and
          will stay like that for the rest of the month. There are few schools,
          including mine, that have a holiday on a Friday in the middle of March
          for staff development. If you are in one of those schools, or you do
          have an actual holiday, then use that holiday to your advantage and
          make the most out of it. If you are a senior, start taking trips to
          colleges you plan to attend and start working on college applications.
        </Text>
        <Text style={styles.month}>APRIL:</Text>
        <Text style={styles.text}>
          Yes, finally! After almost four months, you get a spring break! Some
          schools might have spring break in the first week of April or around
          Easter. Teachers either might decrease or keep the same workload
          during this time. If you are not enrolled in any AP classes, then this
          is the time to work on things you would like to do in your career. If
          you are interested in computer science, you can learn new things like
          how to create an app or website, start a nonprofit organization, and
          more! If you are in FIRST, a nonprofit organization for robot
          competitions and more, you can plan for your summer. For every
          student, this is also the month to plan your summer. If you want to do
          some volunteering hours, teach some classes, or maybe even start some
          clubs, you should plan that now for the summer because there is no
          time in May and June. Even during spring break, it is also a good time
          to work on your volunteer hours or plan on starting a club with your
          friends. If you are enrolled in AP classes, this is when you start
          studying for your AP exams. Most students study from the first day of
          school, which is something that you could also do if you want.
          However, if you didn’t that’s fine. Take advantage of spring break to
          study for your AP exams while also fixing your sleep schedule so that
          you don’t have to pull many all-nighters before your exams. Stay
          focused, manage your time, and don’t overload your stress.
        </Text>
        <Text style={styles.month}>MAY:</Text>
        <Text style={styles.text}>
          It’s time for AP exams; if you are enrolled in an AP course. OH NO!
          Teachers should decrease the workload as you need some time to prepare
          for your exams. If they don’t for some reason, then, again, time
          management! Get good rest and have a good breakfast before your exam
          or exams. For students who have spring sports, the season should have
          ended in April, and you should have some spare time now for studying.
          Try not to pull all-nighters. You won’t have to if you study every day
          and organize your work. After your AP exams, if you feel like you’re a
          bit stressed out, use a weekend to rest but don’t forget your school
          work! If you aren’t enrolled in an AP course, start studying for
          finals. Some teachers may have a unit test instead of a final, or they
          can have a final before finals week. It’s important to know when your
          final is and be prepared. If your school ends in May, then
          congratulations! YAY! Start planning your summer and work on things
          you want to work on or enjoy doing. If you are a senior, start
          planning for college and taking small trips to some colleges you’d
          like to visit and explore.
        </Text>
        <Text style={styles.month}>JUNE:</Text>
        <Text style={styles.text}>
          Across the nation, school years end at different times. Some schools
          may end in early June, and some schools end in late June. Whenever it
          is your last day of school, prepare for finals. Now that school is
          finished, congratulations! You can start your summer plans and also
          take some rest if you can. If you are a senior, you can plan for
          college and maybe even go on some fun senior trips with your friends.
          If you are going to 10th, 11th, and 12th grade, use this summer
          wisely. Some people take on-demand AP courses during the summer before
          taking the exam in May. If you are a freshman next year, try talking
          to some friends in higher grades going to the same school to learn
          about the teachers and the workload so you can keep that in mind.
          Planning a vacation trip or not is fine as long as you allocate some
          time for preparation for next year.
        </Text>
        <Text style={styles.month}>JULY:</Text>
        <Text style={styles.text}>
          This is the month when every high-schooler in the nation has their
          summer break. Continue working on your projects or teaching. Some
          schools start in the first week of August, and if you are in one of
          those schools, start preparing for it starting from the second week of
          July. Also, prepare for next year’s courses as your school should have
          released what courses you will be taking next year.
        </Text>
        <Text style={styles.month}>AUGUST:</Text>
        <Text style={styles.text}>
          During this month, most of the schools will start. OH NO! Don’t worry,
          you’ll be fine. Before school starts, start preparing for it and
          learning from other friends about your teachers. When school starts,
          pay attention to class, read the syllabus CAREFULLY and understand who
          your teachers are. Some teachers might be strict, some teachers might
          be easy, and some teachers fall in between. Also, this is the point to
          start making friendships with some other classmates you’re not friends
          with even though you have many other friends in it.
        </Text>
        <Text style={styles.month}>SEPTEMBER:</Text>
        <Text style={styles.text}>
          Some schools may start around early September. Hopefully you are
          prepared to start the next grade. This month, learn about your
          courses, homework and test schedules, and more. Make a schedule to
          allocate times for each subject as well as extracurriculars. If you
          are a freshman or a sophomore, start looking into some clubs and join
          a couple of them, especially the ones you are interested in. You could
          make some chat groups with some friends in your classes, or you can
          have a discord server for a class or maybe even every student in your
          grade. This way, you can collaborate and help each other out.
        </Text>
        <Text style={styles.month}>OCTOBER:</Text>
        <Text style={styles.text}>
          This is when the school might start to take over your schedule. If you
          have organized your time, then you should be fine. Stay on track with
          your courses, keep your grades where you want them to be, and do well.
          Fall sports might start around this time or maybe even in September.
          Again, as I said earlier, make a schedule and plan for future
          schedules if you are planning to join winter or spring sports.
        </Text>
        <Text style={styles.month}>NOVEMBER:</Text>
        <Text style={styles.text}>
          Thanksgiving break is coming soon! Things will get a bit more hectic,
          but you should be fine for now. During Thanksgiving break, you might
          have some time to work on volunteer hours. If you are a senior,
          college applications should be in your mind too. Some students might
          also study for midterms during Thanksgiving break, and you should be
          doing that if you aren’t.
        </Text>
        <Text style={styles.month}>DECEMBER:</Text>
        <Text style={styles.text}>
          Midterms are coming soon! Maybe not for some. You should be preparing
          for midterms at this point, especially for some students who might
          have teachers who have midterms before midterms week. Workload should
          not have been super hectic these past four months but will get super
          hectic after winter break. If you have midterms after spring break,
          you should start studying during winter break, but maybe not during
          the entire winter break. When winter break hits, you might go on some
          trips, and that’s fine. You should get a break, but maybe use a week
          to either prepare for midterms or the next few months.
        </Text>
        <Text style={styles.text}>
          That’s the list! Hopefully, you have benefitted from this and helped
          you fix your schedule. There is an article showing how to be organized
          before school starts. Whatever the month is for you, make the most of
          it to benefit your career and yourself.
        </Text>
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default ArticleOne;

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
  month: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
    paddingHorizontal: 5,
    alignSelf: "flex-start",
  },
});
