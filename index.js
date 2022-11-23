const scaleFactor = 1/20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i=0; i<shapes.length; i++){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

let contrastToggle=false
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme";
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

//Template ID: template_bxi51en
//Email Service ID: service_r60ule7
//User Public Key: NsEZGJE6GRShcFrkS

function contact(event) {
  event.preventDefault(); //prevent default action of form reloading
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_r60ule7",
      "template_bxi51en",
      event.target,
      "NsEZGJE6GRShcFrkS"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
      console.log("This defintely worked");
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email service is temporarily unavailable. Please email me at charlottelokko@gmail.com.")
    });

}

let isModalOpen = false;
function toggleModal(){

    if(isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}