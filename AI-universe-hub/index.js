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
        console.log(i.name)
        // creat a div
        const hubCard = document.createElement("div");
        hubCard.classList = `card w-96 bg-base-100 shadow-xl`;
        hubCard.innerHTML = `
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
        `;
        hubContainer.appendChild(hubCard);


    });
}

loadHub();