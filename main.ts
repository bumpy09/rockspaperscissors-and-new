let dinosaur = 0
input.onButtonPressed(Button.B, function () {
    dinosaur = randint(0, 3)
    if (dinosaur == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (dinosaur == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (dinosaur == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            # # . . .
            # # # . .
            . . # . .
            # . # . #
            . # # # .
            `)
    }
})
