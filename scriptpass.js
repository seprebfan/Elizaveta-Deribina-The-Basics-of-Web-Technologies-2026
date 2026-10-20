const change = document.getElementById("change")
change.addEventListener("click", change_all)

function change_all(){
     if(document.getElementsByTagName("div")[0].innerHTML==="Дерибина") {
         document.getElementsByTagName("div")[0].innerHTML = "Deribina"
         document.getElementsByTagName("div")[1].innerHTML = "Elizaveta"
         document.getElementsByTagName("div")[2].innerHTML = "Dmitrievna"
         document.getElementsByTagName("div")[3].innerHTML="F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
         document.getElementsByTagName("div")[7].innerHTML="GU MVD PO G.MOSKVE"
         document.getElementsByTagName("div")[8].innerHTML="G.MOSKVA"
     }
     else{
         document.getElementsByTagName("div")[0].innerHTML="Дерибина"
         document.getElementsByTagName("div")[1].innerHTML="Елизавета"
         document.getElementsByTagName("div")[2].innerHTML="Дмитриевна"
         document.getElementsByTagName("div")[3].innerHTML="Жен"
         document.getElementsByTagName("div")[7].innerHTML="ГУ МВД ПО Г.МОСКВЕ"
         document.getElementsByTagName("div")[8].innerHTML="Г.МОСКВА"

     }
}