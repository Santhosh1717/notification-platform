import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import CategoryList from './components/main/CategoryList';
import EventList from './components/main/EventList';
import ChannelList from './components/main/ChannelList';
function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<CategoryList />} />
      <Route path="/category/:categoryId" element={<EventList />} />
      <Route path="/category/:categoryId/event/:eventId" element={<ChannelList />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
