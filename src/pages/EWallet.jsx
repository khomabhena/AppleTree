import React from 'react'
import Container from '../components/Container'
import ButtonMobileMoney from '../components/ButtonMobileMoney'
import Confirmation from '../components/Confirmation'
import BottomLogos from '../components/BottomLogos'
import PayButton from '../components/PayButton'
import Spacer from '../components/Spacer'

const EWallet = () => {
  return (
    <Container name={'E-Wallet'}>
        <ButtonMobileMoney location={'/'} image={'/innbucks.svg'} name={'InnBucks'} />
        <ButtonMobileMoney location={'/'} image={'/paydunya.svg'} name={'PayDunya'} />
        <Spacer />
        <Confirmation />
        <BottomLogos />
        <PayButton location={'/data-collection'} name={'PAY NOW!'} />
    </Container>
  )
}

export default EWallet
