import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import PropTypes from 'prop-types';

export const CustomButton = ({ children, styles = {}, shadowBackground }) => {
  return (
    <Box>
      <Button
        variant="outlined"
        sx={{
          position: 'relative',
          zIndex: '2',
          background: 'parrent',
          borderColor: 'black',
          boxShadow: `${shadowBackground ? shadowBackground : 'rgba(250, 244, 240, 1)'} 5px 5px 0px -1px, black 5px 5px`,
          ...styles,
        }}
      >
        {children}
      </Button>
    </Box>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
  shadowBackground: PropTypes.string,
};
