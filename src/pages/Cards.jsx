import React from 'react'
import Container from '../components/Container'
import TextInputCCTwo from '../components/TextInputCCTwo'
import Confirmation from '../components/Confirmation'
import BottomLogos from '../components/BottomLogos'
import PayButton from '../components/PayButton'

const Cards = () => {
  return (
    <Container name={'Cards'}>
        <TextInputCCTwo name1={'Expiry'} name2={'Card Number'} reverse={true} />
        <TextInputCCTwo name1={'CVV'} name2={'Card Holder Name'} reverse={true} />
        <Confirmation />
        <BottomLogos />
        <PayButton location={'/card-details'} name={'PAY NOW'} />
    </Container>
  )
}

export default Cards
