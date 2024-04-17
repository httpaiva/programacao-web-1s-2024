const express = require("express");
const app = express();
let estoque = [];

app.get("/", function (req, res) {
  res.send("<h1>Home</h1>");
});

app.get("/adicionar/:id/:nome/:qtd", function (req, res) {
  const { id, nome, qtd } = req.params;
  estoque.push({
    id,
    nome,
    quantidade: qtd,
  });
  res.send({ estoque });
});

app.get("/listar", function (req, res) {
  res.send({ estoque });
});

app.get("/remover/:id", function (req, res) {
  const { id } = req.params;
  estoque = estoque.filter((item) => item.id !== id);
  res.send({ estoque });
});

app.get("/editar/:id/:qtd", function (req, res) {
  const { id, qtd } = req.params;
  estoque = estoque.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantidade: qtd,
      };
    }

    return item;
  });
  res.send({ estoque });
});

const PORT = 8080;
app.listen(PORT, function () {
  console.log("Running on port: " + PORT);
});
