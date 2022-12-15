require("dotenv").config()

const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT
const jwtMiddle = require("./middleware/jwtAuth")

const itemRoutes = require('./routes/item');
const userRoutes = require('./routes/user');
// const postsRoutes = require('./routes/posts');
const photosRoutes = require('./routes/photos');

const app = express()
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

var cors = require('cors');
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/api/items', itemRoutes);
app.use('/api/auth', userRoutes);
// app.use('/api/posts', postsRoutes);
app.use('/api/image', photosRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/secret', jwtMiddle.verifyJWT, (req, res) => {
  res.send('Secret Hello World!')
})

app.get('*', (req, res) => {
  res.send('This route does not exist')
})

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
