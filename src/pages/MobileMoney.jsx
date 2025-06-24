import React from 'react'
import Container from '../components/Container'
import ButtonMobileMoney from '../components/ButtonMobileMoney'
import Confirmation from '../components/Confirmation'
import BottomLogos from '../components/BottomLogos'
import PayButton from '../components/PayButton'

const MobileMoney = () => {
  return (
    <Container name={'Mobile Money'}>
        <ButtonMobileMoney image={'/ecocash.svg'} name={'EcoCash'} />
        <ButtonMobileMoney image={'/one-money.svg'} name={'One Money'} />
        <ButtonMobileMoney image={'/telecash.svg'} name={'Telecash'} />
        <Confirmation />
        <BottomLogos />
        <PayButton location={'/data-collection'} name={'PAY NOW!'} />
    </Container>
  )
}

export default MobileMoney
