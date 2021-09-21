export const clearContent = () =>  {
		let insert = document.querySelector('.content');
		while (insert.firstChild) {
    		insert.removeChild(insert.firstChild);
		}
};


