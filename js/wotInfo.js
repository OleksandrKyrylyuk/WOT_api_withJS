

export default class WotInfo {
	api = 'https://api.worldoftanks.ru/wot/';
	key = '?application_id=4691454e8de93f2835d0ce283080bbab&language=en&'

	async getData (url, fields = null) {
		const data = await fetch(`${this.api}${url}${this.key}${fields}`);
		return data.json()
	}
	
	async getNations (){
		const data = await this.getData('encyclopedia/info/','fields=vehicle_nations');
		return data.data
	}



	async getTanksByNation (nation = 'germany', pageNumber = 1) {
		const data = await this.getData('encyclopedia/vehicles/', `nation=${nation}&limit=15&page_no=${pageNumber}`);
		const {page_total} = data.meta;
		const pInfo = {
			nation,
			pageNumber,
			page_total
		}
		localStorage.setItem('pagination', JSON.stringify(pInfo));
		return data.data;
	}


	async getTankById(id) {
		const data = await this.getData('encyclopedia/vehicles/', `tank_id=${id}`);
		const tank = data.data[id];
		
		const {name, description, nation, type, tank_id, tag} = tank;
		const {hp, weight, speed_forward,
			 armor : {hull, turret},
			 engine: {name: engine_name, power},
			 gun : {name: gun_name, caliber}
			
			} = tank.default_profile;
	
		return {
			name, description, nation, type, tank_id, tag, hp, weight, speed_forward,
			hull, turret, engine_name, power, gun_name, caliber
		}
	}

	  async searchPlayers (name) {
		  const data = await this.getData('account/list/', `search=${name}`);
		 return data.data;
		 ;
	  }
	  async getPlayerInfo(id) {
		 const data = await this.getData('account/info/', `account_id=${id}`);
		 const playerInfo = data.data;
		 const {nickname, global_rating, last_battle_time, 
			statistics : { all : {battles, frags, losses, max_damage, max_frags, wins}}  
		 } = playerInfo[id];
		 return {nickname, global_rating, last_battle_time,
				battles, frags, losses, max_damage, max_frags, wins}
	  }
}


