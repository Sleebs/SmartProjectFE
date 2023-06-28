import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref<ActiveUser | null>(null);
  const users = ref<User[] | null>(null);

  async function login(username: string, password: string): Promise<ActiveUser> {
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((resp) => resp.json)
      .then((data: any) => {
        const u: User = {
          token: data.token,
          name: data.name,
          username: data.username,
          surname: data.surname,
          site: data.site,
        };
        user.value = u;
      })
      .catch((err) => console.error(err));
  }

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
      .then((data: any) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }
  async function allUsers(): Promise<User[]> {
    fetch("http://localhost:8080/api/getAllUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjby5zdGVmYW5pQGFnbXNvbHV0aW9ucy5uZXQiLCJpYXQiOjE2ODc5NTc4MzAsImV4cCI6MTY4ODA0NDIzMH0.H_-U6s4v1R1CgfxI0FdV3CFkuDCC0G3szV4_-XkLQAp1VS50Vx6-hzqRAWxkc1Fd6d1wrExgWh42CubrCPxVHA"
      }
    })
      .then((resp) => resp.json())
      .then((data) => users.value = data) // fare il pars del nome in position e date della sedia
      .catch((err) => console.error(err));
  }

  return { user, users, login, allUsers };
});

interface ActiveUser {
  token: string;
  id: number;
  firstName: string;
  username  : string;
  lastName: string;
  phoneNumber: string;
  role: [ string ];
  site: string;
}

interface User {
  id: number;
  firstName: string;
  username: string;
  lastName: string;
  phoneNumber: string;
  roles: Role;
  site: string;
}

interface Role {
  id: number;
  name: ERole;
}

enum ERole {
  "Milano",
  "Torino"
}

interface LoginRequest {
  username: string;
  password: string;
}
