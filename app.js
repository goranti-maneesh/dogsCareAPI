const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Change * to your allowed origin(s)
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Mock data
const productsData = [ {
    image1: "https://res.cloudinary.com/difbmfdoo/image/upload/v1708168010/blob_2_cwi6gi.png"
    image2: "https://res.cloudinary.com/difbmfdoo/image/upload/v1708168010/Ellipse_2_mo0png.png"
    image3: "https://res.cloudinary.com/difbmfdoo/image/upload/v1708168009/Ellipse_7_o0aiz4.png"
    image4: "https://res.cloudinary.com/difbmfdoo/image/upload/v1708168009/Ellipse_4_nki2b8.png"
    image5 : "https://res.cloudinary.com/difbmfdoo/image/upload/v1708168009/Ellipse_3_y3axzy.png"
    text_title: "Taking care for your Smart Dog !"
    text_summary: "Human-canine bonding is the relationship between dogs and humans"
}];

app.get("/api/dogs_care", (req, res) => {
  res.json(productsData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});