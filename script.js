	
	let arr =[
		'&#x263E','&#x263E',
		'&#9787','&#9787',
		'&#9818','&#9818',
		'&#9824','&#9824',
		'&#9835','&#9835',
		'&#9850','&#9850',
		'&#9872','&#9872',
		'&#9917','&#9917',
		
		];
	

	let boxGame = document.querySelector('.box-game');
	boxGame.innerHTML ='';
	for(let i =0; i < arr.length ; i++){
		let divs = `<div class='box'>${arr[i]}; </div>`;
		boxGame.innerHTML +=	divs 
	}
	
	let box= document.querySelectorAll('.box');
	box.forEach(e=>{
		let random =Math.floor( Math.random() * arr.length -1);
			e.style.order=random;
			
			e.addEventListener('click',()=>{
				e.classList.add('active');

			
				
				let active = document.querySelectorAll('.active');
				
			
				if(active.length > 1){
					
					if(active[0].innerHTML == active[1].innerHTML){
						active[0].classList.add('displed');
						active[1].classList.add('displed');
					}else{
						setTimeout(()=>{
							active[0].classList.remove('active');
							active[1].classList.remove('active');
						},2000)
					}
				}
				setTimeout(()=>{
					e.classList.remove('active');
						
			},1000)		

			})
			
	})