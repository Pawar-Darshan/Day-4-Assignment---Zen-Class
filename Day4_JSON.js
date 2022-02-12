//Day 4 - Zen Class assignment.

//Question No. 3: How to compare two JSON have the same properties without order?
//Answer:
var isEqualsJson = (obj1,obj2)=>{
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    //return true when the two json has same length and all the properties has same value key by key
    return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}

var obj1 = { name: "Person 1", age:5 };
var obj2 = { name: "Person 1", age:5 };

console.log("json is equals: "+ isEqualsJson(obj1,obj2));
//Output: json is equals: true







// Question No. 2: Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
//Answer:

//Set up html request.
var xhr = new XMLHttpRequest(); //Creation of xml http request xhr

//Pasing the url
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send(); //initiating the request from client side

//add a listener to process the request
xhr.onload = function (){
//process the request and server will return the data
if(xhr.status>=200 && xhr.status<300){
    //conver the raw data to js notation
    var data = JSON.parse(xhr.response)//get raw data
    data.forEach((item) =>{
        console.log(`
        Country Name : ${item.name}
        Country flag : ${item.flag}
        `)
    })
}
else{
//     //If ther is any error due to API endpoint or server problem
//     //Then we will use else for printing error
    console.log("Getting error while loading the website");
}
}
//output:
// Day4_JSON.js:21 
// Country Name : Afghanistan
// Country flag : https://restcountries.eu/data/afg.svg

// Day4_JSON.js:21 
// Country Name : Åland Islands
// Country flag : https://restcountries.eu/data/ala.svg

// Day4_JSON.js:21 
// Country Name : Albania
// Country flag : https://restcountries.eu/data/alb.svg

// Day4_JSON.js:21 
// Country Name : Algeria
// Country flag : https://restcountries.eu/data/dza.svg

// Day4_JSON.js:21 
// Country Name : American Samoa
// Country flag : https://restcountries.eu/data/asm.svg

// Day4_JSON.js:21 
// Country Name : Andorra
// Country flag : https://restcountries.eu/data/and.svg

// Day4_JSON.js:21 
// Country Name : Angola
// Country flag : https://restcountries.eu/data/ago.svg

// Day4_JSON.js:21 
// Country Name : Anguilla
// Country flag : https://restcountries.eu/data/aia.svg

// Day4_JSON.js:21 
// Country Name : Antarctica
// Country flag : https://restcountries.eu/data/ata.svg

// Day4_JSON.js:21 
// Country Name : Antigua and Barbuda
// Country flag : https://restcountries.eu/data/atg.svg

// Day4_JSON.js:21 
// Country Name : Argentina
// Country flag : https://restcountries.eu/data/arg.svg

// Day4_JSON.js:21 
// Country Name : Armenia
// Country flag : https://restcountries.eu/data/arm.svg

// Day4_JSON.js:21 
// Country Name : Aruba
// Country flag : https://restcountries.eu/data/abw.svg

// Day4_JSON.js:21 
// Country Name : Australia
// Country flag : https://restcountries.eu/data/aus.svg

// Day4_JSON.js:21 
// Country Name : Austria
// Country flag : https://restcountries.eu/data/aut.svg

// Day4_JSON.js:21 
// Country Name : Azerbaijan
// Country flag : https://restcountries.eu/data/aze.svg

// Day4_JSON.js:21 
// Country Name : Bahamas
// Country flag : https://restcountries.eu/data/bhs.svg

// Day4_JSON.js:21 
// Country Name : Bahrain
// Country flag : https://restcountries.eu/data/bhr.svg

// Day4_JSON.js:21 
// Country Name : Bangladesh
// Country flag : https://restcountries.eu/data/bgd.svg

// Day4_JSON.js:21 
// Country Name : Barbados
// Country flag : https://restcountries.eu/data/brb.svg

// Day4_JSON.js:21 
// Country Name : Belarus
// Country flag : https://restcountries.eu/data/blr.svg

// Day4_JSON.js:21 
// Country Name : Belgium
// Country flag : https://restcountries.eu/data/bel.svg

// Day4_JSON.js:21 
// Country Name : Belize
// Country flag : https://restcountries.eu/data/blz.svg

// Day4_JSON.js:21 
// Country Name : Benin
// Country flag : https://restcountries.eu/data/ben.svg

// Day4_JSON.js:21 
// Country Name : Bermuda
// Country flag : https://restcountries.eu/data/bmu.svg

// Day4_JSON.js:21 
// Country Name : Bhutan
// Country flag : https://restcountries.eu/data/btn.svg

// Day4_JSON.js:21 
// Country Name : Bolivia (Plurinational State of)
// Country flag : https://restcountries.eu/data/bol.svg

// Day4_JSON.js:21 
// Country Name : Bonaire, Sint Eustatius and Saba
// Country flag : https://restcountries.eu/data/bes.svg

// Day4_JSON.js:21 
// Country Name : Bosnia and Herzegovina
// Country flag : https://restcountries.eu/data/bih.svg

// Day4_JSON.js:21 
// Country Name : Botswana
// Country flag : https://restcountries.eu/data/bwa.svg

// Day4_JSON.js:21 
// Country Name : Bouvet Island
// Country flag : https://restcountries.eu/data/bvt.svg

// Day4_JSON.js:21 
// Country Name : Brazil
// Country flag : https://restcountries.eu/data/bra.svg

// Day4_JSON.js:21 
// Country Name : British Indian Ocean Territory
// Country flag : https://restcountries.eu/data/iot.svg

// Day4_JSON.js:21 
// Country Name : United States Minor Outlying Islands
// Country flag : https://restcountries.eu/data/umi.svg

// Day4_JSON.js:21 
// Country Name : Virgin Islands (British)
// Country flag : https://restcountries.eu/data/vgb.svg

// Day4_JSON.js:21 
// Country Name : Virgin Islands (U.S.)
// Country flag : https://restcountries.eu/data/vir.svg

// Day4_JSON.js:21 
// Country Name : Brunei Darussalam
// Country flag : https://restcountries.eu/data/brn.svg

// Day4_JSON.js:21 
// Country Name : Bulgaria
// Country flag : https://restcountries.eu/data/bgr.svg

// Day4_JSON.js:21 
// Country Name : Burkina Faso
// Country flag : https://restcountries.eu/data/bfa.svg

// Day4_JSON.js:21 
// Country Name : Burundi
// Country flag : https://restcountries.eu/data/bdi.svg

// Day4_JSON.js:21 
// Country Name : Cambodia
// Country flag : https://restcountries.eu/data/khm.svg

// Day4_JSON.js:21 
// Country Name : Cameroon
// Country flag : https://restcountries.eu/data/cmr.svg

// Day4_JSON.js:21 
// Country Name : Canada
// Country flag : https://restcountries.eu/data/can.svg

// Day4_JSON.js:21 
// Country Name : Cabo Verde
// Country flag : https://restcountries.eu/data/cpv.svg

// Day4_JSON.js:21 
// Country Name : Cayman Islands
// Country flag : https://restcountries.eu/data/cym.svg

// Day4_JSON.js:21 
// Country Name : Central African Republic
// Country flag : https://restcountries.eu/data/caf.svg

// Day4_JSON.js:21 
// Country Name : Chad
// Country flag : https://restcountries.eu/data/tcd.svg

// Day4_JSON.js:21 
// Country Name : Chile
// Country flag : https://restcountries.eu/data/chl.svg

// Day4_JSON.js:21 
// Country Name : China
// Country flag : https://restcountries.eu/data/chn.svg

// Day4_JSON.js:21 
// Country Name : Christmas Island
// Country flag : https://restcountries.eu/data/cxr.svg

// Day4_JSON.js:21 
// Country Name : Cocos (Keeling) Islands
// Country flag : https://restcountries.eu/data/cck.svg

// Day4_JSON.js:21 
// Country Name : Colombia
// Country flag : https://restcountries.eu/data/col.svg

// Day4_JSON.js:21 
// Country Name : Comoros
// Country flag : https://restcountries.eu/data/com.svg

// Day4_JSON.js:21 
// Country Name : Congo
// Country flag : https://restcountries.eu/data/cog.svg

// Day4_JSON.js:21 
// Country Name : Congo (Democratic Republic of the)
// Country flag : https://restcountries.eu/data/cod.svg

// Day4_JSON.js:21 
// Country Name : Cook Islands
// Country flag : https://restcountries.eu/data/cok.svg

// Day4_JSON.js:21 
// Country Name : Costa Rica
// Country flag : https://restcountries.eu/data/cri.svg

