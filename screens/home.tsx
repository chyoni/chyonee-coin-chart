import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { coins, coinTypes } from '../api';
import { ChildrenInNavParamList } from '../navigators/in-nav';

const Container = styled.View`
  flex: 1;
`;
const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Coin = styled.View``;
const CoinName = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
const CoinSymbol = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Home: React.FC<NativeStackScreenProps<ChildrenInNavParamList, 'Home'>> =
  ({ navigation }) => {
    const { isLoading, data } = useQuery<coinTypes[]>('coins', coins);
    const [cleanData, setCleanData] = useState<coinTypes[]>([]);
    useEffect(() => {
      if (data) {
        setCleanData(
          data.filter(
            (coin) => coin.rank != 0 && coin.is_active && !coin.is_new
          )
        );
      }
    }, [data]);
    if (isLoading) {
      return (
        <Loader>
          <ActivityIndicator color={'black'} />
        </Loader>
      );
    } else
      return (
        <Container>
          <FlatList
            data={cleanData}
            numColumns={5}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Coin>
                <CoinName>{item.name}</CoinName>
                <CoinSymbol>{item.symbol}</CoinSymbol>
              </Coin>
            )}
          />
        </Container>
      );
  };

export default Home;
