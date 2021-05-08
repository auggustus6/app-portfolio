import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import * as Styles from './styles';

const IndicatorAnimated = Animated.createAnimatedComponent(Styles.Indicator);
const iconLoading = require('../../assets/images/loading_red.png');

const Loading = () => {
  const _mounted = useRef(false);

  const animatedLoading = useRef(new Animated.Value(0)).current;

  const rotate = useCallback(() => {
    Animated.timing(animatedLoading, {
      toValue: _mounted.current ? 1 : 0,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [animatedLoading]);

  useEffect(() => {
    _mounted.current = true;
    _mounted.current && rotate();

    return () => {
      _mounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_mounted.current, rotate]);

  const spin = animatedLoading.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Styles.Container>
      <Styles.LoadingText>Carregando</Styles.LoadingText>
      <IndicatorAnimated
        style={{ transform: [{ rotate: spin }] }}
        source={iconLoading}
      />
    </Styles.Container>
  );
};

export default Loading;
