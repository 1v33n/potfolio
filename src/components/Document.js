import React from 'react'


const Document = (props) => {

  return (
        <iframe src={`${props.pdf}#view=fitH`} title="samplePDF" height="400" width="100%" />  
    )      
}

export default Document