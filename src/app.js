const express = require('express');
const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world'); // Agrega una respuesta para evitar errores de respuesta pendiente.
});

app.use('/', router); // Monta el enrutador en la ruta '/'

const PORT = 3000;  
app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
