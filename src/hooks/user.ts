import { useNavigate } from "react-router-dom";

import { login, logout } from "@apis";
import { useUserStore } from "@stores/user";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const setUser = useUserStore((state) => state.set);
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const user = await login(data);

      setUser((state) => {
        state.user = user;
      });
    },
  });
}

export function useLogout() {
  const setUser = useUserStore((state) => state.set);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async () => {
      await logout();
      setUser((state) => {
        state.user = undefined;
      });
      navigate("/login");
    },
  });
}
