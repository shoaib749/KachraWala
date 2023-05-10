import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Landing from './screen/Landing';
import UserRegister from './screen/user/UserRegister'
import DriverRegister from './screen/driver/DriverRegister'
import Home from './screen/user/Home';
import UserLogin from './screen/user/UserLogin';
import DriverLogin from './screen/driver/DriverLogin';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="UserRegister" component={UserRegister} />
        <Stack.Screen name="DriverRegister" component={DriverRegister} />
        <Stack.Screen name="DriverLogin" component={DriverLogin} />
        <Stack.Screen name="Home" component={Home} />
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
