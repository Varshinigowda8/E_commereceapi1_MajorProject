const multer = require('multer');
const path = require('path');

// ✅ Storage (local)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // local folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// ✅ File type filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Only image files (jpeg, jpg, png, webp) are allowed'));
  }
};

// ✅ File size limit (e.g., 2MB)
const limits = {
  fileSize: 2 * 1024 * 1024 // 2MB
};

// ✅ Final Multer config
const upload = multer({ storage, fileFilter, limits });

module.exports = upload;
