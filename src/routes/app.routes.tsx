import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loading} from '../pages/loading/Loading';
import {Welcome} from '../pages/welcome';
import {Home} from '../pages/Home/Home';
import {Details} from '../pages/Details/Details';
import {SeeAll} from '../pages/SeeAll/SeeAll';
import {colors} from '../global/styles/colors';
import TabRoutes from './tab.routes';

const App = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <App.Navigator initialRouteName="Loading">
      <App.Screen
        name="MainBottom"
        component={TabRoutes}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <App.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <App.Screen
        name="Loading"
        component={Loading}
        options={{headerShown: false}}
      />
      <App.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Details',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.gray,
          },
        }}
      />
      <App.Screen
        name="SeeAll"
        component={SeeAll}
        options={{
          title: 'See all',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.gray,
          },
        }}
      />
    </App.Navigator>
  );
};
