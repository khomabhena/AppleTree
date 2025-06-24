import React from 'react'
import Container from '../components/Container'
import TextInput from '../components/TextInput'
import TextInputCCTwo from '../components/TextInputCCTwo'
import Confirmation from '../components/Confirmation'
import BottomLogos from '../components/BottomLogos'
import PayButton from '../components/PayButton'
import Spacer from '../components/Spacer'

const CardsDetails = () => {
  return (
    <Container name={'Cards'}>
        <TextInput name={'Address'} />
        <TextInputCCTwo name2={'City'} name1={'Zip'} reverse={true} />
        <TextInputCCTwo name2={'Country'} name1={'Province'} reverse={true} />
        <Spacer />
        <Confirmation />
        <BottomLogos />
        <PayButton location={'/data-collection'} name={'PAY NOW'} />
    </Container>
  )
}

export default CardsDetails
