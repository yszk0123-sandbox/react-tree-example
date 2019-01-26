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
    <div className={classes.container}>
      {item.children !== undefined
        ? item.children.map(child => {
            const visible = itemVisibilityById[child.id] === true;

            return (
              <div key={child.id}>
                <TreeItem
                  item={child}
                  onClickItem={onClickItem}
                  onClickToggle={onClickToggle}
                >
                  {visible ? (
                    <Tree
                      item={child}
                      itemVisibilityById={itemVisibilityById}
                      onClickItem={onClickItem}
                      onClickToggle={onClickToggle}
                    />
                  ) : null}
                </TreeItem>
              </div>
            );
          })
        : null}
    </div>
  );
};

export const Tree = withStyles(styles)(TreeWithoutStyles);
