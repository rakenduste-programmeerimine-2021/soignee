const Image = require('../models/Upload')

//const multer = require('multer');
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
// var upload = multer({ storage: storage });

// upload.single('image')

exports.getImages = async (req, res) => {
    const images = await Image.find({})
    
    res.status(200).send(images)
}
  
exports.uploadImage = async (req, res) => {
    
    const newImage = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }

    const uploadedImage = new Image(newImage)
    
    const savedImage = await uploadedImage.save()
    
    res.status(200).send(savedImage)
}
  