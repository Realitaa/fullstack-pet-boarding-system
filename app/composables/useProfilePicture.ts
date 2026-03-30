import { profilePicture } from "#shared/const/profilePicture";

export const useProfilePicture = () => {
  const toast = useToast();
  const { fetch: refreshSession, user } = useUserSession()

  const currentPicture = computed(() => user.value?.pfp_id);

  const updateProfilePicture = async (pfp_id: number) => {
    if (currentPicture.value === pfp_id) return;

    try {
      await $fetch('/api/profile/picture', {
        method: 'POST',
        body: { pfp_id }
      });

      await refreshSession()

      toast.add({
        title: "Foto profil berhasil diperbarui.",
        description: "Foto profil Anda telah diperbarui.",
        color: "success",
        duration: 3000,
      });
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * Berisi data id dan alamat foto profil pengguna (computed)
   * @returns { id: number; src: string }
   */
  const currentPictureData = computed(() =>
    profilePicture.find((p) => p.id === currentPicture.value),
  );

  return {
    profilePicture,
    currentPicture,
    currentPictureData,
    updateProfilePicture,
  };
};
