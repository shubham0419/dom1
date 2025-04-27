const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {	});

app.listen(PORT, () => console.log("Server running on port " + PORT));