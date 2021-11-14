import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { ChildrenOutNavParamList } from '../navigators/out-nav';

const Container = styled.View``;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;

const Login: React.FC<
  NativeStackScreenProps<ChildrenOutNavParamList, 'Login'>
> = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <Text>
        Don't have an account?{' '}
        <Btn onPress={() => navigate('Join')}>
          <BtnText>Join</BtnText>
        </Btn>
      </Text>
    </Container>
  );
};

export default Login;
