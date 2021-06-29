	// put variables (connections to the web page / DOM) at the top
	// constant -> something that will never change / can't be redefined
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle

	function swapImages() {
		//swap out the draggable thumbnail dragImages
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
