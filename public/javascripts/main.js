

/// Toggle Submenus ///
$(document).ready(function(){
  console.log("loaded");
	$('.submenu').hide();
    $(".restaurant").click(function(){
        $(this).parent().find(".submenu").toggle('fast');
    });

/// Update slider value ///
function showValue(newValue) {
	document.getElementById("range").innerHTML=newValue;
}


/// Hue Sliders ///
$(function() {
    $( "#resredslide" ).slider({
      range: true,
      min: 0,
      max: 255,
      values: [ 75, 175 ],
      slide: function( event, ui ) {
        $( "#redConst" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );

      },
      change: function(event, ui){
      var values1 = $('#resredslide').slider('values');
      console.log(values1);
      }
      // stop: function(event, ui) {
      //       // when the user stopped changing the slider
      //       //$.POST("to.php",{first_value:ui.values[0], second_value:ui.values[1]},function(data){},'json');
                
      //   }
    });
    $( "#redConst" ).val(  $( "#resredslide" ).slider( "values", 0 ) +
      " - " + $( "#resredslide" ).slider( "values", 1 ) );

  });

$(function() {
    $( "#resgreenslide" ).slider({
      range: true,
      min: 0,
      max: 255,
      values: [ 75, 175 ],
      slide: function( event, ui ) {
        $( "#greenConst" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        console.log(ui.values[0]);
      }
    });
    $( "#greenConst" ).val(  $( "#resgreenslide" ).slider( "values", 0 ) +
      " - " + $( "#resgreenslide" ).slider( "values", 1 ) );
  });

$(function() {
    $( "#resblueslide" ).slider({
      range: true,
      min: 0,
      max: 255,
      values: [ 75, 175 ],
      slide: function( event, ui ) {
        $( "#blueConst" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#blueConst" ).val(  $( "#resblueslide" ).slider( "values", 0 ) +
      " - " + $( "#resblueslide" ).slider( "values", 1 ) );
  });





/// Brightness Slider
$(function() {
    $( ".brightslide-range" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 25, 80 ],
      slide: function( event, ui ) {
        $( "#brightConst" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#brightConst" ).val(  $( ".brightslide-range" ).slider( "values", 0 ) +
      " - " + $( ".brightslide-range" ).slider( "values", 1 ) );
  });










$('#indivBright').change(function(){
    var val = this.value;
    console.log(val);
    if(val === 1) {
          console.log('test');
    }
    $.get('/tableSlider/' + val, function(data){
      console.log("data: " + data);
    })
});

$('#sec1').click(function(){
    $.get('/sec1', function(data){ 
     console.log("data: " + data);
    });
});

$('#readingButton').click(function(){
    $.get('/readingButton', function(data){ 
     console.log("data: " + data);
    });
});

$('#dine1').click(function(){
    $.get('/dine1', function(data){ 
     console.log("data: " + data);
    });
});

$('#dine2').click(function(){
    $.get('/dine2', function(data){ 
     console.log("data: " + data);
    });
});

$('#dine3').click(function(){
    $.get('/dine3', function(data){ 
     console.log("data: " + data);
    });
});


});

