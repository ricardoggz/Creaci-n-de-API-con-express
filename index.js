// 1. IMPORTACIONES
// Se refiere a todas las dependencias del
// proyecto que se utilizarán en este archivo.
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// 2. MIDDLEWARES
// Se refiere a todas las funciones
// que se ejecutarán antes de tocar las rutas.
app.use(bodyParser.urlencoded({ extended: true }));

// 3. RUTEO
// Las rutas establecidas para nuestro servidor

// LEER TODAS LAS PERSONAS
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
      },
      skills: {
        best: "frontend",
        maquetacionWeb: true,
      },
    },
  ];

  res.json(data);
});

// CREAR UNA PERSONA
app.post("/", (req, res) => {
  const { nombre, pais } = req.body;

  const data = [
    {
      id: 0,
      nombre: "Mike",
      pais: "México",
    },
  ];

  data.push({ nombre, pais });

  res.json(data);
});

// ACTUALIZAR UNA PERSONA
app.put("/", (req, res) => {
  const { id, nombre, pais } = req.body;

  const data = [
    {
      id: 0,
      nombre: "Mike",
      pais: "México",
    },
  ];

  const dataFiltered = data.map((e) => {
    return e.id === id
      ? {
          id,
          nombre,
          pais,
        }
      : null;
  });

  res.json(dataFiltered);
});

// BORRAR UNA PERSONA
app.delete("/", (req, res) => {
  const { id } = req.body;

  const data = [
    {
      id: 0,
      nombre: "Mike",
      pais: "México",
    },
  ];

  const dataFiltered = data.filter((e) => {
    return e.id !== id;
  });

  res.json(dataFiltered);
});

// 4. SERVIDOR
app.listen(3000, () => {
  console.log("El servidor está de pie");
});
