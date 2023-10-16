import { NavigationContainer } from "@react-navigation/native";
import Screen01 from "./src/screens/Screen01";
import Screen02 from "./src/screens/Screen02";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();

  return (
    // <Screen01 />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Screen01} />
        <Stack.Screen name="Detail" component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
