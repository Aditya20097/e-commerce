import multer from "multer";

const storage = multer.diskStorage({
    filename : function(req,file,callback){
        callback(null , file.originalname)
    }
})

// by using this disk storage we will create upload middleware

const upload = multer({ storage})

export default upload