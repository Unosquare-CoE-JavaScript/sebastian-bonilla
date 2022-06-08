function diff(x, y) {
    if (x > y) {
        let tmp = x;
        x = y;
        y = tmp;
    }
    return y - x;
}

diff(3, 7); // 4
diff(7, 5); // 2`