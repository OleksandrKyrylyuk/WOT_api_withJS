import WotInfo from './wotInfo.js'

import { clearContent } from './functions.js'
const data = new WotInfo();
export const tankInfo = () => {
	let content = document.querySelector('.content');
	content.addEventListener('click', (e) => { info(e) })
}

 const info = async (e) => {
	if (e.target.getAttribute('tank-id')) {
		const id = e.target.getAttribute('tank-id');
		const  tankData = await data.getTankById(id);
		const {name, description, nation, type, tank_id, tag, hp, weight, speed_forward,
		hull, turret, engine_name, power, gun_name, caliber} = tankData;

		let tankInfo = document.querySelector('.tank');
    while (tankInfo.firstChild) {
    		tankInfo.removeChild(tankInfo.firstChild);
		}

		let content = `<div class="box container-fluid ">
            <img src="https://ru-wotp.wgcdn.co/static/5.93.0_8edf1d/wotp_static/img/tankopedia_new/frontend/scss/tankopedia-detail/img/hangar-bg.webp" class="under" alt="" />
            <img src="https://ru-wotp.wgcdn.co/dcont/tankopedia_images/${tag.toLowerCase()}/${tag.toLowerCase()}_image.png" class="over" alt="" />
          </div>
		  <div class="col-3">
		  <div class="card border-success mb-3"">
			<div class="card-body">
				<p class="card-text">${description}</p>
			</div>
			</div>
		  </div>
		  <div class="col-4"></div>
          <div class="col-5">
            <div class="card border-success mb-3" >
              <div class="card-header">${name}</div>
              <div class="card-body">
                <p class="card-text">
                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                     <span>Nation:</span> ${nation.charAt(0).toUpperCase() + nation.slice(1) }
                    </li>
					 <li class="list-group-item d-flex justify-content-between align-items-center">
                     <span>Type:</span> ${type}
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Id:</span>  ${tank_id}
                    </li>
					<li class="list-group-item d-flex justify-content-between align-items-center">
                     <span> Health:</span> ${hp}
                    </li>
					<li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Weight:</span> ${weight} t
                    </li>
					<li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Gun:</span>  ${gun_name} 
                    </li>
					<li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Caliber:</span>  ${caliber} cm
                    </li>
					<li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Engine:</span>  ${engine_name} 
                    </li>
					<li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Engine power:</span>  ${power}
                    </li>
					<li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Hull armor ( Front/Side/Rear ) :</span>  ${hull.front} / ${hull.sides} / ${hull.rear}
                    </li>
					<li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Turret armor ( Front/Side/Rear ):</span>   ${turret ? turret.front : 0} / ${turret ? turret.sides : 0} / ${turret  ? turret.rear : 0}
                    </li>
					
                  </ul>
                </p>
              </div>
            </div>
          </div>`;
		tankInfo.insertAdjacentHTML('afterbegin', content);

		document.body.addEventListener('click', () => {
			while (tankInfo.firstChild) {
    		tankInfo.removeChild(tankInfo.firstChild);
		}
		})
	}

}