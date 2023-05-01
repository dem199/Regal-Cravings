

const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 



const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')
const revealBtn = document.getElementById('reveal-btn')
const foodItems = document.getElementById('food-items')
const orderForm = document.getElementById('order-form')
const orderTable = document.getElementById('order-table')
const detailsCollector = document.getElementById('details-collector')


setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-choice-btns-reverse')
})



consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    const phoneNumber = consentFormData.get('phoneNumber')
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)
    
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span></h2>
        <p>We have registered you with <span class="modal-display-number">${phoneNumber}</span></p>
        <div class="idiot-gif">
            <img src="images/loginfood.webp">
        </div>
    `
    modalCloseBtn.disabled = false
    }, 3000)
  
}) 


revealBtn.addEventListener('click', function () {
    foodItems.style.display = 'block'
    revealBtn.style.display = 'none'
})

detailsCollector.addEventListener('submit', function (e) {
    e.preventDefault()
    const detailsData = new FormData(detailsCollector)
    const fullName = detailsData.get('fullName')

    setTimeout(function(){
        detailsCollector.innerText = `
        Thank you ${fullName}, your data has been saved. we will keep you posted`
    }, 3000)
})


orderForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const orderFormData = new FormData(orderForm)
    const fullName = orderFormData.get('fullName')

    setTimeout(function(){
        orderForm.innerText = ` Hi ${fullName}
        Your payment is successful..`
    }, 3000)
    
})


















