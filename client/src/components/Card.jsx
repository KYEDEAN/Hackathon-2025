import { useNavigate } from 'react-router';

const Card = ({ data, idx }) => {
  const navigate = useNavigate();
  return (
    <div className='relative flex flex-col w-80 border bg-gray-800 rounded-lg overflow-hidden shadow-md  mt-4 p-4  transition-transform transform  hover:shadow-lg m-auto  hover:-top-1'>
      <div className='absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 to-gray-800 rounded-t-lg'></div>

      <div className='pt-10 p-4 flex flex-col gap-10'>
        <h1 className='text-3xl font-bold text-white'>{data.name}</h1>
        <p className='text-white text-md mb-2'>{data.date}</p>
        <p className='text-white text-md font-light text-lg'>{data.location}</p>

        <button
          className='w-full bg-pink-400 text-white py-2 rounded-md hover:bg-pink-400 transition duration-200 cursor-pointer text-lg'
          onClick={() => navigate(`/hackathon/${idx + 1}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
