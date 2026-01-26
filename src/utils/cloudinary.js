import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (localFilePath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    if (!localFilePath) return null;
    //upload the file on claudinary

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfull
    // console.log(`File is Uploaded on Cloudinary On Url: ${response.url}`);
    fs.unlinkSync(localFilePath);

    // console.log(response);
    return response;
  } catch (error) {
    console.log("File Upload Failed On Cloudinary !!!", error);
    console.error(error);
    // remove the locally saved temporaray files as the upload operations got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
