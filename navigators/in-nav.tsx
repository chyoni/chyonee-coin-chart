import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Detail from '../screens/detail';

export type ChildrenInNavParamList = {
  Home: undefined;
  Detail: { symbol: string; id: string };
};

const Nav = createNativeStackNavigator<ChildrenInNavParamList>();

const InNav = () => {
  return (
    <Nav.Navigator screenOptions={{ presentation: 'modal' }}>
      <Nav.Screen name={'Home'} component={Home} />
      <Nav.Screen name={'Detail'} component={Detail} />
    </Nav.Navigator>
  );
};

export default InNav;
