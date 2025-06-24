import React from 'react'
import Container from '../components/Container'
import ButtonSelection from '../components/ButtonSelection'
import BottomLogos from '../components/BottomLogos'
import PayButton from '../components/PayButton'

const PaymentMethod = () => {
  return (
    <Container name="Select a Payment Method!">
      <ButtonSelection location={'/bank-transfer'} image='/bank-transfer.svg' name='Bank Transfer' />
      <ButtonSelection location={'/cards'} image='/cards.svg' name='Cards' />
      <ButtonSelection location={'/e-wallet'} image='/e-wallet.svg' name='E-Wallet' />
      <ButtonSelection location={'/mobile-money'} image='/mobile-money.svg' name='Mobile Money' />
      <ButtonSelection location={'/gift-cards'} image='/gift-cards.svg' name='Gift Cards' />
      <BottomLogos />
      <PayButton location={'/'} name={'NEXT'} />
    </Container>
  )
}

export default PaymentMethod
