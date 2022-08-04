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

const ArticleThree = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Reviewing Car Favorites",
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
      <Text style={styles.header}>Reviewing Car Favorites</Text>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/carstart.jpeg")}
        style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <View>
        <Text style={styles.text}>
          I love cars. I loved cars since the beginning of childhood,
          and I hope to get my hands on a Lamborghini soon. However, I’m not a
          good car reviewer. I generally like cars, especially Lamborghinis and
          Ferraris, but I don’t know how to review them properly, so you know
          whether they are the right choices. Anyways, I picked up some popular,
          fast, and expensive cars, and I will review them to see in my opinion
          if they are good cars.
        </Text>
        <View>
          <Text style={styles.smallHeader}>Ford Mustang GT:</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/mustang.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            The Ford Mustang has been an iconic car for more than 50 years. It
            started in the 1960s when Ford decided to make the mustang. It is
            equipped with a lot of horsepower and a powerful engine. It just
            keeps getting better from there. Ford mustangs are common today and
            are pretty cool, but people still find the classic mustangs better
            than today. However, the mustang is a powerful car, and there is
            still more news to come for the new 2024 Ford Mustang. The 2022 Ford
            Mustang has a 5.0 liter V8 Engine. Yes, that means the engine makes
            a lot of sounds. It has an engaging manual transmission. Like any
            other mustang, there are two doors but with backseats. It’s a good
            ride, and if you just want to cruise around town, this is the car. I
            have to say that it is a reasonable price ranging from $27,000 to
            around $40,000. It is ranked #1 in sports car reliability but ranked
            20th out of 24 in mid-sized cars. Well, probably because it is no
            luxury car. If you want to get a small coupe, this is one of the
            best choices in the market.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Chevrolet Camaro SS:</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/camaro.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            The Chevrolet Camaro is a great sports car. It has been less of an
            iconic car than the mustang, but it has much more horsepower. The
            new Camaros have two high-performance V8 engines and have many other
            aggressive powertrains. The 2022 Chevrolet Camaro is a great car in
            terms of sports car quality and performance, but I don't like the
            design. This year, they changed their back lights similarly to the
            2013 Chevrolet Camaro. I like the ones from 2015-2018, but everyone
            is different. The newly designed corvette has everyone's attention,
            and Camaros have not been around much. However, it is still a fun
            ride to cruise around town. It is an AWD car, but you should still
            not consider using these on the snow. It has a rating of 4.8/5.0
            from around 500 reviews and 8/10 from CarandDriver. There you go,
            it's not a bad car, but not a starter car. Once you get used to
            driving cars, then handling Camaros will be easier.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Lamborghini Huracan Tecnica:</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/huracan.jpeg")}
            style={{ width: 400, height: 280, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            Lamborghinis are easily one of my favorites. Every time I saw a
            Lamborghini I would immediately take my phone, or sometimes my dad’s
            phone, and take a picture. It might have the worst quality, but I
            didn’t care much. The new 2023 Lamborghini Huracan Tecnica has a
            5.2-liter, V10 engine and can go up to 202 mph(325.087 km/h). It’s a
            crazy fast car that can change your day. The best thing is, it’s an
            electric motor. It is still an RWD but does have many other
            features, specs, and options. Features such as Apple’s CarPlay and
            Alexa help you feel comfortable in a sports car. Because of that,
            the price is expensive. It starts at around $239,000, and for a
            Lamborghini, it is a reasonable price. It’s a powerful car that you
            can show off in New York but costly when it comes to repairing.
            That’s why when people say you can use their Lamborghini, they
            always say, “Don't leave a scratch!” Unfortunately, the good old
            Lamborghini Huracan is going away, and a redesigned Huracan is
            coming in 2024. All we know is that it has a mild-hybrid twin-turbo
            v8 engine. There are still some Huracans, Huracan Evos, and more,
            however, the new one has a great chance of dominating. In the
            meantime, enjoy your ride!
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>McLaren Artura:</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/artura.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            McLaren is a car company which you think contains some luxurious
            features but doesn’t. It started as a race car company and always
            has been. The new road-legal cars are great but don't accommodate
            any of the luxurious features other brands such as Bugatti have.
            When sitting inside a McLaren, you feel like you are racing an F1
            Car. It’s a different experience. McLarens have a few advanced
            features but don’t try to compare them to a Rolls-Royce. Although
            McLarens have these things, they have great exterior designs and
            aerodynamics. The Artura is one of the best. It has a new hybrid
            twin-turbo V6 engine, which is definitely a road-legal car. Some
            things that I love about McLarens are the batteries. This car has a
            7.4-kWh lithium-ion battery pack, and includes the charger if you
            choose to have one. In the interior, it has a large screen with many
            great features such as a 360-degree camera view, back camera view,
            parking assistant, Alexa, and much more. It’s a great car sitting at
            a reasonable price of $237, 500 considering that this is a McLaren.
            It is definitely a good car to ride on the road, off the road, and
            on the racetrack. If you ever have a bad day, this is a good car to
            cruise downtown in the evening.
          </Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>Bugatti Chiron Super Sport:</Text>
          <Image
            source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/chiron.jpeg")}
            style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
          />
          <Text style={styles.text}>
            Bugatti loves to break records, and they did on this one. The
            original Bugatti Chiron broke 300 miles per hour(482.803 km/h) and at that moment
            earned the Guinness world record as the fastest car in the world. It
            is a great car with many luxurious features and is a car if you have
            the need for speed. Topping at 2500 rpm, this monster can get you at
            high speed in less than 10 seconds as if your whole life is flashing
            in front of you. It’s a fun ride to experience. It has 1578
            horsepower along with an 8.0-liter reactor. You feel like you are
            traveling through time. Since this car is fast, you can feel the
            1.5gs from the speed that might make you dizzy. It feels better than
            a McLaren, but it is still pretty much the same. This car has been
            well engineered to travel at high speeds, and it was a splendid job
            for the entire Bugatti team. Like other Bugattis, as they are rare,
            they are expensive. This car starts from around $3,000,000, but
            don’t think that is too much compared to the other new models. The
            Chiron might overtake the new Bolide, but for now, enjoy the ride!
          </Text>
        </View>
        <Text style={styles.text}>
          As you can see, I am not a good car reviewer, but I do love and enjoy
          cars. Some of my favorite brands are BMW, Mercedes-Benz, Lamborghini,
          McLaren, Audi, and much more. From now onwards, cars will have more
          advanced systems, technology, and more. So before this era of cars
          ends, savor it and rule the streets!
        </Text>
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default ArticleThree;

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
