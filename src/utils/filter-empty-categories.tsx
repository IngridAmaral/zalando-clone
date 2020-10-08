import { TChildren } from '../components/header/Header';

export const filterEmptyCategrories = (list: TChildren[]) => list.filter((item) => item.name !== '--');