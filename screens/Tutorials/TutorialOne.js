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

const TutorialOne = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Editing Car Photos",
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
      <Text style={styles.header}>How To Edit Car Photos Using Pixlr</Text>
      <Image
        source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/Tutorials-Photos/EditCarPhotos/porsche.jpeg")}
        style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <View>
        <Text style={styles.text}>
          Editing car photos is a time-consuming job. It takes some time to find
          the correct settings here and there. For beginners, it’s quite
          annoying. Today, I will show you how to edit car photos in the simple
          way possible. I’m using the editing software Pixlr, a free online
          editor. I am using the advanced version, Pixlr E, which you can use
          too, so it would be easy to follow. If you want to learn more about
          it, press here. Editing car photos might not seem easy, but today
          you’ll learn it the easy way. I’ll try to cover every type of car
          photo with different lighting.
        </Text>
        <Text style={styles.text}>
          There are two versions of this tutorial. You can either read the
          article, or click the video to watch the video tutorial. The article
          and the video use different photos so I can tackle each and every type
          of car photos.
        </Text>
        <Text style={styles.text}>Here's the video:</Text>
        <Video
          ref={video}
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/Tutorials-Photos/EditCarPhotos/editcarvid.mp4")}
          useNativeControls
          resizeMode="center"
          onPlaybackStatusUpdate={setStatus}
          volume={1.0}
          style={styles.video}
        />
        <Text style={styles.text}>
          I am going to use this photo for the article tutorial:
        </Text>
        <Image
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/Tutorials-Photos/EditCarPhotos/original.jpg")}
          style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
        />
        <Text style={styles.text}>
          First, let’s explore this picture. The subject is this yellow, dull
          car. There are some mountains in the background and a cloudy sky.
          There is a warmer temperature in this photo. You should make a list
          too.
        </Text>
        <Text style={styles.text}>
          I would always start on the temperature. Since it’s a bit too warm,
          I’ll change the temperature and the tint. To do that, go to Adjustment
          and Temperature and Tint.. Ifs you have a more blue tint on your
          photo, you can adjust the temperature to make it a bit higher. If you
          are going colder, move the tint slide towards the green. If you are
          going warmer, move the slide towards pink. Make sure to not put too
          much tint. For the temperature, keep sliding until the orange/blue
          tint is eliminated from the picture.
        </Text>
        <Image
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/Tutorials-Photos/EditCarPhotos/temperature.jpg")}
          style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
        />
        <Text style={styles.text}>
          Next, change the exposure. Adjustment and Exposure.. The exposure
          helps expose some of the dark parts of the picture to shine, and it’s
          a bit different than adjusting the brightness. The brightness doesn’t
          touch the dark spots and only covers the whole photo. If it’s too
          dark, increase the exposure. Too light, decrease the exposure.
        </Text>
        <Text style={styles.text}>
          The next step is to mess with the highlights and shadows. Adjustment
          and Highlights and Shadows.. The highlights and shadows help balance
          the lightness in your picture. For every picture, you should decrease
          the highlights and increase the shadows so the dark parts are light
          and the light parts are dark.
        </Text>
        <Image
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/Tutorials-Photos/EditCarPhotos/highandshad.jpg")}
          style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
        />
        <Text style={styles.text}>
          Vibrance is pretty important as it helps bring out the color in the
          picture. Adjustment and Vibrance.. It’s a great tool to use especially
          with photos with a lot of bright colors. If you feel like your picture
          is dull, you should increase the vibrance. If you feel like your
          picture is vibrant enough, then there is no need. There usually
          shouldn’t be a picture with a lot of vibrance.
        </Text>
        <Image
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/Tutorials-Photos/EditCarPhotos/vibrance.jpg")}
          style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
        />
        <Text style={styles.text}>
          Let’s start doing some brushwork. Head to the left toolbar and click
          on the button with the half-filled circle or the dodge/burn. You will
          see a set of tools to use on the top under the top toolbar. If your
          picture is too light, change the mode to darken. If it’s too dark,
          change it to lighten. Keep the range to midtones. For less work,
          increase the brush size. Increase the strength so it would give better
          results; I put it at 60. Now, with your mouse, brush across the entire
          picture. It should eliminate some light. Don’t worry, that’s not the
          final picture.
        </Text>
        <Image
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/Tutorials-Photos/EditCarPhotos/toning.jpg")}
          style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
        />
        <Text style={styles.text}>
          I should have done this before but it’s alright. I’m new to this type
          of stuff. Increase the saturation just a little bit, Adjustment and
          Hue and Saturation.., or go to the left toolbar and select the sun
          icon. Change the method to saturation, increase brush and strength if
          you want, and brush over the whole picture. You can test different
          strengths to find out which is the best. I put it at 40. Make sure you
          don’t add too much saturation.
        </Text>
        <Image
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/Tutorials-Photos/EditCarPhotos/saturation.jpg")}
          style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
        />
        <Text style={styles.text}>
          This is an optional step. Go to Adjustment and Curves. You can do this
          to help adjust the color balance. Click a color and double click any
          point on the graph. Move it around to adjust the color balance. If you
          put the point over the original y=x line, it will increase the color.
          I put the blue color over the line and put the orange color under the
          line. It looks more balanced, more dark, and the headlights are really
          showing out.
        </Text>
        <Image
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/Tutorials-Photos/EditCarPhotos/curves.jpg")}
          style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
        />
        <Text style={styles.text}>
          If you have Pixlr premium, you can use the focus option. I don’t
          really know how to use it, but there are tutorials about it. Using the
          focus feature, you can make the photo focus on the car. If there
          already is a focus on the car, like what mine looks like, then you
          don’t have to use it. You can use the focus option, but it would leave
          a watermark on the picture.
        </Text>
        <Text style={styles.text}>
          If you want to make the picture look classy and original, go to Filter
          and Details and Add Noise.. You may add some grain to it too by going
          to Filter and Details and Grain..
        </Text>
        <Image
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/Tutorials-Photos/EditCarPhotos/noise.jpg")}
          style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
        />
        <Text style={styles.text}>
          Finally, the last thing to do is Vignette. Go to Filter and Vignette..
          This adjusts the saturation and brightness towards the center from the
          corners. For these photos, a black vignette is the best. To do that,
          move the slide forward. If you want to have white corners, move the
          slide backward.
        </Text>
        <Image
          source={require("/Users/sathvikm/Documents/Builds/everything-proj/assets/Tutorials-Photos/EditCarPhotos/finished.jpg")}
          style={{ width: 400, height: 250, marginTop: 20, borderRadius: 8 }}
        />
        <Text style={styles.text}>
          For additional touches, you can go to the left toolbar and select
          Text(the T icon). You can use the text icon to write like “Aston
          Martin” or whatever. You can change the size, color, font, and angle.
        </Text>
        <Text style={styles.text}>
          And there you have it! It may not be really professional or great but
          I guess this is what “free” gives you. It looks good to me, but if you
          want to edit on photoshop, you can totally do that as there are many
          tutorials on editing cars in photoshop. If you want, you can use the
          suggest page to send your result!
        </Text>
      </View>
      <View style={{ height: 400 }} />
    </ScrollView>
  );
};

export default TutorialOne;

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
  video: {
    flex: 2/3,
    alignSelf: "stretch",
    borderRadius: 8,
    marginTop: 20,
    width: 400,
    borderWidth: 4,
    borderColor: "#31eb94",
  },
});
