import React from 'react'
import Container from '../components/Container'
import TextInput from '../components/TextInput'
import Confirmation from '../components/Confirmation'
import BottomLogos from '../components/BottomLogos'
import PayButton from '../components/PayButton'

const GiftCard = () => {
  return (
    <Container name={'Redboxx Gift Card Code'}>
        <p className=' mt-8 text-gray-600 text-start'>Enter your gift card QR code here to pay</p>
        <TextInput name={'Redboxx Gift Card Code'} />
        <Confirmation />
        <BottomLogos />
        <PayButton location={'/data-collection'} name={'PAY NOW!'}/>
    </Container>
  )
}

export default GiftCard
