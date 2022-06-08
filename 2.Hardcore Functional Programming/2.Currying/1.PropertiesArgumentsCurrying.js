// associative
add (add (x, y), z) == add (x, add (y, z))

// commutative
add (x, y) == add (y, x)

// identity
add (x, 0) == x

// distributive
add (multiply(x, y), multiply(x, z) ) == multiply(x, add (y, z) )