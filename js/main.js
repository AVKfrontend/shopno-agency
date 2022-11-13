
(function($, undefined){
  $(function(){
  	//-------- Header row --------
  	$(window).on('scroll', function() {
  		if($(window).scrollTop() > 33) {
  			$(".heading").addClass("m-fix");
  		} else {
  			$(".heading").removeClass("m-fix");
  		}
  	})
  	//------- Services Description --------
  	$('.serv-list__link').on('click', function() {
		const el = $(this);
		el.parent().next().fadeIn();
  	})
  });
  $(function(){
  	$('.serv-list__detail-link').on('click', function() {
		const el = $(this);
		el.parent().fadeOut();
  	})
  });
})(jQuery);	
//------ First Slider ---------
const sliderImg = document.getElementsByClassName('description__img');
const slides = document.getElementById('slides');
const buttonsDot = document.querySelectorAll('.description__but');
let slideIndex = 1;
const activRemoveAll = () => {
	for(let i=0; i<sliderImg.length; i++) {
		sliderImg[i].classList.remove('description__img--activ');
		buttonsDot[i].classList.remove('description__but--activ');
	}
}
const activAdd = () => {
	sliderImg[slideIndex].classList.add('description__img--activ');
	buttonsDot[slideIndex].classList.add('description__but--activ');
}
const nextSlide = () => {
	activRemoveAll();
	if (slideIndex == (sliderImg.length - 1)) {
		slideIndex = 0;
	}else {
		slideIndex++;
	}
	activAdd();
}
slides.addEventListener("click", nextSlide);
setInterval (nextSlide, 2500);
buttonsDot.forEach((item, index) => {
	item.addEventListener("click", () => {
		activRemoveAll();
		slideIndex = index;
		activAdd();
	});
})

//------------ Say slider
const sayPhotos = document.querySelectorAll('.says__pic'),
      sayCards = document.querySelectorAll('.says__say'),
      sayDots = document.querySelectorAll('.says__but');
let sayIndex = 0;
const sayRemovAll = () => {
	for (i = 0; i < sayPhotos.length; i++) {
		sayPhotos[i].classList.remove('says__pic--active');
		sayCards[i].classList.remove('says__say--active');
		sayDots[i].classList.remove('says__but--active');
	}
}
const sayActiveAdd = () => {
		sayPhotos[sayIndex].classList.add('says__pic--active');
		sayCards[sayIndex].classList.add('says__say--active');
		sayDots[sayIndex].classList.add('says__but--active');
}
const appointSlide = () => {
sayRemovAll();
sayActiveAdd();
}
//---------- Start Activation
appointSlide();
//
const next = () => {
	if(sayIndex == sayPhotos.length - 1) {
		sayIndex = 0;
	} else { sayIndex++; }
	appointSlide();
}
const previous = () => {
	if (sayIndex == 0) {
		sayIndex = 3;
	} else { sayIndex--; }
	appointSlide();
}
sayDots.forEach((itm, ind) => {
	itm.addEventListener('click', () => {
		sayIndex = ind;
		appointSlide();
	})
})
//------------- Menu magic
const btnMenu = document.getElementById('btn-menu'),
      menu = document.getElementById('menu'),
      menuItems = document.querySelectorAll('.menu__item');
btnMenu.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
	btnMenu.classList.toggle('btn-menu--x');
})
menuItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		menu.classList.remove('menu--active');
		btnMenu.classList.remove('btn-menu--x');
		document.getElementById(`${item.name}`).scrollIntoView({behavior:'smooth', block:'start'})
	})
})
//-------------Go Up Button
const goUpBtn = document.getElementById('go-up-btn');
goUpBtn.addEventListener('click', () => {
	scrollTo({top:0,behavior:'smooth'});
	goUpBtn.classList.remove('active');
})
const goUpVisability = () => {
	if(window.scrollY > window.innerHeight * 0.7) {
		goUpBtn.classList.add('active');
	} else {
		goUpBtn.classList.remove('active');
	}
}
window.addEventListener('scroll', () => {
	goUpVisability();
})
// Header btn
const headerBtn = document.getElementById('header-btn')
headerBtn.addEventListener('click', () => {
	let tar = headerBtn.dataset.target;
	if (document.querySelector(`${tar}`)) {
		document.querySelector(`${tar}`).scrollIntoView({behavior:'smooth'})
	}
})


