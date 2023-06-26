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
      .then((data) => (room.value = data)) // fare il pars del nome in position e date della sedia
      .catch((err) => console.error(err));
  }

  return { room };
});

interface Room {
  name: string;
  maxSits: number;
  sits: Array<Sit | null>;
}

interface Sit {
  name: String; // V o F
  position: number;
  date: Date | null;
}
