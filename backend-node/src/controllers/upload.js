const Upload = require('../models/Upload')

// app.get('/', (req, res) => {
//     imgModel.find({}, (err, items) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             res.render('imagesPage', { items: items });
//         }
//     });
// });

exports.getImages = async (req, res) => {
    const images = await Image.find({})
    
    res.status(200).res.render('imagesPage', { items: items });
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
    
    res.status(200).send(images)
}
  