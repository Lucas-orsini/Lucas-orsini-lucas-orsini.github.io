function openPopUp() {
    document.getElementById("popupForm").style.display="block";
  }
  
  function closePopUp() {
    document.getElementById("popupForm").style.display="none";
  }

  function verifCode(){
    var valueInput = document.getElementById('code').value;
    if (valueInput === 'code') {
        var x = document.getElementById("pid");
            x.innerHTML = "Bravo vous avez trouvé le code pour géolocaliser James Titor";
    }
    else {
        var x = document.getElementById("pid");
        x.innerHTML = "Mauvais code explorer le site pour trouver des indices";
    }
  }