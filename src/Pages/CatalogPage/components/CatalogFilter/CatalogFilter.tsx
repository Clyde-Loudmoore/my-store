import { FC } from 'react';
import { Accordion } from 'react-bootstrap';

import type { TBrand } from '../../../../types/brandType';

type TProps = {
  brandsData: TBrand[];
  onFilterBrands: (id: number) => void;
}

const CatalogFilter: FC<TProps> = ({ brandsData, onFilterBrands }) => {
  return (
    <Accordion className='catalog-page__filter' defaultActiveKey='1'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Brand</Accordion.Header>
        {
          brandsData.map((productBrand) => {
            return (
              <Accordion.Body
                key={productBrand.id}
                className='catalog-page__filter-body'
                onClick={() => onFilterBrands(productBrand.id)}
              >
                {productBrand.title}
              </Accordion.Body>
            )
          })
        }
      </Accordion.Item>
    </Accordion>
  );
}

export default CatalogFilter