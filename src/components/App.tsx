import Button from '@material-ui/core/Button';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import React from 'react';
import {
  TreeItemViewModel,
  TreeItemVisibilityByIdViewModel,
} from '../ducks/TreeSelectors/TreeViewModels';
import { Tree } from './Tree';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing.unit,
    },
  });

const ITEM: TreeItemViewModel = {
  children: [
    {
      id: 'id-1-1',
      title: 'content-1-1',
    },
    {
      id: 'id-1-2',
      title: 'content-1-2',
    },
    {
      children: [
        {
          id: 'id-1-3-1',
          title: 'content-1-3-1',
        },
      ],
      id: 'id-1-3',
      title: 'dir-1-3',
    },
    {
      id: 'id-1-4',
      title: 'content-1-4',
    },
  ],
  id: 'id-1',
  title: 'dir-1',
};

interface Props extends WithStyles<typeof styles> {}

interface State {
  itemVisibilityById: TreeItemVisibilityByIdViewModel;
}

class AppWithoutStyles extends React.Component<Props> {
  public state: State = {
    itemVisibilityById: {},
  };

  public render() {
    const { classes } = this.props;
    const { itemVisibilityById } = this.state;

    return (
      <div className={classes.container}>
        <Button>Hello</Button>
        <Tree
          item={ITEM}
          itemVisibilityById={itemVisibilityById}
          onClickItem={this.onClickItem}
          onClickToggle={this.onClickToggle}
        />
      </div>
    );
  }

  private onClickItem = (item: TreeItemViewModel, event: React.MouseEvent) => {
    // tslint:disable-next-line:no-console
    console.log('click', item);
  };
  private onClickToggle = (
    item: TreeItemViewModel,
    event: React.MouseEvent,
  ) => {
    // tslint:disable-next-line:no-console
    console.log('toggle', item);

    const visibility = this.state.itemVisibilityById[item.id];
    this.setState({
      itemVisibilityById: {
        ...this.state.itemVisibilityById,
        [item.id]: !visibility,
      },
    });
  };
}

export const App = withStyles(styles)(AppWithoutStyles);
