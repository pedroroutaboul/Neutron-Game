allowedRange = [11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55]

class Piece {
	constructor(position, rank, name) {
		this.position = position;
		this.rank     = rank;
		this.name     = name;
		this.color    = this.name.substring(0,5);
		this.img      = document.getElementById(this.name);
	}


	hasRank(rank) {
		return this.rank == rank;
	}

	changePosition(position) {
		this.position = parseInt(position);
	}

	getAllowedMoves(blockedPositions) {
			const position = this.position;
			// const mathSign = (this.color == 'white')? '+': '-';

			// const allowedMoves = [eval(position + mathSign +'10' )];
			
			const moveAhead = this.getMoveAhead(position, blockedPositions)
			const moveBottom = this.getMoveBottom(position, blockedPositions)
			const moveRight = this.getMoveRight(position, blockedPositions)
			const moveLeft = this.getMoveLeft(position, blockedPositions)
			const moveUpLeft = this.getMoveUpLeft(position, blockedPositions)
			const moveUpRight = this.getMoveUpRight(position, blockedPositions)
			const moveDownRight = this.getMoveDownRight(position, blockedPositions)
			const moveDownLeft = this.getMoveDownLeft(position, blockedPositions)

		
			const allMoves = [moveBottom,moveAhead,moveRight,moveLeft,moveUpLeft,moveUpRight,moveDownRight,moveDownLeft];

			console.log('moveAhead',moveAhead)
			console.log('moveBottom',moveBottom)
			console.log('moveRight',moveRight);
			console.log('moveLeft',moveLeft);
			console.log('moveUpLeft',moveUpLeft);



			console.log('allMoves',allMoves);

			return allMoves;
	}

	changePosition(position, promote=false) {
		this.position = parseInt(position);
	}

	getMoveAhead(position,blockedPositions){
		if (parseInt(position)>50) {
			return '0'
		}
		let allowedMoveAhead = []

		let aheadPosition = parseInt(position) + 10
		while (aheadPosition < 60) {
			if (blockedPositions.indexOf(aheadPosition) === -1){
				allowedMoveAhead.push(aheadPosition);}
			else{break}	
			aheadPosition = aheadPosition + 10
		}
		

		// agarrando el mas grande
		let allowedMoveAheadInt = allowedMoveAhead.map(function(x){
			return parseInt(x)
		})

		return allowedMoveAheadInt.length === 0? '0' : Math.max(...allowedMoveAheadInt).toString()

	}

	getMoveBottom(position,blockedPositions){
		if (parseInt(position)<20) {
			return '0'
		}
		let allowedMoveBottom = []

		let bottomPosition = parseInt(position) -10
		while ( bottomPosition > 10) {
			if (blockedPositions.indexOf(bottomPosition) === -1){ 
				allowedMoveBottom.push(bottomPosition);}
			else{break}	
			bottomPosition = bottomPosition - 10;

		}
		
		// agarrando el mas chico
		let allowedMoveBottomInt = allowedMoveBottom.map(function(x){
			return parseInt(x)
		})

		return allowedMoveBottomInt.length === 0? '0' : Math.min(...allowedMoveBottomInt).toString()

	}

	getMoveRight(position, blockedPositions){
		if (!![15,25,35,45,55].find(element => element === parseInt(position))){
			return '0'
		}
		let allowedMoveRight = [];
		let rightPosition = parseInt(position) + 1
		while (![16,26,36,46,56].find(x => x === rightPosition)){
			if(!blockedPositions.find(x => x === rightPosition)){
				allowedMoveRight.push(rightPosition)
			}
			else{break}
			rightPosition++

		}
		return allowedMoveRight.length === 0? '0' : Math.max(...allowedMoveRight).toString()

	}
	getMoveLeft(position, blockedPositions){
		if (!![11,21,31,41,51].find(element => element === parseInt(position))){
			return '0'
		}
		let allowedMoveLeft = [];
		let leftPosition = parseInt(position) - 1
		while (![10,20,30,40,50].find(x => x === leftPosition)){
			if(!blockedPositions.find(x => x === leftPosition)){
				allowedMoveLeft.push(leftPosition)
			}
			else{break}
			leftPosition--

		}
		return allowedMoveLeft.length === 0? '0' : Math.min(...allowedMoveLeft).toString()

	}

	getMoveUpLeft(position, blockedPositions){
		if (!![11,21,31,41,51,52,53,54,55].find(element => element === parseInt(position))){
			return '0'
		}
		let allowedMove = [];
		let nextPosition = parseInt(position) + 9
		while(!!allowedRange.find(x => x === nextPosition)){
			if(!blockedPositions.find(x => x === nextPosition)){
				allowedMove.push(nextPosition)
			}
			else{break}
			nextPosition = nextPosition + 9
		}
		return allowedMove.length === 0? '0' : Math.max(...allowedMove).toString()
	}

	getMoveUpRight(position, blockedPositions){
		if (!![15,25,35,45,55,54,53,52,51].find(element => element === parseInt(position))){
			return '0'
		}
		let allowedMove = [];
		let nextPosition = parseInt(position) + 11
		while(!!allowedRange.find(x => x === nextPosition)){
			if(!blockedPositions.find(x => x === nextPosition)){
				allowedMove.push(nextPosition)
			}
			else{break}
			nextPosition = nextPosition + 11
		}
		return allowedMove.length === 0? '0' : Math.max(...allowedMove).toString()
	}

	getMoveDownRight(position, blockedPositions){
		if (!![11,12,13,14,15,25,35,45,55].find(element => element === parseInt(position))){
			return '0'
		}
		let allowedMove = [];
		let nextPosition = parseInt(position) - 9 
		while(!!allowedRange.find(x => x === nextPosition)){
			if(!blockedPositions.find(x => x === nextPosition)){
				allowedMove.push(nextPosition)
			}
			else{break}
			nextPosition = nextPosition - 9
		}
		return allowedMove.length === 0? '0' : Math.min(...allowedMove).toString()
	}

	getMoveDownLeft(position, blockedPositions){
		if (!![11,12,13,14,15,21,31,41,51].find(element => element === parseInt(position))){
			return '0'
		}
		let allowedMove = [];
		let nextPosition = parseInt(position) - 11 
		while(!!allowedRange.find(x => x === nextPosition)){
			if(!blockedPositions.find(x => x === nextPosition)){
				allowedMove.push(nextPosition)
			}
			else{break}
			nextPosition = nextPosition - 11
		}
		return allowedMove.length === 0? '0' : Math.min(...allowedMove).toString()
	}
}