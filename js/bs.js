$(document).ready(function(){
    // set tooltips icon class
    $('ul.the-icons li i').attr('title','');
    $('ul.the-icons li i').attr('data-toggle','tooltip');
    $('ul.the-icons li i').attr('data-original-title','tooltip');
    $('ul.the-icons li i').mouseover(function(){
        var $txtToolTip = $(this).attr('class');
        $(this).attr('data-original-title',$txtToolTip);
    });
    $('#msg').focus();
    //oculta # html-ico do #code
    $('#code-icon-left').hide();
});

//btn-primary
$('.btn').on("click", function() {
    $(this).parent().parent().find('a').removeClass("active");
    $(this).addClass('active'); 
    var styleSelect = $(this).attr('class');

    $('#bt').removeClass().addClass(styleSelect).addClass('btn-large').removeClass('active');

    styleSelect = styleSelect.replace("active", "");
    styleSelect = styleSelect.replace("btn", "");
    $('#code-btn-color').text(styleSelect);

});

//Button Size

//btn-mini
$('#btn-mini').click(function(){
    $(this).addClass('active');
    $('a#btn-large').removeClass('active');
    $('a#btn-small').removeClass('active');
    $('a#default').removeClass('active');
    $('#bt').removeClass('btn-small');
    $('#bt').removeClass('btn-large');
    $('#bt').addClass('btn-mini');
    $('#stage').css('margin-top','12px');
    $('#code-btn-size').html(' btn-mini');
    $('#code-btn-block').html('');
    if($('#bt').hasClass('btn-block')){
        $('#bt').removeClass('btn-block');
        $('#btn-block').removeClass('active');
    } 
    $('#btn-default-1').addClass('dNone');
    $('#btn-large-1').addClass('dNone');
    $('#btn-small-1').addClass('dNone');
    $('#btn-mini-1').addClass('dNone');
    $('#btn-default-1').removeClass('active');
    $('#btn-large-1').removeClass('active');
    $('#btn-small-1').removeClass('active');
    $('#btn-mini-1').addClass('active');
});

//btn-small
$('#btn-small').click(function(){
    $(this).addClass('active');
    $('a#btn-large').removeClass('active');
    $('a#btn-mini').removeClass('active');
    $('a#default').removeClass('active');
    $('#bt').removeClass('btn-mini');
    $('#bt').removeClass('btn-large');
    $('#bt').addClass('btn-small');
    $('#stage').css('margin-top','10px');
    $('#code-btn-size').html(' btn-small');
    $('#code-btn-block').html('');
    if($('#bt').hasClass('btn-block')){
        $('#bt').removeClass('btn-block');
        $('#btn-block').removeClass('active');
    }
    $('#btn-default-1').addClass('dNone');
    $('#btn-large-1').addClass('dNone');
    $('#btn-small-1').addClass('dNone');
    $('#btn-mini-1').addClass('dNone');
    $('#btn-default-1').removeClass('active');
    $('#btn-large-1').removeClass('active');
    $('#btn-small-1').addClass('active');
    $('#btn-mini-1').removeClass('active');
});

//default
$('#default').click(function(){
    $(this).addClass('active');
    $('a#btn-small').removeClass('active');
    $('a#btn-mini').removeClass('active');
    $('a#btn-large').removeClass('active');
    $('#bt').removeClass('btn-small');
    $('#bt').removeClass('btn-large');
    $('#bt').removeClass('btn-mini');
    $('#stage').css('margin-top','8px');
    $('#code-btn-size').html('');
    $('#code-btn-block').html('');
    if($('#bt').hasClass('btn-block')){
        $('#bt').removeClass('btn-block');
        $('#btn-block').removeClass('active');
    } 
    $('#btn-default-1').addClass('dNone');
    $('#btn-large-1').addClass('dNone');
    $('#btn-small-1').addClass('dNone');
    $('#btn-mini-1').addClass('dNone');
    $('#btn-default-1').addClass('active');
    $('#btn-large-1').removeClass('active');
    $('#btn-small-1').removeClass('active');
    $('#btn-mini-1').removeClass('active');
});

