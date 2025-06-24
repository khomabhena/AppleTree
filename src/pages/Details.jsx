import React from 'react'
import Container from '../components/Container'
import TextInput from '../components/TextInput'
import TextInputCC from '../components/TextInputCC'
import ButtonSelection from '../components/ButtonSelection'
import ButtonMobileMoney from '../components/ButtonMobileMoney'
import BottomLogos from '../components/BottomLogos'
import Confirmation from '../components/Confirmation'
import PayButton from '../components/PayButton'
import TextInputCCTwo from '../components/TextInputCCTwo'

const Details = () => {


  return (
      <Container name={'Your Details'}>
        <TextInput name="Name" />
        <TextInput name="Last Name" />
        <TextInput name="Country" />
        <TextInputCC name1="CC" name2="Phone" reverse={false} />
        <TextInput name="Email" />
        
        <BottomLogos />
        <PayButton name={'NEXT'} location='/payment-method' />
      </Container>
  )
}

export default Details
