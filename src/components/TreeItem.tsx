import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FolderIcon from '@material-ui/icons/Folder';
import MovieIcon from '@material-ui/icons/Movie';
import React, { CSSProperties } from 'react';
import {
  TreeItemViewModel,
  TreeItemVisibilityByIdViewModel,
} from '../ducks/TreeSelectors/TreeViewModels';

const styles = (theme: Theme) =>
  createStyles({
    children: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: theme.spacing.unit,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing.unit,
    },
    item: {
      alignItems: 'center',
      display: 'flex',
    },
    title: {
      marginLeft: theme.spacing.unit,
    },
  });

function renderToggleIcon(visible: boolean): JSX.Element {
  return visible ? <ArrowDropDownIcon /> : <ArrowRightIcon />;
}

function renderTypeIcon(item: TreeItemViewModel): JSX.Element {
  return item.children !== undefined ? <FolderIcon /> : <MovieIcon />;
}

interface Props extends WithStyles<typeof styles> {
  item: TreeItemViewModel;
  itemVisibilityById: TreeItemVisibilityByIdViewModel;
  onClickItem: (item: TreeItemViewModel, event: React.MouseEvent) => void;
  onClickToggle: (item: TreeItemViewModel, event: React.MouseEvent) => void;
}

const TreeItemWithoutStyles: React.FunctionComponent<Props> = ({
  classes,
  item,
  itemVisibilityById,
  onClickItem,
  onClickToggle,
}) => {
  const visible = itemVisibilityById[item.id] === true;
  const toggleIcon = renderToggleIcon(visible);
  const typeIcon = renderTypeIcon(item);
  const toggleButtonStyle: CSSProperties =
    item.children !== undefined
      ? {}
      : { visibility: 'hidden', pointerEvents: 'none' };

  const handleClickToggle = (event: React.MouseEvent) => {
    onClickToggle(item, event);
  };
  const handleClickItem = (event: React.MouseEvent) => {
    onClickItem(item, event);
  };

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div style={toggleButtonStyle} onClick={handleClickToggle}>
          {toggleIcon}
        </div>
        <div>{typeIcon}</div>
        <div className={classes.title} onClick={handleClickItem}>
          {item.title}
        </div>
      </div>
      <div className={classes.children}>
        {visible && item.children !== undefined
          ? item.children.map(child => {
              return (
                <div key={child.id}>
                  <TreeItem
                    item={child}
                    itemVisibilityById={itemVisibilityById}
                    onClickItem={onClickItem}
                    onClickToggle={onClickToggle}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export const TreeItem = withStyles(styles)(TreeItemWithoutStyles);
