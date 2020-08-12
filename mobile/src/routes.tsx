import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Initial from './pages/Initial';

import Login from './pages/Login';
import Register from './pages/Register';
import RegisterContinue from './pages/RegisterContinue';

import Home from './pages/Home';
import Detail from './pages/Detail';

import MyCars from './pages/MyCars';
import Options from './pages/Options';
import CreateCar from './pages/CreateCar';
import CreateCarContinue from './pages/CreateCarContinue';

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="MyCars">
      <Tab.Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarLabel: 'Meus Carros',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="car" color="#042f59" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Options"
        component={Options}
        options={{
          tabBarLabel: 'Opções',
          tabBarIcon: () => (
            <FontAwesome name="cog" color="#042f59" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen component={Initial} name="Initial" />
        <AppStack.Screen component={Login} name="Login" />
        <AppStack.Screen component={Register} name="Register" />
        <AppStack.Screen component={RegisterContinue} name="RegisterContinue" />
        <AppStack.Screen component={Home} name="Home" />
        <AppStack.Screen component={Detail} name="Detail" />
        <AppStack.Screen component={MyTabs} name="MyTabs" />
        <AppStack.Screen component={CreateCar} name="CreateCar" />
        <AppStack.Screen
          component={CreateCarContinue}
          name="CreateCarContinue"
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
