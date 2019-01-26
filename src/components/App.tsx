import Button from '@material-ui/core/Button';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing.unit,
    },
  });

interface Props extends WithStyles<typeof styles> {}

const AppWithoutStyles: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Button>Hello</Button>
    </div>
  );
};

export const App = withStyles(styles)(AppWithoutStyles);
