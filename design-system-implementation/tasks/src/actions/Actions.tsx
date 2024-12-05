import { Box, Button } from '@mui/material';

export default function Actions() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Button variant="outlined" color="secondary" component="a" href="#">
        Create Item
      </Button>
      <Button variant="outlined" color="secondary" component="a" href="#">
        Update Item
      </Button>
      <Button variant="outlined" color="secondary" component="a" href="#">
        Delete Item
      </Button>
    </Box>
  );
}
