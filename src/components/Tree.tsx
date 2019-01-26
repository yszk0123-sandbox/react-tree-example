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
      flexDirection: 'column',
      padding: theme.spacing.unit,
    },
  });

interface Props extends WithStyles<typeof styles> {
  items: Array<TreeItemViewModel>;
  itemVisibilityById: TreeItemVisibilityByIdViewModel;
  onClickItem: (item: TreeItemViewModel, event: React.MouseEvent) => void;
  onClickToggle: (item: TreeItemViewModel, event: React.MouseEvent) => void;
}

const TreeWithoutStyles: React.FunctionComponent<Props> = ({
  classes,
  items,
  itemVisibilityById,
  onClickItem,
  onClickToggle,
}) => {
  return (
    <div className={classes.container}>
      {items.map(item => {
        const visible = itemVisibilityById[item.id] === true;

        return (
          <TreeItem
            key={item.id}
            item={item}
            onClickItem={onClickItem}
            onClickToggle={onClickToggle}
          >
            {visible && item.children !== undefined ? (
              <Tree
                items={item.children}
                itemVisibilityById={itemVisibilityById}
                onClickItem={onClickItem}
                onClickToggle={onClickToggle}
              />
            ) : null}
          </TreeItem>
        );
      })}
    </div>
  );
};

export const Tree = withStyles(styles)(TreeWithoutStyles);
