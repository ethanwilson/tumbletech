$(document).ready(function(){$(".logo").css({transform:"translateY(0px) translateX(0px) rotate(0deg) scale(1,1)"}),$(window).scroll(function(){var s=$(this).scrollTop(),t=120,a=800,r=s-t,e=s/t/2-s/t+1;0>s&&(e=1),a>s?(t>s&&$(".stairs").css({transform:"translateY(-"+s/1.5+"%)"}),s>t?(e=.5,$(".logo").css({transform:"translateY("+r/4+"%) translateX(-"+r/4+"%) rotate(-"+r/1.7+"deg) scale("+e+","+e+")"}),$(".stairs").css({transform:"translateY(-76.6667%)"})):$(".logo").css({transform:"translateY(0px) translateX(0px) rotate(0deg) scale("+e+","+e+")"}),t-30>s&&$(".tumbleTech").css({transform:"translateY(-"+s/4+"%)"})):($(".stairs").css({transform:"translateY(-"+s/1.5+"%)"}),$(".logo").css({transform:"translateY(0) translateX(0) rotate(0) scale("+e+","+e+")"}))})});