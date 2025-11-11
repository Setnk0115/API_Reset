import express from "express";

const app = express();

const PORT = 3000;

import user from "./routes/user.js";

app.use(express.json());

app.use("/user", user);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})