const uploadFile = require("../middleware/upload");
const uploadFileWithMongo = require("../middleware/uploadWithMongo")

const Image = require('../models/Upload')

exports.getImages = async (req, res) => {
    const images = await Image.find({})
    
    res.status(200).send(images)
}
   
exports.uploadImage = async (req, res) => {
    try {
        await uploadFile(req, res);
        
        if (req.file == undefined) {
        return res.status(400).send({ message: "Please upload a file!" });
        }

        console.log(req.file)

        res.status(200).send({
        message: "Uploaded the file successfully: " ,
        });
    } catch (err) {
        res.status(500).send({
        message: `Could not upload the file:. ${err}`,
        });
    }
};

exports.uploadImageWithMongo = async (req, res) => {
    try {
        await uploadFileWithMongo(req, res);
        
        if (req.file == undefined) {
        return res.status(400).send({ message: "Please upload a file!" });
        }

        console.log(req.file)

        res.status(200).send({
        message: "Uploaded the file successfully: " ,
        });
    } catch (err) {
        res.status(500).send({
        message: `Could not upload the file:. ${err}`,
        });
    }
};


// exports.uploadImage = async (req, res) => {
//     upload.single('img')

//     const newImage = {
//         name: req.body.name,
//         desc: req.body.desc,
//         img: {
//             // data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             data: fs.readFileSync(path.join(__dirname + '/uploads/1.png')),
//             contentType: 'image/png'
//         }
//     }
    
//     // const uploadedImage = new Image(newImage)
    
//     // const savedImage = await uploadedImage.save()
    
//     // res.send(req.files)
// }
  