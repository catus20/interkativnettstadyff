const countdown = () => {
    const targetDate = new Date('October 3, 2025 17:00:00').getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;

    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    // Display countdown
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
};

// Update countdown every second
setInterval(countdown, 1000);

// Initialize the countdown on page load
countdown();

function openMenu() {
	document.getElementById("menu").style.display = "block";
}

function closeMenu() {
	document.getElementById("menu").style.display = "none";
}