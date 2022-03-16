let tablazat, ujCella, ujSor;
let sortedArray = [];
let headerSorok = ['Irodalom szerzője/szerzői', 'Irodalom címe', 'Oldalszám (-tól -ig)', 'Kiadás éve', 'Link'];
let adatok = [
    {
        nev: 'MOSÓCZI András',
        cim: 'A gondolkodás forradalma',
        oldal: 'Teljes',
        ev: 2020,
        link: "hamarosan.jpg"
    },{
        nev: 'Angus A.A. MOL – Csilla E. ARIESE-VANDEMEULEBROUCKE – Krijn H.J. BOOM & Aris POLITOPOULOS',
        cim: 'Tutorial: An introduction to archeology, heritage, and video games. In.: The interactive past. Archeology, Heritage & video games',
        oldal: '7-17',
        ev: 2017,
        link: "hamarosan.jpg"
    },{
        nev: 'SZILÁGYI Magdolna',
        cim: 'On the Road',
        oldal: 'Teljes',
        ev: 2014,
        link: "hamarosan.jpg"
    },{
        nev: 'KOVÁCS Bálint',
        cim: 'A hálózatelemzés alkalmazásáról a történettudományban',
        oldal: '187-204',
        ev: 2012,
        link: "hamarosan.jpg"
    },{
        nev: 'Schubert FOO',
        cim: 'Online Virtual Exhibitions: Concepts and Design Consideration',
        oldal: '22-34',
        ev: 2008,
        link: "hamarosan.jpg"
    },{
        nev: 'CZEGLÉDY Ilona – KOPPÁNY Tibor',
        cim: 'A Balatonfűzfő-mámai románkori templomrom',
        oldal: '141-160',
        ev: 1964,
        link: "fuzfo_mama.pdf"
    },{
        nev: 'CZEGLÉDY Ilona – KOPPÁNY Tibor',
        cim: 'A Balatonfűzfő-mámai románkori templomrom',
        oldal: '141-160',
        ev: 1964,
        link: "fuzfo_mama.pdf"
    },{
        nev: 'CZEGLÉDY Ilona – KOPPÁNY Tibor',
        cim: 'A Balatonfűzfő-mámai románkori templomrom',
        oldal: '141-160',
        ev: 1964,
        link: "fuzfo_mama.pdf"
    }
    
];


tablazat = document.querySelector("#tablazat");
    ujSor = document.createElement('tr');
        for(headerSor of headerSorok){
                ujCella = document.createElement('th');
                ujCella.setAttribute("id", "fejlec");
                ujCella.innerText = headerSor;
                tablazat.appendChild(ujCella);
            }

    tablazat.appendChild(ujSor);
 
    for(adat of adatok){
        ujSor = document.createElement('tr');
            for(index in adat){
                ujCella = document.createElement('td');
                ujCella.innerText = adat[index];
                if(index === "nev" || index === "cim"){
                    ujCella.setAttribute("style", "text-align:left");
                }else if(index === "link"){
                    console.dir(adat.link)
                    ujCella.innerHTML="<a href=" + `${adat.link}` + ">Link</a>"
                }
                ujCella.setAttribute("class", "ujCellaAdatok");
                ujSor.appendChild(ujCella);
            }
        tablazat.appendChild(ujSor);
    }
document.body.appendChild(tablazat);







let dokumentum = document.querySelector('#tablazat');


function mukodik(esemeny, elem){
    setTimeout(rendez(esemeny, elem), 1000);
}


function rendez(esemenyem, elem){
    document.querySelectorAll(".ujCellaAdatok").forEach(e => e.remove())
    document.querySelectorAll("tr").forEach(e => e.remove())



    sortedArray = adatok.sort(function(a, b) {
        if(esemenyem.type == 'click'){
            
                if(elem.innerText === "Irodalom szerzője/szerzői"){
                    return a.nev.localeCompare(b.nev);
                }else if(elem.innerText === "Irodalom címe"){
                        if(parseInt(a.cim) > parseInt(b.cim)){
                            return 1;
                        }else if (parseInt(a.cim) < parseInt(b.cim)){
                            return -1;
                        }else{
                            return 0;
                        }
                }else if(elem.innerText === "Kiadás éve"){
                    if(a.ev > b.ev){
                        return 1;
                    }else if (a.ev < b.ev){
                        return -1;
                    }else{
                        return 0;
                    }
                }
        }
     });



     tablazat.appendChild(ujSor);
     for (adat of sortedArray){
        ujSor = document.createElement('tr');   
        for(index in adat){
            ujCella = document.createElement('td');
            ujCella.innerText = adat[index];
            ujCella.setAttribute("class", "ujCellaAdatok");
            ujSor.appendChild (ujCella);
        }
    tablazat.appendChild(ujSor);
     }
    }


function delegal(szulo, gyerek, mikor, mitCsinal){
    function esemenyKezelo(esemeny){
        let esemenyCelja = esemeny.target;
        let legkozelebbiIlyen = esemenyCelja.closest(gyerek);
        let meghivoElem = this;


        if(meghivoElem.contains(legkozelebbiIlyen)){
            mitCsinal(esemeny, legkozelebbiIlyen);
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo);
}


delegal(dokumentum, '#fejlec', 'dblclick', mukodik);
delegal(dokumentum, '#fejlec', 'click', mukodik);







// Modal Image Gallery

  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  let mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }

  // <img src="/w3images/tech_tableturner.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A tableturner">