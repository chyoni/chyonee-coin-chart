import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { ChildrenOutNavParamList } from '../navigators/out-nav';

const Container = styled.View``;
const Text = styled.Text``;

const Join: React.FC<NativeStackScreenProps<ChildrenOutNavParamList, 'Join'>> =
  ({ navigation }) => {
    const passwordInput = useRef<any>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmitEditing = () => {
      passwordInput.current.focus();
    };
    return (
      <Container>
        <TextInput
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={'email-address'}
          placeholder={'Email'}
          returnKeyType={'next'}
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={onSubmitEditing}
        />
        <TextInput
          ref={passwordInput}
          value={password}
          secureTextEntry
          placeholder={'Password'}
          returnKeyType={'done'}
          onChangeText={(text) => setPassword(text)}
        />
      </Container>
    );
  };

export default Join;
