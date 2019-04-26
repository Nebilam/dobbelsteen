let willekeurig_getal = 0
input.onGesture(Gesture.Shake, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    willekeurig_getal = Math.randomRange(1, 6)
    basic.showNumber(willekeurig_getal)
    if (willekeurig_getal == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (willekeurig_getal == 2) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        for (let i = 0; i < 2; i++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(500)
        }
    } else if (willekeurig_getal == 3) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        for (let i = 0; i < 3; i++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(500)
        }
    } else if (willekeurig_getal == 4) {
        pins.digitalWritePin(DigitalPin.P4, 1)
        for (let i = 0; i < 4; i++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(500)
        }
    } else if (willekeurig_getal == 5) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        for (let i = 0; i < 5; i++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(500)
        }
    } else if (willekeurig_getal == 6) {
        pins.digitalWritePin(DigitalPin.P6, 1)
        for (let i = 0; i < 6; i++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(500)
        }
    }
})
