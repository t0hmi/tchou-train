export enum Empty {
    EMPTY = 'EMPTY',
}

export enum Tool {
    ERASOR = 'ERASOR',
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

export const TileType = {
    ...Empty,
    ...Rail,
    ...Nature,
    ...Building,
    ...Tool
}

export const Tile = {
    ...Empty,
    ...Rail,
    ...Nature,
    ...Building
};