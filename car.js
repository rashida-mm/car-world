function store() {
    let cardet = {
        carbrand: carbrand.value,
        carprice: carprice.value,
        carkey: carkey.value
    };
    if (cardet.carbrand === "" || cardet.carprice === "" || cardet.carkey === "") {
        alert("Please fill all the fields")
    }
    else {
        if (localStorage.getItem(cardet.carkey)) {
            alert("Details already exist")
            document.getElementById("carstore").reset();
            
        }
        else {
            localStorage.setItem(cardet.carkey, JSON.stringify(cardet));
            alert("Details successfully Added")
            document.getElementById("carstore").reset();
        }
    }

}

function retrv() {
    let retrvkey = document.getElementById("retkey").value;
    if (retrvkey in localStorage) {
        cardet = JSON.parse(localStorage.getItem(retrvkey));
        result.innerHTML = `  <ul type="none">
            <li>Car Brand : ${cardet.carbrand}</li>
            <li>Car Price : ${cardet.carprice}</li>
            <li>Key: ${cardet.carkey}</li>
        </ul>`;
    }
    else {
        alert("Enter a valid key");
        document.getElementById("carret").reset();
        result.innerHTML = "";
    }
}

function del() {
    let deltkey = document.getElementById("delkey").value;
    console.log(deltkey);

    if (deltkey in localStorage) {
        localStorage.removeItem(deltkey);
        alert("Details successfully deleted")
        document.getElementById("cardel").reset();
    }
    else {
        alert("Enter a valid key");
        document.getElementById("cardel").reset();
    }
}

function clearrecord() {
    localStorage.clear();
    alert("All records cleared from localStorage");
}