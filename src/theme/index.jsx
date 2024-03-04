import { extendTheme } from '@mui/joy/styles';

export const mainTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#228be6',
          solidHoverBg: '#1c7ed6',
          solidActiveBg: undefined,
          softColor: '#228be6',
          softBg: 'rgba(231, 245, 255, 1)',
          softHoverBg: 'rgba(208, 235, 255, 0.65)',
          softActiveBg: undefined,
          outlinedColor: '#228be6',
          outlinedBorder: '#228be6',
          outlinedHoverBg: 'rgba(231, 245, 255, 0.35)',
          outlinedHoverBorder: undefined,
          outlinedActiveBg: undefined,
        },
      },
    },
  },
  fontFamily: {
    body: 'IBM Plex Mono, monospace',
  },
  focus: {
    default: {
      outlineWidth: '2px',
      outlineOffset: '2px',
      outlineColor: '#339af0',
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: () => ({
          transition: 'initial',
          borderRadius: '0px',
          fontWeight: 700,
          padding: '5px 10px',
          color: 'black',
        }),
      },
    },
  },
});
