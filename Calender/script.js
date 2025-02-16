let now = new Date();
let date = now.getDate();
let month = now.toLocaleString('en-US',{month:'long'}); // Months are zero-based
let year = now.getFullYear();
let day = now.toLocaleString('en-US', { weekday: 'long' });

document.querySelector(".month").innerHTML = `${month}`;
document.querySelector(".date").innerHTML = `${date}`;
document.querySelector(".day").innerHTML = `${day}`;
document.querySelector(".year").innerHTML = `${year}`;
