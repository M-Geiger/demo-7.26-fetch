// fetch('https://jservice.io/api/random?count=5')
//     .then(response => response.json())
//     .then(rawClueObject => {
//         rawClueObject.forEach(clue => {
//             clues.push({
//                 category: clue.category.title,
//                 value: clue.value,
//                 question: clue.question,
//                 answer: clue.answer,
//             })
//         })
//     })

    //.then(data => console.log(data))
                
let clues = []
fetch('https://jservice.io/api/random?count=5')
.then(response => response.json())
.then(clues => {
    for (let clue of clues) {
        let details = document.createElement('details')
        let summary = document.createElement('summary')

        details.append(summary)
        summary.append(`${clue.category.title}: ${clue.question}`)
        details.append(clue.answer)
        document.body.append(details)
    }
})
