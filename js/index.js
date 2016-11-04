
// OR USE: <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>


//GALLERY//

var imagesArray = ["gallery-images/Landed.png","gallery-images/DoItAnyway.png", 
"gallery-images/Ebolarama.png","gallery-images/GoodbyeStranger.png","gallery-images/GuerrillaRadio.png",
"gallery-images/HowTheDaySounds.png","gallery-images/IGotPunched.png",
"gallery-images/PeggySangTheBlues.png","gallery-images/BlueCarolina.png"];

var imageIndex= 0;
//var feed = new Instafeed({
//      sortBy: none,
//        clientId: 'YOUR_CLIENT_ID'
//   });
//    feed.run();

//<script type="text/javascript" src="path/to/instafeed.min.js"></script>




function prevImage(){
	if (imageIndex > 0){	
		imageIndex--;
	} else {
		imageIndex = 8;
	}

	$(".gallery").attr("src", imagesArray[imageIndex]);
}	

function nextImage (){
	if (imageIndex < imagesArray.length) {
		imageIndex++;
	} else {
		imageIndex = 0;
	}	

	$(".gallery").attr("src", imagesArray[imageIndex]);
}

$(".right-arrow").on("click",nextImage);
$(".left-arrow").on("click",prevImage);


//INDEX (READ-MORE)//

$(".p-2").hide();
$(".read-less").hide(); //Created two buttons to change the text back(could I used a callback funtcion instead?)

$(".read-more").on("click", function() {
	$(".p-2").slideDown();
	$(".read-more").hide();
	$(".read-less").show();
	});

$(".read-less").on("click", function() {
	$(".p-2").slideUp();
	$(".read-more").show();
	$(".read-less").hide();
});


//ARCHIVE MENU (SLIDETOGGLE)//

$(".archive-titles-16, .archive-titles-15, .archive-titles-14, .archive-titles-13").hide();

$(".2016").on("click", function() {
	$(".archive-titles-16").slideToggle();
});

$(".2015").on("click", function() {
	$(".archive-titles-15").slideToggle();
});

$(".2014").on("click", function() {
	$(".archive-titles-14").slideToggle();
});

$(".2013").on("click", function() {
	$(".archive-titles-13").slideToggle();
});


//HAMBURGER//

$(".hamburger").on("click", function () {
	$("nav").animate({
		left: '60%'
	});
	$(".hamburger").hide();
});

$(".return-hamburger").on("click", function () {
	$("nav").animate ({
		left: '100%'
	});
	$(".hamburger").show();
});

$(window).on("resize", function () {
	if ($(window).width() >= 568) {
		$("nav").removeAttr('style');
	}
});

