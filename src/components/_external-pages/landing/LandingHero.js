import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container, Typography, Stack } from '@material-ui/core';
//
import { varFadeInRight, varWrapEnter, varFadeInUp } from '../../animate';

// ----------------------------------------------------------------------
const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#141721',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 620,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroImgStyle = styled(motion.img)(() => ({
  top: 0,
  right: '-40%',
  bottom: 0,
  zIndex: 8,
  margin: 'auto',
  position: 'absolute',
  filter: `drop-shadow(40px 80px 80px rgba(0, 0, 0, 0.48))`
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {/* <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} /> */}

        <HeroImgStyle alt="hero" src="/static/home/landing-hero.png" variants={varFadeInUp} />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="p"
                sx={{
                  color: 'common.white',
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: { xs: '50px', md: '82px' },
                  lineHeight: { xs: '60px', md: '92px' }
                }}
              >
                Real World <br />
                assets into the <br /> Blockchain
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography
                sx={{
                  color: 'common.white',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '28px',
                  opacity: 0.6,
                  maxWidth: 578
                }}
              >
                Equityswap provides a worldwide access to trusted investment products through a unique collateralization
                methodology, building a game-changing decentralized platform where worldwide blockchain investors can
                own shares of real assets in their blockchain wallets.
              </Typography>
            </motion.div>

            <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <motion.img variants={varFadeInRight} src="/static/home/social-icons-group.png" />
            </Stack>

            <motion.div variants={varFadeInRight}>
              <Typography
                sx={{
                  color: 'common.white',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '28px',
                  opacity: 0.6,
                  maxWidth: 578
                }}
              >
                Tokenized assets, <br /> with collateral
              </Typography>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
