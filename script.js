const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルンヴグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポ';
const fontSize = 14;
const columns = canvas.width/fontSize;

const drops = [];
for(let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
    
    for(let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i*fontSize, drops[i]*fontSize);
        
        if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;
        
        drops[i]++;
    }
}

setInterval(draw, 33);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Audio control
const toggleBtn = document.getElementById('toggleAudio');
let audioContext = null;
let oscillator = null;

toggleBtn.addEventListener('click', () => {
  if (!audioContext) {
    // Create ambient cyberpunk sound
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(50, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    
    toggleBtn.querySelector('.audio-icon').textContent = '🔇';
  } else {
    oscillator.stop();
    audioContext.close();
    audioContext = null;
    oscillator = null;
    toggleBtn.querySelector('.audio-icon').textContent = '🔊';
  }
});

// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Responsive handling
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function Validatedetails(){
    const form = document.getElementById("form");
    const name = form["Name"].value;
    const email = form["Email"].value;
    while (name ==="" || email===""){
        alert("fill all fields you dumwit");
        return false;
    }
    form.submit()
    
    }
    
