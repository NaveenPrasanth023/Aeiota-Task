import { upload } from "@testing-library/user-event/dist/upload";
import axios from "axios";
import React from "react";
import { uploadImageToData } from "./instancehelper";

const UploadImage = () => {
  const [imageURL, setImageURL] = React.useState("");
  const [imageFile, setImageFile] = React.useState({});

  const previewImage = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImageURL(URL.createObjectURL(file));
    console.log("imageURL", imageURL);
  };
  const uploadToData = (event) => {
    event.preventDefault();
    console.log(event);
    const imgFolder = event.target[0];
    const imgFile = imgFolder.files[0];
    console.log("imgfile", imgFile);
    setImageFile(imgFile);
    console.log(imageFile);
    // const formData = new FormData();
    // formData.append("image", imageFile);

    // const reader = new FileReader();
    // console.log(imgFile.value);
    // reader.readAsText(imgFile);
    // console.log("reader", reader);
    // reader.onload = (event) => {
    //   console.log("event", event);
    // };

    uploadImageToData
      .post("/", imageFile)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <form onSubmit={uploadToData}>
        <input type="file" onChange={previewImage} />
        <button type="submit">Upload</button>
      </form>
      <img src={imageURL} alt="Image Preview" width={"50%"} />
    </>
  );
};
export default UploadImage;
