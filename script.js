const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn1');
const btn3 = document.getElementById('btn2');
let nameUser;   
let emailUser;
const NameInput = document.getElementById('Name');
const emailInput = document.getElementById('email');
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const steps = document.querySelectorAll("body .steps ul li");
// console.log(steps)
// console.log(step1)
// const topicsBtn = document.querySelectorAll('.Topis_btns');

const data = {
    title : "Which topics you are interested in?",
    Items : [
        "Software Development", 
       " User Experience",
       "Graphic Design"
    ], 
    Selected: []
}
 

// cancel default value of button sumbit
btn.addEventListener('click', () => {
    event.preventDefault();
    nameUser = NameInput.value
    emailUser = emailInput.value
    const regrexNme = /[^A-Za-z]%/
    if(!nameUser || !emailUser)
    {
      
       const errorMsgs = step1.querySelectorAll("Form div .errorMsg")
       errorMsgs.forEach((errorMsg) => {errorMsg.innerHTML = 'Please fill the required fields'}) 
       return ;
    }
    console.log(nameUser.match(regrexNme))
    window.localStorage.setItem('name', nameUser);
    window.localStorage.setItem('email', emailUser);
    step1.style.left = "-100%"
    step2.style.position = "static";
    steps[0].children[0].classList.remove("shadow");
    steps[1].children[0].classList.add("bg");
    steps[1].children[0].classList.add("shadow");
    steps[1].parentNode.previousElementSibling.innerHTML ="step 2 of 3 "

    
})
// console.log();
btn2.addEventListener('click', () => {
    event.preventDefault();
    if(data.Selected.length == 0)
    {
       const errorMsg = step2.querySelector("div .errorMsg")
        // console.log(errorMsg)
        errorMsg.innerHTML = 'Please fill the required fields'
       return ;
    }
    // selectItems()
    step2.style.display = "none";
    step2.style.left = "-100%"
    step3.style.position = "static";
   
    steps[1].children[0].classList.remove("shadow");
    steps[2].children[0].classList.add("bg");
    steps[2].children[0].classList.add("shadow");
    steps[1].parentNode.previousElementSibling.innerHTML ="step 3 of 3 "
    CreateSumary()
})

btn3.addEventListener('click', () => {
    createNotifaction()  
    steps[2].children[0].classList.remove("shadow"); 
    
})


// console.log(topicsBtn)

const container =   document.querySelector("body")
let topicsBtn = document.querySelector('.Topis_btns');
// console.log(topicsBtn);
    const selectItems = () => data.Items.forEach(element => {
if(topicsBtn)
    {
        // console.log("here");
        const  button = document.createElement("button")
        button.innerHTML = element
        button.classList.add("btn_submit")
        // console.log(button)
        button.addEventListener('click', () => {
            button.classList.toggle("Selected");
            if(data.Selected.includes(element))
            {
               data.Selected =  data.Selected.filter(ele => ele != element)
            }  
            else
                data.Selected.push(element)
            // console.log(data.Selected)
        })
        topicsBtn.append(button)
    }

})
selectItems()






CreateSumary = () => {
    const Summary = step3.querySelector(".Summary")
    const Name = document.createElement("p")
    const Email = document.createElement("p")
    const headerList = document.createElement("p")
    const Topics = document.createElement("div")
    const Info = document.createElement("div")
    const TopicsList = document.createElement("ul")

    
    Name.innerHTML = `<span>name:</span>${nameUser}`
    Info.appendChild(Name);
    Email.innerHTML = `<span>email:</span> ${emailUser}`
    Info.appendChild(Email);
    Summary.appendChild(Info)
    
    data.Selected.forEach(ele =>{
        const ItemList = document.createElement("li")
        ItemList.textContent = ele;
        TopicsList.appendChild(ItemList);
    })
headerList.innerHTML = "<span>Topics:</Span>"
    Topics.appendChild(headerList);
    Topics.appendChild(TopicsList);
    Summary.appendChild(Topics)
    // step3.appendChild(Summary)
    
}


 const createNotifaction = () => {

     const notification = document.createElement('div')
     notification.textContent = "✅ Success"
     notification.classList.add('notif');
     container.appendChild(notification)
     
     setTimeout(() => {notification.remove()}, 2000)
 }





