import { TextField } from '@mui/material';

interface SearchProps {
  label: string;
}

export default function Search(props: SearchProps) {
  return <TextField label={props.label} variant="outlined" />;
}
