import { ID, StrictRecord } from '../../application/ApplicationTypes';

export interface TreeItemViewModel {
  children?: Array<TreeItemViewModel>;
  id: ID;
  title: string;
}

export type TreeItemVisibilityModel = boolean;

export type TreeItemVisibilityByIdState = StrictRecord<
  ID,
  TreeItemVisibilityModel
>;

export type TreeItemVisibilityByIdViewModel = TreeItemVisibilityByIdState;
