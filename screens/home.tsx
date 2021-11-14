import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { coins, coinTypes } from '../api';
import Coin from '../components/coin';
import { ChildrenInNavParamList } from '../navigators/in-nav';

const Container = styled.View`
  flex: 1;
`;
const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Seperator = styled.View`
  height: 10px;
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
            numColumns={3}
            ItemSeparatorComponent={() => <Seperator />}
            keyExtractor={(item) => item.id}
            // columWrapperStyle은 지금 3개를 하나의 열로 묶어서 렌더링 하고 있는데, 그 3개의 아이템을 하나로 묶는 View의 Style을 어떻게 줄지 설정하는
            // 옵션이다.
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item, index }) => <Coin item={item} index={index} />}
          />
        </Container>
      );
  };

export default Home;
