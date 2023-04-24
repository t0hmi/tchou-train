export enum Empty {
    EMPTY = 'EMPTY'
}

export enum Rail {
    HORIZONTAL = 'HORIZONTAL',
    VERTICAL = 'VERTICAL'
}

export enum Nature {
    TREE = 'TREE',
    LAKE = 'LAKE',
    MOUNTAIN = 'MOUNTAIN'
}

export enum Building {
    HOUSE = 'HOUSE'
}

export const Tile = {
    // ...Building, [TODO] ADD IMG IN ASSETS
    // ...Nature, [TODO] ADD IMG IN ASSETS
    ...Rail,
    ...Empty
};