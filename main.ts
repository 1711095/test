basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.QuarterNote)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Silly)
})
