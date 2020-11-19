const { JSDOM } = require("jsdom");



const parse = (html, adapter) => {
    const { window, window: { document } } = new JSDOM(html)
    const typedef = adapter(document)

    const members = []
    for (let i = 0; i < typedef.count; i++) {
        const member = {}
        member.name = typedef.name(i)
        member.description = typedef.description
        member.parameters = typedef.parameter(i)
        members.push(member)
    }

    return members
}



module.exports = parse