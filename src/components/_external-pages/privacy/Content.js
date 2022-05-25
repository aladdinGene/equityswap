/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, Stack, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0, 20)
}));

// ----------------------------------------------------------------------

export default function Content() {
  return (
    <RootStyle>
        <Container maxWidth="md" sx={{ position: 'relative', paddingTop: 10 }}>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 1, color: '#141721', display: 'block', fontFamily: 'Montserrat', fontWeight: 400, fontSize: 18, lineHeight: '26px' }}>
                Thank you for visiting https://equityswap.io 
            </Typography>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 3, color: '#77838F', display: 'block', fontFamily: 'Montserrat', fontWeight: 400, fontSize: 18, lineHeight: '27px' }}>
                The Site is owned and operated by the Company (together "Company", "we", "our", or "us"). This Privacy ("Privacy Policy") together with our Terms of Service (which can be found at https://equityswap.io/terms) ("Terms of Service") sets out the basis on which any Personal Information we collect from you ("you", "your", or "user"), or that you provide to us, will be processed by us. By “Personal Information”, we mean any information which, either alone or in combination with other data, enables you to be directly or indirectly identified, for example, your name, email address, username, contact details or any unique identifier such as an IP address, device ID or other online identifier.

                The Company minimizes Personal Information collected from you. Please read the following carefully to understand what data we collect, how that data is used and the ways it can be shared by us. If you do not wish for your Personal Information to be used in the ways described within this Privacy Policy then you should not access or use the Site or use any of the services, functions, or features offered from time to time on the Site ("Services").

                The data controller of your Personal Information is EquitySwap LLC
            </Typography>
        </Container>
    </RootStyle>
  );
}
