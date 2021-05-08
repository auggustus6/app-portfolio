/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';
import { useRestaurant } from '../../hooks/useRestaurant';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Wrapper from '../../components/Wrapper';
import GridList from '../../components/GridList';
import * as Styles from './styles';

const backgroundImage = require('../../assets/images/header.png');

const Home = () => {
  const { loadRestaurants } = useRestaurant();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    loadRestaurants();
  }, []);

  const memoFullWrapper = useMemo(() => {
    if (scrollY > 0) {
      return true;
    }
    return false;
  }, [scrollY]);

  return (
    <Styles.Container>
      <Styles.Header source={backgroundImage}>
        <Container>
          <Heading label="Descubra novos" size="large" strong />
          <Styles.CustomHeading label="sabores" size="large" strong />
          <Heading
            label="Aqui eu converso com você sobre nossa proposta"
            size="medium"
          />
        </Container>
      </Styles.Header>
      <Wrapper fullHeight={memoFullWrapper}>
        <GridList handleScrollShared={setScrollY} />
      </Wrapper>
    </Styles.Container>
  );
};

export default Home;
