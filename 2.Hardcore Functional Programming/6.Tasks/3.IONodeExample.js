const { Task } = require('types');

const fs = require('fs');

const app_ = () =>
    fs.readfile('config.json', 'utf-8', (err, contents) => {
        console.log(err, contents)
        if (err) throw err

        const newContents = contents.replace(/3/g, '6')

        fs.writeFile('configl.json', newContents, (err, _) => {
            if (err) throw err
            console.log('success!')
        })

    })

app_();

// in terms of Task!
const readFile = (path, enc) =>
    Task((rej, res) =>
        fs.readFile(path, enc, (err, contents) =>
            err ? rej(err) : res(contents)
        )
    )

const writeFile = (path, contents) =>
    Task((rej, res) =>
        fs.writeFile(path, contents, (err, contents) =>
            err ? rej(err) : res(contents)
        )
    )


const app = () => {
    readFile('config.json', 'utf-8')
        .map(contents => contents.replace(/3/g, '6'))
        .chain(newContents => writeFile('config.json', newContents))
}

app().fork(console.error, console.log('success'));