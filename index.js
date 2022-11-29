const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido? o que posso fazer para melhorar isso amanhã?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + "\n\n")
}

ask()

answers = []

process.stdin.on("data", data => {
    answers.push((data.toString().trim() + "\n"))
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Muito bem Levy, Bom Descanso!

    Hoje você aprendeu:
    ${answers[0]}

    O que te aborreceu e você poderia melhorar:
    ${answers[1]}

    O que te deixou feliz:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje!

    Te espero amanhã!!
    `)
})