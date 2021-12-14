/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import Heading from '../../components/Heading';
import InputSearch from '../../components/InputSearch';
import Container from '../../components/Container';
import * as Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { LOAD_DATA_BY_FILTER } from '../../store/real-state/action';
import Button from '../../components/Button';
import { formatNumber } from '../../utils/formatedCurrency';

const FilterModal = () => {
  const { navigate } = useNavigation();
  const [quantity] = useState([1, 2, 3, 4, 5]);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [parkingSpaces, setParkingSpaces] = useState(1);
  const [price, setPrice] = useState(1000);
  const [address, setAddress] = useState('');
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    dispatch(LOAD_DATA_BY_FILTER({
      bedrooms,
      bathrooms,
      parkingSpaces,
      address,
      price,
    }));
    navigate('Home');
  };

  const formatedValue = (value: number) => {
    const valuePrice = value.toString();
    setPrice(parseInt(valuePrice));
  };

  const renderThumbComponent = useCallback(() => {
    return (
      <Styles.ThumbText>
          {`R$ ${formatNumber(price)}`}
      </Styles.ThumbText>
    );
  }, [price]);

  return (
    <Styles.Container>
      <Container>
        <Heading
          size="medium"
          label="Localização do imóvel" />

        <InputSearch
          onChangeText={setAddress}
          placeholder="Digite uma rua, bairro ou cidade" />

        <Heading
          size="medium"
          label="Preços min/max" />

        <Slider
          value={price}
          minimumValue={1000}
          maximumValue={1000000}
          renderThumbComponent={renderThumbComponent}
          onSlidingComplete={value => formatedValue(value as number)}
        />
        <Heading
          size="medium"
          label="Número de quartos" />


        <Styles.GridContainer>
          {quantity.map(item => (
            <Styles.CardNumber
              actived={item === bedrooms}
              onPress={() => setBedrooms(item)}
              key={item}>
              <Styles.Number>{item} +</Styles.Number>
            </Styles.CardNumber>
          ))}
        </Styles.GridContainer>


        <Heading
          size="medium"
          label="Número de banheiros" />

        <Styles.GridContainer>
          {quantity.map(item => (
            <Styles.CardNumber
              actived={item === bathrooms}
              onPress={() => setBathrooms(item)}
              key={item}>
              <Styles.Number>{item} +</Styles.Number>
            </Styles.CardNumber>
          ))}
        </Styles.GridContainer>

        <Heading
          size="medium"
          label="Número de Vagas" />

        <Styles.GridContainer>
          {quantity.map(item => (
            <Styles.CardNumber
              actived={item === parkingSpaces}
              onPress={() => setParkingSpaces(item)}
              key={item}>
              <Styles.Number>{item} +</Styles.Number>
            </Styles.CardNumber>
          ))}
        </Styles.GridContainer>
        <Button
          label="Filtrar Imóveis"
          onPress={handleNavigate}
        />
      </Container>
    </Styles.Container>
  );
};

export default FilterModal;
