import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import SportsMmaIcon from '@mui/icons-material/SportsMma';

const Header = () => {
  const location = useLocation();

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 2 }}>
          <SportsMmaIcon sx={{ mr: 1.5, color: 'primary.main', fontSize: 32 }} />
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none',
              flexGrow: 0,
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            MMA Ranks
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={RouterLink}
              to="/"
              variant={location.pathname === '/' ? 'contained' : 'text'}
              sx={{
                color: location.pathname === '/' ? 'white' : 'text.primary',
              }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/ufc"
              variant={location.pathname === '/ufc' ? 'contained' : 'text'}
              sx={{
                color: location.pathname === '/ufc' ? 'white' : 'text.primary',
              }}
            >
              UFC
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

