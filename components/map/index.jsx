import React from 'react'
import { MapArea } from '../../mocks/map-area'


function index()
{
  const mapUrl = MapArea[0].url;

  return (
    <div className='w-full pr-5 h-96'>
      <iframe src={mapUrl} className='grayscale contrast-100 invert rounded-3xl w-full h-full' frameborder="0" loading='lazy'></iframe>
    </div>
  )
}

export default index