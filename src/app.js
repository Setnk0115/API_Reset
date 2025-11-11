import express from "express";

const app = express();

const PORT = 3000;

import user from "./routes/user.js";
import task from "./routes/task.js";

app.use(express.json());

app.use("/user", user);
app.use("/task", task);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})