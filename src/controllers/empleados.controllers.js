import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleado");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getEmpleado = async (req, res) => {
  try {
    console.log(req.params.id);
    const [rows] = await pool.query(
      "SELECT * FROM empleado WHERE id = ?",
      req.params.id
    );

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Empleado no encontrado",
      });

    console.log(rows);
    //res.send(rows[0]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const createEmpleados = async (req, res) => {
  try {
    const { name, salary } = req.body;
    //IMPORTANTE VALIDAR DATOS
    const [rows] = await pool.query(
      "INSERT INTO empleado (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const updateEmpleados = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE empleado SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Empleado no encontrado",
      });

    const [rows] = await pool.query("SELECT * FROM empleado WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
    console.log(result);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};
export const deleteEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM empleado WHERE id = ?",
      req.params.id
    );

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Empleado no encontrado ",
      });

    //console.log(result);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
        message: "Algo salio mal"
    })
  }
};
