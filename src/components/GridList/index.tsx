/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  Animated,
  Easing,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ListRenderItem,
} from 'react-native';

import Card from '../Card';
import Heading from '../../components/Heading';
import * as Styles from './styles';
import Container from '../Container';
import { useSelector } from 'react-redux';
import { RealStateData } from 'utils/types/realState';
import { RootState } from 'store';
import Button from '../Button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { LOAD_DATA } from '../../store/real-state/action';
import { useTheme } from 'styled-components';

const IndicatorAnimated = Animated.createAnimatedComponent(Styles.Indicator);
const iconLoading = require('../../assets/images/loading_red.png');
const backgroundImage = require('../../assets/images/header.png');

type GridListProps = {
  handleScrollShared?: (value: number) => void;
};

const GridList = ({ handleScrollShared }: GridListProps) => {
  const theme = useTheme();
  const { loading, data } = useSelector((state: RootState) => state.realState);
  const { navigate } = useNavigation();
  const animatedLoading = useRef(new Animated.Value(0)).current;
  const dispatch = useAppDispatch();


  const handleNavigate = (propertyId: string) => {
    navigate('Property', {
      id: propertyId,
    });
  };

  const handleNavigateFilter = () => {
    dispatch(LOAD_DATA());
    navigate('FilterModal');
  };

  useEffect(() => {
    Animated.timing(animatedLoading, {
      toValue: loading ? 1 : 0,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const spin = animatedLoading.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    handleScrollShared && handleScrollShared(e.nativeEvent.contentOffset.y);
  };

  const renderFooter = () => {
    if (!loading) {
      return null;
    }

    return (
      <Styles.Loading>
        <Styles.LoadingText>Carregando</Styles.LoadingText>
        <IndicatorAnimated
          style={{ transform: [{ rotate: spin }] }}
          source={iconLoading}
        />
      </Styles.Loading>
    );
  };

  const renderItem: ListRenderItem<RealStateData> = ({ item, index }) => {
    return (
      <Styles.Button
        testID={`button-${index}`}
        activeOpacity={9}
        onPress={() => handleNavigate(item.id)}>
        <Card
          label={item.address.formattedAddress}
          imageSource={{ uri: item.images[0] }}
          key={item.id}
          {...item}
        />
      </Styles.Button>
    );
  };

  if (loading) {
    return (
      <Styles.LoadingWrapper>
        <Styles.Loading>
          <Styles.LoadingText>Carregando</Styles.LoadingText>
          <IndicatorAnimated
            style={{ transform: [{ rotate: spin }] }}
            source={iconLoading}
          />
        </Styles.Loading>
      </Styles.LoadingWrapper>
    );
  }

  return (
    <Styles.Container
      data={data}
      testID="list-properties"
      initialNumToRender={4}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.1}
      onScroll={handleScroll}
      keyExtractor={item => String(item.id)}
      ListFooterComponent={renderFooter}
      ListHeaderComponent={() => (
        <>
          <Styles.Header source={backgroundImage}>
            <Container>
              <Heading
                label="Encontre seu mais novo imóvel"
                testID="title-header"
                size="large"
                strong
                colorLabel={theme.colors.white} />
              <Heading
                label="O seu imóvel está cada vez mais perto. Realize seu sonho!"
                size="medium"
                colorLabel={theme.colors.white}
              />
            </Container>
          </Styles.Header>
          <Container>
            <Button
              testID="button-filter"
              label="Definir filtros"
              onPress={handleNavigateFilter}
            />
          </Container>

        </>
      )}
      renderItem={renderItem}
    />
  );
};

export default GridList;