// Day4_JSON.js:21 
// Country Name : Croatia
// Country flag : https://restcountries.eu/data/hrv.svg

// Day4_JSON.js:21 
// Country Name : Cuba
// Country flag : https://restcountries.eu/data/cub.svg

// Day4_JSON.js:21 
// Country Name : Curaçao
// Country flag : https://restcountries.eu/data/cuw.svg

// Day4_JSON.js:21 
// Country Name : Cyprus
// Country flag : https://restcountries.eu/data/cyp.svg

// Day4_JSON.js:21 
// Country Name : Czech Republic
// Country flag : https://restcountries.eu/data/cze.svg

// Day4_JSON.js:21 
// Country Name : Denmark
// Country flag : https://restcountries.eu/data/dnk.svg

// Day4_JSON.js:21 
// Country Name : Djibouti
// Country flag : https://restcountries.eu/data/dji.svg

// Day4_JSON.js:21 
// Country Name : Dominica
// Country flag : https://restcountries.eu/data/dma.svg

// Day4_JSON.js:21 
// Country Name : Dominican Republic
// Country flag : https://restcountries.eu/data/dom.svg

// Day4_JSON.js:21 
// Country Name : Ecuador
// Country flag : https://restcountries.eu/data/ecu.svg

// Day4_JSON.js:21 
// Country Name : Egypt
// Country flag : https://restcountries.eu/data/egy.svg

// Day4_JSON.js:21 
// Country Name : El Salvador
// Country flag : https://restcountries.eu/data/slv.svg

// Day4_JSON.js:21 
// Country Name : Equatorial Guinea
// Country flag : https://restcountries.eu/data/gnq.svg

// Day4_JSON.js:21 
// Country Name : Eritrea
// Country flag : https://restcountries.eu/data/eri.svg

// Day4_JSON.js:21 
// Country Name : Estonia
// Country flag : https://restcountries.eu/data/est.svg

// Day4_JSON.js:21 
// Country Name : Ethiopia
// Country flag : https://restcountries.eu/data/eth.svg

// Day4_JSON.js:21 
// Country Name : Falkland Islands (Malvinas)
// Country flag : https://restcountries.eu/data/flk.svg

// Day4_JSON.js:21 
// Country Name : Faroe Islands
// Country flag : https://restcountries.eu/data/fro.svg

// Day4_JSON.js:21 
// Country Name : Fiji
// Country flag : https://restcountries.eu/data/fji.svg

// Day4_JSON.js:21 
// Country Name : Finland
// Country flag : https://restcountries.eu/data/fin.svg

// Day4_JSON.js:21 
// Country Name : France
// Country flag : https://restcountries.eu/data/fra.svg

// Day4_JSON.js:21 
// Country Name : French Guiana
// Country flag : https://restcountries.eu/data/guf.svg

// Day4_JSON.js:21 
// Country Name : French Polynesia
// Country flag : https://restcountries.eu/data/pyf.svg

// Day4_JSON.js:21 
// Country Name : French Southern Territories
// Country flag : https://restcountries.eu/data/atf.svg

// Day4_JSON.js:21 
// Country Name : Gabon
// Country flag : https://restcountries.eu/data/gab.svg

// Day4_JSON.js:21 
// Country Name : Gambia
// Country flag : https://restcountries.eu/data/gmb.svg

// Day4_JSON.js:21 
// Country Name : Georgia
// Country flag : https://restcountries.eu/data/geo.svg

// Day4_JSON.js:21 
// Country Name : Germany
// Country flag : https://restcountries.eu/data/deu.svg

// Day4_JSON.js:21 
// Country Name : Ghana
// Country flag : https://restcountries.eu/data/gha.svg

// Day4_JSON.js:21 
// Country Name : Gibraltar
// Country flag : https://restcountries.eu/data/gib.svg

// Day4_JSON.js:21 
// Country Name : Greece
// Country flag : https://restcountries.eu/data/grc.svg

// Day4_JSON.js:21 
// Country Name : Greenland
// Country flag : https://restcountries.eu/data/grl.svg

// Day4_JSON.js:21 
// Country Name : Grenada
// Country flag : https://restcountries.eu/data/grd.svg

// Day4_JSON.js:21 
// Country Name : Guadeloupe
// Country flag : https://restcountries.eu/data/glp.svg

// Day4_JSON.js:21 
// Country Name : Guam
// Country flag : https://restcountries.eu/data/gum.svg

// Day4_JSON.js:21 
// Country Name : Guatemala
// Country flag : https://restcountries.eu/data/gtm.svg

// Day4_JSON.js:21 
// Country Name : Guernsey
// Country flag : https://restcountries.eu/data/ggy.svg

// Day4_JSON.js:21 
// Country Name : Guinea
// Country flag : https://restcountries.eu/data/gin.svg

// Day4_JSON.js:21 
// Country Name : Guinea-Bissau
// Country flag : https://restcountries.eu/data/gnb.svg

// Day4_JSON.js:21 
// Country Name : Guyana
// Country flag : https://restcountries.eu/data/guy.svg

// Day4_JSON.js:21 
// Country Name : Haiti
// Country flag : https://restcountries.eu/data/hti.svg

// Day4_JSON.js:21 
// Country Name : Heard Island and McDonald Islands
// Country flag : https://restcountries.eu/data/hmd.svg

// Day4_JSON.js:21 
// Country Name : Holy See
// Country flag : https://restcountries.eu/data/vat.svg

// Day4_JSON.js:21 
// Country Name : Honduras
// Country flag : https://restcountries.eu/data/hnd.svg

// Day4_JSON.js:21 
// Country Name : Hong Kong
// Country flag : https://restcountries.eu/data/hkg.svg

// Day4_JSON.js:21 
// Country Name : Hungary
// Country flag : https://restcountries.eu/data/hun.svg

// Day4_JSON.js:21 
// Country Name : Iceland
// Country flag : https://restcountries.eu/data/isl.svg

// Day4_JSON.js:21 
// Country Name : India
// Country flag : https://restcountries.eu/data/ind.svg

// Day4_JSON.js:21 
// Country Name : Indonesia
// Country flag : https://restcountries.eu/data/idn.svg

// Day4_JSON.js:21 
// Country Name : Côte d'Ivoire
// Country flag : https://restcountries.eu/data/civ.svg

// Day4_JSON.js:21 
// Country Name : Iran (Islamic Republic of)
// Country flag : https://restcountries.eu/data/irn.svg

// Day4_JSON.js:21 
// Country Name : Iraq
// Country flag : https://restcountries.eu/data/irq.svg

// Day4_JSON.js:21 
// Country Name : Ireland
// Country flag : https://restcountries.eu/data/irl.svg

// Day4_JSON.js:21 
// Country Name : Isle of Man
// Country flag : https://restcountries.eu/data/imn.svg

// Day4_JSON.js:21 
// Country Name : Israel
// Country flag : https://restcountries.eu/data/isr.svg

// Day4_JSON.js:21 
// Country Name : Italy
// Country flag : https://restcountries.eu/data/ita.svg

// Day4_JSON.js:21 
// Country Name : Jamaica
// Country flag : https://restcountries.eu/data/jam.svg

// Day4_JSON.js:21 
// Country Name : Japan
// Country flag : https://restcountries.eu/data/jpn.svg

// Day4_JSON.js:21 
// Country Name : Jersey
// Country flag : https://restcountries.eu/data/jey.svg

// Day4_JSON.js:21 
// Country Name : Jordan
// Country flag : https://restcountries.eu/data/jor.svg

// Day4_JSON.js:21 
// Country Name : Kazakhstan
// Country flag : https://restcountries.eu/data/kaz.svg

// Day4_JSON.js:21 
// Country Name : Kenya
// Country flag : https://restcountries.eu/data/ken.svg

// Day4_JSON.js:21 
// Country Name : Kiribati
// Country flag : https://restcountries.eu/data/kir.svg

// Day4_JSON.js:21 
// Country Name : Kuwait
// Country flag : https://restcountries.eu/data/kwt.svg

// Day4_JSON.js:21 
// Country Name : Kyrgyzstan
// Country flag : https://restcountries.eu/data/kgz.svg

// Day4_JSON.js:21 
// Country Name : Lao People's Democratic Republic
// Country flag : https://restcountries.eu/data/lao.svg

// Day4_JSON.js:21 
// Country Name : Latvia
// Country flag : https://restcountries.eu/data/lva.svg

