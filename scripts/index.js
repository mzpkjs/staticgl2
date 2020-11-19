const fetch = require("./utilities/fetch"),
    parse = require("./utilities/parse"),
    write = require("./utilities/write")

const configuration = require("./data/configuration.json")


async function main() {
    const response = await fetch(`${configuration.url}/glUniform.xhtml`)

    const members = parse(response, require("./adapters/es3"))

    for (const member of members) {
        console.log(member)
        write(2, member)
    }
}


main()
    .catch(console.error.bind(console))
