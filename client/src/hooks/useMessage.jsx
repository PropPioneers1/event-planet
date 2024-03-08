import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../hooks/useAxiosSecure";

const useMessage = () => {
  const axiosSecure = useAxiosSecure();
  const { data: message = [], isPending: loading, refetch } = useQuery({
    queryKey: ["message"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/message`);
      return res.data.result;
    },
  });
  return [message, loading, refetch];
};

export default useMessage;