// Day4_JSON.js:21 
// Country Name : Lebanon
// Country flag : https://restcountries.eu/data/lbn.svg

// Day4_JSON.js:21 
// Country Name : Lesotho
// Country flag : https://restcountries.eu/data/lso.svg

// Day4_JSON.js:21 
// Country Name : Liberia
// Country flag : https://restcountries.eu/data/lbr.svg

// Day4_JSON.js:21 
// Country Name : Libya
// Country flag : https://restcountries.eu/data/lby.svg

// Day4_JSON.js:21 
// Country Name : Liechtenstein
// Country flag : https://restcountries.eu/data/lie.svg

// Day4_JSON.js:21 
// Country Name : Lithuania
// Country flag : https://restcountries.eu/data/ltu.svg

// Day4_JSON.js:21 
// Country Name : Luxembourg
// Country flag : https://restcountries.eu/data/lux.svg

// Day4_JSON.js:21 
// Country Name : Macao
// Country flag : https://restcountries.eu/data/mac.svg

// Day4_JSON.js:21 
// Country Name : Macedonia (the former Yugoslav Republic of)
// Country flag : https://restcountries.eu/data/mkd.svg

// Day4_JSON.js:21 
// Country Name : Madagascar
// Country flag : https://restcountries.eu/data/mdg.svg

// Day4_JSON.js:21 
// Country Name : Malawi
// Country flag : https://restcountries.eu/data/mwi.svg

// Day4_JSON.js:21 
// Country Name : Malaysia
// Country flag : https://restcountries.eu/data/mys.svg

// Day4_JSON.js:21 
// Country Name : Maldives
// Country flag : https://restcountries.eu/data/mdv.svg

// Day4_JSON.js:21 
// Country Name : Mali
// Country flag : https://restcountries.eu/data/mli.svg

// Day4_JSON.js:21 
// Country Name : Malta
// Country flag : https://restcountries.eu/data/mlt.svg

// Day4_JSON.js:21 
// Country Name : Marshall Islands
// Country flag : https://restcountries.eu/data/mhl.svg

// Day4_JSON.js:21 
// Country Name : Martinique
// Country flag : https://restcountries.eu/data/mtq.svg

// Day4_JSON.js:21 
// Country Name : Mauritania
// Country flag : https://restcountries.eu/data/mrt.svg

// Day4_JSON.js:21 
// Country Name : Mauritius
// Country flag : https://restcountries.eu/data/mus.svg

// Day4_JSON.js:21 
// Country Name : Mayotte
// Country flag : https://restcountries.eu/data/myt.svg

// Day4_JSON.js:21 
// Country Name : Mexico
// Country flag : https://restcountries.eu/data/mex.svg

// Day4_JSON.js:21 
// Country Name : Micronesia (Federated States of)
// Country flag : https://restcountries.eu/data/fsm.svg

// Day4_JSON.js:21 
// Country Name : Moldova (Republic of)
// Country flag : https://restcountries.eu/data/mda.svg

// Day4_JSON.js:21 
// Country Name : Monaco
// Country flag : https://restcountries.eu/data/mco.svg

// Day4_JSON.js:21 
// Country Name : Mongolia
// Country flag : https://restcountries.eu/data/mng.svg

// Day4_JSON.js:21 
// Country Name : Montenegro
// Country flag : https://restcountries.eu/data/mne.svg

// Day4_JSON.js:21 
// Country Name : Montserrat
// Country flag : https://restcountries.eu/data/msr.svg

// Day4_JSON.js:21 
// Country Name : Morocco
// Country flag : https://restcountries.eu/data/mar.svg

// Day4_JSON.js:21 
// Country Name : Mozambique
// Country flag : https://restcountries.eu/data/moz.svg

// Day4_JSON.js:21 
// Country Name : Myanmar
// Country flag : https://restcountries.eu/data/mmr.svg

// Day4_JSON.js:21 
// Country Name : Namibia
// Country flag : https://restcountries.eu/data/nam.svg

// Day4_JSON.js:21 
// Country Name : Nauru
// Country flag : https://restcountries.eu/data/nru.svg

// Day4_JSON.js:21 
// Country Name : Nepal
// Country flag : https://restcountries.eu/data/npl.svg

// Day4_JSON.js:21 
// Country Name : Netherlands
// Country flag : https://restcountries.eu/data/nld.svg

// Day4_JSON.js:21 
// Country Name : New Caledonia
// Country flag : https://restcountries.eu/data/ncl.svg

// Day4_JSON.js:21 
// Country Name : New Zealand
// Country flag : https://restcountries.eu/data/nzl.svg

// Day4_JSON.js:21 
// Country Name : Nicaragua
// Country flag : https://restcountries.eu/data/nic.svg

// Day4_JSON.js:21 
// Country Name : Niger
// Country flag : https://restcountries.eu/data/ner.svg

// Day4_JSON.js:21 
// Country Name : Nigeria
// Country flag : https://restcountries.eu/data/nga.svg

// Day4_JSON.js:21 
// Country Name : Niue
// Country flag : https://restcountries.eu/data/niu.svg

// Day4_JSON.js:21 
// Country Name : Norfolk Island
// Country flag : https://restcountries.eu/data/nfk.svg

// Day4_JSON.js:21 
// Country Name : Korea (Democratic People's Republic of)
// Country flag : https://restcountries.eu/data/prk.svg

// Day4_JSON.js:21 
// Country Name : Northern Mariana Islands
// Country flag : https://restcountries.eu/data/mnp.svg

// Day4_JSON.js:21 
// Country Name : Norway
// Country flag : https://restcountries.eu/data/nor.svg

// Day4_JSON.js:21 
// Country Name : Oman
// Country flag : https://restcountries.eu/data/omn.svg

// Day4_JSON.js:21 
// Country Name : Pakistan
// Country flag : https://restcountries.eu/data/pak.svg

// Day4_JSON.js:21 
// Country Name : Palau
// Country flag : https://restcountries.eu/data/plw.svg

// Day4_JSON.js:21 
// Country Name : Palestine, State of
// Country flag : https://restcountries.eu/data/pse.svg

// Day4_JSON.js:21 
// Country Name : Panama
// Country flag : https://restcountries.eu/data/pan.svg

// Day4_JSON.js:21 
// Country Name : Papua New Guinea
// Country flag : https://restcountries.eu/data/png.svg

// Day4_JSON.js:21 
// Country Name : Paraguay
// Country flag : https://restcountries.eu/data/pry.svg

// Day4_JSON.js:21 
// Country Name : Peru
// Country flag : https://restcountries.eu/data/per.svg

// Day4_JSON.js:21 
// Country Name : Philippines
// Country flag : https://restcountries.eu/data/phl.svg

// Day4_JSON.js:21 
// Country Name : Pitcairn
// Country flag : https://restcountries.eu/data/pcn.svg

// Day4_JSON.js:21 
// Country Name : Poland
// Country flag : https://restcountries.eu/data/pol.svg

// Day4_JSON.js:21 
// Country Name : Portugal
// Country flag : https://restcountries.eu/data/prt.svg

// Day4_JSON.js:21 
// Country Name : Puerto Rico
// Country flag : https://restcountries.eu/data/pri.svg

// Day4_JSON.js:21 
// Country Name : Qatar
// Country flag : https://restcountries.eu/data/qat.svg

// Day4_JSON.js:21 
// Country Name : Republic of Kosovo
// Country flag : https://restcountries.eu/data/kos.svg

// Day4_JSON.js:21 
// Country Name : Réunion
// Country flag : https://restcountries.eu/data/reu.svg

// Day4_JSON.js:21 
// Country Name : Romania
// Country flag : https://restcountries.eu/data/rou.svg

// Day4_JSON.js:21 
// Country Name : Russian Federation
// Country flag : https://restcountries.eu/data/rus.svg

// Day4_JSON.js:21 
// Country Name : Rwanda
// Country flag : https://restcountries.eu/data/rwa.svg

// Day4_JSON.js:21 
// Country Name : Saint Barthélemy
// Country flag : https://restcountries.eu/data/blm.svg

// Day4_JSON.js:21 
// Country Name : Saint Helena, Ascension and Tristan da Cunha
// Country flag : https://restcountries.eu/data/shn.svg

// Day4_JSON.js:21 
// Country Name : Saint Kitts and Nevis
// Country flag : https://restcountries.eu/data/kna.svg

// Day4_JSON.js:21 
// Country Name : Saint Lucia
// Country flag : https://restcountries.eu/data/lca.svg

