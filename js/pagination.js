import { tankTable } from './tankTable.js'

export const pagination = async () => {

	insertPagination();

	document.querySelector('.content').addEventListener('click', (e) => {
	let pageNumb = e.target.textContent;
	const pInfo = JSON.parse(localStorage.getItem('pagination'));
	let {nation, pageNumber, page_total} = pInfo;

	if (e.target.className == 'page-link' && !isNaN(parseInt(pageNumb)) ) {
		tankTable(nation, pageNumb, 'tier')
	}
	else if (e.target.className == 'page-link' && pageNumb == "«") {
		if (pageNumber == 1) pageNumber++;
		tankTable(nation, pageNumber-=1)
	}
	else if (e.target.className == 'page-link' && pageNumb == "»") {
		if (pageNumber == page_total) pageNumber--;
		tankTable(nation, pageNumber+=1)
	}
	});
	
}

const insertPagination = () => {
	let insert = document.querySelector('.content');
	let countPage ='';
	const pInfo = JSON.parse(localStorage.getItem('pagination'));
	let { pageNumber, page_total } = pInfo;

	for (let i = 0; i < page_total; i++ ){
		
		if (i == pageNumber - 1) {
			countPage += `<li class="page-item active"><a class="page-link" href="#">${i+1}</a></li>`;
		}
		else {
			countPage += `<li class="page-item"><a class="page-link" href="#">${i+1}</a></li>`;
		}
	}
		let paginationHTML = `<ul class="pagination d-flex justify-content-center">
									<li class="page-item ">
										<a class="page-link" href="#">«</a>
									</li>
									${countPage}
									<li class="page-item">
										<a class="page-link" href="#">»</a>
									</li>
								</ul>`; 
		insert.insertAdjacentHTML('beforeend', paginationHTML);	
}
