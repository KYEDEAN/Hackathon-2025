import { upcomingHackathons } from '../assets/assets';
import HackathonListCard from './HackathonListCard';
import { useNavigate } from 'react-router';

const UpcomingHackathon = () => {
  const navigate = useNavigate();
  return (
    <div className='p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold mb-6 text-white'>
          Upcoming Hackathons
        </h1>

        <button className='bg-pink-300 border-2 border-pink-300 p-2 text-white rounded-lg hover:bg-pink-400 transition-all text-lg font-semibold cursor-pointer' onClick={() => navigate('/upcoming-hackathons')}>
          All upcoming hackathons
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {upcomingHackathons.slice(0,4).map((hackathon) => {
          return <HackathonListCard hackathon={hackathon} key={hackathon.id} />;
        })}
      </div>
    </div>
  );
};
export default UpcomingHackathon;
