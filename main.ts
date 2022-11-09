input.onButtonPressed(Button.A, function () {
    let length = 0
    for (let index = 0; index <= length - 1; index++) {
        let list: number[] = []
        basic.showString("" + (list[index]))
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        test = _6_Super_Villains.removeAt(randint(0, 5))
        basic.showString("" + (test))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (_6_Super_Villains.removeAt(randint(0, 4))))
})
let test = ""
let _6_Super_Villains: string[] = []
_6_Super_Villains = [
"Thanos",
"Joker",
"Vulture",
"Venom",
"Magneto",
"Hades"
]
basic.forever(function () {
	
})
