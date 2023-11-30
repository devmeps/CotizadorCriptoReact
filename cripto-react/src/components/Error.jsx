import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: red;
    font-family: 'Lato', sans-serif;
    color : #FFF;
    padding : 15px;
    text-transform: uppercase;
    font-weight: 700;
    font-weight: 700;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
`
const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error