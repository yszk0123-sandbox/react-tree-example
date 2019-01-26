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
import { TreeItem } from './TreeItem';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      padding: theme.spacing.unit,
    },
  });

interface Props extends WithStyles<typeof styles> {
  item: TreeItemViewModel;
  itemVisibilityById: TreeItemVisibilityByIdViewModel;
  onClickItem: (item: TreeItemViewModel, event: React.MouseEvent) => void;
  onClickToggle: (item: TreeItemViewModel, event: React.MouseEvent) => void;
}

const TreeWithoutStyles: React.FunctionComponent<Props> = ({
  classes,
  item,
  itemVisibilityById,
  onClickItem,
  onClickToggle,
}) => {
  return (
    <TreeItem
      item={item}
      itemVisibilityById={itemVisibilityById}
      onClickItem={onClickItem}
      onClickToggle={onClickToggle}
    />
  );
};

export const Tree = withStyles(styles)(TreeWithoutStyles);
