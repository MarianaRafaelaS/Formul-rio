function pegarDados(){// alert('ok');
    document.querySelector(".esconder").style.display = "block";

    let camText = document.getElementById("texto").value;
    document.getElementById("camText").innerHTML = camText;

    let camTel = document.getElementById("fone").value;
    document.getElementById("camTel").innerHTML = camTel;

    let camEmail = document.getElementById("e-mail").value;
    document.getElementById("camEmail").innerHTML = camEmail;

    let camPassword = document.getElementById("senha").value;
    document.getElementById("camPassword").innerHTML = camPassword;

    let camCheckInfo = document.getElementById("info");
    let camCheckAdm = document.getElementById("adm");
    let camCheckEnf = document.getElementById("enf");

    if (camCheckInfo.checked) {
        document.getElementById("camCheckInfo").innerHTML = "Informática";
    }if (camCheckAdm.checked){
         document.getElementById("camCheckAdm").innerHTML = "Admnistração";
    }if (camCheckEnf.checked){
        document.getElementById("camCheckEnf").innerHTML = "Enfermagem";
    } 

    let camHidden = document.getElementById("oculto").value;
    document.getElementById("camHidden").innerHTML = camHidden;

    let camNumber = document.getElementById("num").value;
    document.getElementById("camNumber").innerHTML = camNumber;

    let camDate = document.getElementById("data").value;
    document.getElementById("camDate").innerHTML = camDate;

    let camTime = document.getElementById("hora").value;
    document.getElementById("camTime").innerHTML = camTime;

    let camRange = document.getElementById("valor").value;
    document.getElementById("camRange").innerHTML = camRange;

	if(document.getElementById("info2").checked){
		alert("Seu curso é informática");
    }else if(document.getElementById("adm2").checked){
      alert("Seu curso é administração");
    }else if(document.getElementById("enf2").checked){
        alert("Seu curso é enfermagem");
    }

    let priFaixa = document.getElementById("PriFaixa").value;
    document.getElementById("priFaixa").innerHTML = priFaixa;
}
