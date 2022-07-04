import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SearchScreen from './src/screens/SearchScreen';
import RestaurantsShowScreen from './src/screens/RestaurantsShowScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'Business Search'}}
        />
        <Stack.Screen name="Restaurant" component={RestaurantsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
