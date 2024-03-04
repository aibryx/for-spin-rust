import * as React from 'react';

import PropType from 'prop-types';
import { Outlet } from 'react-router';
import { CustomButton } from '../elements/button';

import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Avatar from '@mui/joy/Avatar';
import Input from '@mui/joy/Input';

import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronsRight, ChevronRight } from 'lucide-react';
import { CustomCard } from '../elements/card';

import twitchLogo from '../../../public/footer/twitch.png';
import instLogo from '../../../public/footer/inst.png';
import discordLogo from '../../../public/footer/discord.png';
import facebookLogo from '../../../public/footer/facebook.png';
import twitterLogo from '../../../public/footer/twitter.png';
import visaLogo from '../../../public/footer/visa.png';
import mastercardLogo from '../../../public/footer/mastercard.png';
import ethereumLogo from '../../../public/footer/ethereum.png';

import logo from '../../../public/logo.png';
import coin from '../../../public/coin.png';
import cow from '../../../public/cow.png';
import level from '../../../public/level.png';
import point from '../../../public/point.png';
import i from '../../../public/i.png';
import en from '../../../public/flags/en.png';
import greenPoint from '../../../public/green_point.png';
import smile from '../../../public/smile.png';
import gun from '../../../public/gun.png';

const LOGOS = [
  { src: twitchLogo },
  { src: instLogo },
  { src: discordLogo },
  { src: facebookLogo },
  { src: twitterLogo },
  { src: visaLogo },
  { src: mastercardLogo },
  { src: ethereumLogo },
];

const LINKS = [
  { to: '/contact', title: 'CONTACT' },
  { to: '/blog', title: 'BLOG' },
  { to: '/faq', title: 'FAQ' },
  { to: '/terms-of-service', title: 'TERMS OF SERVICE' },
  { to: '/privacy-statment', title: 'PRIVACY STATMENT' },
  { to: '/provably-fair', title: 'PROVABLY FAIR' },
  { to: '/coookie-policy', title: 'COOKIE POLICY' },
  { to: '/aml-policy', title: 'AML POLICY' },
];

