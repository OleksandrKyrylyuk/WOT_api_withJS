import { tankInfo } from './tankInfo.js'
import { searchPlayer } from './searchPlayer.js'
import { tankTab } from './tanksTab.js'


tankTab();
searchPlayer();
tankInfo();

let arr = [{
	   name: 'width',
	   value: 10
	}, {
	   name: 'high', 
	   value: 10
	}, {
	   name: 'radius',
	   value: 450
	}]


const arrrrr = (ar) => {
	//let  initialValue = {};
	let arrobj = ar.reduce( (accum, el) => { 
		  initialValue[el.name] = el.value;
	}, {})
	return 	arrobj
	
}
arrrrr(arr);
let ttt = {width: 10, 
		   high: 10,
		   radius: 450 }
