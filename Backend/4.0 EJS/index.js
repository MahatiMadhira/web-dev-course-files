import express from "express";

const app = express();
const port = 3002;

app.get("/", (req,res) => {
    const cur_day = new Date();
    const day = cur_day.getDay();

    let day_of_week = "weekday";
    let message = "Its time to work hard";

    if(day == 0 || day == 6)
    {
        day_of_week = "the weekend";
        message = "Its time to have fun";
    }

    res.render("index.ejs", {
        dayType: day_of_week,
        msg: message,
    });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}.`);
});