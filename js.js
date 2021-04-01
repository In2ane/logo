const icon = document.querySelector(".menu__icon")
const menu = document.querySelector('.menu__nav')

icon.addEventListener('click', function () {
    icon.classList.toggle('active');
        _slideToggle(menu);
    })
const arrows = document.querySelectorAll('.catalog__link-parent');
const subbody = document.querySelector('.catalog__subbody');
var max = window.matchMedia('(max-width:1030px)')
var min = window.matchMedia('(min-width:1030px)')

for (i=0; i < arrows.length; i++) {
	const arrow = arrows[i];
			subbody.addEventListener('mouseenter', function () {
				subbody.style.left = '261px'
				subbody.style.visibility = 'visible'
			})
			subbody.addEventListener('mouseleave', function () {
				subbody.style.left = '0'
				subbody.style.visibility = 'hidden'
			})
			arrow.addEventListener('mouseenter', function () {
				subbody.style.left = '261px'
				subbody.style.visibility = 'visible'
			})
			arrow.addEventListener('mouseleave', function () {
				subbody.style.left = '0'
				subbody.style.visibility = 'hidden'
			})
		}
const burger = document.querySelector('.catalog__burger')
const body = document.querySelector('.catalog__body')

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
        _slideToggle(body);
    })

const arrow_down = document.querySelector('.search__label')
const search = document.querySelector('.search__column')

arrow_down.addEventListener('click', function () {
    arrow_down.classList.toggle('active');
        _slideToggle1(search);
    })


let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown1 = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'flex';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
let _slideToggle1 = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown1(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
