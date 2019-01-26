import { ID, StrictRecord } from '../../application/ApplicationTypes';

export enum TreeItemType {
  DIRECTORY = 'DIRECTORY',
  FILE = 'FILE',
}

export interface TreeItemViewModel {
  children?: Array<TreeItemViewModel>;
  id: ID;
  itemType: TreeItemType;
  title: string;
}

export type TreeItemVisibilityModel = boolean;

export type TreeItemVisibilityByIdState = StrictRecord<
  ID,
  TreeItemVisibilityModel
>;

export type TreeItemVisibilityByIdViewModel = TreeItemVisibilityByIdState;
