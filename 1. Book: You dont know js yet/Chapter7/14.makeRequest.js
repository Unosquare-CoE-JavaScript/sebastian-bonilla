var APIendpoints = {
    studentIDs:
        "https://some.api/register-students",
    // ..
};
var data = {
    studentIDs: [14, 73, 112, 6],
    // ..
};
function makeRequest(evt) {
    var btn = evt.target;
    var recordKind = btn.dataset.kind;
    ajax(
        APIendpoints[recordKind],
        data[recordKind]
    );
}
// <button data-kind="studentIDs">
// Register Students
// </button>
btn.addEventListener("click", makeRequest);