/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import GridList from '../../components/GridList';
import * as Styles from './styles';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { LOAD_DATA } from '../../store/real-state/action';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(LOAD_DATA());
  }, []);

  return (
    <Styles.Container testID="home-screen">
      <GridList />
    </Styles.Container>
  );
};

export default Home;
