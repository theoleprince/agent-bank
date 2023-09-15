import { API_URL } from "../components/constante";

class UserService {
  async login(credentials) {
    return fetch(API_URL + "user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    }).then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      return response.json();
    });
  }

  async getUserProfile(token) {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({}),
    };

    return fetch(API_URL + 'user/profile', requestOptions).then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération du profil utilisateur");
      }
      return response.json();
    });
  }

  async putUserProfile(token, dto) {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        firstName: dto.firstName,
        lastName: dto.lastName
      }),
    };

    return fetch(API_URL + 'user/profile', requestOptions).then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error("Erreur lors de la mise a jour du profil utilisateur");
      }
      return response.json();
    });
  }
}

export default new UserService();
