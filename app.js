const cheeseList = document.getElementById('cheeseList');
const searchBar = document.getElementById('searchBar');
let temp = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCheese = temp.CheeseDirectory.filter((cheese) => {
        return (
          
        cheese.CheeseId.toLowerCase().includes(searchString)|| 
          cheese.CheeseNameEn.toLowerCase().includes(searchString) ||
          cheese.CheeseNameFr.toLowerCase().includes(searchString) ||
          cheese.MilkTypeEn.toLowerCase().includes(searchString) ||
          cheese.MilkTypeFr.toLowerCase().includes(searchString) ||
          cheese.CategoryTypeEn.toLowerCase().includes(searchString) || 
          cheese.CategoryTypeFr.toLowerCase().includes(searchString) || 
          cheese.ManufacturingTypeFr.toLowerCase().includes(searchString) ||
          cheese.ManufacturingTypeEn.toLowerCase().includes(searchString) ||
          cheese.CharacteristicsEn.toLowerCase().includes(searchString) ||
          cheese.CharacteristicsFr.toLowerCase().includes(searchString) ||
          cheese.MilkTreatmentTypeEn.toLowerCase().includes(searchString) ||
          cheese.MilkTreatmentTypeFr.toLowerCase().includes(searchString) ||
          cheese.FlavourEn.toLowerCase().includes(searchString) ||
          cheese.FlavourFr.toLowerCase().includes(searchString)

        );
    });
   displayFiltereddata(filteredCheese);
});

const loadCheese = async () => {
    try {
        const res = await fetch('https://od-do.agr.gc.ca/canadianCheeseDirectory.json');
        temp = await res.json();
        displayCheese(temp);
    } catch (err) {
        console.error(err);
    }
};

const displayCheese = (data) => {
    const htmlString = data.CheeseDirectory
        .map((cheese) => {
            return `
            <div class="cheese" >
           
           <i> <h2>Cheese Name En/ Cheese Name Fr:${cheese.CheeseNameFr}/${cheese.CheeseNameEn}</h3></i>
            <ul>
            <li><b> Cheese ID</b> : ${cheese.CheeseId} </li>
            <li> <b>Cheese Flavour En / Cheese Flavour Fr</b> : ${cheese.FlavourEn} / ${cheese.FlavourFr} </li>
            <li><b> ManufacturingTypeEn / ManufacturingTypeFr</b> : ${cheese.ManufacturingTypeEn} / ${cheese.ManufacturingTypeFr}</li>
           <li> <b> ManufacturerNameEn / ManufacturerNameFr </b>: ${cheese.ManufacturerNameEn} / ${cheese.ManufacturerNameFr}</li>
           <li><b> CharacteristicsEn / CharacteristicsFr </b>: ${cheese.CharacteristicsFr} / ${cheese.CharacteristicsEn}</li>
           <li><b> WebSiteEn / WebSiteFr </b>: ${cheese.WebSiteEn} / ${cheese.WebSiteFr}</li>
           <li><b> CategoryTypeEn / CategoryTypeFr </b>: ${cheese.CategoryTypeEn}/${cheese.CategoryTypeFr}</li>
           <li><b> MilkTypeEn / MilkTypeFr </b>: ${cheese.MilkTypeEn}/${cheese.MilkTypeFr}</li>
           <li><b>  MilkTreatmentTypeEn / MilkTreatmentTypeFr </b>: ${cheese.MilkTreatmentTypeEn}/${cheese.MilkTreatmentTypeFr}</li>
           <li><b> FatContentPercent </b> : ${cheese.FatContentPercent}</li>
           <li><b> MoisturePercent </b> : ${cheese.MoisturePercent} </li>
           </ul>
             </div>
             
        `;
        }).join('');
    cheeseList.innerHTML = htmlString;
};

loadCheese();

const displayFiltereddata = (data) => {
    const htmlString = data
        .map((cheese) => {
            return `
            <div class="cheese" >
           
           <i> <h2>Cheese Name En/ Cheese Name Fr:${cheese.CheeseNameFr}/${cheese.CheeseNameEn}</h3></i>
            <ul>
            <li><b> Cheese ID</b> : ${cheese.CheeseId} </li>
            <li> <b>Cheese Flavour En / Cheese Flavour Fr</b> : ${cheese.FlavourEn} / ${cheese.FlavourFr} </li>
            <li><b> ManufacturingTypeEn / ManufacturingTypeFr</b> : ${cheese.ManufacturingTypeEn} / ${cheese.ManufacturingTypeFr}</li>
           <li> <b> ManufacturerNameEn / ManufacturerNameFr </b>: ${cheese.ManufacturerNameEn} / ${cheese.ManufacturerNameFr}</li>
           <li><b> CharacteristicsEn / CharacteristicsFr </b>: ${cheese.CharacteristicsFr} / ${cheese.CharacteristicsEn}</li>
           <li><b> WebSiteEn / WebSiteFr </b>: ${cheese.WebSiteEn} / ${cheese.WebSiteFr}</li>
           <li><b> CategoryTypeEn / CategoryTypeFr </b>: ${cheese.CategoryTypeEn}/${cheese.CategoryTypeFr}</li>
           <li><b> MilkTypeEn / MilkTypeFr </b>: ${cheese.MilkTypeEn}/${cheese.MilkTypeFr}</li>
           <li><b>  MilkTreatmentTypeEn / MilkTreatmentTypeFr </b>: ${cheese.MilkTreatmentTypeEn}/${cheese.MilkTreatmentTypeFr}</li>
          
           <li><b> FatContentPercent </b> : ${cheese.FatContentPercent}</li>
           <li><b> MoisturePercent </b> : ${cheese.MoisturePercent} </li>
           </ul>
             </div>
             
        `;
        }).join('');
    cheeseList.innerHTML = htmlString;
};
