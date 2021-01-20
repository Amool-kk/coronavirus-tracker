// https://api.covid19api.com/summary 

const countryName = document.querySelector('.countryName');
const totalCases = document.querySelector('.totalCases');
const newCases = document.querySelector('.newCases');
const totalDeaths = document.querySelector('.totalDeaths');
const newDeaths = document.querySelector('.newDeaths');
const totalRecovered = document.querySelector('.totalRecovered');
const newRecovered = document.querySelector('.newRecovered')
// const totalCases = document.querySelector('.totalcases')

const cname = document.querySelector('#cname');


async function getdataapi() {
   const jsondata = await fetch('https://api.covid19api.com/summary');

   const jsdata = await jsondata.json()





   // global data
   const dataGlobal = jsdata.Global;


   // total cases
   const html1 = `<li style="margin-bottom: 20px;">
      <div class="totalcases">${dataGlobal.TotalConfirmed}</div>
      </li>`
   totalCases.innerHTML += html1;

   // for new cases
   const html3 = `<li style="margin-bottom: 20px;">
      <div class="newcases class="list"">${dataGlobal.NewConfirmed}</div>
      </li>`
   newCases.innerHTML += html3;

   // for total deaths
   const html4 = `<li style="margin-bottom: 20px;">
      <div class="totaldeath">${dataGlobal.TotalDeaths}</div>
      </li>`
   totalDeaths.innerHTML += html4;

   // for new deaths
   const html5 = `<li style="margin-bottom: 20px;">
      <div class="newdeath">${dataGlobal.NewDeaths}</div>
      </li>`
   newDeaths.innerHTML += html5;

   // for total recovered
   const html6 = `<li style="margin-bottom: 20px;">
      <div class="totalrecovered">${dataGlobal.TotalRecovered}</div>
      </li>`
   totalRecovered.innerHTML += html6;

   // for new recovered
   const html7 = ` <li style="margin-bottom: 20px;">
      <div class="newrecovered">${dataGlobal.NewRecovered}</div>
      </li>`
   newRecovered.innerHTML += html7;


   // ID: "82f6656c-5f81-423b-bfe4-eebda95e243e"
   // NewConfirmed: 380908
   // NewDeaths: 5520
   // NewRecovered: 166410
   // TotalConfirmed: 94826486
   // TotalDeaths: 2021861
   // TotalRecovered: 51992649


   const dataArray = jsdata.Countries;
   // console.log(dataArray)
   // countries data
   for (let i = 0; i < dataArray.length; i++) {
      const element = dataArray[i];
      const no = i + 1;


      const countryname = element.Country.toLowerCase()
      // makearray(countryname)


      // for country name
      const html1 = `<li class="list">
      <div class="country">${no}) ${element.Country}</div>
      </li>`
      countryName.innerHTML += html1;

      // for total cases
      const html2 = `<li class="list">
      <div class="totalcases">${element.TotalConfirmed}</div>
      </li>`
      totalCases.innerHTML += html2;

      // for new cases
      const html3 = `<li class="list">
      <div class="newcases">${element.NewConfirmed}</div>
      </li>`
      newCases.innerHTML += html3;

      // for total deaths
      const html4 = `<li class="list">
      <div class="totaldeath">${element.TotalDeaths}</div>
      </li>`
      totalDeaths.innerHTML += html4;

      // for new deaths
      const html5 = `<li class="list">
      <div class="newdeath">${element.NewDeaths}</div>
      </li>`
      newDeaths.innerHTML += html5;

      // for total recovered
      const html6 = `<li class="list">
      <div class="totalrecovered">${element.TotalRecovered}</div>
      </li>`
      totalRecovered.innerHTML += html6;

      // for new recovered
      const html7 = ` <li class="list">
      <div class="newrecovered">${element.NewRecovered}</div>
      </li>`
      newRecovered.innerHTML += html7;
   }

}

getdataapi()


// cname.addEventListener('input', () => {
//    const t = cname.value.toLowerCase();
//    console.log(t)

//    // for class list
//    const list = document.getElementsByClassName('list');
   
//    Array.from(list).forEach(function(element){
//       let data = element.getElementsByTagName('div')[0].innerText;
//       console.log(data.includes(t))
//       if(data.includes(t)){
//          element.style.Display = "block"
//          if(element.style.Display = "block"){
//             console.log(element)
//          }
//       }
//       else{
//          element.style.display = "none"
//       }

//       // if blank search box
//       if(t === ""){
//          element.style.display = "block"
//       }
//       // console.log(data)
//    })
// })

// const take = document.getElementsByClassName('group');

// console.log(Array.from(take))