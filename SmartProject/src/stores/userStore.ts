import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);
  const users = ref<User[] | null>(null);

  async function login(username: string, password: string): Promise<User> {
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
<<<<<<< Updated upstream
      body: JSON.stringify({username, password}),
=======
      body: JSON.stringify({ name, password }),
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  return { user, login };
=======
  async function signUp(u: User): Promise<T> {
    // errore o conferma
    fetch(``, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(u),
    })
      .then((resp) => resp.json)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }
  async function allUsers(): Promise<User[]> {
    fetch(``, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Autorization: `Bearer ${user.value?.auth}`,
      },
      body: JSON.stringify({ user }),
    })
      .then((resp) => resp.json)
      .then((data) => {
        users.value = data;
      })
      .catch((err) => console.error(err));
  }

  return { user, login, allUsers };
>>>>>>> Stashed changes
});

interface User {
  auth: string;
  id: string;
  mail: string;
  name: string;
  username: string,
  surname: string;
  phone: string;
  role: string;
  site: string;
}

interface LoginRequest{
  username: string,
  password: string
}


