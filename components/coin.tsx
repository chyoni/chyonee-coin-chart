import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import { Animated, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { coinTypes } from '../api';
import { ChildrenInNavParamList } from '../navigators/in-nav';

interface IProps {
  item: coinTypes;
  index: number;
  id: string;
}

const Wrapper = styled(Animated.createAnimatedComponent(View))`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
  padding: 15px 15px;
  border-radius: 8px;
`;
const CoinSymbol = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  font-weight: 600;
`;
const Icon = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const Coin: React.FC<IProps> = ({ item, index, id }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ChildrenInNavParamList>>();
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: index * 100,
    }).start();
  }, []);
  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });
  return (
    <TouchableOpacity
      style={{ flex: 0.31 }}
      onPress={() => navigation.navigate('Detail', { symbol: item.symbol, id })}
    >
      <Wrapper style={{ opacity, transform: [{ scale }] }}>
        <Icon
          source={{
            uri: `https://cryptoicon-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`,
          }}
        />
        <CoinSymbol>{item.symbol}</CoinSymbol>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default Coin;
