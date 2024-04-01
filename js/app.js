let ratingDigit = document.querySelectorAll(".rating-digits div");
let submit = document.querySelector(".rating-button");

for(let i = 0; i <= ratingDigit.length; i++)
{
ratingDigit[i].addEventListener("click", () => 
{
    
    console.log(i + 1)
    


let digit = i + 1;

submit.addEventListener("click", () =>
{
document.querySelector(".appreciation-container").style.display = "block";
document.querySelector(".rating-box").style.display = "none";
document.querySelector(".digit").innerHTML = digit;
})
})
}
