
// let addUl = document.querySelector('ul');
// let addLi = addUl.firstElementChild;
// addLi.className="active";
// addLi.style.color="red";

$(document).ready(function(){
    $('ul li.eq[1]').addClass('active');
    $('ul').css('cursor', 'pointer');
    $('ul li').click(function(){           
        $('ul li').removeClass('active').removeAttr('style');               
        $(this).addClass('active').css('color','red');    
    });

});
