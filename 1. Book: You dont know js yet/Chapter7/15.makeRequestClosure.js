var APIendpoints = {
    studentIDs:
        "https://some.api/register-students",
    // ..
};
var data = {
    studentIDs: [14, 73, 112, 6],
    // ..
};
function setupButtonHandler(btn) {
    var recordKind = btn.dataset.kind;

    btn.addEventListener(
        "click",
        function makeRequest(evt) {
            ajax(
                APIendpoints[recordKind],
                data[recordKind]
            );
        }
    );
}
// <button data-kind="studentIDs">
// Register Students
// </button>
setupButtonHandler(btn);



/** Even better way */

function setupButtonHandler(btn) {
    var recordKind = btn.dataset.kind;
    var requestURL = APIendpoints[recordKind];
    var requestData = data[recordKind];
    btn.addEventListener(
        "click",
        function makeRequest(evt) {
            ajax(requestURL, requestData);
        }
    );
}

/** Another */

function defineHandler(requestURL, requestData) {
    return function makeRequest(evt) {
        ajax(requestURL, requestData);
    };
}
function setupButtonHandler(btn) {
    var recordKind = btn.dataset.kind;
    var handler = defineHandler(
        APIendpoints[recordKind],
        data[recordKind]
    );
    btn.addEventListener("click", handler);
}