import { tankTable } from './tankTable.js'

import WotInfo from './wotInfo.js';


const data = new WotInfo();

export const tankTab = async () => {
	
	const nationData = await data.getNations();
	addNations(nationData.vehicle_nations);
	toogleTanksNations();
	changeTankNation();
}

const addNations =  (nation) => {
	for (let key in nation){
		let text = `<a class="dropdown-item" href="#" id="${key}">${nation[key]}</a>`;
		document.querySelector('.dropdown-menu').insertAdjacentHTML('beforeend', text);
	}
}

const toogleTanksNations = () => {
	let show = document.querySelector('.dropdown-menu');
	const toogle = document.querySelector('.dropdown-toggle');
	toogle.addEventListener('click', () => {
		show.classList.add('show');
	})

	const showMenu = (e) =>{
		if(e.type==="mouseover")
       show.classList.add('show')
    else if(e.type==="mouseout")
       show.classList.remove('show')
	}

	show.addEventListener('mouseover', (e) => showMenu(e))
	show.addEventListener('mouseout', (e) => showMenu(e))
};

const changeTankNation = () => {
	document.querySelector('.dropdown-menu').addEventListener('click', (e) => {
		tankTable (e.target.id, 1)
	});
}
	