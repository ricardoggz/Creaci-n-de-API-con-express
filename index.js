const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = [
    {
      id: 0,
      nombre: "Ricardo",
      pais: "México",
      caracteristicas: {
        actitud: "buena",
        capacidadAdaptacion: true,
        autodidacta: true,
        calmado:true,
        humilde:true,
      },
      skills: {
        best: "frontend",
        maquetacionWeb: true,
        JavaScript: "true",
      },
    },
  ];

  res.json(data);
});

// SERVIDOR
app.listen(3000, () => {
  console.log("El servidor está de pie");
});
