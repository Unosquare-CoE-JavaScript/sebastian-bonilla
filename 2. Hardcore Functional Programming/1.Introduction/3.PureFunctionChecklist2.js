// is or not a pure function?
var parseQueryString = function (queryString) {
    var params = {}, queries, temp, i, l;

    queries = queryString.split("&");

    for (i = 0, l = queries.length; i < l; i++) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }

    return params;
}

parseQueryString('hola=2&world=3')
