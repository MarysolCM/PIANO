//JavaScript
	
$(document).ready(function(e){	$('#principal').height($('#page').height());//especifica la altura de la pagina.	
	document.addEventListener("deviceready",function(){
	audio=window.plugins.LowLatencyAudio;//construye la variable audio a un objeto
		audio.preloadFX('do','audio/DO',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('re','audio/RE',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('mi','audio/MI',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('fa','audio/FA',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('sol','audio/SOL',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('la','audio/LA',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('si','audio/SI',function(){},function(e){alert('Error '+e);});		
		$('.nota').bind('touchstart',function(){//bind escucha un evento 
			$(this).addClass('tocada');//agregamos la clase
			audio.play($(this).attr('id'));//play esta definida dentro del plugin  
		}).bind('touchend',function(){
			$(this).removeClass('tocada');
		});
  
	},false); //deviceready
});//ready