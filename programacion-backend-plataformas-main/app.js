const express = require('express');

const app = express();

const sequelize = require('./config/db');

const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user');

const cors = require('cors');

const morgan = require('morgan');

//configuración de la base de datos:

sequelize.authenticate()
.then(()=>{
    console.log('Conexión exitosa a la base de datos');
})
.catch((error)=>{
    console.error('Error al conectar con la base de datos: ',error);
});


// le dicimos que serialice la información a json
app.use(express.json())
app.use(cors());
app.use(morgan());
//configurar rutas

app.use('/api', userRoutes);
app.use('/api', postRoutes)


// iniciar el servidor

const PORT = 3000;
app.listen(PORT, ()=>console.log(`Servidor corriendo en puerto ${PORT}`))