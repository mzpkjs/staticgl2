const fs = require("fs"),
    path = require("path")

const template = require("./template")



const write = (version, member) => {
    const directory = path.join(process.cwd(), String(version)),
        filename = `${member.name}.ts`
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory)
    }
    fs.writeFile(path.join(directory, filename), template(version, member), (error) => {
        if (error) {
            console.error(error)
            return
        }
        console.log(`File generated: "${filename}".`)
    })
}



module.exports = write