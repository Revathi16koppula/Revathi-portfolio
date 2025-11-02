// Dynamic Greeting
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();

let greetText = "";
if (hour < 12) greetText = "☀️ Good Morning!";
else if (hour < 18) greetText = "🌤️ Good Afternoon!";
else greetText = "🌙 Good Evening!";

greeting.innerHTML = `
  <h2>${greetText}</h2>
  <p class="tagline">✨ Fuelled by creativity, driven by curiosity, and committed to continuous growth. ✨</p>
`;


// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields before submitting.');
    return;
  }
  if (!email.includes('@')) {
    alert('Please enter a valid email.');
    return;
  }

  alert('Thank you for reaching out, ' + name + '! Your message has been sent.');
  document.getElementById('contactForm').reset();
});

// Scroll to Top Button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) scrollBtn.style.display = 'block';
  else scrollBtn.style.display = 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
