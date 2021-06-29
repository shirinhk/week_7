	// put variables (connections to the web page / DOM) at the top
	// constant -> something that will never change / can't be redefined

	//identify the nodes of interest in the DOM
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
	function swapImages() {
		//swap out the draggable thumbnail dragImages
		//Update the bckground image of the drop zone dropcontainer
		//1. get the imageref attribute from the element we're clicking on

		let imageIndex = this.dataset.imageref;
				//newImagePath = "images/add/backGround" + imageIndex;
				newImagePath = `../images/add/backGround${newIndex}.jpg`;

				//set the backgroung image of the dropZoneContainer
				dropcontainer.style.backgroundImage = `url(${newImagePath})`;
		debugger;
	}

	function startDrag() {=}

	function draggedOver (event) {=}

	function dropped (event) {=}


	// event handling at the bottom
	dragImages.forEach(piece =>{
		piece.addEventListener('dragstart', startDrag, false)
	});

	dropzones.forEach(zone =>{
		zone.addEventListener('drop',dropped, false);
		zone.addEventListener('dragover',draggedOver, false);
	});

	puzzleSelectors.forEach(button => button.addEventListener("click", swapImages));
