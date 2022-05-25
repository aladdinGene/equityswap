/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, Stack, Button } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  marginTop: '88px',
  padding: 0,
  position: 'relative'
}));
// ----------------------------------------------------------------------

export default function Header() {
  return (
    <RootStyle>
        <Box component="img" src="/static/home/privacy-bg.svg" alt="privacy bg" sx={{ width: '100%' }} />
        <Container maxWidth="lg" sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Typography component="p" variant="overline" sx={{ textAlign: 'center', textTransform: 'none', marginBottom: 2, color: 'common.white', display: 'block', fontFamily: 'Montserrat', fontWeight: 400, fontSize: '38px', lineHeight: '48px' }}>
                Privacy & Policy
            </Typography>
            <Typography component="p" variant="overline" sx={{ textAlign: 'center', textTransform: 'none', color: 'common.white', display: 'block', fontFamily: 'Montserrat', fontWeight: 400, fontSize: '17px', lineHeight: '27px' }}>
                Last modified: 01 May 2022
            </Typography>
        </Container>
    </RootStyle>
  );
}