// Day4_JSON.js:21 
// Country Name : Saint Martin (French part)
// Country flag : https://restcountries.eu/data/maf.svg

// Day4_JSON.js:21 
// Country Name : Saint Pierre and Miquelon
// Country flag : https://restcountries.eu/data/spm.svg

// Day4_JSON.js:21 
// Country Name : Saint Vincent and the Grenadines
// Country flag : https://restcountries.eu/data/vct.svg

// Day4_JSON.js:21 
// Country Name : Samoa
// Country flag : https://restcountries.eu/data/wsm.svg

// Day4_JSON.js:21 
// Country Name : San Marino
// Country flag : https://restcountries.eu/data/smr.svg

// Day4_JSON.js:21 
// Country Name : Sao Tome and Principe
// Country flag : https://restcountries.eu/data/stp.svg

// Day4_JSON.js:21 
// Country Name : Saudi Arabia
// Country flag : https://restcountries.eu/data/sau.svg

// Day4_JSON.js:21 
// Country Name : Senegal
// Country flag : https://restcountries.eu/data/sen.svg

// Day4_JSON.js:21 
// Country Name : Serbia
// Country flag : https://restcountries.eu/data/srb.svg

// Day4_JSON.js:21 
// Country Name : Seychelles
// Country flag : https://restcountries.eu/data/syc.svg

// Day4_JSON.js:21 
// Country Name : Sierra Leone
// Country flag : https://restcountries.eu/data/sle.svg

// Day4_JSON.js:21 
// Country Name : Singapore
// Country flag : https://restcountries.eu/data/sgp.svg

// Day4_JSON.js:21 
// Country Name : Sint Maarten (Dutch part)
// Country flag : https://restcountries.eu/data/sxm.svg

// Day4_JSON.js:21 
// Country Name : Slovakia
// Country flag : https://restcountries.eu/data/svk.svg

// Day4_JSON.js:21 
// Country Name : Slovenia
// Country flag : https://restcountries.eu/data/svn.svg

// Day4_JSON.js:21 
// Country Name : Solomon Islands
// Country flag : https://restcountries.eu/data/slb.svg

// Day4_JSON.js:21 
// Country Name : Somalia
// Country flag : https://restcountries.eu/data/som.svg

// Day4_JSON.js:21 
// Country Name : South Africa
// Country flag : https://restcountries.eu/data/zaf.svg

// Day4_JSON.js:21 
// Country Name : South Georgia and the South Sandwich Islands
// Country flag : https://restcountries.eu/data/sgs.svg

// Day4_JSON.js:21 
// Country Name : Korea (Republic of)
// Country flag : https://restcountries.eu/data/kor.svg

// Day4_JSON.js:21 
// Country Name : South Sudan
// Country flag : https://restcountries.eu/data/ssd.svg

// Day4_JSON.js:21 
// Country Name : Spain
// Country flag : https://restcountries.eu/data/esp.svg

// Day4_JSON.js:21 
// Country Name : Sri Lanka
// Country flag : https://restcountries.eu/data/lka.svg

// Day4_JSON.js:21 
// Country Name : Sudan
// Country flag : https://restcountries.eu/data/sdn.svg

// Day4_JSON.js:21 
// Country Name : Suriname
// Country flag : https://restcountries.eu/data/sur.svg

// Day4_JSON.js:21 
// Country Name : Svalbard and Jan Mayen
// Country flag : https://restcountries.eu/data/sjm.svg

// Day4_JSON.js:21 
// Country Name : Swaziland
// Country flag : https://restcountries.eu/data/swz.svg

// Day4_JSON.js:21 
// Country Name : Sweden
// Country flag : https://restcountries.eu/data/swe.svg

// Day4_JSON.js:21 
// Country Name : Switzerland
// Country flag : https://restcountries.eu/data/che.svg

// Day4_JSON.js:21 
// Country Name : Syrian Arab Republic
// Country flag : https://restcountries.eu/data/syr.svg

// Day4_JSON.js:21 
// Country Name : Taiwan
// Country flag : https://restcountries.eu/data/twn.svg

// Day4_JSON.js:21 
// Country Name : Tajikistan
// Country flag : https://restcountries.eu/data/tjk.svg

// Day4_JSON.js:21 
// Country Name : Tanzania, United Republic of
// Country flag : https://restcountries.eu/data/tza.svg

// Day4_JSON.js:21 
// Country Name : Thailand
// Country flag : https://restcountries.eu/data/tha.svg

// Day4_JSON.js:21 
// Country Name : Timor-Leste
// Country flag : https://restcountries.eu/data/tls.svg

// Day4_JSON.js:21 
// Country Name : Togo
// Country flag : https://restcountries.eu/data/tgo.svg

// Day4_JSON.js:21 
// Country Name : Tokelau
// Country flag : https://restcountries.eu/data/tkl.svg

// Day4_JSON.js:21 
// Country Name : Tonga
// Country flag : https://restcountries.eu/data/ton.svg

// Day4_JSON.js:21 
// Country Name : Trinidad and Tobago
// Country flag : https://restcountries.eu/data/tto.svg

// Day4_JSON.js:21 
// Country Name : Tunisia
// Country flag : https://restcountries.eu/data/tun.svg

// Day4_JSON.js:21 
// Country Name : Turkey
// Country flag : https://restcountries.eu/data/tur.svg

// Day4_JSON.js:21 
// Country Name : Turkmenistan
// Country flag : https://restcountries.eu/data/tkm.svg

// Day4_JSON.js:21 
// Country Name : Turks and Caicos Islands
// Country flag : https://restcountries.eu/data/tca.svg

// Day4_JSON.js:21 
// Country Name : Tuvalu
// Country flag : https://restcountries.eu/data/tuv.svg

// Day4_JSON.js:21 
// Country Name : Uganda
// Country flag : https://restcountries.eu/data/uga.svg

// Day4_JSON.js:21 
// Country Name : Ukraine
// Country flag : https://restcountries.eu/data/ukr.svg

// Day4_JSON.js:21 
// Country Name : United Arab Emirates
// Country flag : https://restcountries.eu/data/are.svg

// Day4_JSON.js:21 
// Country Name : United Kingdom of Great Britain and Northern Ireland
// Country flag : https://restcountries.eu/data/gbr.svg

// Day4_JSON.js:21 
// Country Name : United States of America
// Country flag : https://restcountries.eu/data/usa.svg

// Day4_JSON.js:21 
// Country Name : Uruguay
// Country flag : https://restcountries.eu/data/ury.svg

// Day4_JSON.js:21 
// Country Name : Uzbekistan
// Country flag : https://restcountries.eu/data/uzb.svg

// Day4_JSON.js:21 
// Country Name : Vanuatu
// Country flag : https://restcountries.eu/data/vut.svg

// Day4_JSON.js:21 
// Country Name : Venezuela (Bolivarian Republic of)
// Country flag : https://restcountries.eu/data/ven.svg

// Day4_JSON.js:21 
// Country Name : Viet Nam
// Country flag : https://restcountries.eu/data/vnm.svg

// Day4_JSON.js:21 
// Country Name : Wallis and Futuna
// Country flag : https://restcountries.eu/data/wlf.svg

// Day4_JSON.js:21 
// Country Name : Western Sahara
// Country flag : https://restcountries.eu/data/esh.svg

// Day4_JSON.js:21 
// Country Name : Yemen
// Country flag : https://restcountries.eu/data/yem.svg

// Day4_JSON.js:21 
// Country Name : Zambia
// Country flag : https://restcountries.eu/data/zmb.svg

// Day4_JSON.js:21 
// Country Name : Zimbabwe
// Country flag : https://restcountries.eu/data/zwe.svg







// Question No. 3: Use the same rest countries and print all countries name, region, sub region and population
//Answer:

// Set up html request.
var xhr = new XMLHttpRequest(); //Creation of xml http request xhr

// //Pasing the url
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send(); //initiating the request from client side

//add a listener to process the request
xhr.onload = function (){
// //process the request and server will return the data
if(xhr.status>=200 && xhr.status<300){
//     //conver the raw data to js notation
    var data = JSON.parse(xhr.response)//get raw data
    data.forEach((item) =>{
        console.log(`
        Country Name : ${item.name}
        Country region : ${item.region}
        Country subregion : ${item.subregion}
        Country population : ${item.population}
        `)
    })
    console.log(data)
}
else{
//     //If ther is any error due to API endpoint or server problem
//     //Then we will use else for printing error
    console.log("Getting error while loading the website");
}
}

