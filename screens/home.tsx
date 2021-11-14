import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { ChildrenInNavParamList } from '../navigators/in-nav';

const Container = styled.View``;
const Text = styled.Text``;

const Home: React.FC<NativeStackScreenProps<ChildrenInNavParamList, 'Home'>> =
  ({ navigation }) => {
    return (
      <Container>
        <Text>Home</Text>
      </Container>
    );
  };

export default Home;
