const Product = require('../models/products');
const multer = require('multer')
const shortid = require('shortid')

const configuracionMulter = {

    storage : fileStorage = multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null, __dirname + '../../uploads/');
        },
        filename:(req,file,cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req,file,cb){
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            cb(null,true)
        }else{
            cb(new Error('format not valid'))
        }
     },
}

//pasar la configuracion delcampo
const upload = multer(configuracionMulter).single('imagen')

//subir archivo
exports.subirarchivo = (req,res,next)=>{

    upload(req,res, function(error){
        if(error){
            res.json({message : error})
        }
        return next();
    })
}



//add new products
exports.newproducts = async(req,res,next)=>{

    const product = new Product(req.body)

    try {
        //add register
        if (req.file.filename) {
            product.imagen = req.file.filename
        }
        await product.save();
        res.json({message : 'Add Fine'})
    } catch (error) {
        
        console.log(error)
        next();
    }

}

exports.seeproducts = async(req,res,next) => {

    try {

        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        console.log(error)
        next();
        
    }
}

//see product for id
exports.seeProduct = async(req,res,next) => {


    try {
        
    const products = await Product.findById(req.params.idProduct)
    if (!products) {
        res.json({ message: 'it is product not exist'})
        next();     
        }
        res.json(products) 
    } catch (error) {
        console.log(error)
        next();
        
    }

    
}
//update product

exports.updateproduct = async(req,res,next)=> {

    try {
      
        //buisd new produts
        let newproducts = req.body;
        //verificar si hay una imagen nueva
        if (req.file) {
            newproducts.imagen = req.file.filename;
        } else {
            let productbefore = await Product.findById(req.params.idProduct);
            newproducts.imagen = productbefore.imagen;
        }

        const products = await Product.findOneAndUpdate(
            {_id : req.params.idProduct},
            newproducts,{
                new : true
            });
            res.json(products)

    } catch (error) {
        
        console.log(error)
        next();
    }
}

exports.deleteProduct = async (req,res,next)=>{

    try {
        await Product.findOneAndDelete(
            {_id: req.params.idProduct});

            res.json({message : 'Product delete'})
    } catch (error) {
        console.log(error)
        next();
    }
}
