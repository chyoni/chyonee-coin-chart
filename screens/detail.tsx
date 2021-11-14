import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { history, info } from '../api';
import { ChildrenInNavParamList } from '../navigators/in-nav';
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory-native';

export interface historicalTypes {
  timestamp: string;
  price: number;
  volume_24h: number;
  market_cap: number;
}

const Container = styled.View``;

const Detail: React.FC<
  NativeStackScreenProps<ChildrenInNavParamList, 'Detail'>
> = ({
  navigation,
  route: {
    params: { symbol, id },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({
      title: symbol,
    });
  }, []);
  const { isLoading: infoLoading, data: infoData } = useQuery(
    ['coinInfo', id],
    info
  );
  const { isLoading: historyLoading, data: historyData } = useQuery<
    any,
    any,
    historicalTypes[],
    string[]
  >(['coinHistory', id], history);
  const [victoryData, setVictoryData] =
    useState<{ x: number; y: number }[] | null>(null);
  useEffect(() => {
    if (historyData) {
      setVictoryData(
        historyData.map((price) => ({
          x: new Date(price.timestamp).getTime(),
          y: price.price,
        }))
      );
    }
  }, [historyData]);
  return (
    <Container>
      {victoryData ? (
        <VictoryChart height={360}>
          <VictoryLine
            animate
            interpolation={'linear'}
            data={victoryData}
            style={{ data: { stroke: '#1abc9c' } }}
          />
          <VictoryScatter
            data={victoryData}
            style={{ data: { fill: '#1abc9c' } }}
          />
        </VictoryChart>
      ) : null}
    </Container>
  );
};

export default Detail;
