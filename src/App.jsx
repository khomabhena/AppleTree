
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Details from './pages/Details'
import PaymentMethod from './pages/PaymentMethod'
import BankTransfer from './pages/BankTransfer'
import BankAccount from './pages/BankAccount'
import Cards from './pages/Cards'
import CardsDetails from './pages/CardsDetails'
import EWallet from './pages/EWallet'
import MobileMoney from './pages/MobileMoney'
import GiftCard from './pages/GiftCard'
import DataCollection from './pages/DataCollection'
import TransActionStatus from './pages/TransActionStatus'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Details />} />
        <Route path='/payment-method' element={<PaymentMethod />} />
        <Route path='/bank-transfer' element={<BankTransfer />} />
        <Route path='/bank-account' element={<BankAccount />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/card-details' element={<CardsDetails />} />
        <Route path='/e-wallet' element={<EWallet />} />
        <Route path='/mobile-money' element={<MobileMoney />} />
        <Route path='/gift-cards' element={<GiftCard />} />
        <Route path='/data-collection' element={<DataCollection />} />
        <Route path='/transaction-status' element={<TransActionStatus />} />
      </Routes>
    </>
  )
}

export default App
