var div = document.createElement("data");


function clickHandler() {
    let apiUrl = 'http://localhost:80/api/endpoints/getHistories';
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        for (var i = 0; i < data.length; i++) {
            div.innerHTML = 'El valor es: ' + data[i].value;
          }
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}
