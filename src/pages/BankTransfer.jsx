import React from 'react'
import Container from '../components/Container'
import ButtonMobileMoney from '../components/ButtonMobileMoney'
import BottomLogos from '../components/BottomLogos'
import PayButton from '../components/PayButton'
import Spacer from '../components/Spacer'

const BankTransfer = () => {
  return (
    <Container name={'Bank Transfer'}>
        <ButtonMobileMoney location={'/bank-account'} image={'/getbucks.svg'} name={'GetBucks Microfinance Bank'} />
        
        <Spacer />
        <Spacer />
        <BottomLogos />
        <PayButton location={'/bank-account'} name={'PAY NOW'} />
    </Container>
  )
}

export default BankTransfer
