const express = require('express');
const router = express.Router();

const moongoose = require('./../config/conexion');
const Persona = require('./../models/persona');

router.post('/persona/operar', (req,res,next) => {
  console.log(req.body);

  if(req.body._id === ""){
    let per = new Persona({
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      edad: req.body.edad
    });

    per.save();
  } else {
    // console.log(req.body._id);
    Persona.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err,model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

module.exports = router;