//Output:
// Day4_JSON.js:1055 
// Country Name : Afghanistan
// Country region : Asia
// Country subregion : Southern Asia
// Country population : 27657145

// Day4_JSON.js:1055 
// Country Name : Åland Islands
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 28875

// Day4_JSON.js:1055 
// Country Name : Albania
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 2886026

// Day4_JSON.js:1055 
// Country Name : Algeria
// Country region : Africa
// Country subregion : Northern Africa
// Country population : 40400000

// Day4_JSON.js:1055 
// Country Name : American Samoa
// Country region : Oceania
// Country subregion : Polynesia
// Country population : 57100

// Day4_JSON.js:1055 
// Country Name : Andorra
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 78014

// Day4_JSON.js:1055 
// Country Name : Angola
// Country region : Africa
// Country subregion : Middle Africa
// Country population : 25868000

// Day4_JSON.js:1055 
// Country Name : Anguilla
// Country region : Americas
// Country subregion : Caribbean
// Country population : 13452

// Day4_JSON.js:1055 
// Country Name : Antarctica
// Country region : Polar
// Country subregion : 
// Country population : 1000

// Day4_JSON.js:1055 
// Country Name : Antigua and Barbuda
// Country region : Americas
// Country subregion : Caribbean
// Country population : 86295

// Day4_JSON.js:1055 
// Country Name : Argentina
// Country region : Americas
// Country subregion : South America
// Country population : 43590400

// Day4_JSON.js:1055 
// Country Name : Armenia
// Country region : Asia
// Country subregion : Western Asia
// Country population : 2994400

// Day4_JSON.js:1055 
// Country Name : Aruba
// Country region : Americas
// Country subregion : Caribbean
// Country population : 107394

// Day4_JSON.js:1055 
// Country Name : Australia
// Country region : Oceania
// Country subregion : Australia and New Zealand
// Country population : 24117360

// Day4_JSON.js:1055 
// Country Name : Austria
// Country region : Europe
// Country subregion : Western Europe
// Country population : 8725931

// Day4_JSON.js:1055 
// Country Name : Azerbaijan
// Country region : Asia
// Country subregion : Western Asia
// Country population : 9730500

// Day4_JSON.js:1055 
// Country Name : Bahamas
// Country region : Americas
// Country subregion : Caribbean
// Country population : 378040

// Day4_JSON.js:1055 
// Country Name : Bahrain
// Country region : Asia
// Country subregion : Western Asia
// Country population : 1404900

// Day4_JSON.js:1055 
// Country Name : Bangladesh
// Country region : Asia
// Country subregion : Southern Asia
// Country population : 161006790

// Day4_JSON.js:1055 
// Country Name : Barbados
// Country region : Americas
// Country subregion : Caribbean
// Country population : 285000

// Day4_JSON.js:1055 
// Country Name : Belarus
// Country region : Europe
// Country subregion : Eastern Europe
// Country population : 9498700

// Day4_JSON.js:1055 
// Country Name : Belgium
// Country region : Europe
// Country subregion : Western Europe
// Country population : 11319511

// Day4_JSON.js:1055 
// Country Name : Belize
// Country region : Americas
// Country subregion : Central America
// Country population : 370300

// Day4_JSON.js:1055 
// Country Name : Benin
// Country region : Africa
// Country subregion : Western Africa
// Country population : 10653654

// Day4_JSON.js:1055 
// Country Name : Bermuda
// Country region : Americas
// Country subregion : Northern America
// Country population : 61954

// Day4_JSON.js:1055 
// Country Name : Bhutan
// Country region : Asia
// Country subregion : Southern Asia
// Country population : 775620

// Day4_JSON.js:1055 
// Country Name : Bolivia (Plurinational State of)
// Country region : Americas
// Country subregion : South America
// Country population : 10985059

// Day4_JSON.js:1055 
// Country Name : Bonaire, Sint Eustatius and Saba
// Country region : Americas
// Country subregion : Caribbean
// Country population : 17408

// Day4_JSON.js:1055 
// Country Name : Bosnia and Herzegovina
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 3531159

// Day4_JSON.js:1055 
// Country Name : Botswana
// Country region : Africa
// Country subregion : Southern Africa
// Country population : 2141206

// Day4_JSON.js:1055 
// Country Name : Bouvet Island
// Country region : 
// Country subregion : 
// Country population : 0

// Day4_JSON.js:1055 
// Country Name : Brazil
// Country region : Americas
// Country subregion : South America
// Country population : 206135893

// Day4_JSON.js:1055 
// Country Name : British Indian Ocean Territory
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 3000

// Day4_JSON.js:1055 
// Country Name : United States Minor Outlying Islands
// Country region : Americas
// Country subregion : Northern America
// Country population : 300

// Day4_JSON.js:1055 
// Country Name : Virgin Islands (British)
// Country region : Americas
// Country subregion : Caribbean
// Country population : 28514

// Day4_JSON.js:1055 
// Country Name : Virgin Islands (U.S.)
// Country region : Americas
// Country subregion : Caribbean
// Country population : 114743

// Day4_JSON.js:1055 
// Country Name : Brunei Darussalam
// Country region : Asia
// Country subregion : South-Eastern Asia
// Country population : 411900

// Day4_JSON.js:1055 
// Country Name : Bulgaria
// Country region : Europe
// Country subregion : Eastern Europe
// Country population : 7153784

// Day4_JSON.js:1055 
// Country Name : Burkina Faso
// Country region : Africa
// Country subregion : Western Africa
// Country population : 19034397

// Day4_JSON.js:1055 
// Country Name : Burundi
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 10114505

// Day4_JSON.js:1055 
// Country Name : Cambodia
// Country region : Asia
// Country subregion : South-Eastern Asia
// Country population : 15626444

// Day4_JSON.js:1055 
// Country Name : Cameroon
// Country region : Africa
// Country subregion : Middle Africa
// Country population : 22709892

// Day4_JSON.js:1055 
// Country Name : Canada
// Country region : Americas
// Country subregion : Northern America
// Country population : 36155487

// Day4_JSON.js:1055 
// Country Name : Cabo Verde
// Country region : Africa
// Country subregion : Western Africa
// Country population : 531239

// Day4_JSON.js:1055 
// Country Name : Cayman Islands
// Country region : Americas
// Country subregion : Caribbean
// Country population : 58238

// Day4_JSON.js:1055 
// Country Name : Central African Republic
// Country region : Africa
// Country subregion : Middle Africa
// Country population : 4998000

// Day4_JSON.js:1055 
// Country Name : Chad
// Country region : Africa
// Country subregion : Middle Africa
// Country population : 14497000

// Day4_JSON.js:1055 
// Country Name : Chile
// Country region : Americas
// Country subregion : South America
// Country population : 18191900

// Day4_JSON.js:1055 
// Country Name : China
// Country region : Asia
// Country subregion : Eastern Asia
// Country population : 1377422166

// Day4_JSON.js:1055 
// Country Name : Christmas Island
// Country region : Oceania
// Country subregion : Australia and New Zealand
// Country population : 2072

// Day4_JSON.js:1055 
// Country Name : Cocos (Keeling) Islands
// Country region : Oceania
// Country subregion : Australia and New Zealand
// Country population : 550

// Day4_JSON.js:1055 
// Country Name : Colombia
// Country region : Americas
// Country subregion : South America
// Country population : 48759958

// Day4_JSON.js:1055 
// Country Name : Comoros
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 806153

// Day4_JSON.js:1055 
// Country Name : Congo
// Country region : Africa
// Country subregion : Middle Africa
// Country population : 4741000

// Day4_JSON.js:1055 
// Country Name : Congo (Democratic Republic of the)
// Country region : Africa
// Country subregion : Middle Africa
// Country population : 85026000

// Day4_JSON.js:1055 
// Country Name : Cook Islands
// Country region : Oceania
// Country subregion : Polynesia
// Country population : 18100

// Day4_JSON.js:1055 
// Country Name : Costa Rica
// Country region : Americas
// Country subregion : Central America
// Country population : 4890379

// Day4_JSON.js:1055 
// Country Name : Croatia
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 4190669

// Day4_JSON.js:1055 
// Country Name : Cuba
// Country region : Americas
// Country subregion : Caribbean
// Country population : 11239004

// Day4_JSON.js:1055 
// Country Name : Curaçao
// Country region : Americas
// Country subregion : Caribbean
// Country population : 154843

// Day4_JSON.js:1055 
// Country Name : Cyprus
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 847000

