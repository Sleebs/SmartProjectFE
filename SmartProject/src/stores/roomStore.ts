import { defineStore } from "pinia";
import { ref } from "vue";

export const useRoomStore = defineStore("rooms", () => {
  const rooms = ref<Array<Room> | null>(null);

  async function getRooms(): Promise<Room[]> {
    fetch("http://localhost:8080/api/getRooms", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjby5zdGVmYW5pQGFnbXNvbHV0aW9ucy5uZXQiLCJpYXQiOjE2ODc5NTc4MzAsImV4cCI6MTY4ODA0NDIzMH0.H_-U6s4v1R1CgfxI0FdV3CFkuDCC0G3szV4_-XkLQAp1VS50Vx6-hzqRAWxkc1Fd6d1wrExgWh42CubrCPxVHA"
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
          rooms.value = data
          data.map(o => {
            console.log(o);
            
          })
          console.log(rooms.value);
        }) // fare il pars del nome in position e date della sedia
      .catch((err) => console.error(err));
  }

  return { rooms, getRooms };
});

interface Room {
  id: number;
  nameRoom: string;
  totalNumberSeats: number;
  width: string;
  height: string;
  idSede: number;
}

interface Sit {
  name: String; // V o F
  position: number;
  date: Date | null;
}
