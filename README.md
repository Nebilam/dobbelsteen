let willekeurig_getal = 0
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    willekeurig_getal = Math.randomRange(1, 6)
    basic.showNumber(willekeurig_getal)
    if (willekeurig_getal == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (willekeurig_getal == 2) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        for (let index = 0; index < 2; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(500)
        }
    } else if (willekeurig_getal == 3) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        for (let index = 0; index < 3; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(500)
        }
    } else if (willekeurig_getal == 4) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        for (let index = 0; index < 4; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(500)
        }
    } else if (willekeurig_getal == 5) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        for (let index = 0; index < 5; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(500)
        }
    } else if (willekeurig_getal == 6) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        for (let index = 0; index < 6; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(500)
        }
    }
})
