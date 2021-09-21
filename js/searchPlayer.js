import WotInfo from './wotInfo.js'
import { clearContent } from './functions.js'

const data = new WotInfo();

export const searchPlayer = async () => {
	document.querySelector('.btn').addEventListener('click', () => { search() })

}


const search = async () => {
	
	let searchValue = document.querySelector('.form-control').value;
	const players = await data.searchPlayers(searchValue);
	

	setTableBody(players);
	
	const content = document.querySelector('.content');
	clearContent();
	if (!searchValue) {
		content.insertAdjacentHTML('afterbegin', `<h4>No players</h4>`);
	}
	else {
		const tableHead = await setTableHead(await data.getPlayerInfo(players[0].account_id));
		const tableBody = await setTableBody(players);
		const tableContent = ` <table class="table table-hover">
								<thead>
									<tr class="table-secondary">
									${tableHead}
									</tr>
								</thead>
								<tbody>
										${tableBody}
								</tbody>
							</table>
	`;

	content.insertAdjacentHTML('afterbegin', tableContent);
	}
}

const setTableHead = async (inf) => {
	console.log(inf);
	let headeColumn = '';
	for (const key in inf) {
		let field = key.charAt(0).toUpperCase() + key.slice(1).replaceAll('_', ' ');
		headeColumn += `<th scope="col">${field}</th>`
	};
	return headeColumn
}

const setTableBody = async (arrData) => {
	let row = '';
	for (const key in arrData) {
		row+= `<tr class="table-secondary">`;
		let playerInfo = await data.getPlayerInfo(arrData[key].account_id);	
			for (const keys in playerInfo) {
				if (keys == 'last_battle_time'){
					const text = new Date(playerInfo[keys]).toLocaleTimeString('ru-RU');
				row+= `<td>${text}</td>`;
				}
				else 
					row += `<td>${playerInfo[keys]}</td>`;
			}
		row+= `</tr>`;
	}
	return row
}