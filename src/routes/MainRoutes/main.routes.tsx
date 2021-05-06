import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../pages/Home';

const Stack = createStackNavigator();

const MainRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default MainRouter;
