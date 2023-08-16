import React, { useRef, useState } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  roundImage: {
    position: "relative",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    overflow: "hidden",
  },
  input: {
    display: "none",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    cursor: "pointer",
  },
}));

function ImageUploader() {
  const classes = useStyles();
  const params = useParams();
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("https://img.icons8.com/bubbles/100/000000/user.png");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
      uploadImage(file);
    };
    reader.readAsArrayBuffer(file);
  };

  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("image", file);
    alert(JSON.stringify(formData));
    fetch(`http://localhost:3500/api/users/${params.userid}/uploadimg`, {
      method: "PATCH",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((blob) => {
        // יצירת URL מהתמונה בפורמט בינארי
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);

      })
      .catch((error) => {
        console.error("Error saving file:", error);
      });
  };
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Card className={classes.roundImage}>
      <input
        type="file"
        accept="image/*"
        className={classes.input}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <CardMedia
        component="img"
        image={imageSrc}
        alt="תמונה"
        className={classes.image}
        onClick={handleImageClick}
      />
    </Card>
  );
}

export default ImageUploader;
