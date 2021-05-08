import React from 'react';
import Container from '../../components/Container';
import GridList from '../../components/GridList';
import * as Styles from './styles';
import BackButton from '../../components/BackButton';
import { RouteProp, useRoute } from '@react-navigation/native';

const backIcon = require('../../assets/images/chevron_left_black.png');

type RouteParams = {
  Search: {
    search: string;
  };
};

const Search = () => {
  const route = useRoute<RouteProp<RouteParams, 'Search'>>();
  return (
    <Styles.Container>
      <BackButton backIcon={backIcon} />
      <Container>
        <Styles.CustomHeading
          label="Resultado para"
          size="small"
          colorLabel="lightGray"
          align="center"
        />
        <Styles.CustomHeading
          label={route.params.search ?? 'Termo pesquisado'}
          strong
          size="large"
          align="center"
        />
      </Container>
      <GridList />
    </Styles.Container>
  );
};

export default Search;
