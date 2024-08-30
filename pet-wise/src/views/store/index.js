import axios from "axios";

export const autenticarUsuario = async (email, senha) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/autenticacao",
      {
        email: email,
        senha: senha,
      }
    );

    if (response.status === 200) {
      console.log("Autenticação bem-sucedida:", response.data);
      return response.data;
    } else {
      console.error("Erro na autenticação:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }
};
