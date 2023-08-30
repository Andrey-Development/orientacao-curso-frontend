//ROUTES/index.js

import { AntDesign } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from './stackRoutes';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Tab = createBottomTabNavigator();

export default function Routes() {
  
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          //tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#FFF',
          tabBarStyle: {
            backgroundColor: '#000',
            paddingBottom: 4,
            paddingTop: 4,
            height: '7%',
            borderTopWidth: 2
          }
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={StackRoutes}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => { 
              return <AntDesign name="home" size={size} color={color} />
              }
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => { 
              return <AntDesign name="infocirlceo" size={size} color={color} />
              }
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarLabel: 'Inicio',
            //headerShown: false,
            tabBarIcon: ({ color, size }) => { 
              return <AntDesign name="contacts" size={size} color={color} />
              }
          }}
        />
      </Tab.Navigator>

  );
}