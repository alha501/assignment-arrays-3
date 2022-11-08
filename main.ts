input.onButtonPressed(Button.A, function () {
    basic.showString("" + (text_list.length))
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 5; index++) {
        basic.showString("" + (text_list.removeAt(randint(0, 5))))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (text_list.removeAt(randint(0, 5))))
})
let text_list: string[] = []
text_list = [
"Thanos",
"Joker",
"Vulture",
"Venom",
"Magneto",
"Hades"
]
basic.forever(function () {
	
})
