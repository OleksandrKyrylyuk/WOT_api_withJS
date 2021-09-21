import WotInfo from './wotInfo.js';

export const sorting = (arrData, by) => {
	let content = document.querySelector('.content');
	const data = new WotInfo();
	const pInfo = JSON.parse(localStorage.getItem('pagination'));
	let {nation, pageNumber} = pInfo;

	content.addEventListener('click', (e) => {
		if (isElement(e.target, 'tier')) {
			data.getTanksByNation(nation, pageNumber, 'tier');
		}

	})
}
const isElement = (element, elValue) => {
	if (element.tagName == "TH" && element.textContent.toLowerCase() == elValue) {
		return true
	}
	return false
}


