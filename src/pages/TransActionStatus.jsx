import React from 'react'
import Container from '../components/Container'
import TextInputCCTwo from '../components/TextInputCCTwo'
import Confirmation from '../components/Confirmation'
import BottomLogos from '../components/BottomLogos'
import PayButton from '../components/PayButton'

const TransActionStatus = () => {
  return (
    <Container name={'Transaction Status'}>
        <div className=' mt-8 flex justify-center'>
            <img src="/checkbox.svg" width={'70px'} height={'auto'} alt="" />
        </div>
        <p className=' text-2xl font-medium mt-4'>Transaction Successful</p>
        <TextInputCCTwo name2={'Tracking ID'} name1={'41298905'} reverse={true} />
        <TextInputCCTwo name2={'Billing Descriptor'} name1={'Test Display'} reverse={true} />
        <Confirmation />
        <BottomLogos />
        <PayButton location={'/'} name={'PAID!'} />
    </Container>
  )
}

export default TransActionStatus
