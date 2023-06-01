/* eslint-disable react/prop-types */
import { Paper,Box,Typography } from "@mui/material"
export default function Cards(props){
    const { details } = props
    return(
        <>
        <Paper 
        sx={{ 
            mb:1,
         }}
        >
            <Box
            sx={{ 
                maxWidth:'300px'
             }}
            > 
                <img src={details.img}/>
            </Box>
                
            <Typography  component='p' variant="body">{details.title}</Typography>
        </Paper>
        </>
    )
}