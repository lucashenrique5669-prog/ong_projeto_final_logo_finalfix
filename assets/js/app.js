// app.js

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.getElementById("conteudo");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pagina = e.target.getAttribute("href").replace("#", "");
      carregarPagina(pagina);
    });
  });

  function carregarPagina(pagina) {
    if (pagina === "inicio") {
      main.innerHTML = `
        <h2>Bem-vindo à ONG Projeto Solidário</h2>
        <p>Transformando boas intenções em ação!</p>
      `;
    } else if (pagina === "projetos") {
      main.innerHTML = `
        <h2>Projetos em andamento</h2>
        <ul>
          <li>Campanha do Agasalho</li>
          <li>Doação de Alimentos</li>
        </ul>
      `;
    } else if (pagina === "cadastro") {
      main.innerHTML = `
        <h2>Cadastro de Voluntário</h2>
        <form id="formCadastro">
          <label>Nome:</label><input type="text" id="nome">
          <label>Email:</label><input type="email" id="email">
          <button type="submit">Enviar</button>
        </form>
      `;
      adicionarValidacao();
    }
  }

  function adicionarValidacao() {
    const form = document.getElementById("formCadastro");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      if (!nome || !email) {
        alert("Preencha todos os campos!");
      } else {
        alert("Cadastro realizado com sucesso!");
      }
    });
  }

  carregarPagina("inicio"); // Página inicial
});
