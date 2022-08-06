import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/Home';
import Info from './screens/Info';
import Articles from './screens/Articles';
import Tutorials from './screens/Tutorials';
import Games from './screens/Games';
import Suggest from './screens/Suggest';
import ArticleOne from './screens/Articles/ArticleOne';
import ArticleTwo from './screens/Articles/ArticleTwo';
import ArticleThree from './screens/Articles/ArticleThree';
import ArticleFour from './screens/Articles/ArticleFour';
import ArticleFive from './screens/Articles/ArticleFive';
import ArticleSix from './screens/Articles/ArticleSix';
import ArticleSeven from './screens/Articles/ArticleSeven';
import ArticleEight from './screens/Articles/ArticleEight';
import ArticleNine from './screens/Articles/ArticleNine';
import ArticleTen from './screens/Articles/ArticleTen';
import TutorialOne from './screens/Tutorials/TutorialOne';
import WordGuesser from './screens/Games/WordGuesser';


const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#31eb94" },
  headerTitleStyle: { color: "black" },
  headerTintColor: "black",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Articles" component={Articles} />
        <Stack.Screen name="Tutorials" component={Tutorials} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="Suggest" component={Suggest} />
        <Stack.Screen name="ArticleOne" component={ArticleOne} />
        <Stack.Screen name="ArticleTwo" component={ArticleTwo} />
        <Stack.Screen name="ArticleThree" component={ArticleThree} />
        <Stack.Screen name="ArticleFour" component={ArticleFour} />
        <Stack.Screen name="ArticleFive" component={ArticleFive} />
        <Stack.Screen name="ArticleSix" component={ArticleSix} />
        <Stack.Screen name="ArticleSeven" component={ArticleSeven} />
        <Stack.Screen name="ArticleEight" component={ArticleEight} />
        <Stack.Screen name="ArticleNine" component={ArticleNine} />
        <Stack.Screen name="ArticleTen" component={ArticleTen} />
        <Stack.Screen name="TutorialOne" component={TutorialOne} />
        <Stack.Screen name="WordGuesser" component={WordGuesser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
