// import { Box, Button, Avatar, Typography } from "@mui/material";
// import * as React from 'react';
// import UploadIcon from '@mui/icons-material/Upload';
// import DeleteIcon from '@mui/icons-material/Delete';


// const UploadProfileImage = () => {

//     const [image, setImage] = React.useState("");
//     const inputFileRef = React.useRef<HTMLInputElement>(null);

//     const cleanUp = () => {
//         URL.revokeObjectURL(image);
//         if (inputFileRef.current) {
//             inputFileRef.current.value = '';
//         }
//     }

//     const changeImage = (newImage: string) => {
//         if(image) {
//             cleanUp();
//         }
//         setImage(newImage)
//     }

//     const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const newImage = event.target?.files?.[0];

//         if (newImage) {
//             changeImage(URL.createObjectURL(newImage))
//         }
//     }

//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         if (image) {
//             event.preventDefault();
//             setImage('');
//         }
//     }

//     return (
//         <Box>
//             <Avatar alt="avatar" src =  "/static/default-profile-pic.jpeg" />
//             <input ref={inputFileRef} accept="image/*" hidden id="avatar-image-upload" type="file" onChange={handleOnChange} />
//             <label htmlFor="avatar-image-upload">
//                 <Button variant="contained" onclick={handleClick}>
//                     {image ? <DeleteIcon /> : <UploadIcon />}
//                     {image ? "Delete" : "Upload"}
//                 </Button>
//             </label>
//             <Typography>
//                 Upload your profile picture. 
//             </Typography>
//         </Box>

//     )
// }

// export default UploadProfileImage;

import { Box, Avatar, IconButton, Typography } from "@mui/material";
import * as React from 'react';


const UploadProfileImage = () => {

    const [image, setImage] = React.useState("");
    const inputFileRef = React.useRef<HTMLInputElement>(null);

    const cleanUp = () => {
        URL.revokeObjectURL(image);
        if (inputFileRef.current) {
            inputFileRef.current.value = '';
        }
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

    return (
        <Box>
            <input hidden accept="image/*" id="contained-button-file" type="file" onChange={handleOnChange} ref={inputFileRef}/>
            <label htmlFor="contained-button-file">
                <IconButton component="span">
                    <Avatar sx={profileImageStyled} src={image || "/static/default-profile-pic.jpeg"}/>
                    <Typography sx={overlayStyled}>Edit Image</Typography>
                </IconButton>
            </label>
        </Box>
    )
}



const profileImageStyled = {
    width: '212px',
    height: '212px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const overlayStyled = {
    position: 'absolute',
    bottom: 20,
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#f1f1f1',
    width: '80%',
    height: '13%',
    fontSize: '18px',
    textAlign: 'center',
}

export default UploadProfileImage;
