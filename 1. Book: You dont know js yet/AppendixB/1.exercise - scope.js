
// BLUE (1) Global scope 
var circleRadius = 5;

(function mathScope() {
    // RED (2) 
    let circleRadius = 10;

    function getArea() {
        // ORANGE (3) 

        const pi = function getPI() {
            // YELLOW (4) 

            let numerator = 22;
            let denominator = 7;
            return numerator / denominator;
        }

        const radiusSquare = function getRadiusSquare() {
            // PURPLE (5) 

            let radiusSquare = null;

            {
                let mathPow = (circleRadius) =>
                // BROWN (6) 
                radiusSquare = circleRadius * circleRadius;
            }

            return radiusSquare;
        }

        return pi() * radiusSquare();
    }


    console.log(getArea());

})();