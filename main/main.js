function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function closeSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        // Here you can add the functionality to send the form data to your server or email
    } else {
        alert('Please fill in all fields.');
    }
});
