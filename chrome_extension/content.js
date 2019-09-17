
// content.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {

            var jobtitle=""
            while(jobtitle!=""){
            jobtitle = prompt("Please enter job title");
            }
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
            if (d < 10) {
                d = '0' + d;
            }
            if (m < 10) {
                m = '0' + m;
            }
            var date_format = m + '/' + d + '/' + y;
            var xml = new XMLHttpRequest();
            var joblink = window.location.href;
            var n = joblink.indexOf(".com");
            var shortlink = joblink[0].toUpperCase() + joblink.substring(1, n);


            xml.open("POST", "http://localhost:5000/addJobs", true);
            xml.setRequestHeader('Content-Type', 'application/json');
            xml.send(JSON.stringify({
                jobsite: shortlink,
                jobtitle: jobtitle,
                jobdate: date_format,
                joblink: joblink
            }));
        }

    }
);