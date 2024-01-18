import express from "express";
const app = express();
const port = 3002;
app.get("/", (req, res) => {
    res.send("<h1>Hello!</h1>");
});
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Number: 0987698790709</h1>");
});
app.get("/about", (req, res) => {
    res.send("<h1>Hi, Im Mahati! Someone please give me a jobbbbbbbb</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})