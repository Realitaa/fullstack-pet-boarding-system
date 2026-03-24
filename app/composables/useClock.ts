import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

export const useClock = () => {
  const now = ref(dayjs());

  let interval: NodeJS.Timeout;

  onMounted(() => {
    interval = setInterval(() => {
      now.value = dayjs();
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(interval);
  });

  return {
    now,
    date: computed(() => now.value.format("dddd, D MMMM YYYY")),
    time: computed(() => now.value.format("HH:mm:ss")),
  };
};
