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
      window.console.log("Autenticação bem-sucedida:", response.data);
      localStorage.removeItem("usuario");
      localStorage.removeItem("token");
      localStorage.setItem("usuario", JSON.stringify(response.usuario));
      localStorage.setItem("token", response.token);
      return response.data;
    } else {
      window.console.error("Erro na autenticação:", response.status);
      return null;
    }
  } catch (error) {
    window.console.error("Erro na requisição:", error);
    return null;
  }
};

export const cadastrarUsuario = async (nome, email, senha) => {
  try {
    const response = await axios.post("http://localhost:3000/api/usuario", {
      nome: nome,
      email: email,
      senha: senha,
    });
    if (response.status === 201) {
      window.console.log("Cadastro bem-sucedido:", response.data);
      return response.data;
    } else {
      window.console.error("Erro no cadastro:", response.status);
      return null;
    }
  } catch (error) {
    window.console.error("Erro na requisição:", error);
    return null;
  }
};
