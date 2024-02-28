const loadPhone = async(searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phone = (data.data);
    console.log(phone);
    displayPhones(phone);
};

const displayPhones = phone =>{
    // Step-1)
    const phoneContainer = document.getElementById("phone-container");
    // Clear the Phone Container cards before adding new cards
    phoneContainer.textContent = "";

    // for (const i of phone){
    //     console.log(i)
    // }

    phone.forEach(i=>{

        //Step-2) Creat a div
        const phoneCard = document.createElement("div");
        phoneCard.classList =`card bg-gray-100 shadow-xl p-4`;

        // Step-3) Set innerHTML
        phoneCard.innerHTML =`
        <figure><img src="${i.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${i.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>

        `;

        // Step-4)Append Child
        phoneContainer.appendChild(phoneCard);

    });
}

// Handel Search Button
const handleSearch = ()=> {
    const searchField = document.getElementById("input-field");
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText);

};





