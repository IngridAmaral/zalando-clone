type TList = {
    name: string
}

export const filterEmptyCategrories = (list: TList[]) => list.filter((item) => item.name !== '--');