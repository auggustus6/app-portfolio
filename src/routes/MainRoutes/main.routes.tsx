import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeRouter from '../HomeRoutes/home.routes';
import FilterModal from '../../pages/FilterModal';

const Stack = createStackNavigator();

const MainRouter = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="float">
      <Stack.Screen
        name="Home"
        component={HomeRouter}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="FilterModal"
        component={FilterModal}
        options={{
          headerTitle: 'Busca de imóveis',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainRouter;
