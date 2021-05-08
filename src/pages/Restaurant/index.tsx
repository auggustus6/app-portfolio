/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react';
import { useRestaurant } from '../../hooks/useRestaurant';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Wrapper from '../../components/Wrapper';
import * as Styles from './styles';
import BackButton from '../../components/BackButton';
import Loading from '../../components/Loading';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';

const backIcon = require('../../assets/images/chevron_left_white.png');

type RouteParams = {
  Restaurant: {
    id: string;
  };
};

const Restaurant = () => {
  const { navigate } = useNavigation();
  const route = useRoute<RouteProp<RouteParams, 'Restaurant'>>();
  const { loadRestaurant, loading, restaurant } = useRestaurant();

  const memoId = useMemo(() => {
    return route.params ? route.params.id : '';
  }, [route.params]);

  useEffect(() => {
    if (!memoId) {
      navigate('Home');
      return;
    }
    loadRestaurant(memoId);
  }, [memoId]);

  if (loading || restaurant?.id !== memoId) {
    return <Loading />;
  }

  return (
    <Styles.Container>
      <BackButton backIcon={backIcon} />
      <Styles.Header source={{ uri: restaurant?.image }} />

      <Wrapper increaseSize>
        <Styles.Logo
          source={{
            uri: restaurant?.logo,
          }}
        />
        <Container>
          <Heading
            label={restaurant?.name}
            size="large"
            strong
            align="center"
          />

          <Styles.Article>
            <Heading label="Descrição" size="small" strong align="center" />
            <Styles.Paragraph>{restaurant?.description}</Styles.Paragraph>
            <Heading label="Contato" size="small" strong align="center" />
            <Styles.Paragraph>{restaurant?.telephone}</Styles.Paragraph>
            <Styles.Paragraph>{restaurant?.website}</Styles.Paragraph>
            <Heading
              label="Faixa de preço"
              size="small"
              strong
              align="center"
            />
            <Styles.Paragraph>{restaurant?.price_range}</Styles.Paragraph>

            <Styles.Divider />
            <Heading
              label="Horários de funcionamento"
              size="small"
              strong
              align="center"
            />
            <Styles.Paragraph>{restaurant?.opening_hours}</Styles.Paragraph>

            <Heading
              label="Formas de Pagamento"
              size="small"
              strong
              align="center"
            />
            <Styles.Paragraph>{restaurant?.payment_methods}</Styles.Paragraph>
          </Styles.Article>
        </Container>
      </Wrapper>
    </Styles.Container>
  );
};

export default Restaurant;
