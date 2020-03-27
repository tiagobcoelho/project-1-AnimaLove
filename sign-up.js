const signIn = document.getElementById('sign-in');
const signUp = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in-container');
const signUpForm = document.getElementById('sign-up-container');
const signInMessage = document.getElementById('sign-in-message')
const signUpMessage = document.getElementById('sign-up-message')


console.log(signIn)
console.log(signUp)
console.log(signInForm)
console.log(signUpForm)


signIn.addEventListener('click', (event) => {
    event.preventDefault()
    signUpForm.style.display = "none";
    signUpMessage.style.display = "none";
    signInForm.style.display = "block";
    signInMessage.style.display = "block";
});
signUp.addEventListener('click', (event) => {
    event.preventDefault()
    signInForm.style.display = "none";
    signInMessage.style.display = "none";
    signUpForm.style.display = "block";
    signUpMessage.style.display = "block";
});