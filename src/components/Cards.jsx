/* eslint-disable react/prop-types */
import { Box,Typography } from "@mui/material"

import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import {useState} from 'react';

import Modal from '@mui/material/Modal';


export default function Cards(props){
    const { details } = props
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '100%',
      maxHeight:'100%',
      bgcolor: 'none',
      border: 'none',
      boxShadow: 'none',
      p: 4,
      
    };


    return(
        <>
        <Box
        sx={{
          maxWidth: "1200px",
          display:'flex',
          justifyContent:{md:'space-between',xs:'center'},
          textAlign:'left',
          alignItems:'center',
          flexDirection:{xs:'column-reverse',md:'row'},
          m:'auto',
          p:2
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
                fontSize:'5rem',
                display:{md:'block', xs:'none'}

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
            <Box component='ul' >
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
              alignItems:'center',
              gap:2
            }}>
              <Typography>Tools:</Typography>
              {details.tools.map((icon,i) => {
                return <Box key={i}
                sx={{ 
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                  justifyContent:'center',
                  gap:1
                 }}
                >
                    <img  style={{ width: '30px' }}  src={icon.img} alt="image of tools used in the project" />
                  <Typography variant="body" component='p' fontSize='0.9rem'>{icon.name}</Typography>
                  
                </Box>
              })}
          
            </Box>

        
        </Box>

        <div>
        <Modal
        sx={{ display:{xs:'none', md:'block'} }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img  src={details.img} alt={details.title} />
          </Box>
        </Modal>
      </div>

        <Box
          sx={{
            maxWidth:'400px',
            mb:{xs:2,md:'none'},
            mt:{xs:2,md:'none'},
            cursor:{md: 'pointer', xs:'default'}
          }}
         
        >
       

          <img onClick={handleOpen} src={details.img} alt={details.title} />

        </Box>
        <Typography component="h1" variant='h1'
              sx={{ 
                letterSpacing:'5px',
                color:'white',
                fontSize:'5rem',
                display:{md:'none', xs:'block'}

              }}
              >
              {details.title}
        </Typography>

      </Box>
        </>
    )
}