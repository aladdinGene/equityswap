/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import { Header, Content } from '../components/_external-pages/privacy';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(() => ({
  overflow: 'hidden',
  position: 'relative'
}));

// ----------------------------------------------------------------------

export default function PrivacyPage() {
  return (
    <RootStyle title="The starting point for your next project | Minimal-UI" id="move_top">
      <ContentStyle>
          <Header />
          <Content />
      </ContentStyle>
    </RootStyle>
  );
}
