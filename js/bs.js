$('document').ready(function(){
         
    //button text
    var $msg = $('#msg');
    $msg.focus();
    function msg(){
        $('#txtMyButton').text($(this).val());
        $('#txtBt').text($(this).val());
        if($msg.val()==""){
            $('#txtMyButton').text("My Bootstrap Button");
            $('#txtBt').text("My Bootstrap Button");
        }
    }
    $(':text').bind("keyup",msg);
    // set tooltips icon class
    $('ul.the-icons li i').attr('data-toggle','tooltip');
    $('ul.the-icons li i').attr('data-original-title','tooltip');
    $('ul.the-icons li i').mouseover(function(){
        var $txtToolTip = $(this).attr('class');
        $(this).attr('data-original-title',$txtToolTip);
    });
    $('#code-icon-left').hide();

    //btn-none
    $('a#btn-none').click(function(){
        $(this).addClass('active').parent().siblings('p').find('a').removeClass('active');
        $('#bt').removeClass("btn-primary btn-info btn-success btn-warning btn-danger btn-inverse btn-link");
        $('#code-btn-color').text('');
    });

    //btn-primary
    $('a#btn-primary').click(function(){
           $(this).addClass('active').parent().siblings('p').find('a').removeClass('active');
           $('#bt').addClass('btn-primary').removeClass("btn-none btn-info btn-success btn-warning btn-danger btn-inverse btn-link");   
           $('#code-btn-color').text(' btn-primary');
    });

    //btn-info
    $('a#btn-info').click(function(){
           $(this).addClass('active').parent().siblings('p').find('a').removeClass('active');
           $('#bt').addClass('btn-info').removeClass("btn-none btn-primary btn-success btn-warning btn-danger btn-inverse btn-link");   
           $('#code-btn-color').text(' btn-info');  
    });

    //btn-success
    $('a#btn-success').click(function(){
            $(this).addClass('active').parent().siblings('p').find('a').removeClass('active');
            $('#bt').addClass('btn-success').removeClass("btn-none btn-primary btn-info btn-warning btn-danger btn-inverse btn-link");   
            $('#code-btn-color').text(' btn-success');
    });

    //btn-warning
    $('a#btn-warning').click(function(){
            $(this).addClass('active').parent().siblings('p').find('a').removeClass('active');
            $('#bt').addClass('btn-warning').removeClass("btn-none btn-primary btn-info btn-success btn-danger btn-inverse btn-link");   
            $('#code-btn-color').text(' btn-warning');
    });

    //btn-danger
    $('a#btn-danger').click(function(){
            $(this).addClass('active').parent().siblings('p').find('a').removeClass('active');
            $('#bt').addClass('btn-danger').removeClass("btn-none btn-primary btn-info btn-success btn-warning btn-inverse btn-link");   
            $('#code-btn-color').text(' btn-danger');
    });

    //btn-inverse
    $('a#btn-inverse').click(function(){
            $(this).addClass('active').parent().siblings('p').find('a').removeClass('active');
            $('#bt').addClass('btn-inverse').removeClass("btn-none btn-primary btn-info btn-success btn-warning btn-danger btn-link");   
            $('#code-btn-color').text(' btn-inverse');
    });

    //btn-link
    $('a#btn-link').click(function(){
            $(this).addClass('active').parent().siblings('p').find('a').removeClass('active');
            $('#bt').addClass('btn-link').removeClass("btn-none btn-primary btn-info btn-success btn-warning btn-danger btn-inverse");   
            $('#code-btn-color').text(' btn-link');
    });

    //Button Size
    $('#btn-mini').click(function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $('#bt').addClass("btn-mini").removeClass("btn-small btn-large");
        $('#stage p a').css({'margin-top': '10px'});
        $('#code-btn-size').html(' btn-mini');
    });

    $('#btn-small').click(function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $('#bt').addClass("btn-small").removeClass("btn-mini btn-large"); 
        $('#stage p a').css('margin-top','9px');    
        $('#code-btn-size').html(' btn-small');  
    });

    $('#default').click(function(){
    	$(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $('#bt').removeClass("btn-small btn-large btn-mini");
        $('#stage p a').css('margin-top','8px');
        $('#code-btn-size').html('');
    });

    $('#btn-large').click(function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $('#bt').addClass("btn-large").removeClass("btn-small btn-mini");    
        $('#stage p a').css({'margin-top': '0'});
        $('#code-btn-size').html(' btn-large');
    });

    //btn-default
    $('#btn-default').click(function(){
        $(this).addClass('active').parent().siblings('p').find('a').removeClass('active');
        $('#bt').removeClass('active disabled');
        $('#code-state').html('');
    });

    //btn-active
    $('#btn-active').click(function(){
        $(this).addClass('active').parent().siblings('p').find('a').removeClass('active');
        $('#bt').removeClass('disabled').addClass('active');
        $('#code-state').html(' active');	
    });

    //btn-disabled
    $('#btn-disabled').click(function(){
        $(this).addClass('active').parent().siblings('p').find('a').removeClass('active');
        $('#bt').removeClass('active').addClass('disabled');
        $('#code-state').html(' disabled');   
    });

    //btn-block
    $('#btn-block').click(function(){
        $(this).toggleClass('active');
    	$('#bt').toggleClass('btn-block');
        var $codeBtnBlock =  $('#code-btn-block');
    	if($codeBtnBlock.html()==""){
    		$codeBtnBlock.html(' btn-block');
    	}else{
            $codeBtnBlock.html('');
        }      
    });

    //icon-white
    $('#icon-white').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('#bt i').addClass('icon-white');
        $('#code-icon-color').html(' icon-white');
    });

    //icon-black
    $('#icon-black').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('#bt i').removeClass('icon-white');
        $('#code-icon-color').html('');
    });

    //ICONES
    //bt icones
    $('#icones').click(function(){
        $('#icon-remove').addClass('disabled');
        if(!$('#bt-submit').hasClass('active') && !$('#bt-input').hasClass('active')){
            if($('#icones i').hasClass('icon-folder-open')){
                $('#icones i').removeClass('icon-folder-open').addClass('icon-folder-close active');
            }else if($('#icones i').hasClass('icon-folder-close')){
                $('#icones i').removeClass('icon-folder-close').addClass('icon-folder-open');
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
        $('#icon-left, #icon-white, #icon-black, #icon-right, #icon-ok, #icon-remove').removeClass('disabled');
        $('#icon-remove').removeClass('active');
        $('#icon-ok').addClass('active');
        $('#bt i').show();

        if($('#icon-left').hasClass('active')){
            $('#lSpace').html(' ');
        }else if($('#icon-right').hasClass('active')){
            $('#rSpace').html(' ');
        }
        $('#code-icon-left, #code-icon-right').show();
    });

    $('#icon-remove').click(function(){
        $('#icones').removeClass('active');
        $('#left-ico i').hide();
        $('#lSpace, #rSpace').html('');
        $('#code-icon-left, #code-icon-right').hide();
        if(!$('#icon-remove').hasClass('disabled')){
            $(this).addClass('disabled');
            $('#icon-ok').attr('class','btn');
            $('#left-ico i, #right-ico i').attr('class','');
            $('#icon-ok, #icon-white, #icon-black, #icon-left, #icon-right').addClass('disabled');
            $('ul.the-icons li').removeClass('iconActive');
            $("#galleryIcons").slideToggle("slow");
            $('#icones i').removeClass('icon-folder-open').addClass('icon-folder-close');  
        }
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
            $('#lSpace, #rSpace').html('');
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

    jQuery.fn.activeButtonLink = function(){
        $('#value, #igual, #aspasO, #aspasC').html('');
        $('#txtBt').attr('class','white');
        $('#fecha-tag').html('&quot;>');
        $('#fecha-tag2').html('<');
        $('#type, #aspasCType').html('');
        $('#igualType, #aspasOType, #valueType').html('');
        $('#icones').removeClass('disabled');
    }

    jQuery.fn.inactiveSubmitInput =  function() {
        $(this).addClass('active');
        $('#icon-remove, #icon-ok, #icon-white, #icon-black, #icon-left').addClass('disabled');
        $('#icon-right').removeClass('active').addClass('disabled');
        $('ul.the-icons li').removeClass('iconActive'); 
        $('#bt-link, #bt-button').removeClass('active');
        /*code for input*/
        $('#ahref').hide();
        $('#lSpace, #rSpace, #fecha-tag2, #left-ico, #right-ico, #closeTag').html('');
        $('#openTag').html('input');
        $('#value').html('value');
        $('#igual').html('=');
        $('#aspasO, #aspasC').html('&quot;');
        $('#txtBt').attr('class','yellow');
        $('#fecha-tag').html('&quot');
        $('#type').html('type');
        $('#igualType').html('=');
        $('#aspasOType, #aspasCType').html('&quot; ');
        $('#code-icon-right, #code-icon-left').hide();
        /*fecha galeria icones*/
        $('ul.the-icons li').removeClass('iconActive');
        $("#galleryIcons").slideUp('slow');
        $('#icones').addClass('disabled');
        $('#icones i').removeClass('icon-folder-open').addClass('icon-folder-close');
        /*CONSERTO BUG*/
        var $escolhido = $('#right-ico').find('i');
        $('#left-ico').html($escolhido);
        var $ecolhidoCodeR = $('#html-ico');
        $('#code-icon-left').html($ecolhidoCodeR);
        return false;
    }

    $('#bt-link').click(function(){
        $(this).activeButtonLink();
        $(this).addClass('active');
        $('#bt-button, #bt-input, #bt-submit').removeClass('active');
        $('#openTag, #closeTag').html('a');
        $('#ahref').show();
    });

    $('#bt-button').click(function(){
        $(this).activeButtonLink();
        $(this).addClass('active');
        $('#bt-link, #bt-input, #bt-submit').removeClass('active');
        $('#openTag, #closeTag').html('button');
        $('#ahref').hide();
    });

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
});