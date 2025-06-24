import React from 'react'
import Container from '../components/Container'
import TextInput from '../components/TextInput'
import Confirmation from '../components/Confirmation'
import BottomLogos from '../components/BottomLogos'
import PayButton from '../components/PayButton'

const BankAccount = () => {
  return (
    <Container name='Bank Transfer'>
        <p className=' text-start mt-4 mb-8'>Provide your bank account number and follow fund transfer instructions that will be shown to you to complete payment</p>
        <TextInput name={'Account Number'} />
        <Confirmation />
        <BottomLogos />
        <PayButton location={'/data-collection'} name={'PAY NOW'} />
    </Container>
  )
}

export default BankAccount
