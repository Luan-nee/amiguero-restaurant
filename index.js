const express = require("express")
const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/ruta1",(req,res)=>{
    res.json({mensaje:"soy la respuesta"})
})

// cualquier persona puede conectarse
app.use("/api",require('./routes/index'))
app.use(cors());
// escuchando el puerto 3000
// de esta forma nos damos cuenta que el
// sevidor está corriendo correctamente
// console.log("soy un mensaje de desarrollo");
app.listen(3000, (err) => {
    if(err) console.log("an error ocurred")
    console.log("server runing on port 3000")
})

