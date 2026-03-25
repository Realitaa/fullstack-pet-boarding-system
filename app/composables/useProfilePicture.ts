export const useProfilePicture = () => {
  const toast = useToast();

  // nanti ambil dari state pada sesi pengguna yang sudah terautentikasi
  const currentPicture = useState<number>("profile-picture", () => 1);

  const profilePicture = [
    { id: 1, src: "1-pet-profile-pics-pexels-peng-louis-587527-1643457.jpg" },
    { id: 2, src: "2-pet-profile-pics-pexels-shvetsa-4588455.jpg" },
    { id: 3, src: "3-pet-profile-pics-pexels-valeriya-1805164.jpg" },
    {
      id: 4,
      src: "4-pet-profile-pics-juliya-sidorova-FOxMZK1VQS8-unsplash.jpg",
    },
    { id: 5, src: "5-pet-profile-pics-pexels-rutpratheep-6279101.jpg" },
  ];

  // nanti di hapus jika sudah dapat menyimpan sesi pengguna terautentikasi
  const initProfilePicture = async () => {
    const { data } = await useAsyncData("profile-picture", async () => {
      // 🔁 MOCK API (hapus nanti)
      return new Promise<{ pictureId: number }>((resolve) => {
        setTimeout(() => {
          resolve({ pictureId: 3 });
        }, 300);
      });

      // 🔁 REAL API nanti
      // return await $fetch('/api/profile');
    });

    if (data.value) {
      currentPicture.value = data.value.pictureId;
    }
  };

  const updateProfilePicture = async (id: number) => {
    if (currentPicture.value === id) return;

    try {
      // 🔁 MOCK API
      const response = await new Promise<{ pictureId: number }>((resolve) => {
        setTimeout(() => {
          resolve({ pictureId: id });
        }, 300);
      });

      // 🔁 REAL API nanti
      // const response = await $fetch('/api/profile/picture', {
      //   method: 'POST',
      //   body: { id }
      // });

      // ✅ pakai response backend (best practice)
      currentPicture.value = response.pictureId;

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
    initProfilePicture,
    updateProfilePicture,
  };
};
