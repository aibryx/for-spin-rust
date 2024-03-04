import Card from '@mui/joy/Card';
import PropTypes from 'prop-types';

export const CustomCard = ({ children, styles }) => {
  return (
    <Card
      sx={{
        border: '1px solid black',
        boxShadow: 'black 3px 3px 0px -1px, black 4px 4px',
        borderRadius: '0',
        ...styles,
      }}
    >
      {children}
    </Card>
  );
};

CustomCard.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
};
