import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import Restaurant from '../../pages/Restaurant';

const Stack = createStackNavigator();

const MainRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
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
        name="Restaurant"
        component={Restaurant}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainRouter;
