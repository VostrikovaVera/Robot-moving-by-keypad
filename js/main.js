class Robot {
	constructor(selector) {
	    this.elem = document.querySelector(selector);
			this.elemWidth = document.querySelector(selector).clientWidth;
			this.elemHeight = document.querySelector(selector).clientHeight;
			this.borderWidth = 3;
	    this.top = this.borderWidth;
	    this.left = this.borderWidth;
	}

	moveUp() {
		if (this.top >= this.elemHeight) {
			this.top-=this.elemHeight+this.borderWidth;
		}
		this.elem.style.top = this.top + "px";
		console.log("Updated coordinates: X:" + (1+(this.left-this.borderWidth)/(this.elemWidth+this.borderWidth))  + " Y:" + (1+(this.top-this.borderWidth)/(this.elemHeight+this.borderWidth)));
	}
	moveDown() {
		if (this.top < this.elemHeight*9+27) {
			this.top+=this.elemHeight+this.borderWidth;
		}
		this.elem.style.top = this.top + "px";
		console.log("Updated coordinates: X:" + (1+(this.left-this.borderWidth)/(this.elemWidth+this.borderWidth))  + " Y:" + (1+(this.top-this.borderWidth)/(this.elemHeight+this.borderWidth)));
	}
	moveLeft() {
		if (this.left >= this.elemWidth) {
			this.left-=this.elemWidth+this.borderWidth;
		}
		this.elem.style.left = this.left + "px";
		console.log("Updated coordinates: X:" + (1+(this.left-this.borderWidth)/(this.elemWidth+this.borderWidth))  + " Y:" + (1+(this.top-this.borderWidth)/(this.elemHeight+this.borderWidth)));
	}
	moveRight() {
		if (this.left < this.elemWidth*9+27) {
			this.left+=this.elemWidth+this.borderWidth;
		}
		this.elem.style.left = this.left + "px";
		console.log("Updated coordinates: X:" + (1+(this.left-this.borderWidth)/(this.elemWidth+this.borderWidth))  + " Y:" + (1+(this.top-this.borderWidth)/(this.elemHeight+this.borderWidth)));
	}
}

var myRobot = new Robot('#myRobot');

var body = document.body;

body.addEventListener("keydown", function (e) {

		if (e.keyCode == 37) {
			myRobot.moveLeft();
		} else if (e.keyCode == 38) {
			myRobot.moveUp();
		} else if (e.keyCode == 39) {
			myRobot.moveRight();
		} else if (e.keyCode == 40) {
			myRobot.moveDown();
		}

		// В switch  почему-то не работают Up и Left, то же самое в if else - работает

    /*switch(e.keyCode) {
				case 38: myRobot.moveUp();
				case 40: myRobot.moveDown();
				case 37: myRobot.moveLeft();
				case 39: myRobot.moveRight();
		}*/

});
