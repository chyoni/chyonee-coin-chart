import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import Join from '../screens/join';

export type ChildrenOutNavParamList = {
  Login: undefined;
  Join: undefined;
};

const Nav = createNativeStackNavigator<ChildrenOutNavParamList>();

const OutNav = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name={'Login'} component={Login} />
      <Nav.Screen name={'Join'} component={Join} />
    </Nav.Navigator>
  );
};

export default OutNav;
