input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Ouch!")
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # # # .
        . # . # .
        `)
})
basic.forever(function () {
	
})
