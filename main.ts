/**
 * First Level
 */
/**
 * Fourth level
 */
/**
 * Third level
 */
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.showLongText("Level 2", DialogLayout.Full)
    tiles.setTilemap(tilemap`level4`)
    controller.moveSprite(mySprite, 80, 80)
    Ghost.setFlag(SpriteFlag.AutoDestroy, true)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
    Ghost_2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost_2.follow(mySprite, 55)
    tiles.placeOnRandomTile(Ghost_2, sprites.builtin.forestTiles16)
    Ghost_2.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.showLongText("Level 4", DialogLayout.Full)
    game.showLongText("P.S. Don't get burnt.", DialogLayout.Full)
    tiles.setTilemap(tilemap`level10`)
    controller.moveSprite(mySprite, 80, 80)
    Ghost_3.setFlag(SpriteFlag.AutoDestroy, true)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenNorth)
    Ghost_4 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost_4.follow(mySprite, 55)
    Ghost_4.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnRandomTile(Ghost_4, assets.tile`myTile6`)
})
/**
 * Lava inst kill feature
 */
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.showLongText("Level 3", DialogLayout.Full)
    tiles.setTilemap(tilemap`level6`)
    controller.moveSprite(mySprite, 80, 80)
    Ghost_2.setFlag(SpriteFlag.AutoDestroy, true)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
    Ghost_3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost_3.follow(mySprite, 55)
    Ghost_3.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnRandomTile(Ghost_3, sprites.dungeon.floorDark1)
})
/**
 * Ending Credits
 */
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.showLongText("Congratulations you've completed Maze Runner!", DialogLayout.Full)
    game.showLongText("Farewell - WillyWoo and Drizzy Dru", DialogLayout.Full)
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    info.changeLifeBy(1)
})
/**
 * Health and lives determiner
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    controller.moveSprite(mySprite, 100, 100)
})
/**
 * Second Level
 */
/**
 * Ghost go through walls
 */
// William B
// Andrew J
let Ghost_4: Sprite = null
let Ghost_3: Sprite = null
let Ghost_2: Sprite = null
let Ghost: Sprite = null
let mySprite: Sprite = null
game.setDialogFrame(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `)
game.setDialogTextColor(8)
game.showLongText("This is Maze Runner by WillyWoo and Drizzy Dru.", DialogLayout.Full)
game.showLongText("Watch out for the ghost, it'll kill you almost instantly.", DialogLayout.Full)
game.showLongText("In every level there is either a chest or a magical orb to make you advance to the next level.", DialogLayout.Full)
game.showLongText("Good Luck!", DialogLayout.Full)
info.setLife(150)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 80, 80)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLightMoss)
Ghost = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
Ghost.follow(mySprite, 55)
Ghost.setFlag(SpriteFlag.GhostThroughWalls, true)
tiles.placeOnRandomTile(Ghost, sprites.dungeon.doorLockedSouth)
