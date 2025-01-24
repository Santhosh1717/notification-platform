import logo from './logo.svg';
import './App.css';
import Notificaton from './components/Notification'
import NotificationComponent from './components/NotificationComponent';
import NotificationList from './components/NotificationList';
import Subscription from './components/categories/Subscription';
import Appointment from './components/categories/Appointment';
import Payment from './components/categories/Payment';
import Offers from './components/categories/Offers';
import Feedback from './components/categories/Feedback';
// import NotificationGroups from './components/NotificationGroups';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import TenantPreference from './components/TenantPreference';
function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
      
      <Route path='/' element = {<NotificationList />} />
      <Route path='/channel' element = {<Notificaton />} />
      <Route path='/subscription' element = {<Subscription />} />
      <Route path='/appointment' element = {<Appointment />} />
      <Route path='/payment' element = {<Payment />} />
      <Route path='/offers' element = {<Offers />} />
      <Route path='/feedback' element = {<Feedback />} />
      {/* <Route path='/' element = {<NotificationGroups />} /> */}
      </Routes>
      </BrowserRouter>
      {/* <TenantPreference /> */}
    </>
  );
}

export default App;
