//const readline = require('readline-sync')
const robots = {
    input: require('./robots/input'),
    text: require('./robots/text.js'),
    state: require('./robots/state.js'),
    image: require('./robots/image.js')
}

async function start() { 
    /*const content = {
        maximumSentences: 7
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()*/

    

    /*function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }
    function askAndReturnPrefix() {
        const prefixes = ['Who is','What is','The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }*/
    /*robots.input()
    await robots.text()*/
    await robots.image()

    const content = robots.state.load()
    console.dir(content, { depth: null })
    //console.log(JSON.stringify(content, null, 4))
}
start()