//btn-large
$('#btn-large').click(function(){
    $(this).addClass('active');
    $('a#btn-small').removeClass('active');
    $('a#btn-mini').removeClass('active');
    $('a#default').removeClass('active');
    $('#bt').removeClass('btn-mini');
    $('#bt').removeClass('btn-small');
    $('#bt').addClass('btn-large');
    $('#stage').css('margin-top','0');
    $('#code-btn-size').html(' btn-large');
    $('#code-btn-block').html('');
    if($('#bt').hasClass('btn-block')){
        $('#bt').removeClass('btn-block');
        $('#btn-block').removeClass('active');
    }
    $('#btn-default-1').addClass('dNone');
    $('#btn-large-1').addClass('dNone');
    $('#btn-small-1').addClass('dNone');
    $('#btn-mini-1').addClass('dNone');
    $('#btn-default-1').removeClass('active');
    $('#btn-large-1').addClass('active');
    $('#btn-small-1').removeClass('active');
    $('#btn-mini-1').removeClass('active');
});

$('#btn-large-1').click(function(){
    $(this).addClass('active');
    $('#btn-large').addClass('active');
    $('#default').removeClass('active');   
    $('#btn-small').removeClass('active');   
    $('#btn-mini').removeClass('active');  
    $('#bt').addClass('btn-large');
    $('#bt').removeClass('btn-small');
    $('#bt').removeClass('btn-mini');
    $('#btn-default-1').removeClass('active');
    $('#btn-small-1').removeClass('active');
    $('#btn-mini-1').removeClass('active');
    $('#code-btn-size').html(' btn-large');
    $('#stage').css('margin-top','0');    
});

$('#btn-default-1').click(function(){
    $(this).addClass('active');
    $('#bt').addClass('');
    $('#default').addClass('active'); 
    $('#btn-large').removeClass('active');   
    $('#btn-small').removeClass('active');   
    $('#btn-mini').removeClass('active');  
    $('#bt').removeClass('btn-large');
    $('#bt').removeClass('btn-small');
    $('#bt').removeClass('btn-mini');    
    $('#btn-large-1').removeClass('active');
    $('#btn-small-1').removeClass('active');
    $('#btn-mini-1').removeClass('active');
    $('#code-btn-size').html('');
    $('#stage').css('margin-top','8px');     
});

$('#btn-small-1').click(function(){
    $(this).addClass('active');
    $('#bt').addClass('btn-small');
    $('#bt').removeClass('btn-large');
    $('#bt').removeClass('btn-mini'); 
    $('#btn-small').addClass('active');
    $('#btn-large').removeClass('active');
    $('#default').removeClass('active');      
    $('#btn-mini').removeClass('active'); 
    $('#btn-default-1').removeClass('active');
    $('#btn-large-1').removeClass('active');
    $('#btn-mini-1').removeClass('active');
    $('#code-btn-size').html(' btn-small');
    $('#stage').css('margin-top','10px');    
});

$('#btn-mini-1').click(function(){
    $(this).addClass('active');
    $('#bt').addClass('btn-mini');
    $('#bt').removeClass('btn-large');
    $('#bt').removeClass('btn-small');     
    $('#btn-mini').addClass('active'); 
    $('#btn-small').removeClass('active');
    $('#btn-large').removeClass('active');
    $('#default').removeClass('active'); 
    $('#btn-default-1').removeClass('active');
    $('#btn-large-1').removeClass('active');
    $('#btn-small-1').removeClass('active');
    $('#code-btn-size').html(' btn-mini');
    $('#stage').css('margin-top','12px');    
});

//btn-default
$('#btn-default').click(function(){
    $(this).addClass('active');
    $('a#btn-disabled').removeClass('active');
    $('a#btn-active').removeClass('active');
    $('#bt').removeClass('active');
    $('#bt').removeClass('disabled');
    $('#code-state').html('');      
});

//btn-active
$('#btn-active').click(function(){
    $(this).addClass('active');
    $('a#btn-disabled').removeClass('active');
    $('a#btn-default').removeClass('active');
    $('#bt').removeClass('disabled');
    $('#bt').addClass('active');    
    $('#code-state').html(' active');       
});

//btn-disabled
$('#btn-disabled').click(function(){
    $(this).addClass('active');
    $('a#btn-active').removeClass('active');
    $('a#btn-default').removeClass('active');
    $('#bt').removeClass('active');
    $('#bt').addClass('disabled');
    $('#code-state').html(' disabled');
});

