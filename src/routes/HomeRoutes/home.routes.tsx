/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import Property from '../../pages/Property';

const Stack = createStackNavigator();

const HomeRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Home}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Property"
        component={Property}
        options={{
          header: () => null,
        }}
      />

    </Stack.Navigator>
  );
};

export default HomeRouter;
