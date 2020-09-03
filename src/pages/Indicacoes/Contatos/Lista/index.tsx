import React from 'react';

import { Container } from './styles';
import Card from "../../../../components/cards/Contato";

import { lista, ILista as ListData } from '../../../../entities/Contato'

const Lista: React.FC = () => {

  const compareTo = (a: ListData, b: ListData) => {
    if (a.categoria > b.categoria) {
      return 1;
    }
    if (a.categoria < b.categoria) {
      return -1;
    }
    return 0;
  }


  return (
    <Container>
      {
        lista.sort(compareTo).map((item, key) => (
          <Card
            item={item}
            key={key}
            borders={key === 0 ? 'top' : key === lista.length - 1 ? 'bottom' : undefined}
          />
        ))
      }
    </Container>
  )
}

export default Lista;