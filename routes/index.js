const route = require("express").Router()

// "/curtomes solo es una dirección" no es un palabra reservada
route.get("/customes", (req, res)=>{
    res.json({
        id:21,
        mane:"Mary",
        apellido: "paellidos de Mary"
    })
})
module.exports = route;