export default defineNuxtRouteMiddleware(() => {
  const { user } = useUserSession();

  if (user.value && user.value.role != "admin") {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden",
      message: "Anda tidak memiliki izin untuk mengakses halaman ini.",
      fatal: true,
    });
  }
});