// Day4_JSON.js:1055 
// Country Name : Czech Republic
// Country region : Europe
// Country subregion : Eastern Europe
// Country population : 10558524

// Day4_JSON.js:1055 
// Country Name : Denmark
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 5717014

// Day4_JSON.js:1055 
// Country Name : Djibouti
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 900000

// Day4_JSON.js:1055 
// Country Name : Dominica
// Country region : Americas
// Country subregion : Caribbean
// Country population : 71293

// Day4_JSON.js:1055 
// Country Name : Dominican Republic
// Country region : Americas
// Country subregion : Caribbean
// Country population : 10075045

// Day4_JSON.js:1055 
// Country Name : Ecuador
// Country region : Americas
// Country subregion : South America
// Country population : 16545799

// Day4_JSON.js:1055 
// Country Name : Egypt
// Country region : Africa
// Country subregion : Northern Africa
// Country population : 91290000

// Day4_JSON.js:1055 
// Country Name : El Salvador
// Country region : Americas
// Country subregion : Central America
// Country population : 6520675

// Day4_JSON.js:1055 
// Country Name : Equatorial Guinea
// Country region : Africa
// Country subregion : Middle Africa
// Country population : 1222442

// Day4_JSON.js:1055 
// Country Name : Eritrea
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 5352000

// Day4_JSON.js:1055 
// Country Name : Estonia
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 1315944

// Day4_JSON.js:1055 
// Country Name : Ethiopia
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 92206005

// Day4_JSON.js:1055 
// Country Name : Falkland Islands (Malvinas)
// Country region : Americas
// Country subregion : South America
// Country population : 2563

// Day4_JSON.js:1055 
// Country Name : Faroe Islands
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 49376

// Day4_JSON.js:1055 
// Country Name : Fiji
// Country region : Oceania
// Country subregion : Melanesia
// Country population : 867000

// Day4_JSON.js:1055 
// Country Name : Finland
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 5491817

// Day4_JSON.js:1055 
// Country Name : France
// Country region : Europe
// Country subregion : Western Europe
// Country population : 66710000

// Day4_JSON.js:1055 
// Country Name : French Guiana
// Country region : Americas
// Country subregion : South America
// Country population : 254541

// Day4_JSON.js:1055 
// Country Name : French Polynesia
// Country region : Oceania
// Country subregion : Polynesia
// Country population : 271800

// Day4_JSON.js:1055 
// Country Name : French Southern Territories
// Country region : Africa
// Country subregion : Southern Africa
// Country population : 140

// Day4_JSON.js:1055 
// Country Name : Gabon
// Country region : Africa
// Country subregion : Middle Africa
// Country population : 1802278

// Day4_JSON.js:1055 
// Country Name : Gambia
// Country region : Africa
// Country subregion : Western Africa
// Country population : 1882450

// Day4_JSON.js:1055 
// Country Name : Georgia
// Country region : Asia
// Country subregion : Western Asia
// Country population : 3720400

// Day4_JSON.js:1055 
// Country Name : Germany
// Country region : Europe
// Country subregion : Western Europe
// Country population : 81770900

// Day4_JSON.js:1055 
// Country Name : Ghana
// Country region : Africa
// Country subregion : Western Africa
// Country population : 27670174

// Day4_JSON.js:1055 
// Country Name : Gibraltar
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 33140

// Day4_JSON.js:1055 
// Country Name : Greece
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 10858018

// Day4_JSON.js:1055 
// Country Name : Greenland
// Country region : Americas
// Country subregion : Northern America
// Country population : 55847

// Day4_JSON.js:1055 
// Country Name : Grenada
// Country region : Americas
// Country subregion : Caribbean
// Country population : 103328

// Day4_JSON.js:1055 
// Country Name : Guadeloupe
// Country region : Americas
// Country subregion : Caribbean
// Country population : 400132

// Day4_JSON.js:1055 
// Country Name : Guam
// Country region : Oceania
// Country subregion : Micronesia
// Country population : 184200

// Day4_JSON.js:1055 
// Country Name : Guatemala
// Country region : Americas
// Country subregion : Central America
// Country population : 16176133

// Day4_JSON.js:1055 
// Country Name : Guernsey
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 62999

// Day4_JSON.js:1055 
// Country Name : Guinea
// Country region : Africa
// Country subregion : Western Africa
// Country population : 12947000

// Day4_JSON.js:1055 
// Country Name : Guinea-Bissau
// Country region : Africa
// Country subregion : Western Africa
// Country population : 1547777

// Day4_JSON.js:1055 
// Country Name : Guyana
// Country region : Americas
// Country subregion : South America
// Country population : 746900

// Day4_JSON.js:1055 
// Country Name : Haiti
// Country region : Americas
// Country subregion : Caribbean
// Country population : 11078033

// Day4_JSON.js:1055 
// Country Name : Heard Island and McDonald Islands
// Country region : 
// Country subregion : 
// Country population : 0

// Day4_JSON.js:1055 
// Country Name : Holy See
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 451

// Day4_JSON.js:1055 
// Country Name : Honduras
// Country region : Americas
// Country subregion : Central America
// Country population : 8576532

// Day4_JSON.js:1055 
// Country Name : Hong Kong
// Country region : Asia
// Country subregion : Eastern Asia
// Country population : 7324300

// Day4_JSON.js:1055 
// Country Name : Hungary
// Country region : Europe
// Country subregion : Eastern Europe
// Country population : 9823000

// Day4_JSON.js:1055 
// Country Name : Iceland
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 334300

// Day4_JSON.js:1055 
// Country Name : India
// Country region : Asia
// Country subregion : Southern Asia
// Country population : 1295210000

// Day4_JSON.js:1055 
// Country Name : Indonesia
// Country region : Asia
// Country subregion : South-Eastern Asia
// Country population : 258705000

// Day4_JSON.js:1055 
// Country Name : Côte d'Ivoire
// Country region : Africa
// Country subregion : Western Africa
// Country population : 22671331

// Day4_JSON.js:1055 
// Country Name : Iran (Islamic Republic of)
// Country region : Asia
// Country subregion : Southern Asia
// Country population : 79369900

// Day4_JSON.js:1055 
// Country Name : Iraq
// Country region : Asia
// Country subregion : Western Asia
// Country population : 37883543

// Day4_JSON.js:1055 
// Country Name : Ireland
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 6378000

// Day4_JSON.js:1055 
// Country Name : Isle of Man
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 84497

// Day4_JSON.js:1055 
// Country Name : Israel
// Country region : Asia
// Country subregion : Western Asia
// Country population : 8527400

// Day4_JSON.js:1055 
// Country Name : Italy
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 60665551

// Day4_JSON.js:1055 
// Country Name : Jamaica
// Country region : Americas
// Country subregion : Caribbean
// Country population : 2723246

// Day4_JSON.js:1055 
// Country Name : Japan
// Country region : Asia
// Country subregion : Eastern Asia
// Country population : 126960000

// Day4_JSON.js:1055 
// Country Name : Jersey
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 100800

// Day4_JSON.js:1055 
// Country Name : Jordan
// Country region : Asia
// Country subregion : Western Asia
// Country population : 9531712

// Day4_JSON.js:1055 
// Country Name : Kazakhstan
// Country region : Asia
// Country subregion : Central Asia
// Country population : 17753200

// Day4_JSON.js:1055 
// Country Name : Kenya
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 47251000

// Day4_JSON.js:1055 
// Country Name : Kiribati
// Country region : Oceania
// Country subregion : Micronesia
// Country population : 113400

// Day4_JSON.js:1055 
// Country Name : Kuwait
// Country region : Asia
// Country subregion : Western Asia
// Country population : 4183658

// Day4_JSON.js:1055 
// Country Name : Kyrgyzstan
// Country region : Asia
// Country subregion : Central Asia
// Country population : 6047800

// Day4_JSON.js:1055 
// Country Name : Lao People's Democratic Republic
// Country region : Asia
// Country subregion : South-Eastern Asia
// Country population : 6492400

// Day4_JSON.js:1055 
// Country Name : Latvia
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 1961600

// Day4_JSON.js:1055 
// Country Name : Lebanon
// Country region : Asia
// Country subregion : Western Asia
// Country population : 5988000

// Day4_JSON.js:1055 
// Country Name : Lesotho
// Country region : Africa
// Country subregion : Southern Africa
// Country population : 1894194

// Day4_JSON.js:1055 
// Country Name : Liberia
// Country region : Africa
// Country subregion : Western Africa
// Country population : 4615000

