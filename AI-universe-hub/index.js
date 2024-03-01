const loadHub =async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
    const data = await res.json();
    const hub = data.data.tools;
    console.log(hub)
    displayHub(hub);
}
const displayHub = hub => {
    const hubContainer = document.getElementById("hub-id");
    hub.forEach(i => {
        console.log(i)
        // creat a div
        const hubCard = document.createElement("div");
        hubCard.classList = `card bg-base-100 shadow-xl p-4`;
        hubCard.innerHTML = `
        <figure><img src="${i.image}" alt="images" /></figure>
        <h1 class="font-semibold text-3xl pl-4">Features</h1>
        <div class="pl-4 pt-4 mb-4 pb-4">
            <ol type="1">
                <li>1. Natural language processing</li>
                <li>2. Contextual understanding</li>
                <li>3. Text generation</li>
            </ol>
        </div>
        <hr>

        <div class=flex>
          <div class="card-body">
            <h2 class="card-title">
              ${i.name}
            </h2>
            <p> ${i.published_in}</p>
          </div>
          <div class=pt-12>
          <button onclick="clickMe('${i.id}')" class="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"><path d="M2 12 L16 12 M16 12 L10 6 M16 12 L10 18" stroke="black" stroke-width="2" fill="none"/>
              /></svg>
              </button>
          </div>
        </div>
        `;
        hubContainer.appendChild(hubCard);


    });
}

loadHub();


const clickMe = async(id) => {
  // load single hub data
  const res = await fetch (`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  const data = await res.json();
  const hub = data.data;
  showHubModal(hub);
}

const showHubModal = (hub)=>{
  console.log(hub);
  const hubName = document.getElementById("show-detail-hub-name");
  hubName.innerText = hub.description;
  
  const hubimgContainer = document.getElementById("modal-image");
  hubimgContainer.innerHTML = `
  <figure><img src="${hub.image_link[0]}" alt="images" /></figure>
  <h2 class="text-3xl font-semibold">Hi, how are you doing today?</h2>
  <p class="font-normal text-base">I'm doing well, thank you for asking. How can I assist you today?</p>
  `;


// Show The Modal
  modal_details.showModal()
}