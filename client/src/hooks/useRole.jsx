import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: role, isPending: isRolePending } = useQuery({
    queryKey: [user?.email, "role"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const result = await axiosSecure.get(`/users/role/${user?.email}`);
      return result?.data?.role;
    },
  });
  return { role, isRolePending };
};

export default useRole;
