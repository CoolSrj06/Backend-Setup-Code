import multer from "multer";

// multer.storage: This function creates a storage engine that saves the uploaded files to disk.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //The cb callback is called with null as the first argument (indicating no error) and the path 
      // "./public/temp" as the second argument, 
      // which is the directory for storing uploaded files.
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})


// 1. upload.single(fieldName): For single file uploads.
// 2. upload.array(fieldName, maxCount): For multiple files under a single field.
// 3. upload.fields(fields): For multiple files across multiple fields.
// 4. upload.none(): For handling form submissions without file uploads.
// 5. upload.any(): For handling multiple files from any field.
