import { useQuery } from 'react-query';
import api from '../api';

function IndexPage() {
  const { isLoading, error, data } = useQuery('users', () =>
    api.get('/api/users').then((res) => {
      return res.data;
    })
  );

  return (
    <div className="container center">
      <h1>This is home page</h1>
    </div>
  );
}

export default IndexPage;
