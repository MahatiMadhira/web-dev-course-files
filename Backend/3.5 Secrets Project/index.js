import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
var isCorrect = false;

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next){
    const pass = req.body["password"];
    if(pass == "ILoveProgramming")
    {
        isCorrect = true;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req, res) => {
    if (isCorrect) {
      res.sendFile(__dirname + "/public/secret.html");
    } else {
      res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  
