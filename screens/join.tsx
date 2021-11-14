import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import styled from 'styled-components/native';
import { ChildrenOutNavParamList } from '../navigators/out-nav';
import { ActivityIndicator, Alert } from 'react-native';

const Container = styled.View``;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;

const Join: React.FC<NativeStackScreenProps<ChildrenOutNavParamList, 'Join'>> =
  ({ navigation }) => {
    const passwordInput = useRef<any>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    // 이건 이메일 입력 후 엔터버튼을 누르면 포커스가 바로 패스워드 입력하는 필드에 찍히게끔 하는 코드
    const onSubmitEmailEditing = () => {
      passwordInput.current.focus();
    };
    const onSubmitPasswordEditing = async () => {
      if (email === '' || password === '') {
        return Alert.alert('Fill in the form.');
      }
      if (loading) {
        return;
      }
      try {
        setLoading(true);
        await auth().createUserWithEmailAndPassword(email, password);
      } catch (e) {
        setLoading(false);
        switch (e.code) {
          case 'auth/invalid-email':
            Alert.alert('Type a valid email address');
          case 'auth/weak-password':
            Alert.alert('Type a stronger password');
        }
      }
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
          onSubmitEditing={onSubmitEmailEditing}
        />
        <TextInput
          ref={passwordInput}
          value={password}
          secureTextEntry
          placeholder={'Password'}
          returnKeyType={'done'}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={onSubmitPasswordEditing}
        />
        <Btn onPress={onSubmitPasswordEditing}>
          {loading ? (
            <ActivityIndicator color={'black'} />
          ) : (
            <BtnText>Create Account</BtnText>
          )}
        </Btn>
      </Container>
    );
  };

export default Join;
