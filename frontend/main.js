window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount(); 
})
const functionApiUrl = 'https://azure-nz.azurewebsites.net/api/GetResumeCounter?code=h8Djgww11K864Yco4v4RRcCjVCTtin-Q-t1uK7EtlLx6AzFuJ-o0yg=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json();
    }).then(response => {
        console.log("website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error) {
        console.log(error);
    });

    return count;
}