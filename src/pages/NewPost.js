import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClick = () => {
    console.log("title:", title, "content:", content);
  };
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Typography variant="h3" gutterBottom>
        Create new post
      </Typography>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        id="standard-basic"
        label="Title"
        variant="standard"
      />
      <TextField
        onChange={(e) => setContent(e.target.value)}
        id="outlined-multiline-static"
        label="Content"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
      <Button variant="contained" onClick={handleClick}>
        Publish
      </Button>
    </Stack>
  );
};

export default NewPost;
