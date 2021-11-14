import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { history, info } from '../api';
import { ChildrenInNavParamList } from '../navigators/in-nav';

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
  const { isLoading: historyLoading, data: historyData } = useQuery(
    ['coinHistory', id],
    history
  );
  console.log(infoData, historyData);
  return <Container></Container>;
};

export default Detail;
