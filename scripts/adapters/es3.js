const adapter = (document) => {
    const count =
        document.querySelectorAll(".funcdef .fsfunc").length

    const name = (index) => {
        return document.querySelectorAll(".funcdef .fsfunc").item(index).textContent
    }

    const description =
        document.querySelector("#description p").textContent

    const parameter = (index) => {
        const table = document.querySelectorAll(".funcprototype-table").item(index)
        const tds = table.querySelectorAll("tr > td:last-child")
        return Array.from(tds)
            .map(td => {
                const name = td.querySelector(".pdparam").innerHTML
                let type = td.innerHTML.split("<var class=\"pdparam\">")[0].trimEnd()
                    .replace("const", "")
                    .replace("*", "")
                    .trim()

                return { name, type }
            })
    }

    return {
        count,
        name,
        description,
        parameter,
    }
}


module.exports = adapter