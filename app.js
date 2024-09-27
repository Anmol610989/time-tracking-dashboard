

async function populate() {
    const requestURL =
      "./data.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const data = await response.json()

      updateWeekly(data);
  }


    function updateDaily(obj){

      let mySection = document.querySelectorAll('.time');
  
      for(let i = 0; i< mySection.length; i++){
  
        let dailyH1 = document.createElement('span');
        let dailyPara = document.createElement('p');
          for(let j = i; j<= i; j++){
            dailyH1.textContent = `${obj[i].timeframes.daily.current}hrs`
            dailyPara.textContent = `Yesterday - ${obj[i].timeframes.daily.previous}hrs`
        }
  
        mySection[i].appendChild(dailyH1);
        mySection[i].appendChild(dailyPara);
      }
    }


    function updateWeekly(obj){

      let mySection = document.querySelectorAll('.time');
  
      for(let i = 0; i< mySection.length; i++){
  
        let weekh1 = document.createElement('span');
        let weekPara = document.createElement('p');
          for(let j = i; j<= i; j++){
            weekh1.textContent = `${obj[i].timeframes.weekly.current}hrs`
            weekPara.textContent = `previous - ${obj[i].timeframes.weekly.previous}hrs`
        }
  
        mySection[i].appendChild(weekh1);
        mySection[i].appendChild(weekPara);
      }
  
    }

    function updateMonthly(obj){

      let mySection = document.querySelectorAll('.time');
  
      for(let i = 0; i< mySection.length; i++){
  
        let monthlyh1 = document.createElement('span');
        let monthlyPara = document.createElement('p');
          for(let j = i; j<= i; j++){
            monthlyh1.textContent = `${obj[i].timeframes.monthly.current}hrs`
            monthlyPara.textContent = `previous - ${obj[i].timeframes.monthly.previous}hrs`
        }
  
        mySection[i].appendChild(monthlyh1);
        mySection[i].appendChild(monthlyPara);
      }
  
    }
  

  populate()
















    // let nodelist = document.querySelectorAll('.time')
    // let mySection = Array.from(nodelist)
    // console.log(mySection)


    //   let daily = [];
    //   let previous = [];

    //     for(let i = 0; i< obj.length; i++){

    //       daily.push(obj[i].timeframes.daily.current)

    //     }

    //     for(let i = 0; i< obj.length; i++){

    //       previous.push(obj[i].timeframes.daily.previous)

    //     }
    //     console.log(daily)
    //     console.log(previous)

    //     for(let i = 0; i<mySection.length; i++){
    //         let myH1 = document.createElement("h1")
    //         let myPara = document.createElement('p');

    //         myH1.textContent = daily[i];
    //         myPara.textContent = previous[i];


    //         mySection[i].appendChild('myH1')
    //         mySection[i].appendChild('myPara')

    //     }
    //     console.log(mySection)




    // myH1.textContent = `${obj[i].timeframes.daily.current}Hrs`

    // item.appendChild(myH1)
           
    // })

   

    // timeframes

    
    // console.log(mySection)


    
   


  



  
  