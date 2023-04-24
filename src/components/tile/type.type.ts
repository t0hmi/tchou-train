export enum Empty {
    EMPTY = 'EMPTY'
}

export enum Rail {
    HORIZONTAL = 'HORIZONTAL',
    VERTICAL = 'VERTICAL',
    TURN_LEFT = 'TURN-LEFT',
    TURN_RIGHT = 'TURN-RIGHT',
    TURN_REVERSE_LEFT = 'TURN-REVERSE-LEFT',
    TURN_REVERSE_RIGHT = 'TURN-REVERSE-RIGHT',
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