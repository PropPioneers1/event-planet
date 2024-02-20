import { getRole } from '../api/user';
import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
const useRole = () => {
  const { user, loading } = useAuth();

  const { data, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getRole(user?.email),
    queryKey: ['role'],
  })

  return [data?.role, isLoading]
}

export default useRole