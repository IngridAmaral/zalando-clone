import { TSubSubCategory } from '../components/header/Header';

export const filterEmptyCategrories = (
  list: TSubSubCategory[]
): TSubSubCategory[] => list.filter((item) => item.name !== '--');
