import React from 'react';
import { ImageProps } from 'react-native';
import * as Styles from './styles';
import { useNavigation } from '@react-navigation/native';

type BackButtonProps = {
  backIcon: ImageProps;
};

const BackButton = ({ backIcon }: BackButtonProps) => {
  const { goBack } = useNavigation();
  return (
    <Styles.Button
      accessibilityRole="button"
      onPress={() => goBack()}
      hitSlop={{ left: 20, top: 100 }}>
      <Styles.Image accessibilityRole="image" source={backIcon} />
    </Styles.Button>
  );
};

export default BackButton;
