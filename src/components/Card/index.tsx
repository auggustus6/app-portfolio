import React from 'react';
import * as Styles from './styles';

type CardProps = {
  label: string;
};

const Card = ({label, ...props}: CardProps) => {
  return (
    <Styles.Container {...props}>
      <Styles.Body>
        <Styles.Text>{label}</Styles.Text>
      </Styles.Body>
    </Styles.Container>
  );
};

export default Card;
