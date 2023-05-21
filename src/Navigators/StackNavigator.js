import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import SlideShow from '../Screens/SlideShow';

const Stack = createStackNavigator();

export default function MyStack(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="SlideShow" component={SlideShow}  />
    </Stack.Navigator>
  );
}