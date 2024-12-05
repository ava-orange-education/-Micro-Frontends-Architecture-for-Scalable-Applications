import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const Menu = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        border: '1px solid',
        borderColor: 'secondary.light',
        justifyContent: 'space-between',
      }}
      mb={2}
    >
      <Box display="flex" gap={2}>
        <Button component={Link} color="secondary" to="/">
          My Todo List
        </Button>
        <Button component={Link} color="secondary" to="/favorite-lists">
          Favorite lists
        </Button>
        <Button component={Link} color="secondary" to="/other-todo-lists">
          Others Todo lists
        </Button>
      </Box>
      <Box flexGrow={2} display="flex" justifyContent="flex-end">
        <Button component={Link} color="secondary" to="/profile">
          My Profile
        </Button>
      </Box>
    </Box>
  );
};

export default Menu;
