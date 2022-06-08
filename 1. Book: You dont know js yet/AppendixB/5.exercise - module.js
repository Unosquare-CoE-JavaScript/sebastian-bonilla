let cacheCalc = '';

function number(value) {
    cacheCalc += value;
}

function plus() {
    cacheCalc += '+';
}

function minus() {
    cacheCalc += '-';
}

function mult() {
    cacheCalc += '*';
}

function div() {
    cacheCalc += '/';
}

function eq() {
    const temp = cacheCalc;
    cacheCalc = '';

    return eval(temp);
}

function useCalc(calc, keys) {
    var keyMappings = {
        "+": "plus",
        "-": "minus",
        "*": "mult",
        "/": "div",
        "=": "eq"
    };
    return [...keys].reduce(
        function showDisplay(display, key) {
            var fn = keyMappings[key] || "number";
            var ret = String(calc[fn](key));
            return (
                display +
                (
                    (ret != "" && key == "=") ?
                        "=" :
                        ""
                ) +
                ret
            );
        },
        ""
    );
}

module.exports = {
    number, plus, minus, mult, div, eq
}