const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer');
const PORT = process.env.PORT || 3000
const jwtAuth = require("./middleware/jwtAuth")
require("dotenv").config()

const itemRoutes = require('./routes/item');
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');
const uploadRoutes = require('./routes/upload');

const app = express()
app.use(express.json());

var cors = require('cors');
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/api/items', itemRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/imageUpload', uploadRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/secret', jwtAuth, (req, res) => {
  res.send('Secret Hello World!')
})

app.get('*', (req, res) => {
  res.send('This route does not exist')
})

mongoose
  .connect(process.env.MONGODB_URI, {
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

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});
var upload = multer({ storage: storage });
var imgModel = require('./models/Upload');