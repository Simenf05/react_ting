

const express = require('express');

const PORT = 8069;

const app = express()

app.get("/api", (req, res) => {
    res.json({ message: "kuk" })
})

app.listen(PORT, () => {
    console.log('server listening on ' + PORT);
})