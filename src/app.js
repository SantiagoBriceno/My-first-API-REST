import express from "express";
import rutaEmpleados from './routes/empleados.routes.js'
import rutaIndex from './routes/index.routes.js';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())
//SERVIDOR ELEMENTAL
app.use('/api',rutaEmpleados);
app.use(rutaIndex);
app.use((req, res, next)=>{
    res.status(404).json({
        message: "No encontramos la pagina"
    })
});

export default app;