import Card from '../components/Card';
import { data } from '../assets/assets.js';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-gray-900 h-screen'>
      <div className='flex gap-2 container mx-auto flex-col items-center '>
        <h1 className='text-3xl text-gray-300 font-bold'>Recent Hackathons </h1>
      </div>

      <div className='flex flex-col items-center'>
        <div className='flex gap-4 container mx-auto  items-center '>
          {data.map((data, idx) => {
            return <Card key={idx} data={data} idx={idx} />;
          })}
        </div>

        <button
          className='bg-pink-500 mt-10 py-3 px-8 tex-lg text-white font-bold rounded-sm cursor-pointer'
          onClick={() => navigate('/hackathon')}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Home;
