import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);

  async function login(username: string, password: string): Promise<User> {
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    })
      .then((resp) => resp.json)
      .then((data: any) => {
        const u: User = {
          auth: data.auth,
          name: data.name,
          username: data.username,
          surname: data.surname,
          site: data.site,
        };
        user.value = u;
      })
      .catch((err) => console.error(err));
  }

  return { user, login };
});

interface User {
  auth: string;
  name: string;
  username: string,
  surname: string;
  site: string;
}

interface LoginRequest{
  username: string,
  password: string
}


