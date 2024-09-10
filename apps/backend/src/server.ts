import express from "express";

const app = express();

const port = 8000;

app.get("/", (req, res) =>{
    res.send("Hello from Express!");
});

app.listen(port, () => {        
    console.log(`Backend app listening at http://localhost:${port}`);
})