function calc() {

    var cacheCalc = '';

    return function (value) {

        if (value === '=') {
            const temp = cacheCalc;
            cacheCalc = '';

            return eval(temp);
        } else {
            cacheCalc += value;
            return value;
        }
    }
}


function useCalc(calc, keys) {
    return [...keys].reduce(
        function showDisplay(display, key) {
            var ret = String(calc(key));
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


console.log(useCalc(calc(), "4+3=")); // 4+3=7
console.log(useCalc(calc(), "+9=")); // +9=16
console.log(useCalc(calc(), "*8=")); // *5=128
console.log(useCalc(calc(), "7*2*3=")); // 7*2*3=42
console.log(useCalc(calc(), "1/0=")); // 1/0=ERR
console.log(useCalc(calc(), "+3=")); // +3=ERR
console.log(useCalc(calc(), "51=")); // 51