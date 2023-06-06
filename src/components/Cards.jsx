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
          maxWidth: "1200px",
          display:'flex',
          justifyContent:{md:'space-between',xs:'center'},
          textAlign:'left',
          alignItems:'center',
          flexDirection:{xs:'column',md:'row'},
          m:'auto',
          p:1
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
              <Typography component="h1" variant='h1'
              sx={{ 
                letterSpacing:'5px',
                color:'white',
                fontSize:{xs:'3rem', md:'5rem'}


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
            <Box component='ul'>
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
          <Box>
            <Typography component='h3' variant='h5'>Links:</Typography>
            <Box pt={2} sx={{ 
              display:'flex',
              gap:2
            }}>
              <Link to={details.git} target="blank"><GitHubIcon fontSize="large"/></Link>
              <Link to={details.web} target="blank"><LanguageIcon fontSize="large"/></Link>
            </Box>
          </Box>
            <Box  sx={{ 
              display:'flex',
              width:'200px',
              m:'auto',
              pb:2,
              justifyContent:'center',
              gap:2
            }}>

              {details.tools.map((icon,i) =><img  style={{ width: '30px' }} key={i} src={icon} />)}
          
            </Box>

        
        </Box>

        <Box
          sx={{
            maxWidth:'400px'

          }}
         
        >
          <img src={details.img} alt={details.title} />

        </Box>

      </Box>
        </>
    )
}