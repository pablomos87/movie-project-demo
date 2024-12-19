
function validateMoviesInfo(req, res, next) {
  const fields = ["title", "year", "director","duration", "rate", "poster"];
  const filterFields = fields.filter(field => !req.body[field]);

  if (filterFields.length > 0) {
    return  res.status(400).json({
      message: "Todos los datos son obligatorios.",
      data: filterFields
    })
  };

  let { year } = req.body;
  year = parseInt(year, 10);

  if (isNaN(year) || year.toString().length !== 4) {
    return res.status(400).json({
      message: "El campo 'year' debe ser un número de 4 cifras."
    });
  };

  let { duration } =req. body;
  if (!/^\d+h \d{1,2}min$/.test(duration)) {
    return res.status(400).json({
      message: "El campo 'duración' no tiene el formato correcto; debe ser, pj: 1h 45min"
    });
  };

  let { rate } = req.body;
  if (typeof rate !== 'number' || rate < 1 || rate > 10) {
    return res.status(400).json({
      message: "El campo 'rate' debe contener números entre 1 y 10"
    });
  };

  next();
}

module.exports = { validateMoviesInfo }; 
