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
  TreeItemType,
  TreeItemViewModel,
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

function renderTypeIcon(itemType: TreeItemType): React.ReactNode {
  switch (itemType) {
    case TreeItemType.DIRECTORY:
      return <FolderIcon />;
    case TreeItemType.FILE:
      return <MovieIcon />;
    default:
      return null;
  }
}

interface Props extends WithStyles<typeof styles> {
  item: TreeItemViewModel;
  onClickItem: (item: TreeItemViewModel, event: React.MouseEvent) => void;
  onClickToggle: (item: TreeItemViewModel, event: React.MouseEvent) => void;
}

const TreeItemWithoutStyles: React.FunctionComponent<Props> = ({
  classes,
  children,
  item,
  onClickItem,
  onClickToggle,
}) => {
  const visible = children !== null;
  const typeIcon = renderTypeIcon(item.itemType);
  const toggleButtonStyle: CSSProperties =
    item.itemType === TreeItemType.DIRECTORY
      ? {}
      : { visibility: 'hidden', pointerEvents: 'none' };
  const toggleIcon = renderToggleIcon(visible);
  const title = item.title;

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
          {title}
        </div>
      </div>
      {visible ? <div className={classes.children}>{children}</div> : null}
    </div>
  );
};

export const TreeItem = withStyles(styles)(TreeItemWithoutStyles);
