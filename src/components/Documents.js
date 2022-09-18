import React from 'react'
import Document from './Document'
import bbc from '../assets/pdf/bbc.pdf'
import gibb from '../assets/pdf/gibb.pdf'
import bwd from '../assets/pdf/bwd.pdf'
import cv from '../assets/pdf/bwd.pdf'

function Documents() {
    const documents = [
        {
            id: 1,
            title: 'Zeugnis GiBB',
            doc: gibb
        },
        {
            id: 2,
            title: 'Zeugnis bwd',
            doc: bwd
        },
        {
            id: 3,
            title: 'ÜK Zertifikate',
            doc: bbc
        },
        {
            id: 4,
            title: 'Lebenslauf',
            doc: cv
        }
    ]
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
        <h1 className='text-4xl font-bold mb-10'>Dokumente</h1>
        <div className='flex flex-wrap gap-5 justify-center align-center'>
            {documents.map(({id, title, doc}) => (
                <div key={id} className='flex flex-col gap-2 text-center'>
                    <h2 className='text-2xl'>{title}</h2>
                    <Document pdf = {doc}/>
                </div>
            ))}
            <div className='w-full bg-neutral text-normal'>Download</div>
        </div>
    </div>
  )
}

export default Documents