/* eslint-disable react/prop-types */
import { Box,Typography } from "@mui/material"

import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
export default function Cards(props){
    const { details } = props





    return(
        <>
        <Box
        sx={{
          maxWidth: "100%",
          minHeight:'100vh',
          overflow:'hidden',
          display:'flex',
          justifyContent:'space-between',
          textAlign:'left',
          alignItems:'center'
        }}

      >
        <Box 
        sx={{ 
          display:'flex',
          flexDirection:'column',
          maxWidth:'600px',
          gap:2,
  

       
         }}>
            <Box component='article'
            sx={{ 
              display:'flex',
              flexDirection:'column',
              gap:1.5
             }}>
              <Typography component="h1" variant="h1"
              sx={{ 
                letterSpacing:'5px',
                color:'white',


              }}
              >
              {details.title}
            </Typography>
            <Typography component="h2" variant="h6"
              sx={{ 
                letterSpacing:'3px',
                color:'white',


              }}
              >
              {details.type}
            </Typography>
            <Typography component="p" variant="body"
              sx={{ 
                lineHeight:'28px',
                color:'white',
                fontSize:'1.1rem'
  
              }}
              >
              {details.excerpt}
            </Typography>
            <Typography component="h2" variant="h4"
              sx={{ 
                lineHeight:'28px',
                color:'white',
                
                
              }}
              >
              Features:
            </Typography>
            <Box component='ul'
            sx={{ 
              listStyle:'square'
             }}>
            {details.features.map((item,i) => <li key={i}>  
            <Typography component="p" variant="body"
              sx={{ 
                lineHeight:'150%',
                color:'white',
                
                
              }}
              >
              {item}
            </Typography></li>)}
            </Box>

            </Box>
         
          <Box pb={2} sx={{ 
            display:'flex',
            gap:2
           }}>
            <Link><GitHubIcon/></Link>
            <Link><LanguageIcon/></Link>
          </Box>
          <Box  sx={{ 
            display:'flex',
            width:'200px',
            m:'auto',

            gap:2
           }}>

            {details.tools.map((icon,i) =><img  style={{ width: '47px' }} key={i} src={icon} />)}
        
          </Box>
        </Box>

        <Box
          sx={{
            cursor:'pointer',
            maxWidth:'400px'

          }}
         
        >
          <img src={details.img} alt={details.title} />

        </Box>

      </Box>
        </>
    )
}