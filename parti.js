document.getElementById("cuore").addEventListener("click", ()=>{
    document.getElementById("cuoreFatti").classList.remove("invisibile")
    document.getElementById("cuoreFatti").classList.add("visibile");
    if (document.getElementById("linfaFatti").classList.contains("visibile")){
        document.getElementById("linfaFatti").classList.remove("visibile");
        document.getElementById("linfaFatti").classList.add("invisibile");
    }
    if (document.getElementById("vasiFatti").classList.contains("visibile")){
        document.getElementById("vasiFatti").classList.remove("visibile");
        document.getElementById("vasiFatti").classList.add("invisibile");
    }
})
document.getElementById("vasi").addEventListener("click", ()=>{
    document.getElementById("vasiFatti").classList.remove("invisibile")
    document.getElementById("vasiFatti").classList.add("visibile");
    if (document.getElementById("linfaFatti").classList.contains("visibile")){
        document.getElementById("linfaFatti").classList.remove("visibile");
        document.getElementById("linfaFatti").classList.add("invisibile");
    }
    if (document.getElementById("cuoreFatti").classList.contains("visibile")){
        document.getElementById("cuoreFatti").classList.remove("visibile");
        document.getElementById("cuoreFatti").classList.add("invisibile");
    }
})
document.getElementById("linfa").addEventListener("click", ()=>{
    document.getElementById("linfaFatti").classList.remove("invisibile")
    document.getElementById("linfaFatti").classList.add("visibile");
    if (document.getElementById("cuoreFatti").classList.contains("visibile")){
        document.getElementById("cuoreFatti").classList.remove("visibile");
        document.getElementById("cuoreFatti").classList.add("invisibile");
    }
    if (document.getElementById("vasiFatti").classList.contains("visibile")){
        document.getElementById("vasiFatti").classList.remove("visibile");
        document.getElementById("vasiFatti").classList.add("invisibile");
    }
})