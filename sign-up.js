const signIn = document.getElementById('sign-in');
const signUp = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in-container');
const signUpForm = document.getElementById('sign-up-container');


console.log(signIn)
console.log(signUp)
console.log(signInForm)
console.log(signUpForm)


signIn.addEventListener('click', (event) => {
    event.preventDefault()
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
});
signUp.addEventListener('click', (event) => {
    event.preventDefault()
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});