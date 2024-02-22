import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useSpring, animated } from '@react-spring/web';
import '../Components/ButtonUsage.scss';

const defaultTheme = createTheme();

export default function ButtonUsage() {

    const springs = useSpring({
        from: { x: -100, y: -100, opacity: 0 },
        to: { x: 0, y: 0, opacity: 1 },

    })


    return (
        <animated.div style={{ ...springs }}>

            <ThemeProvider theme={defaultTheme}>
                <Box className="box-features"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                    }}
                >
                    <CssBaseline />
                    <Container className="div-background" component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">

                        <Typography variant="h2" component="h1" gutterBottom>
                            Our <span style={{ color: "#0060af" }}>History</span>
                        </Typography>

                        <Typography variant="h5" component="h2" gutterBottom>
                            We believe that the idea supported by passion, work, and engagement give a result in the form of a refined product, satisfaction and user safety.

                        </Typography>

                        <Typography variant="body1"><span style={{ color: "#0060af" }}>European Union</span> 1996</Typography>

                    </Container>
                

            </Box>
        </ThemeProvider>
        </animated.div >
    );
}