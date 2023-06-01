/* eslint-disable react/prop-types */
import { Paper,Box,Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
export default function Cards(props){
    const { details } = props

    const [active,setActive] = useState(false)

    function handleActive(){
        setActive(prevState => !prevState)
    }

    return(
        <>
        <Paper
        sx={{
          maxWidth: "400px",
          height: "100%",
          transition: "height 0.3s",
          overflow:'hidden'
        }}

      >
        <Box
          onClick={handleActive}
          sx={{
            maxWidth: "100%",
            transition: "max-width 0.3s",
            cursor:'pointer',
          

          }}
         
        >
          <img src={details.img} alt={details.title} />
          <Typography component="h1" variant="h5"
          sx={{ 
            display:'block',
            background:'black',
            color:'white',
            p:1
           }}
          >
          {details.title}
        </Typography>
        </Box>


      </Paper>
        </>
    )
}