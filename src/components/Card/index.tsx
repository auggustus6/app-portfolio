import React from 'react';
import * as Styles from './styles';

type ImageSource = {
  uri: string;
};

export type CardProps = {
  label: string;
  imageSource: ImageSource;
  index: number;
};

const Card = ({ label, imageSource, ...props }: CardProps) => {
  return (
    <Styles.Container {...props} testID="card.container">
      <Styles.BackgroundImage
        testID="card.background"
        source={imageSource}
        resizeMode="cover">
        <Styles.Text>{label}</Styles.Text>
      </Styles.BackgroundImage>
    </Styles.Container>
  );
};

export default Card;
