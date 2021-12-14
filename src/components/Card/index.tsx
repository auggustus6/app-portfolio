import React from 'react';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { formatNumber } from '../../utils/formatedCurrency';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import * as Styles from './styles';

type ImageSource = {
  uri: string;
};

export type CardProps = {
  label: string;
  imageSource: ImageSource;
  price: number;
  bathrooms: number;
  bedrooms: number;
  parkingSpaces: number;
};

type CardOptions = {
  label: string;
  iconName: string;
};

const Card = ({
  label,
  imageSource,
  price,
  bathrooms,
  bedrooms,
  parkingSpaces,
}: CardProps) => {
  const theme = useTheme();

  const CardOptions = ({ label, iconName }: CardOptions) => {
    return (
      <Styles.ContainerOptions>
        <Icon name={iconName} size={22} color={theme?.colors.lightGray} />
        <Styles.Label>{label}</Styles.Label>
      </Styles.ContainerOptions>
    );
  };

  return (
    <Styles.Container testID="card.container">
      <Styles.BackgroundImage
        testID="card.background"
        source={imageSource}
        resizeMode="cover">
        <IconEvil name="heart" size={RFValue(42)} color={theme?.colors.white} />
      </Styles.BackgroundImage>
      <Styles.ContainerInfos>
        <Styles.Price>R$ {formatNumber(price)}</Styles.Price>
        <Styles.Text>{label}</Styles.Text>

        <Styles.Separator />

        <Styles.GridOptions>
          <CardOptions label={`${bedrooms} Quarto(s)`} iconName="king-bed" />
          <CardOptions label={`${bathrooms} Banheiro(s)`} iconName="bathtub" />
          <CardOptions
            label={`${parkingSpaces} Vaga(s)`}
            iconName="directions-car"
          />
        </Styles.GridOptions>
      </Styles.ContainerInfos>
    </Styles.Container>
  );
};

export default Card;
