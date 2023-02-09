 console.log (document.titel)
 document.titel = "Novi sajt"
   console.log(document.all)

   console.dir(document.all[8])
   document.all[8].textContent = "nesto drugo"
   console.log(document.getElementById("main titel"))
   document.getElementById("main-title").textContent="drugi naslov"
   let mainTitle=document.getElementById("main_title");
   mainTitle.textContent="treci naslov"
   console.log(document.getElementById("list-item"))
   let item =document.getElementByIdClassName("list-item")

   items[2].textContent = "zamenio sam drugi element "
   items[2].stzle.backgroundColor = "red "
    for(let i = 0;i<items.length;i++){
        if( i% 2== 0){
            items[i].stzle.backgroundColor ="gray"
        }
    }