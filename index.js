const express = require("express")
const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// cualquier persona puede conectarse
app.use(cors());

// escuchando el puerto 3000
// de esta forma nos damos cuenta que el
// sevidor está corriendo correctamente
app.listen(3000, (err) => {
    if(err) console.log("an error ocurred")
    console.log("server runing on port 3000")
})