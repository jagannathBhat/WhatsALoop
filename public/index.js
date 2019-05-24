(function () {
	let currentAction = 0;
	let currentSlide = 0;

	let nextAction = () => {
		if (currentAction < actions.length)
			actions[currentAction++]();
	};

	let nextSlide = () => {
		document.getElementById("slide" + currentSlide++).classList.add("slide--done");
		setTimeout(() => {
			document.body.style.transform = "translateY(-" + (currentSlide * 100) + "%)";
		}, 300);
	};

	let slide0action0 = () => {
		document.getElementById("title__p1").classList.add("-close");
		document.getElementById("title__p3").classList.add("-close");
		setTimeout(() => {
			document.getElementById("title__p2").classList.add("-open");
		}, 300);
	};

	let slide1action0 = () => {
		document.querySelectorAll("h2.anim").forEach((a, b) => {
			if (b > 1)
				a.classList.add("shrunk");
		});
		document.querySelector("h2.anim").classList.remove("shrunk");
		document.querySelector("h1").innerText = "With loop";
	};

	let actions = [
		slide0action0,
		nextSlide,
		slide1action0
	];

	document.addEventListener("keydown", event => {
		if (event.isComposing || event.keyCode === 229)
			return;
		if (event.keyCode === 39 || event.keyCode === 34)
			nextAction();
	});

	document.addEventListener("click", event => {
		nextAction();	
	});
})();