// Day4_JSON.js:1055 
// Country Name : Libya
// Country region : Africa
// Country subregion : Northern Africa
// Country population : 6385000

// Day4_JSON.js:1055 
// Country Name : Liechtenstein
// Country region : Europe
// Country subregion : Western Europe
// Country population : 37623

// Day4_JSON.js:1055 
// Country Name : Lithuania
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 2872294

// Day4_JSON.js:1055 
// Country Name : Luxembourg
// Country region : Europe
// Country subregion : Western Europe
// Country population : 576200

// Day4_JSON.js:1055 
// Country Name : Macao
// Country region : Asia
// Country subregion : Eastern Asia
// Country population : 649100

// Day4_JSON.js:1055 
// Country Name : Macedonia (the former Yugoslav Republic of)
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 2058539

// Day4_JSON.js:1055 
// Country Name : Madagascar
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 22434363

// Day4_JSON.js:1055 
// Country Name : Malawi
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 16832910

// Day4_JSON.js:1055 
// Country Name : Malaysia
// Country region : Asia
// Country subregion : South-Eastern Asia
// Country population : 31405416

// Day4_JSON.js:1055 
// Country Name : Maldives
// Country region : Asia
// Country subregion : Southern Asia
// Country population : 344023

// Day4_JSON.js:1055 
// Country Name : Mali
// Country region : Africa
// Country subregion : Western Africa
// Country population : 18135000

// Day4_JSON.js:1055 
// Country Name : Malta
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 425384

// Day4_JSON.js:1055 
// Country Name : Marshall Islands
// Country region : Oceania
// Country subregion : Micronesia
// Country population : 54880

// Day4_JSON.js:1055 
// Country Name : Martinique
// Country region : Americas
// Country subregion : Caribbean
// Country population : 378243

// Day4_JSON.js:1055 
// Country Name : Mauritania
// Country region : Africa
// Country subregion : Western Africa
// Country population : 3718678

// Day4_JSON.js:1055 
// Country Name : Mauritius
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 1262879

// Day4_JSON.js:1055 
// Country Name : Mayotte
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 226915

// Day4_JSON.js:1055 
// Country Name : Mexico
// Country region : Americas
// Country subregion : Central America
// Country population : 122273473

// Day4_JSON.js:1055 
// Country Name : Micronesia (Federated States of)
// Country region : Oceania
// Country subregion : Micronesia
// Country population : 102800

// Day4_JSON.js:1055 
// Country Name : Moldova (Republic of)
// Country region : Europe
// Country subregion : Eastern Europe
// Country population : 3553100

// Day4_JSON.js:1055 
// Country Name : Monaco
// Country region : Europe
// Country subregion : Western Europe
// Country population : 38400

// Day4_JSON.js:1055 
// Country Name : Mongolia
// Country region : Asia
// Country subregion : Eastern Asia
// Country population : 3093100

// Day4_JSON.js:1055 
// Country Name : Montenegro
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 621810

// Day4_JSON.js:1055 
// Country Name : Montserrat
// Country region : Americas
// Country subregion : Caribbean
// Country population : 4922

// Day4_JSON.js:1055 
// Country Name : Morocco
// Country region : Africa
// Country subregion : Northern Africa
// Country population : 33337529

// Day4_JSON.js:1055 
// Country Name : Mozambique
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 26423700

// Day4_JSON.js:1055 
// Country Name : Myanmar
// Country region : Asia
// Country subregion : South-Eastern Asia
// Country population : 51419420

// Day4_JSON.js:1055 
// Country Name : Namibia
// Country region : Africa
// Country subregion : Southern Africa
// Country population : 2324388

// Day4_JSON.js:1055 
// Country Name : Nauru
// Country region : Oceania
// Country subregion : Micronesia
// Country population : 10084

// Day4_JSON.js:1055 
// Country Name : Nepal
// Country region : Asia
// Country subregion : Southern Asia
// Country population : 28431500

// Day4_JSON.js:1055 
// Country Name : Netherlands
// Country region : Europe
// Country subregion : Western Europe
// Country population : 17019800

// Day4_JSON.js:1055 
// Country Name : New Caledonia
// Country region : Oceania
// Country subregion : Melanesia
// Country population : 268767

// Day4_JSON.js:1055 
// Country Name : New Zealand
// Country region : Oceania
// Country subregion : Australia and New Zealand
// Country population : 4697854

// Day4_JSON.js:1055 
// Country Name : Nicaragua
// Country region : Americas
// Country subregion : Central America
// Country population : 6262703

// Day4_JSON.js:1055 
// Country Name : Niger
// Country region : Africa
// Country subregion : Western Africa
// Country population : 20715000

// Day4_JSON.js:1055 
// Country Name : Nigeria
// Country region : Africa
// Country subregion : Western Africa
// Country population : 186988000

// Day4_JSON.js:1055 
// Country Name : Niue
// Country region : Oceania
// Country subregion : Polynesia
// Country population : 1470

// Day4_JSON.js:1055 
// Country Name : Norfolk Island
// Country region : Oceania
// Country subregion : Australia and New Zealand
// Country population : 2302

// Day4_JSON.js:1055 
// Country Name : Korea (Democratic People's Republic of)
// Country region : Asia
// Country subregion : Eastern Asia
// Country population : 25281000

// Day4_JSON.js:1055 
// Country Name : Northern Mariana Islands
// Country region : Oceania
// Country subregion : Micronesia
// Country population : 56940

// Day4_JSON.js:1055 
// Country Name : Norway
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 5223256

// Day4_JSON.js:1055 
// Country Name : Oman
// Country region : Asia
// Country subregion : Western Asia
// Country population : 4420133

// Day4_JSON.js:1055 
// Country Name : Pakistan
// Country region : Asia
// Country subregion : Southern Asia
// Country population : 194125062

// Day4_JSON.js:1055 
// Country Name : Palau
// Country region : Oceania
// Country subregion : Micronesia
// Country population : 17950

// Day4_JSON.js:1055 
// Country Name : Palestine, State of
// Country region : Asia
// Country subregion : Western Asia
// Country population : 4682467

// Day4_JSON.js:1055 
// Country Name : Panama
// Country region : Americas
// Country subregion : Central America
// Country population : 3814672

// Day4_JSON.js:1055 
// Country Name : Papua New Guinea
// Country region : Oceania
// Country subregion : Melanesia
// Country population : 8083700

// Day4_JSON.js:1055 
// Country Name : Paraguay
// Country region : Americas
// Country subregion : South America
// Country population : 6854536

// Day4_JSON.js:1055 
// Country Name : Peru
// Country region : Americas
// Country subregion : South America
// Country population : 31488700

// Day4_JSON.js:1055 
// Country Name : Philippines
// Country region : Asia
// Country subregion : South-Eastern Asia
// Country population : 103279800

// Day4_JSON.js:1055 
// Country Name : Pitcairn
// Country region : Oceania
// Country subregion : Polynesia
// Country population : 56

// Day4_JSON.js:1055 
// Country Name : Poland
// Country region : Europe
// Country subregion : Eastern Europe
// Country population : 38437239

// Day4_JSON.js:1055 
// Country Name : Portugal
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 10374822

// Day4_JSON.js:1055 
// Country Name : Puerto Rico
// Country region : Americas
// Country subregion : Caribbean
// Country population : 3474182

// Day4_JSON.js:1055 
// Country Name : Qatar
// Country region : Asia
// Country subregion : Western Asia
// Country population : 2587564

// Day4_JSON.js:1055 
// Country Name : Republic of Kosovo
// Country region : Europe
// Country subregion : Eastern Europe
// Country population : 1733842

// Day4_JSON.js:1055 
// Country Name : Réunion
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 840974

// Day4_JSON.js:1055 
// Country Name : Romania
// Country region : Europe
// Country subregion : Eastern Europe
// Country population : 19861408

// Day4_JSON.js:1055 
// Country Name : Russian Federation
// Country region : Europe
// Country subregion : Eastern Europe
// Country population : 146599183

// Day4_JSON.js:1055 
// Country Name : Rwanda
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 11553188

// Day4_JSON.js:1055 
// Country Name : Saint Barthélemy
// Country region : Americas
// Country subregion : Caribbean
// Country population : 9417

// Day4_JSON.js:1055 
// Country Name : Saint Helena, Ascension and Tristan da Cunha
// Country region : Africa
// Country subregion : Western Africa
// Country population : 4255

// Day4_JSON.js:1055 
// Country Name : Saint Kitts and Nevis
// Country region : Americas
// Country subregion : Caribbean
// Country population : 46204

