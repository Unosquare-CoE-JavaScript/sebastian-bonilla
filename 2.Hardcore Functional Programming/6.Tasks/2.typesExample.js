const { Task } = require('types');

Task.of(2).map(two => two + 1);

result = Task((rej, res) => res(2))
    .map(two => two + 1)
    .map(three => three * 2)

result.fork(console.error, console.log);