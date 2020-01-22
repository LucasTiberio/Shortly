const originLink = "http://www.lucastiberio.com.br"
const callDois = async () => {
    const response = await fetch('https://rel.ink/api/links/', {
        method: 'POST',
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
            url: originLink
        }
    })

    console.log(response)
}

callDois()