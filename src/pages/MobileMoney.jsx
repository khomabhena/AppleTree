import React from 'react'
import Container from '../components/Container'
import ButtonMobileMoney from '../components/ButtonMobileMoney'
import Confirmation from '../components/Confirmation'
import BottomLogos from '../components/BottomLogos'
import PayButton from '../components/PayButton'
import Spacer from '../components/Spacer'

const MobileMoney = () => {
  return (
    <Container name={'Mobile Money'}>
        <ButtonMobileMoney location={'/data-collection'} image={'/ecocash.svg'} name={'EcoCash'} />
        <ButtonMobileMoney location={'/data-collection'} image={'/one-money.svg'} name={'One Money'} />
        <ButtonMobileMoney location={'/data-collection'} image={'/telecash.svg'} name={'Telecash'} />
        <div className=' h-8'></div>
        <Confirmation />
        <BottomLogos />
        <PayButton location={'/data-collection'} name={'PAY NOW!'} />
    </Container>
  )
}

export default MobileMoney
