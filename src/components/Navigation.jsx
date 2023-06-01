
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = [
    {
        route:'/',
        name:'Home'
    },
    {
        route:'/projects',
        name:'Projects'
    },
    {
        route:'/contact',
        name:'Contact'
    }
];


export default function Navigation() {

  return (
    <AppBar position="fixed" sx={{ 
        background:'none',
        boxShadow:'none',
        top:0
     }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
    
          <Box sx={{ flexGrow: 1, display: 'flex'}}>
            {pages.map((page,i) => (
            <Link to={`${page.route}`}  key={i}>
                <Button
                
                    sx={{ 
                        my: 2,
                        color: 'white', 
                        display: 'block',
                        fontFamily:'Source Sans Pro, sans-serif'
                     }}
                >
                    {page.name}
                </Button>
              </Link>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
