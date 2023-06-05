import * as React from 'react';

import TextField from '@mui/material/TextField';
import {Container, Typography,Button,Box } from "@mui/material";
import {useState} from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
export default function Contact(){

    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [messageValue, setMessageValue] = useState('')

    const [errorState, setErrorState] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [open, setOpen] = React.useState(false);

   

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    function handleFormSubmit(e){
        e.preventDefault()
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const patternMatches = regex.test(emailValue);
        if(!patternMatches){
            setErrorState(prevState => !prevState)
            setErrorMessage('Ugyldig e-post adresse')

        }else{
            setErrorState(false)
            setOpen(true);

            setErrorMessage('')
            setMessageValue('')
            setEmailValue('')
            setNameValue('')           
        }
        
    }

    const theme = createTheme({
        palette: {
            primary: {
              main: '#ffffff', // Set the primary color to white
            },
            text: {
              primary: '#ffffff', // Set the text color to white
            },
            background: {
              default: '#000000', // Set the default background color to black
            },
            typography: {
                fontFamily: 'Source Sans Pro, sans-serif', // Set the font family to Source Sans Pro
              },
          },
      });   

    return (
<ThemeProvider theme={theme}>
    <Container maxWidth='sm' sx={{ display:'flex',flexDirection:'column', justifyContent:'center',m:'auto' }}>
        <Box
            component="form"
            onSubmit={handleFormSubmit}
            sx={{
                '& .MuiTextField-root': {
                    width: '100%', mt:2.5,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', 
                      },
                      '& input': {
                        color: 'white',
                      },
                      '& select': {
                        color: 'white', 
                      },
                    },
                  },
                  fontFamily: 'Source Sans Pro, sans-serif',
                
                }}
      
            autoComplete="off"
            >
            <Typography variant='h4' component='h1'  sx={{  fontFamily: 'Source Sans Pro, sans-serif'  }}>Contact</Typography>
            <div>
                <TextField
                variant="standard"
                required
                value={nameValue}
                onChange={(e)=> {setNameValue(prevState =>{
                    prevState = e.target.value
                    return prevState
                })}}
                id="outlined-required"
                label="Name"
                placeholder="Ola Nordmann"
                fullWidth
                sx={{
                    '& label': {
                      color: '#ffffff', // Set the label color to white
                    },
                    fontFamily: 'Source Sans Pro, sans-serif',
                  }} 
                    />
            </div>
            <div>
                <TextField
                variant="standard"
                error = {errorState}
                helperText={errorMessage}
                required
                id="outlined-required"
                label="Mail"
                value={emailValue}
                onChange={(e)=> {setEmailValue(prevState =>{
                    prevState = e.target.value
                    return prevState
                })}}
                placeholder="eksempel@gmail.com"
                fullWidth
                sx={{
                    '& label': {
                      color: '#ffffff', // Set the label color to white
                    },
                    fontFamily: 'Source Sans Pro, sans-serif',
                  }}  
                    />
            </div>
            


            <div>
            <TextField 
                variant="standard"
                id="userMessage"
                label="Message"
                required
                multiline
                rows={4}
                value={messageValue}
                fullWidth
       
                onChange={(e)=> {setMessageValue(prevState =>{
                    prevState = e.target.value
                    return prevState
                })}}
                sx={{
                    '& label': {
                      color: '#ffffff', // Set the label color to white
                    },
                  }} 
                />
            </div>
            <Box sx={{  mt:1, maxWidth:'250px',ml:'auto',mr:'auto' }}>

                <Button size="large"  variant="contained" type='submit'
                sx={{
                background:'black',
                width:'100%',
                color:'white',
                '&:hover': {
                    backgroundColor: 'white',
                    color:'black' 
                }
                }}>Send</Button>
             </Box>
             <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
                      Message sendt!
                    </Alert>
                </Snackbar>
            </Stack>
        </Box>
    </Container>
    </ThemeProvider>
  );

}