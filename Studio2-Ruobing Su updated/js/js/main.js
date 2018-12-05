$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%' //TO WHICH POINT DOES IT STOP
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// pin again
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.7
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// parallax scene

	var parallaxTl = new TimelineMax();
	parallaxTl
		.from('.content-wrapper', 0.3, {autoAlpha: 0, ease:Power0.easeNone}, 0.3)
		.from('.bcg', 1, {y: '-50%', ease:Power0.easeNone}, 0.3)
		;

	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl)
	.addTo(controller);

	//timeline horizontal

	// 	var controller1 = new ScrollMagic. Controller({
	// 	vertical:false});
	// var tween1 = TweenMax.to('#timeline', 0.6, {backgroundColor: "black", width: "+=400"});
	// var timelineScene = new ScrollMagic.Scene ({
	// 	triggerElement:"#timeline", duration: 500})
	// 	.setTween(tween1)
	// 	// .addIndicators({
	// 	// 	name: 'start',
	// 	// 	colorTrigger:'black',
	// 	// 	colorStart:'red',
	// 	// 	colorEnd:'pink'
	// 	// })
	// 	.addTo(controller1);

	// loop through each .project element
	$('.project').each(function(){

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.8
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) // this requires a plugin
		.addTo(controller);

	});

});


















