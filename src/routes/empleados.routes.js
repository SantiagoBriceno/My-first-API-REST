import {Router} from 'express';
import {getEmpleados, updateEmpleados, createEmpleados, deleteEmpleados, getEmpleado} from '../controllers/empleados.controllers.js'
const router = Router();

router.get('/empleados', getEmpleados);

router.get('/empleados/:id', getEmpleado);

router.post('/empleados', createEmpleados);

//PUT ES PARA ACTUALIZAR TODOS LOS DATOS

router.patch('/empleados/:id', updateEmpleados);

router.delete('/empleados/:id', deleteEmpleados);

export default router;