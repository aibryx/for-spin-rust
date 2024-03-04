import Grid from '@mui/joy/Grid';
import PropTypes from 'prop-types';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { X } from 'lucide-react';

import roulleteLogo from '../../../../public/home/roullete.png';
import slotsLogo from '../../../../public/home/slots.png';
import crashLogo from '../../../../public/home/crash.png';
import caseLogo from '../../../../public/home/case.png';
import upgrateLogo from '../../../../public/home/upgrate.png';
import diceLogo from '../../../../public/home/dice.png';
import caseBattlesLogo from '../../../../public/home/case_battles.png';

const HomeCard = ({ children, height, logo, title, color }) => {
  return (
    <Card
      sx={{
        border: '1px solid black',
        boxShadow: 'white 4px 4px 0px -1px, black 4px 4px',
        borderRadius: '0',
        padding: '0',
        height: height,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box
          sx={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '5px' }}
        >
          <img width="15px" src={logo} />
        </Box>
        <Box sx={{ borderBottom: '1px solid black', padding: '5px', width: '100%' }}>
          <Typography fontWeight="bold">{title}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            borderBottom: '1px solid black',
            borderLeft: '1px solid black',
            padding: '9px',
            background: color,
          }}
        >
          <X size="16" />
        </Box>
      </Stack>

      <CardContent sx={{ padding: '15px' }}>{children}</CardContent>
    </Card>
  );
};

export const Home = () => {
  return (
    <Grid container width={{ sm: 'auto', md: '700px' }} sx={{ flexGrow: 1 }} spacing={2}>
      <Grid md={6} xs={12}>
        <HomeCard
          color="rgba(206, 66, 43, 1)"
          title="Roullete"
          logo={roulleteLogo}
          height="250px"
        ></HomeCard>
      </Grid>
      <Grid xs={12} md={6}>
        <HomeCard
          color="rgba(171, 35, 235, 1)"
          title="Slots"
          logo={slotsLogo}
          height="250px"
        ></HomeCard>
      </Grid>
      <Grid xs={12} md={4}>
        <HomeCard
          color="rgba(154, 240, 113, 1)"
          title="Crash"
          logo={crashLogo}
          height="200px"
        ></HomeCard>
      </Grid>
      <Grid xs={12} md={4}>
        <HomeCard
          color="rgba(39, 143, 219, 1)"
          title="Case"
          logo={caseLogo}
          height="200px"
        ></HomeCard>
      </Grid>
      <Grid xs={12} md={4}>
        <HomeCard
          color="rgba(244, 147, 0, 1)"
          title="Upgrate"
          logo={upgrateLogo}
          height="200px"
        ></HomeCard>
      </Grid>
      <Grid xs={12} md={6}>
        <HomeCard
          color="rgba(0, 240, 255, 1)"
          title="Dice"
          logo={diceLogo}
          height="250px"
        ></HomeCard>
      </Grid>
      <Grid xs={12} md={6}>
        <HomeCard
          color="rgba(219, 255, 0, 1)"
          title="Case Battles"
          logo={caseBattlesLogo}
          height="250px"
        ></HomeCard>
      </Grid>
    </Grid>
  );
};

HomeCard.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};
