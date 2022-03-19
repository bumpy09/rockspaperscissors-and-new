input.onButtonPressed(Button.A, function () {
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
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(lion)
})
input.onButtonPressed(Button.B, function () {
    lion += -1
    basic.showNumber(lion)
})
let dinosaur = 0
let lion = 0
lion = 3
basic.forever(function () {
    if (lion <= 0) {
        while (true) {
            basic.showIcon(IconNames.Sad)
        }
    }
})
