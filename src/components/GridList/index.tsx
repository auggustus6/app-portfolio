import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  Alert,
} from 'react-native';
import { useRestaurant } from '../../hooks/useRestaurant';

import Card from '../Card';
import InputSearch from '../../components/InputSearch';
import Heading from '../../components/Heading';
import * as Styles from './styles';

const IndicatorAnimated = Animated.createAnimatedComponent(Styles.Indicator);
const iconLoading = require('../../assets/images/loading_red.png');

type GridListProps = {
  handleScrollShared?: (value: number) => void;
};

const GridList = ({ handleScrollShared }: GridListProps) => {
  const { restaurants, loadRestaurants, loading } = useRestaurant();
  const { navigate } = useNavigation();
  const animatedLoading = useRef(new Animated.Value(0)).current;

  const handleNavigate = (restaurantId: string) => {
    navigate('Restaurant', {
      id: restaurantId,
    });
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

  const handleSubmit = async (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    if (!event.nativeEvent.text) {
      Alert.alert(
        'Ops, verifique os campos!',
        'Você esqueceu de preencher o input!',
      );
      return;
    }
    navigate('Search', {
      search: event.nativeEvent.text,
    });
  };

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

  const renderItem = useCallback(({ item, index }) => {
    return (
      <Styles.Button activeOpacity={9} onPress={() => handleNavigate(item.id)}>
        <Card
          label={item.name}
          index={index}
          imageSource={{ uri: item.image }}
          key={index}
        />
      </Styles.Button>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styles.Container
      data={restaurants}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.1}
      onScroll={handleScroll}
      onEndReached={() => loadRestaurants()}
      keyExtractor={(item: any) => String(item.id)}
      ListFooterComponent={renderFooter}
      ListHeaderComponent={() => (
        <>
          <InputSearch onSubmitEditing={handleSubmit} />
          <Heading label="Restaurantes" size="small" strong />
        </>
      )}
      renderItem={renderItem}
    />
  );
};

export default GridList;
