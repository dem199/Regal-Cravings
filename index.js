

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








document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#recipe-list ul');
    const forms = document.forms;
  
    // delete books
    list.addEventListener('click', (e) => {
      if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
      }
    });
  
    // add books
    const addForm = forms['add-recipe'];
    addForm.addEventListener('submit', function(e){
      e.preventDefault();
  
      // create elements
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const recipeName = document.createElement('span');
      const deleteBtn = document.createElement('span');
  
      // add text content
      recipeName.textContent = value;
      deleteBtn.textContent = 'delete';
  
      // add classes
      recipeName.classList.add('name');
      deleteBtn.classList.add('delete');
  
      // append to DOM
      li.appendChild(recipeName);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  
    // hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function (e){
      if(hideBox.checked){
        list.style.display = "none";
      } else {
        list.style.display = "initial";
      }
    });
  
    // filter books
    const searchBar = forms['search-recipes'].querySelector('input');
    searchBar.addEventListener('keyup', function (e)  {
      const term = e.target.value.toLowerCase();
      const recipes = list.getElementsByTagName('li');
      Array.from(recipes).forEach((recipe) => {
        const title = recipe.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value) != -1){
          recipe.style.display = 'block';
        } else {
          recipe.style.display = 'none';
        }
      });
    });
  
    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', function (e) {
      if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
          if(panel == targetPanel){
            panel.classList.add('active');
          }else{
            panel.classList.remove('active');
          }
        });
      }
    });
  
  })























