import express from 'express'
const app = express();

const PORT = process.env.PORT || 80;
if (!PORT) throw new Error("Port not provided");

app.get('/sayHello', (req, res) => {
    res.json({ message: "Hello User." });
})

app.listen(PORT, () => console.log(`app listening on ${PORT}`))
