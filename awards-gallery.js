"use strict";(()=>{var a,r,i;function s(){let e=$(".awards-grid").width(),c=$(".awards-grid").css("grid-column-gap");if($(window).width()<=767){console.log("mobile"),r=3;let h=e;a=0,i=[],$(".award-image").each(function(t){if(t<3){console.log("loop",t);let o=$(this)[0].naturalWidth,n=$(this)[0].naturalHeight,l=o/n;i[t]=l,a=a+l}}),$(".award").each(function(t){t<3&&$(this).css("width","calc("+h*i[t]/a/e*100+"% - "+c+")")}),a=0,i=[],$(".award-image").each(function(t){if(t>2){console.log("loop",t);let o=$(this)[0].naturalWidth,n=$(this)[0].naturalHeight,l=o/n;i[t]=l,a=a+l}}),$(".award").each(function(t){t>2&&$(this).css("width","calc("+h*i[t]/a/e*100+"% - "+c+")")})}else{a=0,r=6;let h=Math.floor(e-c.slice(0,-2)*(r-1));i=[],$(".award-image").each(function(t){let o=$(this)[0].naturalWidth,n=$(this)[0].naturalHeight,l=o/n;i[t]=l,a=a+l}),$(".award").each(function(t){$(this).css("width",h*i[t]/a/e*100+"%")})}$(".awards-grid").removeClass("loading")}function d(){let e;$(window).on("resize",function(){clearTimeout(e),e=setTimeout(function(){s()},200)})}$(document).ready(function(){s(),d()});})();