// Day4_JSON.js:1055 
// Country Name : Saint Lucia
// Country region : Americas
// Country subregion : Caribbean
// Country population : 186000

// Day4_JSON.js:1055 
// Country Name : Saint Martin (French part)
// Country region : Americas
// Country subregion : Caribbean
// Country population : 36979

// Day4_JSON.js:1055 
// Country Name : Saint Pierre and Miquelon
// Country region : Americas
// Country subregion : Northern America
// Country population : 6069

// Day4_JSON.js:1055 
// Country Name : Saint Vincent and the Grenadines
// Country region : Americas
// Country subregion : Caribbean
// Country population : 109991

// Day4_JSON.js:1055 
// Country Name : Samoa
// Country region : Oceania
// Country subregion : Polynesia
// Country population : 194899

// Day4_JSON.js:1055 
// Country Name : San Marino
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 33005

// Day4_JSON.js:1055 
// Country Name : Sao Tome and Principe
// Country region : Africa
// Country subregion : Middle Africa
// Country population : 187356

// Day4_JSON.js:1055 
// Country Name : Saudi Arabia
// Country region : Asia
// Country subregion : Western Asia
// Country population : 32248200

// Day4_JSON.js:1055 
// Country Name : Senegal
// Country region : Africa
// Country subregion : Western Africa
// Country population : 14799859

// Day4_JSON.js:1055 
// Country Name : Serbia
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 7076372

// Day4_JSON.js:1055 
// Country Name : Seychelles
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 91400

// Day4_JSON.js:1055 
// Country Name : Sierra Leone
// Country region : Africa
// Country subregion : Western Africa
// Country population : 7075641

// Day4_JSON.js:1055 
// Country Name : Singapore
// Country region : Asia
// Country subregion : South-Eastern Asia
// Country population : 5535000

// Day4_JSON.js:1055 
// Country Name : Sint Maarten (Dutch part)
// Country region : Americas
// Country subregion : Caribbean
// Country population : 38247

// Day4_JSON.js:1055 
// Country Name : Slovakia
// Country region : Europe
// Country subregion : Eastern Europe
// Country population : 5426252

// Day4_JSON.js:1055 
// Country Name : Slovenia
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 2064188

// Day4_JSON.js:1055 
// Country Name : Solomon Islands
// Country region : Oceania
// Country subregion : Melanesia
// Country population : 642000

// Day4_JSON.js:1055 
// Country Name : Somalia
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 11079000

// Day4_JSON.js:1055 
// Country Name : South Africa
// Country region : Africa
// Country subregion : Southern Africa
// Country population : 55653654

// Day4_JSON.js:1055 
// Country Name : South Georgia and the South Sandwich Islands
// Country region : Americas
// Country subregion : South America
// Country population : 30

// Day4_JSON.js:1055 
// Country Name : Korea (Republic of)
// Country region : Asia
// Country subregion : Eastern Asia
// Country population : 50801405

// Day4_JSON.js:1055 
// Country Name : South Sudan
// Country region : Africa
// Country subregion : Middle Africa
// Country population : 12131000

// Day4_JSON.js:1055 
// Country Name : Spain
// Country region : Europe
// Country subregion : Southern Europe
// Country population : 46438422

// Day4_JSON.js:1055 
// Country Name : Sri Lanka
// Country region : Asia
// Country subregion : Southern Asia
// Country population : 20966000

// Day4_JSON.js:1055 
// Country Name : Sudan
// Country region : Africa
// Country subregion : Northern Africa
// Country population : 39598700

// Day4_JSON.js:1055 
// Country Name : Suriname
// Country region : Americas
// Country subregion : South America
// Country population : 541638

// Day4_JSON.js:1055 
// Country Name : Svalbard and Jan Mayen
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 2562

// Day4_JSON.js:1055 
// Country Name : Swaziland
// Country region : Africa
// Country subregion : Southern Africa
// Country population : 1132657

// Day4_JSON.js:1055 
// Country Name : Sweden
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 9894888

// Day4_JSON.js:1055 
// Country Name : Switzerland
// Country region : Europe
// Country subregion : Western Europe
// Country population : 8341600

// Day4_JSON.js:1055 
// Country Name : Syrian Arab Republic
// Country region : Asia
// Country subregion : Western Asia
// Country population : 18564000

// Day4_JSON.js:1055 
// Country Name : Taiwan
// Country region : Asia
// Country subregion : Eastern Asia
// Country population : 23503349

// Day4_JSON.js:1055 
// Country Name : Tajikistan
// Country region : Asia
// Country subregion : Central Asia
// Country population : 8593600

// Day4_JSON.js:1055 
// Country Name : Tanzania, United Republic of
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 55155000

// Day4_JSON.js:1055 
// Country Name : Thailand
// Country region : Asia
// Country subregion : South-Eastern Asia
// Country population : 65327652

// Day4_JSON.js:1055 
// Country Name : Timor-Leste
// Country region : Asia
// Country subregion : South-Eastern Asia
// Country population : 1167242

// Day4_JSON.js:1055 
// Country Name : Togo
// Country region : Africa
// Country subregion : Western Africa
// Country population : 7143000

// Day4_JSON.js:1055 
// Country Name : Tokelau
// Country region : Oceania
// Country subregion : Polynesia
// Country population : 1411

// Day4_JSON.js:1055 
// Country Name : Tonga
// Country region : Oceania
// Country subregion : Polynesia
// Country population : 103252

// Day4_JSON.js:1055 
// Country Name : Trinidad and Tobago
// Country region : Americas
// Country subregion : Caribbean
// Country population : 1349667

// Day4_JSON.js:1055 
// Country Name : Tunisia
// Country region : Africa
// Country subregion : Northern Africa
// Country population : 11154400

// Day4_JSON.js:1055 
// Country Name : Turkey
// Country region : Asia
// Country subregion : Western Asia
// Country population : 78741053

// Day4_JSON.js:1055 
// Country Name : Turkmenistan
// Country region : Asia
// Country subregion : Central Asia
// Country population : 4751120

// Day4_JSON.js:1055 
// Country Name : Turks and Caicos Islands
// Country region : Americas
// Country subregion : Caribbean
// Country population : 31458

// Day4_JSON.js:1055 
// Country Name : Tuvalu
// Country region : Oceania
// Country subregion : Polynesia
// Country population : 10640

// Day4_JSON.js:1055 
// Country Name : Uganda
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 33860700

// Day4_JSON.js:1055 
// Country Name : Ukraine
// Country region : Europe
// Country subregion : Eastern Europe
// Country population : 42692393

// Day4_JSON.js:1055 
// Country Name : United Arab Emirates
// Country region : Asia
// Country subregion : Western Asia
// Country population : 9856000

// Day4_JSON.js:1055 
// Country Name : United Kingdom of Great Britain and Northern Ireland
// Country region : Europe
// Country subregion : Northern Europe
// Country population : 65110000

// Day4_JSON.js:1055 
// Country Name : United States of America
// Country region : Americas
// Country subregion : Northern America
// Country population : 323947000

// Day4_JSON.js:1055 
// Country Name : Uruguay
// Country region : Americas
// Country subregion : South America
// Country population : 3480222

// Day4_JSON.js:1055 
// Country Name : Uzbekistan
// Country region : Asia
// Country subregion : Central Asia
// Country population : 31576400

// Day4_JSON.js:1055 
// Country Name : Vanuatu
// Country region : Oceania
// Country subregion : Melanesia
// Country population : 277500

// Day4_JSON.js:1055 
// Country Name : Venezuela (Bolivarian Republic of)
// Country region : Americas
// Country subregion : South America
// Country population : 31028700

// Day4_JSON.js:1055 
// Country Name : Viet Nam
// Country region : Asia
// Country subregion : South-Eastern Asia
// Country population : 92700000

// Day4_JSON.js:1055 
// Country Name : Wallis and Futuna
// Country region : Oceania
// Country subregion : Polynesia
// Country population : 11750

// Day4_JSON.js:1055 
// Country Name : Western Sahara
// Country region : Africa
// Country subregion : Northern Africa
// Country population : 510713

// Day4_JSON.js:1055 
// Country Name : Yemen
// Country region : Asia
// Country subregion : Western Asia
// Country population : 27478000

// Day4_JSON.js:1055 
// Country Name : Zambia
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 15933883

// Day4_JSON.js:1055 
// Country Name : Zimbabwe
// Country region : Africa
// Country subregion : Eastern Africa
// Country population : 14240168
