const https = require("https")


const fetch = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            const data = []
            response.on("data", (stream) => {
                data.push(stream)
            })
            response.on("end", () => {
                const html = data.join("")
                resolve(
                    /<body[^>]*>((.|[\n\r])*)<\/body>/im.exec(html)[1]
                )
            })
        })
            .on("error", (error) => {
                console.error(error)
                reject(error)
            })
    })
}


module.exports = fetch