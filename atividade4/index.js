const express = require("express");
const calc = require("./util/calculadora");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Home</h1>");
});

app.get("/somar/:a/:b", function (req, res) {
  const { a, b } = req.params;
  const c = calc.somar(a, b);
  res.send(`Resultado: ${a} + ${b} = ${c}`);
});

app.get("/subtrair/:a/:b", function (req, res) {
  const { a, b } = req.params;
  const c = calc.subtrair(a, b);
  res.send(`Resultado: ${a} - ${b} = ${c}`);
});

app.get("/multiplicar/:a/:b", function (req, res) {
  const { a, b } = req.params;
  const c = calc.multiplicar(a, b);
  res.send(`Resultado: ${a} * ${b} = ${c}`);
});

app.get("/dividir/:a/:b", function (req, res) {
  const { a, b } = req.params;
  const c = calc.dividir(a, b);
  res.send(`Resultado: ${a} / ${b} = ${c}`);
});

const PORT = 8080;
app.listen(PORT, function () {
  console.log("Running on port: " + PORT);
});
