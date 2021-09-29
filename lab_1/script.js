let xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.open('GET', 'data.json', true);
xmlHttpRequest.send();

xmlHttpRequest.onload = function () {
    if (xmlHttpRequest.status === 200) {
        let data = JSON.parse(xmlHttpRequest.responseText);

        let message = "";
        for (i = 0; i < data.CrewMembers.length; i++) {
            message = message + data.CrewMembers[i].name + " is the " +
                data.CrewMembers[i].role + " of the crew. " +
                data.CrewMembers[i].name + "'s battle style is " +
                data.CrewMembers[i].battleStyle + ". </br></br></br>";
        }
        document.getElementById('info').innerHTML = message;
    }
}




	