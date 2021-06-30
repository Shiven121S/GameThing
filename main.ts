let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 8 9 9 8 f . . . . . 
    . . . f 8 9 9 9 9 9 8 f . . . . 
    . . f 8 9 9 f f f f 9 f . . . . 
    . f 8 9 9 f f f f f f . . . . . 
    . f 9 9 9 f 1 1 f f 1 . . . . . 
    . f 8 f 9 f f f f f f . . . . . 
    . . f f 9 8 f f f f f . . . . . 
    . . . f 9 9 9 9 9 9 f . . . . . 
    . . f 8 9 9 8 9 9 9 f . . . . . 
    . . f 9 9 8 f 9 9 8 f . . . . . 
    . . f f 8 9 f f f f . . . . . . 
    . . . f f f . . f f . . . . . . 
    . . . f f . . . f f . . . . . . 
    . . . f . . . . f . . . . . . . 
    `, SpriteKind.Player)
color.setColor(5, color.rgb(130, 170, 40))
color.setColor(7, color.rgb(89, 127, 30))
color.setColor(6, color.rgb(55, 97, 41))
color.setColor(12, color.rgb(34, 31, 49))
color.setColor(14, color.rgb(68, 36, 52))
color.setColor(1, color.rgb(78, 74, 78))
color.setColor(15, color.rgb(51, 51, 51))
color.setColor(9, color.rgb(103, 143, 203))
color.setColor(8, color.rgb(52, 92, 152))
tiles.setSmallTilemap(tilemap`level5`)
controller.moveSprite(mySprite, 100, 40)
mySprite.ay = 175
game.onUpdate(function () {
    character.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 8 9 9 8 f f . . . . 
        . . . . f 8 9 9 9 9 9 8 f . . . 
        . . . . f 9 f f f f 9 9 8 f . . 
        . . . . . f f f f f f 9 9 8 f . 
        . . . . . 1 f f 1 1 f 9 9 9 f . 
        . . . . . f f f f f f 9 f 8 f . 
        . . . . . f f f f f 8 9 f f . . 
        . . . . . f 9 9 9 9 9 9 f . . . 
        . . . . . f 9 9 9 8 9 9 8 f . . 
        . . . . . f 8 9 9 f 8 9 9 f . . 
        . . . . . . f f f f 9 8 f f . . 
        . . . . . . f f . . f f f . . . 
        . . . . . . f f . . . f f . . . 
        . . . . . . . f . . . . f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 8 9 9 8 f . . . . . 
        . . . . f 9 9 9 9 9 9 f f . . . 
        . . . . f 9 f f f f 9 9 8 f . . 
        . . . . . f f f f f f 9 9 f . . 
        . . . . . f f f f f f 9 9 8 f . 
        . . . . . 1 f f 1 1 f 9 f 8 f . 
        . . . . . f f f f f 8 9 f f f . 
        . . . . . f 9 9 9 9 9 9 8 f . . 
        . . . . . f 8 9 9 9 8 9 9 8 f . 
        . . . . . f f 8 9 9 f 8 9 9 f . 
        . . . . . . f f f f 9 f 8 9 f . 
        . . . . . . f f . . f f f f . . 
        . . . . . . f f . . . f f . . . 
        . . . . . . . f . . . . f . . . 
        `,img`
        . . . . . . . f f f . . . . . . 
        . . . . . f f 9 9 8 f f . . . . 
        . . . . f 8 9 9 9 9 9 8 f . . . 
        . . . . f 9 f f f f 9 9 f . . . 
        . . . . f f f f f f f 9 9 f . . 
        . . . . f f f f f f f 9 9 8 f . 
        . . . . . 1 f f 1 1 f 9 f 8 f . 
        . . . . . f f f f f 8 9 f f f . 
        . . . . . f 9 9 9 9 9 9 f . . . 
        . . . . . f 9 9 9 9 9 9 8 f . . 
        . . . . . f 9 8 9 9 9 8 9 8 f . 
        . . . . . . f f 8 9 9 f 8 9 f . 
        . . . . . . f f f f f 8 f f . . 
        . . . . . . f f . . f f f . . . 
        . . . . . . f f . . . f f . . . 
        . . . . . . . f . . . . f . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 8 9 9 9 f f . . . . 
        . . . . f 8 9 9 9 9 9 8 f . . . 
        . . . . f 9 f f f f 9 9 8 f . . 
        . . . . 8 f f f f f f 9 9 f . . 
        . . . . . f f f f f f 9 9 9 f . 
        . . . . . 1 f f 1 1 f 9 f f f . 
        . . . . . f f f f f 8 9 f . . . 
        . . . . . f 9 9 9 9 9 9 f . . . 
        . . . . . f 9 9 9 9 9 9 8 f . . 
        . . . . . . f 9 8 9 9 9 8 9 f . 
        . . . . . . f 9 f 8 9 8 f f . . 
        . . . . . . f f f f 9 f f f . . 
        . . . . . . f f . . f f f . . . 
        . . . . . . f f . . . f f . . . 
        . . . . . . . f . . . . f . . . 
        `],
    75,
    character.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    character.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 8 9 9 8 f . . . . . 
        . . . f 8 9 9 9 9 9 8 f . . . . 
        . . f 8 9 9 f f f f 9 f . . . . 
        . f 8 9 9 f f f f f f . . . . . 
        . f 9 9 9 f 1 1 f f 1 . . . . . 
        . f 8 f 9 f f f f f f . . . . . 
        . . f f 9 8 f f f f f . . . . . 
        . . . f 9 9 9 9 9 9 f . . . . . 
        . . f 8 9 9 8 9 9 9 f . . . . . 
        . . f 9 9 8 f 9 9 8 f . . . . . 
        . . f f 8 9 f f f f . . . . . . 
        . . . f f f . . f f . . . . . . 
        . . . f f . . . f f . . . . . . 
        . . . f . . . . f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 8 9 9 8 f . . . . . 
        . . . f f 9 9 9 9 9 9 f . . . . 
        . . f 8 9 9 f f f f 9 f . . . . 
        . . f 9 9 f f f f f f . . . . . 
        . f 8 9 9 f f f f f f . . . . . 
        . f 8 f 9 f 1 1 f f 1 . . . . . 
        . f f f 9 8 f f f f f . . . . . 
        . . f 8 9 9 9 9 9 9 f . . . . . 
        . f 8 9 9 8 9 9 9 8 f . . . . . 
        . f 9 9 8 f 9 9 8 f f . . . . . 
        . f 9 8 f 9 f f f f . . . . . . 
        . . f f f f . . f f . . . . . . 
        . . . f f . . . f f . . . . . . 
        . . . f . . . . f . . . . . . . 
        `,img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 8 9 9 f f . . . . . 
        . . . f 8 9 9 9 9 9 8 f . . . . 
        . . . f 9 9 f f f f 9 f . . . . 
        . . f 9 9 f f f f f f f . . . . 
        . f 8 9 9 f f f f f f f . . . . 
        . f 8 f 9 f 1 1 f f 1 . . . . . 
        . f f f 9 8 f f f f f . . . . . 
        . . . f 9 9 9 9 9 9 f . . . . . 
        . . f 8 9 9 9 9 9 9 f . . . . . 
        . f 8 9 8 9 9 9 8 9 f . . . . . 
        . f 9 8 f 9 9 8 f f . . . . . . 
        . . f f 8 f f f f f . . . . . . 
        . . . f f f . . f f . . . . . . 
        . . . f f . . . f f . . . . . . 
        . . . f . . . . f . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 9 9 9 8 f . . . . . 
        . . . f 8 9 9 9 9 9 8 f . . . . 
        . . f 8 9 9 f f f f 9 f . . . . 
        . . f 9 9 f f f f f f 8 . . . . 
        . f 9 9 9 f f f f f f . . . . . 
        . f f f 9 f 1 1 f f 1 . . . . . 
        . . . f 9 8 f f f f f . . . . . 
        . . . f 9 9 9 9 9 9 f . . . . . 
        . . f 8 9 9 9 9 9 9 f . . . . . 
        . f 9 8 9 9 9 8 9 f . . . . . . 
        . . f f 8 9 8 f 9 f . . . . . . 
        . . f f f 9 f f f f . . . . . . 
        . . . f f f . . f f . . . . . . 
        . . . f f . . . f f . . . . . . 
        . . . f . . . . f . . . . . . . 
        `],
    75,
    character.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    character.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . f f 8 9 9 9 9 f . . . 
        . . f f f 8 9 9 f f f f f . . . 
        . . f 8 9 9 9 f f f f f f . . . 
        . . f 9 9 9 9 f f 1 1 f f . . . 
        . . . f 8 9 9 f f f f f f . . . 
        . . f f f f 9 8 f f f f . . . . 
        . f 8 9 9 9 9 9 9 9 f . . . . . 
        . f 9 9 9 8 f 9 9 8 f . . . . . 
        . . f 9 8 f 9 9 8 f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f f . . 
        . . . . . . . f f f 9 9 9 9 f . 
        . . . . . f f 8 9 9 f f f f f . 
        . . . . f 8 9 9 9 f f f f f f . 
        . . . . f 9 9 9 9 f f 1 1 f f . 
        . . . . . f 8 9 9 f f f f f f . 
        . . . . f f f f 9 8 f f f f . . 
        . . . f 8 9 9 9 9 9 9 9 f . . . 
        . . f 8 9 9 8 f 9 9 9 8 f . . . 
        . . f 9 8 f f 9 9 9 8 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . . f f . . . 
        . . . f f f . . . . . f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f f . . 
        . . . . . . . . . f 9 9 9 9 f . 
        . . . . f f f f f 9 9 9 9 9 f . 
        . . . . f 8 9 9 9 9 f f f f f . 
        . . . . f 9 9 9 9 f f 1 1 f f . 
        . . . . . f 8 9 9 f f f f f f . 
        . . . . . . f f 9 f f f f f f . 
        . . . f f f f f 9 8 f f f f . . 
        . . f 8 9 9 9 8 f 9 9 9 f . . . 
        . . f 9 9 8 f f 9 9 9 8 f . . . 
        . . . f f f 9 9 9 9 8 f f . . . 
        . . . . . f f f f f f f f . . . 
        . . . . . f f . . . f f . . . . 
        . . . . . . . . . . f f . . . . 
        . . . . . . . . . . . f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f . . 
        . . . . . . . . . . f 9 9 9 f . 
        . . . . . . . f f f 8 9 9 9 9 f 
        . . . . . f f 8 9 9 9 f f f f f 
        . . . . . f 9 9 9 9 f f f f f f 
        . . . . . . f 8 9 9 f f 1 1 f f 
        . . . . . . . f f 9 f f f f f f 
        . . . . . . f f 9 9 8 f f f f . 
        . . . . f f 9 9 9 9 9 9 8 f . . 
        . . . . f 8 f f 9 9 9 8 f f . . 
        . . . . . f 9 9 9 9 8 f 9 f . . 
        . . . . . . f f f f f f f f . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . . . f f . . . . 
        . . . . . . . . . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f . . . 
        . . . . . . . . f f 8 9 9 f f . 
        . . . . . . f f 8 9 9 f f f f f 
        . . . . . f 8 9 9 9 f f f f f f 
        . . . . . f f 9 9 9 f f 1 1 f f 
        . . . . . . . f f 9 f f f f f f 
        . . . . . . f f 9 9 8 f f f f . 
        . . . . . f 8 9 9 9 9 9 9 f . . 
        . . . . f 8 9 9 9 9 8 f 9 f . . 
        . . . . f 9 9 9 9 8 f 9 9 f . . 
        . . . . . f f 9 9 f f f f . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f . . . 
        . . . . . . . . f f 8 9 9 f f . 
        . . . . . . f f 8 9 9 f f f f f 
        . . . . . f 8 9 9 9 f f f f f f 
        . . . . . f f 9 9 9 f f 1 1 f f 
        . . . . . . . f f 9 f f f f f f 
        . . . . . . f f 9 9 8 f f f f . 
        . . . . . f 8 9 9 9 9 9 9 f . . 
        . . . . f 8 9 9 9 9 8 f 9 f . . 
        . . . . f 9 9 9 9 8 f 9 9 f . . 
        . . . . . f f 9 9 f f f f . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . f f f f 8 9 9 9 9 f . . . . 
        . f 9 9 9 9 9 f f f f f . . . . 
        . . f 9 9 9 f f 1 1 f f . . . . 
        . . f 8 9 9 f f f f f f . . . . 
        . . . f f 9 f f f f f f . . . . 
        . . f f f 9 8 f f f f . . . . . 
        . f 8 9 9 9 9 9 9 f . . . . . . 
        f 8 9 9 9 8 f 9 8 f . . . . . . 
        . f 9 9 8 f 9 8 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        `],
    75,
    character.rule(Predicate.MovingRight)
    )
    character.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 9 9 9 9 8 f f . . . . . 
        . . . f f f f f 9 9 8 f f f . . 
        . . . f f f f f f 9 9 9 8 f . . 
        . . . f f 1 1 f f 9 9 9 9 f . . 
        . . . f f f f f f 9 9 8 f . . . 
        . . . . f f f f 8 9 f f f f . . 
        . . . . . f 9 9 9 9 9 9 9 8 f . 
        . . . . . f 8 9 9 f 8 9 9 9 f . 
        . . . . . . f 8 9 9 f 8 9 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . f f . . . 
        . . . . . . . . . . . f f . . . 
        . . . . . . . . . . . . f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        . f 9 9 9 9 f f f . . . . . . . 
        . f f f f f 9 9 8 f f . . . . . 
        . f f f f f f 9 9 9 8 f . . . . 
        . f f 1 1 f f 9 9 9 9 f . . . . 
        . f f f f f f 9 9 8 f . . . . . 
        . . f f f f 8 9 f f f f . . . . 
        . . . f 9 9 9 9 9 9 9 8 f . . . 
        . . . f 8 9 9 9 f 8 9 9 8 f . . 
        . . . f f 8 9 9 9 f f 8 9 f . . 
        . . . f f f f f f f f f f . . . 
        . . . f f . . . . f f f . . . . 
        . . . . f . . . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        . f 9 9 9 9 f . . . . . . . . . 
        . f 9 9 9 9 9 f f f f f . . . . 
        . f f f f f 9 9 9 9 8 f . . . . 
        . f f 1 1 f f 9 9 9 9 f . . . . 
        . f f f f f f 9 9 8 f . . . . . 
        . f f f f f f 9 f f . . . . . . 
        . . f f f f 8 9 f f f f f . . . 
        . . . f 9 9 9 f 8 9 9 9 8 f . . 
        . . . f 8 9 9 9 f f 8 9 9 f . . 
        . . . f f 8 9 9 9 9 f f f . . . 
        . . . f f f f f f f f . . . . . 
        . . . . f f . . . f f . . . . . 
        . . . . f f . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . f f f . . . . . . . . . . . 
        . f 9 9 9 f . . . . . . . . . . 
        f 9 9 9 9 8 f f f . . . . . . . 
        f f f f f 9 9 9 8 f f . . . . . 
        f f f f f f 9 9 9 9 f . . . . . 
        f f 1 1 f f 9 9 8 f . . . . . . 
        f f f f f f 9 f f . . . . . . . 
        . f f f f 8 9 9 f f . . . . . . 
        . . f 8 9 9 9 9 9 9 f f . . . . 
        . . f f 8 9 9 9 f f 8 f . . . . 
        . . f 9 f 8 9 9 9 9 f . . . . . 
        . . f f f f f f f f . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . f f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . f f 9 9 8 f f . . . . . . . . 
        f f f f f 9 9 8 f f . . . . . . 
        f f f f f f 9 9 9 8 f . . . . . 
        f f 1 1 f f 9 9 9 f f . . . . . 
        f f f f f f 9 f f . . . . . . . 
        . f f f f 8 9 9 f f . . . . . . 
        . . f 9 9 9 9 9 9 8 f . . . . . 
        . . f 9 f 8 9 9 9 9 8 f . . . . 
        . . f 9 9 f 8 9 9 9 9 f . . . . 
        . . . f f f f 9 9 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . f f 9 9 8 f f . . . . . . . . 
        f f f f f 9 9 8 f f . . . . . . 
        f f f f f f 9 9 9 8 f . . . . . 
        f f 1 1 f f 9 9 9 f f . . . . . 
        f f f f f f 9 f f . . . . . . . 
        . f f f f 8 9 9 f f . . . . . . 
        . . f 9 9 9 9 9 9 8 f . . . . . 
        . . f 9 f 8 9 9 9 9 8 f . . . . 
        . . f 9 9 f 8 9 9 9 9 f . . . . 
        . . . f f f f 9 9 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 9 9 9 9 8 f f f f . . 
        . . . . f f f f f 9 9 9 9 9 f . 
        . . . . f f 1 1 f f 9 9 9 f . . 
        . . . . f f f f f f 9 9 8 f . . 
        . . . . f f f f f f 9 f f . . . 
        . . . . . f f f f 8 9 f f f . . 
        . . . . . . f 9 9 9 9 9 9 8 f . 
        . . . . . . f 8 9 f 8 9 9 9 8 f 
        . . . . . . . f 8 9 f 8 9 9 f . 
        . . . . . . . f f f f f f f . . 
        . . . . . . . . . . . f f . . . 
        . . . . . . . . . . . f f . . . 
        . . . . . . . . . . . . f . . . 
        `],
    75,
    character.rule(Predicate.MovingLeft)
    )
    character.loopFrames(
    mySprite,
    [img`
        . . . . . . . f f f f . . . . . 
        . . . . . . f 8 9 9 8 f . . . . 
        . . . . f f 9 9 9 9 9 9 f . . . 
        . . . f 8 9 9 f f f f f f . . . 
        . . . f 9 9 f f f f f f . . . . 
        . . f 8 9 9 f f f f f f . . . . 
        . . f 8 f 9 f 1 1 f f 1 . . . . 
        . . f f f 9 8 f f f f f . . . . 
        . . . f 9 9 9 9 9 9 f . . . . . 
        . . f 8 9 9 9 9 9 9 f . . . . . 
        . f 8 9 9 9 8 9 9 8 f . . . . . 
        . f 9 9 8 8 9 9 8 f f . . . . . 
        . f 9 8 f 9 f f f f f . . . . . 
        . . f f f f . . . . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f . . . . . 
        . . . . . f f 9 9 9 8 f . . . . 
        . . . . f 8 9 9 9 9 9 8 f . . . 
        . . . f 8 9 9 f f f f f f . . . 
        . . . f 9 9 f f f f f f . . . . 
        . . f 9 9 9 f f f f f f . . . . 
        . . f f f 9 f 1 1 f f 1 . . . . 
        . . . . f 9 8 f f f f f . . . . 
        . . . f 9 9 9 9 9 9 f . . . . . 
        . . f 8 9 9 9 9 9 9 f . . . . . 
        . f 8 8 8 9 9 8 8 9 f . . . . . 
        . f f f f f 8 f 9 f f . . . . . 
        . . f f f 8 f . f f f . . . . . 
        . . . f f f . . . . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        `,img`
        . . . . . . . f f f . . . . . . 
        . . . . . f f 8 9 9 f f . . . . 
        . . . . f 8 9 9 9 9 9 8 f . . . 
        . . . . f 9 9 f f f f f f . . . 
        . . . f 9 9 f f f f f f . . . . 
        . . f 8 9 9 f f f f f f . . . . 
        . . f 8 f 9 f 1 1 f f 1 . . . . 
        . . f f f 9 8 f f f f f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 8 9 9 9 9 9 f . . . . . 
        . . f 8 9 9 8 8 9 8 f . . . . . 
        . . f 9 9 8 f 9 8 f f . . . . . 
        . . f f f f . f f f f . . . . . 
        . . . f f f . . . . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        `,img`
        . . . . . . . f f f . . . . . . 
        . . . . . f f 8 9 9 f f . . . . 
        . . . . f 8 9 9 9 9 9 8 f . . . 
        . . . . f 9 9 f f f f f f . . . 
        . . . f 9 9 f f f f f f . . . . 
        . . f 8 9 9 f f f f f f . . . . 
        . . f 8 f 9 f 1 1 f f 1 . . . . 
        . . f f f 9 8 f f f f f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 8 9 9 9 9 9 f . . . . . 
        . . f 8 9 9 8 8 9 8 f . . . . . 
        . . f 9 9 8 f 9 8 f f . . . . . 
        . . f f f f . f f f f . . . . . 
        . . . f f f . . . . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        `,img`
        . . . . . . . f f f . . . . . . 
        . . . . . f f 8 9 9 f f . . . . 
        . . . . f 8 9 9 9 9 9 8 f . . . 
        . . . . f 9 9 f f f f f f . . . 
        . . . f 9 9 f f f f f f . . . . 
        . . f 8 9 9 f f f f f f . . . . 
        . . f 8 f 9 f 1 1 f f 1 . . . . 
        . . f f f 9 8 f f f f f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 8 9 9 9 9 9 f . . . . . 
        . . f 8 9 9 8 8 9 8 f . . . . . 
        . . f 9 9 8 f 9 8 f f . . . . . 
        . . f f f f . f f f f . . . . . 
        . . . f f f . . . . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . f f f f . . . . . f . . . . 
        . f . . . . . . . . . f . . . . 
        . f . . . . . . . . f f . . . . 
        . . f . . . . . . . f . . . . . 
        . . . f . . . . . . . . . . . . 
        . f f f . . . . . . f . . . . . 
        f . . f . . f f f f f . . . . . 
        f . . . . . . . . . . . . . . . 
        . f f . . f . . . . . . . . . . 
        . . f . f . . . . . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . . f f f . . f f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . f . . . . . . 
        `],
    175,
    character.rule(Predicate.FacingUp, Predicate.FacingRight)
    )
})
