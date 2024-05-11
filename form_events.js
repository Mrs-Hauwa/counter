//get the h1 element using any method
const h1_tag = document.getElementsByTagName("h1")
console.log(h1_tag)

//focus on the first input field in the form
document.querySelector('#name').focus();

// On focus of input, alert "You're editing the name field!"
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('click', (e) => {
        alert(`You're editing the ${e.target.name} field!`);
    });
})
// On submit of form, alert "You submitted the form!"
document.querySelector('submit').addEventListener('submit-btn', (e) => { 
    e. preventDefault ();
    alert("You submitted the form!");
})

//onclick event capture
const button=document.quertSelector('#container');
//onclik event
button.addEventListener('onsubmit',() => {
    alert("you've sumbitted!");
});