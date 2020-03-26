const signIn = document.getElementById('sign-in');
const signUp = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in-container');
const signUpForm = document.getElementById('sign-up-container');

signIn.addEventListener('click', ()=> {
    signUpForm.style.display = 'none';
    signInForm.style.display = 'flex';
});