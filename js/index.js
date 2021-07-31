// bored-bot API
// "https://www.boredapi.com/api/activity"

let boredBtn = document.getElementById("activity-btn-id")
boredBtn.addEventListener("click", getActivity);


function getActivity() {
    fetch("https://www.boredapi.com/api/activity")
    .then(response => response.json())
    .then(data => {
        let activityH2 = document.getElementById("activity-id");
        activityH2.innerHTML = data.activity;
})
}
