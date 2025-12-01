import { Container, Box, Typography, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../components/Header';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ConstructionIcon from '@mui/icons-material/Construction';

const UFC = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" sx={{ color: 'text.secondary' }} />}
          sx={{ mb: 4 }}
        >
          <Link
            component={RouterLink}
            to="/"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            Home
          </Link>
          <Typography color="text.primary" sx={{ fontWeight: 600 }}>
            UFC Rankings
          </Typography>
        </Breadcrumbs>

        {/* Coming Soon Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            py: 8,
          }}
        >
          <ConstructionIcon
            sx={{
              fontSize: { xs: 80, md: 120 },
              color: 'primary.main',
              mb: 4,
              opacity: 0.8,
            }}
          />
          
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(180deg, #d32f2f 0%, #ef5350 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Coming Soon
          </Typography>
          
          <Typography
            variant="h4"
            component="p"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 400,
              maxWidth: '600px',
            }}
          >
            UFC rankings are currently under development. Check back soon for the latest fighter rankings across all weight classes.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default UFC;
