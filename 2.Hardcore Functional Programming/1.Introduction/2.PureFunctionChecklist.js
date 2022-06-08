// not a function
const toSlug = (title) => {
    const urlFriendly = title.replace(/IW+/ig, '-');
    if (urlFriendly.length < 1) {
        throw new Error('is bad')
    }
    return urlFriendly
}

// function
const toslug = (title) => {
    return new Promise((res, rej) => {
        const urlFriendly = title.replace(/|W+/ig, '-')
        if (urlFriendly.length < 1) {
            rej(new Error('is bad'))
        }
        return res(urlFriendly)
    })
}