import React from 'react'
import { HeadTitle, MapArea, Form } from '../index.js';

function index()
{
    return (
        <div className='mt-6 ml-6'>
            <HeadTitle children='Contact' />
            <MapArea />
            <div className='mt-10 mb-10'>
                <h3 className='text-2xl font-links-1 text-white-1 ml-3 font-semibold mb-3'>Contact Form</h3>
                <div className='flex flex-col pr-5'>
                    <Form />
                </div>
            </div>
        </div >

    )
}

export default index