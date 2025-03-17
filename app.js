const display = document.querySelector(".display-grid");
const buttons = document.querySelectorAll(".btn");


const populate = async () => {
  const url = "./data.json";

  const resp = await fetch(url);
  const data = await resp.json();

  
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const timeframe = button.innerText.toLowerCase();
      updateData(data, timeframe);

      // enable buttons that are not clicked 
      buttons.forEach((btn) => (btn.disabled = false));
      // disable the clicked button
      button.disabled = true;
    });
   
    
    })
 

// initialize the data on loading the page 
updateData(data, "daily");
 buttons.forEach((button) => {
   if (button.innerText === "daily") {button.disabled = true};
 });

}; 

function updateData(data, timeframe) {
  display.innerHTML = ""; // Clear the display

  data.forEach((element) => {
    const { title, timeframes } = element;
    
    const current = timeframes[timeframe].current;
    const previous = timeframes[timeframe].previous;

    const list = document.createElement("div");
    list.innerHTML = `
      <div class="grid-item br ${title}-info">
        <div class="icon"><div class="${title}"></div></div>
        <div class="${title} container">
          <div class="heading">
            <h2>${title}</h2>
            <div>
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/>
              </svg>
            </div>
          </div>
          <div class="flex">
            <div class="time">${current}hrs</div>
            <div class="prev">Previous - ${previous}hrs</div>
          </div>
        </div>
      </div>
    `;
    display.appendChild(list);
  });
}

populate();