export const MainLayout = () => {
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      username: 'Werden',
      message: 'I WON !!!!!🎭🎭🎭🎭🎭',
      logo: '../../../public/avatar.png',
      isWin: false,
      winMeta: {},
      role: null,
    },
    {
      id: 2,
      username: 'Werden',
      message: 'I WON 2 !!!!!🎭🎭🎭🎭🎭',
      logo: '../../../public/avatar.png',
      isWin: false,
      winMeta: {},
      role: null,
    },
    {
      id: 3,
      username: 'Werden',
      message: 'I WON 3 !!!!!🎭🎭🎭🎭🎭',
      logo: '../../../public/avatar.png',
      isWin: false,
      winMeta: {},
      role: null,
    },
    {
      id: 4,
      username: 'Werden',
      message: 'I WON 4 !!!!!🎭🎭🎭🎭🎭',
      logo: '../../../public/avatar.png',
      isWin: false,
      winMeta: {},
      role: null,
    },
    {
      id: 5,
      username: 'Werden',
      message: null,
      logo: '../../../public/avatar.png',
      isWin: true,
      winMeta: {
        total: '52.80',
        from: 'Surfs Up',
      },
      role: null,
    },
    {
      id: 6,
      username: 'WerdenAdmin',
      message:
        'И нет сомнений, что активно развивающиеся страны третьего мира призывают нас к новым свершениям, которые, в свою очередь, должны быть объявлены нарушающими общечеловеческие нормы этики и морали. Но многие известные личности, инициированные исключительно синтетически, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. В своём стремлении улучшить пользовательский опыт мы упускаем, что диаграммы связей являются только методом политического участия и объединены в целые кластеры себе подобных.',
      logo: '../../../public/avatar.png',
      isWin: false,
      winMeta: {},
      role: 'ADMIN',
    },
  ]);

  const [drops] = React.useState([
    {
      id: 1,
      name: 'Cold Haunter AK',
      price: 155.02,
      color: 'rgba(48, 219, 168, 1)',
      logo: gun,
    },
    {
      id: 2,
      name: 'Cold Haunter AK',
      price: 155.02,
      color: 'rgba(206, 66, 43, 1)',
      logo: gun,
    },
    {
      id: 3,
      name: 'Cold Haunter AK',
      price: 155.02,
      color: 'rgba(171, 35, 235, 1)',
      logo: gun,
    },
    {
      id: 4,
      name: 'Cold Haunter AK',
      price: 155.02,
      color: 'rgba(39, 143, 219, 1)',
      logo: gun,
    },
    {
      id: 5,
      name: 'Cold Haunter AK',
      price: 155.02,
      color: 'rgba(48, 219, 168, 1)',
      logo: gun,
    },
  ]);

  const [input, setInput] = React.useState('');

  const sendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      sendMessage({ username: 'User', message: input, logo: '../../../public/avatar.png' });
      setInput('');
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [input, messages]);

  return (
    <Sheet sx={{ height: '100vh' }}>
      <header>
        <Box
          sx={{
            backgroundColor: 'rgba(250, 244, 240, 1)',
            width: '100%',
            padding: '10px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: { xs: '60px', sm: '92px' },
          }}
        >
          <Box
            sx={{
              gap: '20px',
              display: ['none', 'none', 'none', 'flex'],
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <CustomButton>
              <ChevronLeft />
            </CustomButton>
            <Link style={{ textDecoration: 'none' }}>
              <Typography
                sx={{ fontSize: '40px', lineHeight: '52px', fontWeight: '700', color: 'black' }}
              >
                HOME
              </Typography>
            </Link>
            <CustomButton>
              GAMES <ChevronRight />
            </CustomButton>

            <CustomButton
              shadowBackground={'transparent'}
              styles={{ backgroundColor: 'rgba(0, 220, 154, 1)' }}
            >
              PPOMO
            </CustomButton>

            <CustomButton>REWARDS</CustomButton>
          </Box>

          <Box sx={{ width: { xs: '100px', sm: '150px' } }}>
            <img width="100%" src={logo} alt="logo" />
          </Box>

          <Box sx={{ display: ['none', 'none', 'none', 'flex'], gap: '15px' }}>
            <CustomButton>WITHDRAW</CustomButton>

            <CustomButton
              shadowBackground={'transparent'}
              styles={{ backgroundColor: 'rgba(0, 220, 154, 1)' }}
            >
              DEPOSIT
            </CustomButton>

            <CustomButton>
              9999999.99
              <img style={{ paddingLeft: '5px' }} width="20px" src={coin} />
            </CustomButton>

            <CustomButton>
              <img width="20px" src={cow} />
            </CustomButton>

            <img width="40px" src={level} />
          </Box>
        </Box>
      </header>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 40px' }}>
        <aside>
          <Box
            sx={{
              width: '320px',
              display: ['none', 'none', 'none', 'block'],
            }}
          >
            <CustomCard styles={{ marginBottom: '10px' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={1}
                >
                  <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    <Typography
                      sx={{
                        color: 'rgba(0,0,0,1)',
                        fontSize: '24px',
                        fontWeight: '700',
                        lineHeight: '33px',
                      }}
                    >
                      Live
                    </Typography>
                    <img width="20px" src={point} />
                  </Stack>

                  <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    <Typography
                      sx={{
                        color: 'rgba(0,0,0,0.5)',
                        fontSize: '14px',
                        fontWeight: '700',
                        lineHeight: '33px',
                      }}
                    >
                      PAIN POOL
                    </Typography>
                    <img width="15px" src={i} />
                  </Stack>
                </Stack>

                <CustomButton
                  styles={{ width: '150px', height: '50px' }}
                  shadowBackground={'white'}
                >
                  <Typography level="h3">155.02</Typography>
                  <img style={{ paddingLeft: '5px' }} width="30px" src={coin} />
                </CustomButton>
              </Stack>
            </CustomCard>

            <Box
              sx={{
                width: '100%',
                height: '500px',
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
              }}
            >
              {messages.length > 0 &&
                messages.map((message) => {
                  return (
                    <CustomCard styles={{ marginTop: '20px' }} key={message.id}>
                      <Stack direction="row" justifyContent="flex-start" gap="15px">
                        {message.isWin ? (
                          <>
                            <Avatar src={message.logo} />
                            <Box>
                              <Typography level="h4" fontWeight="bold">
                                {message.username}:
                              </Typography>
                              <Typography fontWeight="bold" level="h6">
                                Won |{' '}
                                <Typography sx={{ color: 'rgba(48,219,168,1)' }}>
                                  {message.winMeta.total}
                                </Typography>{' '}
                                | <img style={{ paddingLeft: '5px' }} width="20px" src={coin} />{' '}
                                from {message.winMeta.from}
                                <CustomButton
                                  shadowBackground={'transparent'}
                                  styles={{
                                    width: '100%',
                                    backgroundColor: 'rgba(0, 220, 154, 1)',
                                    marginTop: '10px',
                                  }}
                                >
                                  VIEW CASE
                                </CustomButton>
                              </Typography>
                            </Box>
                          </>
                        ) : (
                          <>
                            <Avatar src={message.logo} />
                            <Box>
                              <Typography
                                level="h4"
                                fontWeight="bold"
                                sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                              >
                                {message.role ? (
                                  <CustomButton
                                    styles={{
                                      boxShadow: 'none',
                                      height: '30px',
                                      border: '3px solid black',
                                      color: 'white',
                                      backgroundColor: 'rgba(233, 63, 63, 1)',
                                    }}
                                  >
                                    {message.role}
                                  </CustomButton>
                                ) : null}
                                {message.username}:
                              </Typography>
                              <Typography fontWeight="bold" level="h6">
                                {message.message}
                              </Typography>
                            </Box>
                          </>
                        )}
                      </Stack>
                    </CustomCard>
                  );
                })}
            </Box>

            <Box
              sx={{
                border: '1px solid black',
                boxShadow: 'black 3px 3px 0px -1px, black 4px 4px',
                marginTop: '20px',
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack
                  sx={{ width: '100%', padding: '0px 5px' }}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={1}>
                    <img width="30px" src={en} />
                    <Typography fontWeight={600}>English</Typography>
                  </Stack>
                  <Stack
                    sx={{ width: 'auto' }}
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img width="10px" src={greenPoint} />
                    <Typography fontWeight={600}>1.225</Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ borderLeft: '1px solid black' }}
                >
                  <CustomButton styles={{ boxShadow: 'none', border: 'none' }}>
                    <ChevronsRight />
                  </CustomButton>
                </Stack>
              </Stack>
            </Box>
            <Stack
              sx={{ marginTop: '20px' }}
              height="40px"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Input
                sx={{
                  height: '100%',
                  borderRadius: '0',
                  borderColor: 'black',
                  boxShadow: 'black 3px 3px 0px -1px, black 4px 4px',
                }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message here..."
              />
              <CustomButton
                styles={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: 'black 3px 3px 0px -1px, black 4px 4px',
                }}
              >
                <img width="20px" src={smile} />
              </CustomButton>
            </Stack>
          </Box>
        </aside>
        <main>
          <Outlet />
        </main>
        <aside>
          <Box
            sx={{
              width: '320px',
              display: ['none', 'none', 'none', 'block'],
            }}
          >
            <CustomCard styles={{ marginBottom: '10px' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                <Typography
                  sx={{
                    color: 'rgba(0,0,0,1)',
                    fontSize: '20px',
                    fontWeight: '700',
                    lineHeight: '33px',
                  }}
                >
                  LIVE DROP
                </Typography>

                <Stack direction="row" alignItems="center">
                  <CustomButton styles={{ boxShadow: 'none', border: 'none' }}>
                    <Typography>TOP </Typography>
                  </CustomButton>
                  /
                  <CustomButton styles={{ boxShadow: 'none', border: 'none' }}>
                    <Typography>ALL</Typography>
                  </CustomButton>
                </Stack>
              </Stack>
            </CustomCard>

            <Box
              sx={{
                width: '100%',
                height: '700px',
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
              }}
            >
              {drops.length > 0 &&
                drops.map((drop) => {
                  return (
                    <CustomCard styles={{ marginTop: '20px' }} key={drop.id}>
                      <Stack direction="row" justifyContent="flex-start" gap="15px">
                        <Box
                          sx={{ background: drop.color, padding: '7px', border: '2px solid black' }}
                        >
                          <img width="50px" src={drop.logo} />
                        </Box>
                        <Box>
                          <Typography
                            level="h4"
                            fontWeight="bold"
                            sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                          >
                            {drop.name}:
                          </Typography>
                          <Typography fontWeight="bold" level="h6">
                            <CustomButton
                              shadowBackground="white"
                              styles={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                              }}
                            >
                              {drop.price}
                              <img style={{ paddingLeft: '5px' }} width="20px" src={coin} />
                            </CustomButton>
                          </Typography>
                        </Box>
                      </Stack>
                    </CustomCard>
                  );
                })}
            </Box>
          </Box>
        </aside>
      </Box>
      <footer>
        <Stack diraction="row" justifyContent="center" alignItems="center">
          <Stack
            sx={{ width: ['auto', 'auto', '700'] }}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Typography level={{ xs: 'h2', md: 'h1' }} fontWeight="bold">
              SPINRUST
            </Typography>
            <Typography
              level={{ sm: 'h2', md: 'h3' }}
              sx={{ marginBottom: '40px', padding: { xs: '20px', sm: 0 } }}
            >
              © 2023 SPINRUST. All Rights Reserved | Terms & Conditions.
            </Typography>

            <Stack
              sx={{ marginBottom: '20px', display: ['none', 'none', 'none', 'block'] }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {LOGOS.map((logo, index) => {
                return (
                  <img key={index} height="55px" style={{ minWidth: '55px' }} src={logo.src} />
                );
              })}
            </Stack>

            <Stack
              sx={{ marginBottom: '20px' }}
              direction={{ sm: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
            >
              {LINKS.map((link) => {
                return (
                  <Link style={{ color: 'black', fontSize: '12px' }} key={link.title} to={link.to}>
                    {link.title}
                  </Link>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </footer>
    </Sheet>
  );
};

MainLayout.propTypes = {
  children: PropType.node.isRequired,
};
