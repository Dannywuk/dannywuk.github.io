// JavaScript Document
window.onload = function(){
	setTimeout(drawList, 3000);
};

let give = ['Poongody @ Amoi', 'Jaansi', 'Neela', 'Narmatha', 'Susila', 'Jeevan', 'Rajeswary @ Papa', 'Purani', 'Hock Chai @ Siva', 'Sneka', 'Woun Chai @ Periyaboy', 'Selvanathan', 'Leelavathy', 'Saraswathy', 'Wuk Chai @ Chinnaboy', 'Muar Chai', 'Tamilchelvi @ Chella', 'Kishor', 'Arvin', 'Tanuc', 'Kierthini', 'Ashwini'];
let secretSanta = 'Siindhu';
let people = document.getElementById('people');
let load = document.getElementById('loading');
let winter = document.getElementById('winter');
let main = document.getElementById('main');
let choose = document.getElementById('choose');
let toChange = document.getElementById('toChange');
let result = document.getElementById('result');
let addAni =document.getElementById('addAni');
let addAni_1 =document.getElementById('addAni_1');
let addAni_2 =document.getElementById('addAni_2');
let addAni_3 =document.getElementById('addAni_3');

function drawList()
{	
	load.style.display = "none";

	winter.style.display = "inherit";

	main.style.display = "inherit";

	addAni.classList.add('scale-in-center');
	
	people.innerText = secretSanta;

	addAni_1.classList.add('tilt-in-fwd-tl');

	addAni_2.classList.add('tracking-in-expand');
}

choose.onclick = function()
{	
	toChange.style.display = "none";

	let recipient = Math.floor((Math.random() * give.length));
	let recipientName = give[recipient];

	result.innerHTML = "<h2>" + "Congratulations!" + "<br>" + "You&rsquo;ve got " + "<br>" + recipientName + "!</h2>";

	result.classList.add('text-flicker-in-glow');

	window.onbeforeunload = function() {
        return "Sorry no going back!";
    }
};