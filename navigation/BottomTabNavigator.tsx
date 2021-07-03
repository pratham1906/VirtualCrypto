/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Market from '../screens/Market';
import Portfolio from '../screens/Portfolio';
import Profile from '../screens/Profile';
import Rankings from '../screens/Rankings';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList} from '../types';
import { Entypo,FontAwesome5,MaterialIcons,FontAwesome,AntDesign } from '@expo/vector-icons';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="piechart" size={30} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="chart-line" size={30} color={color} />,
        }}
      />
         <BottomTab.Screen
        name="Rankings"
        component={Rankings}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" size={30} color={color} />,
        }}
      />
         <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

