import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io5';
import { useNavigate } from 'react-router';

const HackathonListCard = ({ hackathon }) => {
  const navigate = useNavigate();
  return (
    <div
      key={hackathon.id}
      className='border border-gray-700 bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:shadow-xl '
    >
      <div className='flex justify-between mb-4'>
        <div>
          <h2 className='text-2xl font-semibold text-white'>
            {hackathon.title}
          </h2>
          <p className='text-gray-400 text-sm'>Hackathon</p>
        </div>

        <div className='flex gap-4'>
          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-gray-600 hover:bg-pink-100 cursor-pointer'>
            <FaXTwitter className='text-pink-500 text-xl' />
          </div>

          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-gray-600 hover:bg-pink-100 cursor-pointer'>
            <IoLogoGithub className='text-pink-500 text-xl' />
          </div>
        </div>
      </div>

      <div className='flex justify-between mb-4 mt-4'>
        <div>
          <h3 className='text-lg font-medium text-pink-500'>THEME</h3>
          <p className='text-white bg-gray-900 border-2 border-pink-500 py-2 px-3 rounded-lg'>
            {hackathon.theme}
          </p>
        </div>

        <div className='mb-4 flex justify-between'>
          <div>
            <p className='mt-2 text-white text-lg'>+250 participants</p>
          </div>
        </div>
      </div>

      <div className='space-y-2 text-sm text-gray-400 flex gap-4 items-center justify-between  mt-10'>
        <div className='flex gap-2'>
          <div className='bg-gray-700 text-white px-3 py-2 rounded-full flex items-center'>
            {hackathon.location}
          </div>
          <div className='bg-gray-700 text-white px-3 py-2 rounded-full flex items-center'>
            {hackathon.status}
          </div>
          <div className='bg-gray-700 text-white p-3 rounded-full text-center'>
            STARTS {hackathon.date}
          </div>
        </div>

        <div onClick={() => navigate(`/hackathon/${hackathon.id}`)}>
          <button className='w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-2 rounded-lg text-lg font-semibold hover:scale-105 transition-all cursor-pointer px-3'>
            {hackathon.status === 'open'
              ? 'Join Hackathon'
              : hackathon.status === 'upcoming'
              ? 'Register'
              : 'See Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackathonListCard;
