const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

// Rota Principal

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Add new 2 more routes

// Start Server

app.listen(4000, function(error){
    if (error) {
        console.log("Erro ao iniciar: " + error);
    } else {
        console.log("Servidor iniciado na porta 4000");
    }
});