//btn-block
$('#btn-block').click(function(){
    $(this).toggleClass('active');
    $('#bt').toggleClass('btn-block');
    if(     $('#code-btn-block').html() == ""   ){
        $('#code-btn-block').html(' btn-block');
    }else if(      $('#code-btn-block').html() == " btn-block"   ){
        $('#code-btn-block').html('');
    }
    $('#btn-default-1').toggleClass('dNone');
    $('#btn-large-1').toggleClass('dNone');
    $('#btn-small-1').toggleClass('dNone');
    $('#btn-mini-1').toggleClass('dNone');        
});

//icon-white
$('#icon-white').click(function(){
    $(this).addClass('active');
    $('#icon-black').removeClass('active');
    $('#bt i').addClass('icon-white');
    $('#code-icon-color').html(' icon-white');
});

//icon-black
$('#icon-black').click(function(){
    $(this).addClass('active');
    $('#icon-white').removeClass('active');
    $('#bt i').removeClass('icon-white');
    $('#code-icon-color').html('');
});

//ICONES

//bt icones
$('#icones').click(function(){
    if(!$('#bt-submit').hasClass('active') && !$('#bt-input').hasClass('active')){
        $('#icones i').toggleClass('active');
        if($('#icones i').hasClass('icon-folder-open')){
            $('#icones i').removeClass('icon-folder-open');
            $('#icones i').addClass('icon-folder-close');
        }else if($('#icones i').hasClass('icon-folder-close')){
            $('#icones i').removeClass('icon-folder-close');
            $('#icones i').addClass('icon-folder-open');
            $('#icon-remove').addClass('disabled');
        }
        $("#galleryIcons").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    }
});

$('ul.the-icons li i').click(function(){
   if($('#icon-white').hasClass('active')   &&  $('#code-icon-color').html('icon-white')){
    $('#code-icon-color').html('');
    $('#icon-white').removeClass('active');
   }
    if($('#icon-black').hasClass('disabled') && $('#icon-white').hasClass('disabled')){
        $('#icon-black').addClass('active')
    }
    if(!$(this).parent().hasClass('iconActive')){
        $('ul.the-icons li').removeClass('iconActive');
        $(this).parent().addClass('iconActive');
    }
    if(!$('#bt').find('i').length){
        $('#bt #left-ico').prepend("<i></i>");
    }
    var $txtUser = $(this).attr('class');
    if($('#bt i').hasClass('icon-white')){
        $('#bt i').attr('class',''+$txtUser+' icon-white');
    }else{
        $('#bt i').attr('class',''+$txtUser+'');
    } 
    $('#code-icon-left').show();
    $('#i').html($txtUser);   
    $('#icon-left').removeClass('disabled');
    $('#icon-white').removeClass('disabled');
    $('#icon-black').removeClass('disabled');
    $('#icon-right').removeClass('disabled');
    $('#icon-ok').removeClass('disabled');
    $('#icon-remove').removeClass('disabled');
    $('#icon-remove').removeClass('active');
    $('#icon-ok').addClass('active');
    $('#bt i').show();
    if($('#icon-left').hasClass('active')){
        $('#lSpace').html(' ');
    }else if($('#icon-right').hasClass('active')){
        $('#rSpace').html(' ');
    }
    $('#code-icon-left').show();
    $('#code-icon-right').show();
});

$('#icon-remove').click(function(){
    $('#lSpace').html('');
    $('#rSpace').html('');
    $('#code-icon-left').hide();
    $('#code-icon-right').hide();
    $('#left-ico i').hide();
    if(!$('#icon-remove').hasClass('disabled')){
        $(this).addClass('active');
        $('#icon-ok').attr('class','btn');
        $('#left-ico i').attr('class','');
        $('#right-ico i').attr('class','');
        $('#icon-ok').addClass('disabled');
        $('#icon-white').addClass('disabled');
        $('#icon-black').addClass('disabled');
        $('#icon-left').addClass('disabled');
        $('#icon-right').addClass('disabled');
        $('ul.the-icons li').removeClass('iconActive');
        $("#galleryIcons").slideToggle("slow");
        $('#icones i').removeClass('icon-folder-open');
        $('#icones i').addClass('icon-folder-close');  
    }
}); 

//text button
$('document').ready(function(){
    function msg(e){
        $('#txtMyButton').text($(this).val());
        $('#txtBt').text($(this).val());
    }
    $(':text').bind("keyup",msg);
});

