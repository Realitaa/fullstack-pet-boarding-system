export const useAuth = () => {
  const loading = useState<boolean>("auth:loading", () => false);

  const login = async (payload: { email: string; password: string }) => {
    loading.value = true;

    try {
      const res = await $fetch("/api/auth/login", {
        method: "POST",
        body: payload,
      });

      return res;
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    await $fetch("/api/auth/logout", {
      method: "POST",
    });
    const { clear } = useUserSession();
    await clear();
  };

  return {
    loading,
    login,
    logout,
  };
};
