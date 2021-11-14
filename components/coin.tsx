import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components/native';
import { coinTypes } from '../api';

interface IProps {
  item: coinTypes;
  index: number;
}

const Wrapper = styled(Animated.createAnimatedComponent(View))`
  flex: 0.31;
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

const Coin: React.FC<IProps> = ({ item, index }) => {
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
    <Wrapper style={{ opacity, transform: [{ scale }] }}>
      <Icon
        source={{
          uri: `https://cryptoicon-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`,
        }}
      />
      <CoinSymbol>{item.symbol}</CoinSymbol>
    </Wrapper>
  );
};

export default Coin;
