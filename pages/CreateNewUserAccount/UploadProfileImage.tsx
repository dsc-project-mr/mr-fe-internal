import { Box, Button, Avatar, Typography } from "@mui/material";
import * as React from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';


const UploadProfileImage = () => {

    const [image, setImage] = React.useState("");
    const inputFileRef = React.useRef<HTMLInputElement>();

    const cleanUp = () => {
        URL.revokeObjectURL(image);
        inputFileRef.current.value = "";
    }

    const changeImage = (newImage: string) => {
        if(image) {
            cleanUp();
        }
        setImage(newImage)
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newImage = event.target?.files?.[0];

        if (newImage) {
            changeImage(URL.createObjectURL(newImage))
        }
    }

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (image) {
            event.preventDefault();
            setImage("");
        }
    }

    return (
        <Box>
            <Avatar alt="avatar" src =  "/static/default-profile-pic.jpeg" />
            <input ref={inputFileRef} accept="image/*" hidden id="avatar-image-upload" type="file" onChange={handleOnChange} />
            <label htmlFor="avatar-image-upload">
                <Button variant="contained" onclick={handleClick}>
                    {image ? <DeleteIcon /> : <UploadIcon />}
                    {image ? "Delete" : "Upload"}
                </Button>
            </label>
            <Typography>
                Upload your profile picture. 
            </Typography>
        </Box>

    )
}

export default UploadProfileImage;
