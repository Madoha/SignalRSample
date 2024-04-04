var connectionUserCount = new signalR
    .HubConnectionBuilder()
    .withUrl("/hubs/userCount")
    .build();

connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();
});

function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}

function fulfilled() {
    console.log("success");
    newWindowLoadedOnClient();
}
function rejected() {
    console.log("failed");
}

connectionUserCount.start().then(fulfilled, rejected);