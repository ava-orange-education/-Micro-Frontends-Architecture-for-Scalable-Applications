import tasks from './tasks.json';

import type { MicroFrontendNavigation } from './NavigationPublicContract';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

// Micro Frontend implementation which consumes the shell routing public contract
export interface TasksProps extends MicroFrontendNavigation {
  title?: string;
}

export default function Tasks({ onNavigate, ...rest }: TasksProps) {
  return (
    <>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h4">{rest.title ?? 'Tasks'}</Typography>
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardContent>
              <Typography variant="h5">{task.title}</Typography>
              <Typography variant="body2">{task.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Check details</Button>
            </CardActions>
          </Card>
        ))}
        <Button onClick={() => onNavigate('profile')}>
          Check your profile
        </Button>
      </Box>
    </>
  );
}

export * from './NavigationPublicContract';
