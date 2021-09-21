import { pagination } from './pagination.js';
import { clearContent } from './functions.js';
import WotInfo from './wotInfo.js';

const data = new WotInfo();

export const tankTable = async (nation, pageNumber) => {
	const dataTanks = await data.getTanksByNation(nation, pageNumber);
	const tanks = await sorting(dataTanks);
	await insertTank(tanks);
	await pagination();
}

const  sorting = async (tanks) => {
	let arrData = [];
		for (const key in tanks) {
			arrData.push(tanks[key])
		}
	arrData.sort((a, b) =>  a.tier - b.tier);
	return arrData;
}

const insertTank = async (tanks) => {
		clearContent();
		let insert = document.querySelector('.content');
		let tankContent= '';
		for(const i in tanks){
			tankContent += `<tr class="table-secondary">
							<td>${tanks[i].tier}</td>
							<td tank-id="${tanks[i].tank_id}" >${tanks[i].name}</td>
							<td>${tanks[i].type}</td>
							<td>${tanks[i].is_premium ? 'Premium' : 'Standart'}</td>
						  </tr>`;
		}

		let content = `<h1 class="text-center">Tanks</h1>
            <table class="table">
            <thead>
              <tr class="table-success">
                <th scope="col">Tier</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">IsPremium</th>
              </tr>
            </thead>
            <tbody>
             ${tankContent}
            </tbody>
          </table>`;

		  insert.insertAdjacentHTML('afterbegin', content);
}