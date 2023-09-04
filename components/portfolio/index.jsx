import React from 'react';
import { HeadTitle, Works } from '../index.js';
import { Work } from '../../mocks/work-data';


function Portfolio()
{


  return (
    <div className='mt-6 ml-6'>
      <HeadTitle children='Portfolio' />
      <div className='flex flex-wrap gap-5 mr-5'>
        {Work.map((Work) => (
          <Works key={Work.id} title={Work.title} subtitle={Work.subtitle} image={Work.image} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
