import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Main/HomeScreen";
import CreatePostsScreen from "../Screens/Main/CreatePostsScreen";
import ProfileScreen from "../Screens/Main/ProfileScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "../Screens/RegistrationScreen/RegistrationScreen";
import { AntDesign, Feather } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const router = (isAuth) => {
  const authpath = (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Registration"
        options={{ headerShown: false }}
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  );

  const homepath = (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus" size={24} color="black" />
          ),
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );

  if (!isAuth) {
    return authpath;
  }
  return homepath;
};

export default router;
