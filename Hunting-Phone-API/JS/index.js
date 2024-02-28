const loadPhone = async(searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phone = (data.data);
    displayPhones(phone);
};

const displayPhones = phone =>{
    // Step-1)
    const phoneContainer = document.getElementById("phone-container");
    // Clear the Phone Container cards before adding new cards
    phoneContainer.textContent = "";

    // Display show button if the output is more than 12
    const showAllContainer = document.getElementById("show-all-button");
    if (phone.length > 12){
      showAllContainer.classList.remove("hidden");

    }
    else {
      showAllContainer.classList.add("hidden");
    }

    // Display first 10 output
    phone = phone.slice(0,12);
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
          <div class="card-actions justify-center">
            <button onclick="handleShowDetails('${i.slug}')"; class="btn btn-primary">Show Details</button>
          </div>
        </div>

        `;
        // Step-4)Append Child
        phoneContainer.appendChild(phoneCard);

    });
    // Hide Loading Spinner
    toggleLoadingSpinner(false);
}


// Handle Show Details
const handleShowDetails = async(id) =>{
  // Load single phone data
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phone = data.data 
  showPhoneDetails(phone);
}

const showPhoneDetails = (phone) => {
  console.log(phone)

  const phoneName = document.getElementById("show-detail-phone-name");
  phoneName.innerText = phone.name;

  const showDetailContainer = document.getElementById("show-detail-container");
  showDetailContainer.innerHTML =`
  <img src="${phone.image}" alt="">
  <p><span>Storage : ${phone?.mainFeatures?.storage}</span></p>
  <p><span>Display : ${phone?.mainFeatures?.displaySize}</span></p>
  <p><span>Memory  : ${phone?.mainFeatures?.memory}</span></p>

  `;


  // Show the modal
  my_modal_details.showModal();
}



// Handel Search Button
const handleSearch = ()=> {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById("input-field");
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText);

};



const handleSearch2 = ()=> {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("input-field2");
  const searchtext = searchField.value;
  loadPhone(searchtext)
}


const toggleLoadingSpinner = (isLoading)=> {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading){
    loadingSpinner.classList.remove("hidden");
  }
  else{
    loadingSpinner.classList.add("hidden");
  }
}

const handleShowAll = () => {

}





