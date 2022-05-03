// Variables

const ratingLength = document.querySelectorAll(".rating").length
const submitBtn = document.querySelector(".btn");
let rated;


// Choose rating

for (let i=0; i<ratingLength; i++){
    const rating = document.querySelectorAll(".rating")[i];

    rating.addEventListener("click", () => {

        // remove active states
        for (let i=0; i<ratingLength; i++){
            document.querySelectorAll(".rating")[i].classList.remove("active");
        }
        // Set active states
        rating.classList.toggle("active")
    });

}

submitBtn.addEventListener("click", () => {

    const rating = document.querySelectorAll(".rating");
    
    for (let i=0; i<ratingLength; i++){

        //check for the choosen rating
        var currentClassList = rating[i].classList;
        for (let x=0; x<currentClassList.length; x++){
            if (currentClassList.contains("active")){
                rated = rating[i];
                break;
            };
        }
    }

    // thank you div
    const tyDiv = document.createElement("div");
    tyDiv.classList.add("message-con");
    tyDiv.classList.add("message");
    // Illustration
    const tyIllu = document.createElement("img");
    tyIllu.setAttribute("src", "images/tyillu.svg");
    // selected paragraph
    const selectedRating = document.createElement("p");
    const selectedRatingText = "You selected " + rated.innerText + 
    " out of 5";
    selectedRating.innerText = selectedRatingText;
    selectedRating.classList.add("border");
    // h1
    const tyMessage = document.createElement("h1");
    tyMessage.innerText = "Thank You!";
    // message paragraph
    const messageP = document.createElement("p");
    const message = "We appreciate you taking the time to give a rating. If you ever need more support, "+
    "don’t hesitate to get in touch!";
    messageP.innerText = message;
    
    // Append child to tyDiv-
    tyDiv.appendChild(tyIllu);
    tyDiv.appendChild(selectedRating);
    tyDiv.appendChild(tyMessage);
    tyDiv.appendChild(messageP);
    document.querySelector(".rating-con").appendChild(tyDiv);
    document.querySelector(".message-con").remove();
})