function clickMaro(){
    const handleKorbo = document.getElementById("osama-id");
    handleKorbo.innerText = "Handeled By Niaz Morshed Using JS"
}


// Option 2 
document.getElementById("event-listener-id").addEventListener('click', function(){
    const handelKorbo = document.getElementById("osama-id");
    handelKorbo.innerText = "Text Updated by Sir Niaz Using JS"
})

document.getElementById("btn-id").addEventListener("click", function(){
    const inputId = document.getElementById("input-id")
    const inputText = inputId.value

    const p =document.getElementById("input-text-display");
    p.innerText = inputText;
    inputId.value = '';
})