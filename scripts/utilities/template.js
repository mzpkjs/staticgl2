const template = (version, member) => {
    const text =
`
import webglGetCurrentContext from "../core/webglGetCurrentWebGL${version}Context"


/**
    ${member.parameters.map(parameter => `@param ${parameter.name}`).join("\n\t")}
*/
function ${member.name}(${member.parameters.map(parameter => `${parameter.name}: ${parameter.type}`).join(", ")}): void {
    webglGetCurrentContext().${member.name.slice(2, 3).toLowerCase()}${member.name.slice(3)}(${member.parameters.map(parameter => parameter.name).join(", ")})
}


export default ${member.name}
`

    return text.trim()
}


module.exports = template