//icon-left
$('#icon-left').click(function(){
    if(!$('#icon-left').hasClass('disabled') && !$('#icon-left').hasClass('active')){
        $(this).addClass('active');
        $('#icon-right').removeClass('active');
    var $escolhido = $('#right-ico').find('i');
    $('#left-ico').html($escolhido);
        var $ecolhidoCodeR = $('#html-ico');
        $('#code-icon-left').html($ecolhidoCodeR);
        $('#lSpace').html(' ');
        $('#rSpace').html('');
    } 
});

//icon-right
$('#icon-right').click(function(){
    if(!$('#icon-right').hasClass('disabled') && !$('#icon-right').hasClass('active')){
        //selecao do botao
        $(this).addClass('active');
        $('#icon-left').removeClass('active'); 
    var $escolhido = $('#left-ico').find('i');
    $('#right-ico').html($escolhido);
        var ecolhidoCodeL = $('#html-ico');
        $('#code-icon-right').html(ecolhidoCodeL);
        $('#rSpace').html(' ');
        $('#lSpace').html('');
    }
});

$.fn.activeButtonLink = function(){
    $('#value').html('');
    $('#igual').html('');
    $('#aspasO').html('');
    $('#aspasC').html('');
    $('#txtBt').attr('class','white');
    $('#fecha-tag').html('&quot;>');
    $('#fecha-tag2').html('<');
    $('#type').html('');
    $('#igualType').html('');
    $('#aspasOType').html('');
    $('#valueType').html('');
    $('#aspasCType').html('');
    $('#icones').removeClass('disabled');
} 

$('#bt-link').click(function(){
    $(this).activeButtonLink();
    $(this).addClass('active');
    $('#bt-button').removeClass('active');
    $('#bt-input').removeClass('active');
    $('#bt-submit').removeClass('active');
    $('#openTag').html('a');
    $('#closeTag').html('a');
    $('#ahref').show();
});

$('#bt-button').click(function(){
    $(this).activeButtonLink();
    $(this).addClass('active');
    $('#bt-link').removeClass('active');
    $('#bt-input').removeClass('active');
    $('#bt-submit').removeClass('active');
    $('#openTag').html('button');
    $('#closeTag').html('button');
    $('#ahref').hide();
});

$.fn.inactiveSubmitInput =  function() {
    $(this).addClass('active');
    $('#icon-remove').addClass('disabled');
    $('#icon-ok').addClass('disabled');
    $('#icon-white').addClass('disabled');
    $('#icon-black').addClass('disabled');
    $('#icon-left').addClass('disabled');
    $('#icon-right').removeClass('active').addClass('disabled');
    $('ul.the-icons li').removeClass('iconActive'); 
    $('#bt-link').removeClass('active');
    $('#bt-button').removeClass('active');
    /*code for input*/
    $('#lSpace').html(' ');
    $('#rSpace').html('');
    $('#openTag').html('input');
    $('#closeTag').html('');
    $('#ahref').hide();
    $('#value').html('value');
    $('#igual').html('=');
    $('#aspasO').html('&quot;');
    $('#aspasC').html('&quot;');
    $('#txtBt').attr('class','yellow');
    $('#fecha-tag').html('&quot');
    $('#fecha-tag2').html('');
    $('#type').html('type');
    $('#igualType').html('=');
    $('#aspasOType').html('&quot;');    
    $('#aspasCType').html('&quot; ');
    $('#code-icon-right').hide();
    $('#code-icon-left').hide();
    $('#left-ico').html('');
    $('#right-ico').html('');
    /*fecha galeria icones*/
    $('ul.the-icons li').removeClass('iconActive');
    $("#galleryIcons").slideUp('slow');
    $('#icones').addClass('disabled');
    $('#icones i').removeClass('icon-folder-open');
    $('#icones i').addClass('icon-folder-close');
    /*CONSERTO BUG*/
    var $escolhido = $('#right-ico').find('i');
    $('#left-ico').html($escolhido);
    var $ecolhidoCodeR = $('#html-ico');
    $('#code-icon-left').html($ecolhidoCodeR);
    return false;
}

$('#bt-input').click(function(){
    $(this).inactiveSubmitInput();
    $('#bt-submit').removeClass('active'); 
    $('#valueType').html('button');
});

$('#bt-submit').click(function(){
    $(this).inactiveSubmitInput();
    $('#bt-input').removeClass('active');
    $('#valueType').html('submit');
});