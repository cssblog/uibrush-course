var showNavLink = document.getElementById('show-mobile-nav');

showNavLink.addEventListener('click',function(event){
	event.preventDefault();
	event.stopPropagation();
	document.body.classList.add('mobile-nav-slide-in');
});

document.body.addEventListener('click',function(event){
	if(document.body.classList.contains('mobile-nav-slide-in')){
		if(!(event.target.matches('#main-menu') || event.target.matches('#main-menu *'))){
			document.body.classList.remove('mobile-nav-slide-in');
		}
	}
});