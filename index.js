import express from "express"
import bodyParser from "body-parser"
const port = 3000;
const app = express();

var array = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { array });
});

app.post("/add", (req, res) => {
    array.push(req.body["task"]);
    res.redirect("/");
});

app.get("/delete", (req, res) => {
    const index = req.query.index;
    array.splice(index, 1);
    res.redirect("/");
})
app.listen(port, () => {
    console.log("Server is running on port " + port);
});