import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = new Express();
const port = process.env.PORT || 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(Express.urlencoded({ extended: true }));
app.use(Express.static("Public")); // Adjust the path as needed

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/Public/index.html`);
});

app.post("/login", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.sendFile(`${__dirname}/Public/main.html`);
});

app.post("/listSer",(req,res)=>{
  res.redirect("/Services");
})

app.get("/Services",(req,res)=>{
    res.sendFile(`${__dirname}/Public/services .html`)
})

app.post("/ServicesList",(req,res)=>{
  res.redirect("/list");
})

app.get("/list",(req,res)=>{
  res.sendFile(`${__dirname}/Public/list.html`)
})

app.listen(port, () => {
  console.log(`Server is running on ${process.env.NODE_ENV} mode and listening to the port: ${port}`);
});
