import { useParams } from 'react-router';

const HackathonDetail = () => {
  const { id } = useParams();
  return <div>HackathonDetail {id}</div>;
};
export default HackathonDetail;
