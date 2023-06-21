import { defineStore } from "pinia";
import { ref } from "vue";

export const useRoomStore = defineStore("rooms", () => {
  const room = ref<Array<Room> | null>(null);

  async function getRoom(idRoom: number): Promise<Room> {
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idRoom),
    })
      .then((resp) => resp.json())
      .then((data) => (room.value = data))
      .catch((err) => console.error(err));
  }

  return { room };
});

interface Room {
  auth: string;
  name: string;
  surname: string;
  site: string;
}
