import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';

export type ChildrenInNavParamList = {
  Home: undefined;
};

const Nav = createNativeStackNavigator<ChildrenInNavParamList>();

const InNav = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name={'Home'} component={Home} />
    </Nav.Navigator>
  );
};

export default InNav;
