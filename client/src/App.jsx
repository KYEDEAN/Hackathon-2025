import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import HackathonDetail from './pages/HackathonDetail';
import Hackathon from './pages/Hackathon';
import AllOngoingHackathon from './pages/AllOngoingHackathon';
import AllClosedHackathon from './pages/AllClosedHackathon';
import AllUpcomingHackathon from './pages/AllUpcomingHackathon';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hackathon' element={<Hackathon />} />
      <Route path='/hackathon/:id' element={<HackathonDetail />} />
      <Route path='/ongoing-hackathons' element={<AllOngoingHackathon />} />
      <Route path='/closed-hackathons' element={<AllClosedHackathon />} />
      <Route path='/upcoming-hackathons' element={<AllUpcomingHackathon />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};
export default App;
