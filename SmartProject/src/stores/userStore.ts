import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);

  async function login(name: string, password: string): Promise<User> {
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json)
      .then((data: any) => {
        const u: User = {
          auth: data.auth,
          name: data.name,
          surname: data.surname,
          site: data.site,
        };
        user.value = u;
      })
      .catch((err) => console.error(err));
  }
  return { user };
});

interface User {
  auth: string;
  name: string;
  surname: string;
  site: string;
}
