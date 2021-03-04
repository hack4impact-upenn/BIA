import { useQuery } from 'react-query';
import api from '../api';

function IndexPage() {
  // Example API request with caching, fetch list of users.
  // See https://react-query.tanstack.com/ for documentation on react-query.
  const { isLoading, error, data } = useQuery('users', () =>
    api.get('/api/users').then((res) => {
      console.log(res);
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
