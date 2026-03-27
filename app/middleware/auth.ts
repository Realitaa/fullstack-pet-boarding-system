export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession();

  if (!loggedIn.value) {
    return navigateTo({
      path: "/",
      query: {
        message: "session_expired",
      },
    });
  }
});
