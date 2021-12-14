/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Wrapper from '../../components/Wrapper';
import BackButton from '../../components/BackButton';
import Loading from '../../components/Loading';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Styles from './styles';

import {
  clearProperty,
  loadPropertyById,
} from '../../store/real-state/reducer';
import { useTheme } from 'styled-components';
import { FlatList, StyleSheet } from 'react-native';
import { formatNumber } from '../../utils/formatedCurrency';

const backIcon = require('../../assets/images/chevron_left_white.png');

type RouteParams = {
  Property: {
    id: string;
  };
};

type CardOptions = {
  label: string;
  iconName: string;
};

const Property = () => {
  const { navigate } = useNavigation();
  const route = useRoute<RouteProp<RouteParams, 'Property'>>();
  const { property } = useSelector((state: RootState) => state.realState);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const CardOptions = ({ label, iconName }: CardOptions) => (
    <Styles.ContainerOptions>
      <Icon name={iconName} size={22} color={theme.colors.lightGray} />
      <Styles.Label>{label}</Styles.Label>
    </Styles.ContainerOptions>
  );

  const memoId = useMemo(() => {
    return route.params ? route.params.id : '';
  }, [route.params]);

  useEffect(() => {
    if (!memoId) {
      navigate('Home');
      return;
    }
    dispatch(loadPropertyById(memoId));

    return () => {
      dispatch(clearProperty());
    };
  }, [memoId]);

  if (!property.id) {
    return <Loading />;
  }

  return (
    <Styles.Container pagingEnabled showsVerticalScrollIndicator={false}>
      <BackButton backIcon={backIcon} testID="button-back" />
      <FlatList
        data={property.images}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <Styles.Image source={{ uri: item }} resizeMethod="resize" />
        )}
        horizontal
        pagingEnabled
      />

      <Wrapper>
        <Styles.Logo
          source={{
            uri: property.images[0],
          }}
        />
        <Container>
          <Styles.Article>
            <Heading label="Endereço" size="small" strong align="center" />
            <Styles.Paragraph>
              {property?.address.formattedAddress}
            </Styles.Paragraph>

            <Heading
              label="Faixa de preço"
              size="small"
              strong
              align="center"
            />
            <Styles.Paragraph price>
              R$ {formatNumber(property.price)}
            </Styles.Paragraph>

            <Styles.GridOptions>
              <CardOptions
                label={`${property.bedrooms} Quarto(s)`}
                iconName="king-bed"
              />
              <CardOptions
                label={`${property.bathrooms} Banheiro(s)`}
                iconName="bathtub"
              />
              <CardOptions
                label={`${property.parkingSpaces} Vaga(s)`}
                iconName="directions-car"
              />

              <CardOptions
                label={`${property.usableArea} Mts`}
                iconName="crop-free"
              />
            </Styles.GridOptions>

            <Styles.Separator />

            <Styles.ContainerMap>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={{ ...StyleSheet.absoluteFillObject }}
                region={{
                  latitude: property.address.geolocation.lat,
                  longitude: property.address.geolocation.lng,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  coordinate={{
                    latitude: property.address.geolocation.lat,
                    longitude: property.address.geolocation.lng,
                  }}
                  title={property.address.formattedAddress}
                  description={`R$ ${formatNumber(property.price)}`}
                />
              </MapView>
            </Styles.ContainerMap>
          </Styles.Article>
        </Container>
      </Wrapper>
    </Styles.Container>
  );
};

export default Property;
