"use strict";function logOpenMapAction(){$.post(actionLogLoadMapOpen,{})}function previewLoadInfo(e,n){e.preventDefault(),isFullScreen&&$('#map_canvas div.gm-style button[title="Toggle fullscreen view"]').trigger("click"),$.pjax({type:"POST",url:actionPreviewLoadInfo,data:{id:n,showLoadInfo:!0},container:"#load-info-preview-pjax",push:!1,replace:!1,scrollTo:!1}).done(function(){showLoadInfoPreviewModal()})}function showLoadInfoPreviewModal(){$("#load-info-preview-modal").modal("show")}function changeMapCollapseButtonText(e,n){if(n.preventDefault(),mapOpen)var a='<i class="fa fa-plus-circle btn-icon map-link"></i> <span class="btn-text map-link">'+TEXT_SHOW_MAP+"</span>";else var a='<i class="fa fa-minus-circle margin-right-5 btn-icon"></i><span class="btn-text color-black">'+TEXT_HIDE_MAP+"</span>";$(e).siblings().each(function(e,n){n.remove()}),$(e).parent().append(a),!1===mapRendered&&renderMapAjax(),mapOpen=!mapOpen}function changeFiltersCollapseButtonText(e,n){if(n.preventDefault(),filtersOpen)var a='<i class="fa fa-plus-circle btn-icon margin-right-5"></i><span class="btn-text">'+TEXT_SHOW_FILTERS+"</span>";else var a='<i class="fa fa-minus-circle margin-right-5 btn-icon"></i><span class="btn-text color-black">'+TEXT_HIDE_FILTERS+"</span>";$(e).siblings().each(function(e,n){n.remove()}),$(e).parent().append(a),!1===filtersRendered&&renderFiltersAjax(),filtersOpen=!filtersOpen}function replaceQueryParam(e,n,a){var t=new RegExp("([?;&])"+e+"[^&;]*[;&]?"),i=a.replace(t,"$1").replace(/&$/,"");return""===n?i:(i.length>2?i+"&":"?")+(n?e+"="+n:"")}function filterByLoadCity(e){var n=$(e).val(),a=window.location.pathname,t=replaceQueryParam("loadCityId",n,window.location.search);window.history.pushState(null,"",a+t),location.reload()}function filterByUnloadCity(e){var n=$(e).val(),a=window.location.pathname,t=replaceQueryParam("unloadCityId",n,window.location.search);window.history.pushState(null,"",a+t),location.reload()}function changePageSize(e){var n=$(e).val(),a=window.location.pathname,t=replaceQueryParam("pageSize",n,window.location.search);window.history.pushState(null,"",a+t),location.reload()}function collapseLoadPreview(e,n){e.preventDefault();var a=$("#load-preview-"+n),t=a.find(".content"),i=a.parent();0===t.text().length?$.post(actionPreviewLoadInfo,{id:n},function(e){t.html(e),i.hasClass("hidden")?i.removeClass("hidden"):i.addClass("hidden")}):i.hasClass("hidden")?i.removeClass("hidden"):i.addClass("hidden")}function collapseExpiredLoadPreview(e,n){e.preventDefault();var a=$("#credits-amount"),t=$("#load-preview-"+n),i=t.find(".content"),o=t.parent();0===i.text().length?$.post(actionPreviewExpiredLoadInfo,{id:n},function(e){i.html(e.content),a.length&&void 0!==e.credits&&a.text(e.credits),void 0!==e.subscription_end_date&&($(document).find(".subscription-end-time").text(e.subscription_end_date),$(document).find("#subscription_end_date").text(e.subscription_end_date.substr(0,10))),void 0!==e.subscription_credits&&$(document).find(".subscription-credits").html(e.subscription_credits),o.hasClass("hidden")?o.removeClass("hidden"):o.addClass("hidden")}):o.hasClass("hidden")?o.removeClass("hidden"):o.addClass("hidden")}function showLoadLink(e,n){e.preventDefault(),$.pjax({type:"POST",url:actionPreviewLoadLink,data:{id:n},container:"#load-link-preview-pjax",push:!1,replace:!1,scrollTo:!1}).done(function(){$("#load-link-preview-modal").modal("show")})}function copyLoadLinkToClipboard(){$("#load-link-field").select(),document.execCommand("Copy")&&($("#load-link-success-alert").fadeIn("slow",function(){$(this).removeClass("hidden")}),setTimeout(function(){$("#load-link-success-alert").fadeOut("slow",function(){$(this).addClass("hidden")})},5e3))}function renderMapAjax(e){$.pjax({type:"POST",url:actionRenderMap+window.location.search,container:"#L-T-5",cache:!1,async:!0,push:!1}).done(function(){mapRendered=!0,loadScript()})}function renderFiltersAjax(){$.pjax({type:"POST",url:actionRenderFilters+window.location.search,container:"#filter",cache:!1,async:!0,push:!1}).done(function(){filtersRendered=!0})}function renderLoadContactMapAjax(e,n){var a=$(e).data("load");$.ajax({method:"POST",url:actionRenderContactMap,data:{load:a},contentType:"application/x-www-form-urlencoded; charset=UTF-8",success:function(a){n.html(a),$(e).data("rendered",!0),$(e).data("map-open",!0)}})}function send_mail_userlog(e){$.ajax({method:"POST",url:actionSendMailUserLog,data:{email:e},contentType:"application/x-www-form-urlencoded; charset=UTF-8",success:function(e){1==e&&$("#alert-sent-mail").removeClass("hidden").fadeIn().animate({opacity:1},4e3).fadeOut("slow")},error:function(e){alert("Something went wrong! Please try again later.")}})}function changeSearchFilterIcon(e,n){if(n.preventDefault(),mapOpen)var a='<i class="fa fa-plus-circle btn-icon map-link"></i> <span class="btn-text map-link">'+TEXT_SHOW_FILTERS+"</span>";else var a='<i class="fa fa-minus-circle margin-right-5 btn-icon"></i><span class="btn-text color-black">'+TEXT_HIDE_FILTERS+"</span>";$(e).siblings().each(function(e,n){n.remove()}),$(e).parent().append(a),mapOpen=!mapOpen}function change_email_address(e){var n=$("input.load_user_id").val(),a=$("input.load-user-email-txt-box").val();$.ajax({type:"POST",url:actionChangeEmailAddress,data:{email:a,user_id:n},success:function(n){$("#"+e).modal("hide"),1==n&&($("#email-updated").removeClass("hidden").fadeIn().animate({opacity:1},4e3).fadeOut("slow"),$("[data-target=#"+e+"]").html(a))},error:function(e){alert("Something went wrong! Please try again later.")}})}function openEmailModal(e,n){$("#change-email-address-modal .load_user_id").val(n),$("#change-email-address-modal .load-user-email-txt-box").val(e),$("#change-email-address-modal").modal("show")}var isFullScreen=!1,mapRendered=!1,filtersRendered=!1,mapOpen=!1,filtersOpen=!1;$(document).bind("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(){isFullScreen=document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen}),$(document).ready(function(e){e("body").on("click",".map-link",function(e){logOpenMapAction()}),e("body").on("click",".btn-text",function(n){e(this).parent().find("input[type='button']").trigger("click")}),e("body").on("click",".btn-icon",function(n){e(this).parent().find("input[type='button']").trigger("click")}),e("body").on("click",".map-button",function(n){var a=e(this),t=a.find(".btn-text"),i=a.find(".btn-icon"),o=a.parent().find(".map-container"),l=e(this).data("rendered"),r=e(this).data("map-open");!1===l&&(renderLoadContactMapAjax(this,o),t.html(closeMapText),i.removeClass("fa-plus-circle").addClass("fa-minus-circle")),!0===r&&!0===l?(t.html(openMapText),o.fadeOut(),a.data("map-open",!1),i.removeClass("fa-minus-circle").addClass("fa-plus-circle")):!1===r&&!0===l&&(t.html(closeMapText),o.fadeIn(),a.data("map-open",!0),i.removeClass("fa-plus-circle").addClass("fa-minus-circle"))}),!0===needToOpenFilters&&e("#filter-btn").click()}),$(".hide_current_row").click(function(){$(this).parent().parent().hide()}),$("[data-toggle=popover]").popover({html:!0,content:function(){return $(this).next().html()}}),$(function(){$("body").popover({selector:'[data-toggle="popover"]',trigger:"hover",container:"body",animation:!1}).on("hide.bs.popover",function(){if($(".popover:hover").length)return!1}),$("body").on("mouseleave",".popover",function(){$(".popover").popover("hide")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWQvbG9hZHMuanMiXSwibmFtZXMiOlsibG9nT3Blbk1hcEFjdGlvbiIsIiQiLCJwb3N0IiwiYWN0aW9uTG9nTG9hZE1hcE9wZW4iLCJwcmV2aWV3TG9hZEluZm8iLCJlIiwiaWQiLCJwcmV2ZW50RGVmYXVsdCIsImlzRnVsbFNjcmVlbiIsInRyaWdnZXIiLCJwamF4IiwidHlwZSIsInVybCIsImFjdGlvblByZXZpZXdMb2FkSW5mbyIsImRhdGEiLCJzaG93TG9hZEluZm8iLCJjb250YWluZXIiLCJwdXNoIiwicmVwbGFjZSIsInNjcm9sbFRvIiwiZG9uZSIsInNob3dMb2FkSW5mb1ByZXZpZXdNb2RhbCIsIm1vZGFsIiwiY2hhbmdlTWFwQ29sbGFwc2VCdXR0b25UZXh0IiwiZWxlbWVudCIsImV2ZW50IiwibWFwT3BlbiIsImh0bWwiLCJURVhUX1NIT1dfTUFQIiwiVEVYVF9ISURFX01BUCIsInNpYmxpbmdzIiwiZWFjaCIsImluZGV4IiwiaXRlbSIsInJlbW92ZSIsInBhcmVudCIsImFwcGVuZCIsIm1hcFJlbmRlcmVkIiwicmVuZGVyTWFwQWpheCIsImNoYW5nZUZpbHRlcnNDb2xsYXBzZUJ1dHRvblRleHQiLCJmaWx0ZXJzT3BlbiIsIlRFWFRfU0hPV19GSUxURVJTIiwiVEVYVF9ISURFX0ZJTFRFUlMiLCJmaWx0ZXJzUmVuZGVyZWQiLCJyZW5kZXJGaWx0ZXJzQWpheCIsInJlcGxhY2VRdWVyeVBhcmFtIiwicGFyYW0iLCJ2YWx1ZSIsInNlYXJjaCIsInJlZ2V4IiwiUmVnRXhwIiwicXVlcnkiLCJsZW5ndGgiLCJmaWx0ZXJCeUxvYWRDaXR5IiwibG9hZENpdHlJZCIsInZhbCIsInBhdGhOYW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInF1ZXJ5UGFyYW1zIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInJlbG9hZCIsImZpbHRlckJ5VW5sb2FkQ2l0eSIsInVubG9hZENpdHlJZCIsImNoYW5nZVBhZ2VTaXplIiwicGFnZVNpemUiLCJjb2xsYXBzZUxvYWRQcmV2aWV3IiwidGQiLCJkaXYiLCJmaW5kIiwidHIiLCJ0ZXh0IiwiY29udGVudCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvbGxhcHNlRXhwaXJlZExvYWRQcmV2aWV3IiwiY3JlZGl0cyIsImFjdGlvblByZXZpZXdFeHBpcmVkTG9hZEluZm8iLCJqc29uIiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJzdWJzdHIiLCJzaG93TG9hZExpbmsiLCJhY3Rpb25QcmV2aWV3TG9hZExpbmsiLCJjb3B5TG9hZExpbmtUb0NsaXBib2FyZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZmFkZUluIiwidGhpcyIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiYWN0aW9uUmVuZGVyTWFwIiwiY2FjaGUiLCJhc3luYyIsImxvYWRTY3JpcHQiLCJhY3Rpb25SZW5kZXJGaWx0ZXJzIiwicmVuZGVyTG9hZENvbnRhY3RNYXBBamF4IiwibG9hZElEIiwiYWpheCIsIm1ldGhvZCIsImFjdGlvblJlbmRlckNvbnRhY3RNYXAiLCJsb2FkIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwic2VuZF9tYWlsX3VzZXJsb2ciLCJlbWFpbCIsImFjdGlvblNlbmRNYWlsVXNlckxvZyIsImFuaW1hdGUiLCJvcGFjaXR5IiwiZXJyb3IiLCJfZXJyb3IiLCJhbGVydCIsImNoYW5nZVNlYXJjaEZpbHRlckljb24iLCJuIiwiYSIsImNoYW5nZV9lbWFpbF9hZGRyZXNzIiwibW9kYWxfaWQiLCJ1c2VyX2lkIiwiYWN0aW9uQ2hhbmdlRW1haWxBZGRyZXNzIiwiX2Vycm9yMiIsIm9wZW5FbWFpbE1vZGFsIiwiYmluZCIsImZ1bGxTY3JlZW4iLCJtb3pGdWxsU2NyZWVuIiwid2Via2l0SXNGdWxsU2NyZWVuIiwicmVhZHkiLCJvbiIsImJ1dHRvbiIsImJ0blRleHQiLCJidG5JY29uIiwiY29udGFjdE1hcFJlbmRlcmVkIiwiY2xvc2VNYXBUZXh0Iiwib3Blbk1hcFRleHQiLCJuZWVkVG9PcGVu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T3pFLEdBQUUwRixNQUFNaUQsT0FBT2pILFVBRzlCMUIsRUFBRSxXQUNFQSxFQUFFLFFBQVEwSSxTQUFVRSxTQUFVLDBCQUEyQnBJLFFBQVMsUUFBU08sVUFBVyxPQUFROEgsV0FBVyxJQUFTYixHQUFHLGtCQUFtQixXQUNwSSxHQUFJaEksRUFBRSxrQkFBa0JtRCxPQUNwQixPQUFPLElBR2ZuRCxFQUFFLFFBQVFnSSxHQUFHLGFBQWMsV0FBWSxXQUNuQ2hJLEVBQUUsWUFBWTBJLFFBQVEiLCJmaWxlIjoibG9hZC9sb2Fkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBURVhUX0hJREVfTUFQLCBURVhUX1NIT1dfTUFQLCBhY3Rpb25QcmV2aWV3TG9hZEluZm8sIGFjdGlvblByZXZpZXdMb2FkTGluaywgYWN0aW9uUHJldmlld0V4cGlyZWRMb2FkSW5mbyAqL1xyXG5cclxudmFyIGlzRnVsbFNjcmVlbiA9IGZhbHNlO1xyXG52YXIgbWFwUmVuZGVyZWQgPSBmYWxzZTtcclxudmFyIGZpbHRlcnNSZW5kZXJlZCA9IGZhbHNlO1xyXG52YXIgbWFwT3BlbiA9IGZhbHNlLCBmaWx0ZXJzT3BlbiA9IGZhbHNlO1xyXG5cclxuJChkb2N1bWVudCkuYmluZCgnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZSBtb3pmdWxsc2NyZWVuY2hhbmdlIGZ1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgIGlzRnVsbFNjcmVlbiA9IGRvY3VtZW50LmZ1bGxTY3JlZW4gfHwgZG9jdW1lbnQubW96RnVsbFNjcmVlbiB8fCBkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW47XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCl7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5tYXAtbGluaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsb2dPcGVuTWFwQWN0aW9uKCk7XHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmJ0bi10ZXh0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBidG4gPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2lucHV0W3R5cGU9XFwnYnV0dG9uXFwnXScpO1xyXG4gICAgICAgIGJ0bi50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5idG4taWNvbicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgYnRuID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdpbnB1dFt0eXBlPVxcJ2J1dHRvblxcJ10nKTtcclxuICAgICAgICBidG4udHJpZ2dlcignY2xpY2snKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLm1hcC1idXR0b24nLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGJ0blRleHQgPSBidXR0b24uZmluZCgnLmJ0bi10ZXh0Jyk7XHJcbiAgICAgICAgdmFyIGJ0bkljb24gPSBidXR0b24uZmluZCgnLmJ0bi1pY29uJyk7XHJcblxyXG4gICAgICAgIHZhciBjb250YWluZXIgPSAgYnV0dG9uLnBhcmVudCgpLmZpbmQoJy5tYXAtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdmFyIGNvbnRhY3RNYXBSZW5kZXJlZCA9ICQodGhpcykuZGF0YSgncmVuZGVyZWQnKTtcclxuICAgICAgICB2YXIgbWFwT3BlbiA9ICQodGhpcykuZGF0YSgnbWFwLW9wZW4nKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhY3RNYXBSZW5kZXJlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmVuZGVyTG9hZENvbnRhY3RNYXBBamF4KHRoaXMsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGJ0blRleHQuaHRtbChjbG9zZU1hcFRleHQpO1xyXG4gICAgICAgICAgICBidG5JY29uLnJlbW92ZUNsYXNzKCdmYS1wbHVzLWNpcmNsZScpLmFkZENsYXNzKCdmYS1taW51cy1jaXJjbGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXBPcGVuID09PSB0cnVlICYmIGNvbnRhY3RNYXBSZW5kZXJlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBidG5UZXh0Lmh0bWwob3Blbk1hcFRleHQpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICBidXR0b24uZGF0YSgnbWFwLW9wZW4nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGJ0bkljb24ucmVtb3ZlQ2xhc3MoJ2ZhLW1pbnVzLWNpcmNsZScpLmFkZENsYXNzKCdmYS1wbHVzLWNpcmNsZScpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKG1hcE9wZW4gPT09IGZhbHNlICYmIGNvbnRhY3RNYXBSZW5kZXJlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBidG5UZXh0Lmh0bWwoY2xvc2VNYXBUZXh0KTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmZhZGVJbigpO1xyXG4gICAgICAgICAgICBidXR0b24uZGF0YSgnbWFwLW9wZW4nLCB0cnVlKTtcclxuICAgICAgICAgICAgYnRuSWNvbi5yZW1vdmVDbGFzcygnZmEtcGx1cy1jaXJjbGUnKS5hZGRDbGFzcygnZmEtbWludXMtY2lyY2xlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChuZWVkVG9PcGVuRmlsdGVycyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNmaWx0ZXItYnRuJykuY2xpY2soKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vKipcclxuICogU2VuZHMgcmVxdWVzdCB0byBiYWNrZW5kIHRvIHJlZ2lzdGVyIG1hcCBvcGVuIGFjdGlvbiBmb3Igc3RhdGlzdGljc1xyXG4gKi9cclxuZnVuY3Rpb24gbG9nT3Blbk1hcEFjdGlvbigpIHtcclxuICAgICQucG9zdChhY3Rpb25Mb2dMb2FkTWFwT3Blbiwge30pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVycyBsb2FkIGluZm8gcHJldmlld1xyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gZSBFdmVudCBvYmplY3RcclxuICogQHBhcmFtIHtudW1iZXJ9IGlkIExvYWQgSURcclxuICovXHJcbmZ1bmN0aW9uIHByZXZpZXdMb2FkSW5mbyhlLCBpZCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzRnVsbFNjcmVlbikge1xyXG4gICAgICAgICQoJyNtYXBfY2FudmFzIGRpdi5nbS1zdHlsZSBidXR0b25bdGl0bGU9XCJUb2dnbGUgZnVsbHNjcmVlbiB2aWV3XCJdJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxuICAgICQucGpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogYWN0aW9uUHJldmlld0xvYWRJbmZvLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICBzaG93TG9hZEluZm86IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRhaW5lcjogJyNsb2FkLWluZm8tcHJldmlldy1wamF4JyxcclxuICAgICAgICBwdXNoOiBmYWxzZSxcclxuICAgICAgICByZXBsYWNlOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGxUbzogZmFsc2VcclxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNob3dMb2FkSW5mb1ByZXZpZXdNb2RhbCgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaG93cyBsb2FkIGluZm8gcHJldmlldyBtb2RhbFxyXG4gKi9cclxuZnVuY3Rpb24gc2hvd0xvYWRJbmZvUHJldmlld01vZGFsKCkge1xyXG4gICAgJCgnI2xvYWQtaW5mby1wcmV2aWV3LW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYW5nZXMgbWFwIGNvbGxhcHNlIGJ1dHRvbiB0ZXh0IGRlcGVuZGluZyBvbiB3aGV0aGVyIG1hcCBpcyBleHBhbmRlZCBvciBub3RcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgVGhpcyBlbGVtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBjaGFuZ2VNYXBDb2xsYXBzZUJ1dHRvblRleHQoZWxlbWVudCxldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChtYXBPcGVuKSB7XHJcbiAgICAgICAgdmFyIGh0bWwgPSAnPGkgY2xhc3M9XCJmYSBmYS1wbHVzLWNpcmNsZSBidG4taWNvbiBtYXAtbGlua1wiPjwvaT4gPHNwYW4gY2xhc3M9XCJidG4tdGV4dCBtYXAtbGlua1wiPicgKyBURVhUX1NIT1dfTUFQICsgJzwvc3Bhbj4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgaHRtbCA9ICc8aSBjbGFzcz1cImZhIGZhLW1pbnVzLWNpcmNsZSBtYXJnaW4tcmlnaHQtNSBidG4taWNvblwiPjwvaT48c3BhbiBjbGFzcz1cImJ0bi10ZXh0IGNvbG9yLWJsYWNrXCI+JyArIFRFWFRfSElERV9NQVAgKyAnPC9zcGFuPic7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNpYmxpbmdFbGVtcyA9ICQoZWxlbWVudCkuc2libGluZ3MoKTtcclxuICAgIHNpYmxpbmdFbGVtcy5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICAgICQoZWxlbWVudCkucGFyZW50KCkuYXBwZW5kKGh0bWwpO1xyXG4gICAgaWYgKG1hcFJlbmRlcmVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJlbmRlck1hcEFqYXgoKTtcclxuICAgIH1cclxuICAgIG1hcE9wZW4gPSAhbWFwT3BlbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlRmlsdGVyc0NvbGxhcHNlQnV0dG9uVGV4dChlbGVtZW50LGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGZpbHRlcnNPcGVuKSB7XHJcbiAgICAgICAgdmFyIGh0bWwgPSAnPGkgY2xhc3M9XCJmYSBmYS1wbHVzLWNpcmNsZSBidG4taWNvbiBtYXJnaW4tcmlnaHQtNVwiPjwvaT48c3BhbiBjbGFzcz1cImJ0bi10ZXh0XCI+JyArIFRFWFRfU0hPV19GSUxURVJTICsgJzwvc3Bhbj4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgaHRtbCA9ICc8aSBjbGFzcz1cImZhIGZhLW1pbnVzLWNpcmNsZSBtYXJnaW4tcmlnaHQtNSBidG4taWNvblwiPjwvaT48c3BhbiBjbGFzcz1cImJ0bi10ZXh0IGNvbG9yLWJsYWNrXCI+JyArIFRFWFRfSElERV9GSUxURVJTICsgJzwvc3Bhbj4nO1xyXG4gICAgfVxyXG4gICAgdmFyIHNpYmxpbmdFbGVtcyA9ICQoZWxlbWVudCkuc2libGluZ3MoKTtcclxuICAgIHNpYmxpbmdFbGVtcy5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChlbGVtZW50KS5wYXJlbnQoKS5hcHBlbmQoaHRtbCk7XHJcbiAgICBpZiAoZmlsdGVyc1JlbmRlcmVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJlbmRlckZpbHRlcnNBamF4KCk7XHJcbiAgICB9XHJcbiAgICBmaWx0ZXJzT3BlbiA9ICFmaWx0ZXJzT3BlbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcGxhY2VzIHF1ZXJ5IHBhcmFtc1xyXG4gKlxyXG4gKiBAc2VlIHtAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xOTQ3MjQxMC81NzQ3ODY3fVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1cclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIHJlcGxhY2VRdWVyeVBhcmFtKHBhcmFtLCB2YWx1ZSwgc2VhcmNoKSB7XHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFs/OyZdKVwiICsgcGFyYW0gKyBcIlteJjtdKls7Jl0/XCIpO1xyXG4gICAgdmFyIHF1ZXJ5ID0gc2VhcmNoLnJlcGxhY2UocmVnZXgsIFwiJDFcIikucmVwbGFjZSgvJiQvLCAnJyk7XHJcblxyXG4gICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKHF1ZXJ5Lmxlbmd0aCA+IDIgPyBxdWVyeSArIFwiJlwiIDogXCI/XCIpICsgKHZhbHVlID8gcGFyYW0gKyBcIj1cIiArIHZhbHVlIDogJycpO1xyXG59XHJcblxyXG4vKipcclxuICogRmlsdGVycyBsb2FkcyBtYXAgYnkgbG9hZCBjaXR5IG9yIGNvdW50cnlcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgVGhpcyBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIGZpbHRlckJ5TG9hZENpdHkoZWxlbWVudCkge1xyXG4gICAgdmFyIGxvYWRDaXR5SWQgPSAkKGVsZW1lbnQpLnZhbCgpO1xyXG4gICAgdmFyIHBhdGhOYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgdmFyIHF1ZXJ5UGFyYW1zID0gcmVwbGFjZVF1ZXJ5UGFyYW0oJ2xvYWRDaXR5SWQnLCBsb2FkQ2l0eUlkLCB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgcGF0aE5hbWUgKyBxdWVyeVBhcmFtcyk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbHRlcnMgbG9hZHMgbWFwIGJ5IHVubG9hZCBjaXR5IG9yIGNvdW50cnlcclxuICpcclxuICogQHBhcmFtIGVsZW1lbnRcclxuICovXHJcbmZ1bmN0aW9uIGZpbHRlckJ5VW5sb2FkQ2l0eShlbGVtZW50KSB7XHJcbiAgICB2YXIgdW5sb2FkQ2l0eUlkID0gJChlbGVtZW50KS52YWwoKTtcclxuICAgIHZhciBwYXRoTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIHZhciBxdWVyeVBhcmFtcyA9IHJlcGxhY2VRdWVyeVBhcmFtKCd1bmxvYWRDaXR5SWQnLCB1bmxvYWRDaXR5SWQsIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCBwYXRoTmFtZSArIHF1ZXJ5UGFyYW1zKTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hhbmdlcyBlbnRyaWVzIHBlciBwYWdlIHNpemVcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgVGhpcyBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIGNoYW5nZVBhZ2VTaXplKGVsZW1lbnQpIHtcclxuICAgIHZhciBwYWdlU2l6ZSA9ICQoZWxlbWVudCkudmFsKCk7XHJcbiAgICB2YXIgcGF0aE5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICB2YXIgcXVlcnlQYXJhbXMgPSByZXBsYWNlUXVlcnlQYXJhbSgncGFnZVNpemUnLCBwYWdlU2l6ZSwgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHBhdGhOYW1lICsgcXVlcnlQYXJhbXMpO1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaG93cyBvciBoaWRlcyBsb2FkIHByZXZpZXdcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGUgRXZlbnQgb2JqZWN0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBMb2FkIElEXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2xsYXBzZUxvYWRQcmV2aWV3KGUsIGlkKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIHRkID0gJCgnI2xvYWQtcHJldmlldy0nICsgaWQpO1xyXG4gICAgdmFyIGRpdiA9IHRkLmZpbmQoJy5jb250ZW50Jyk7XHJcbiAgICB2YXIgdHIgPSB0ZC5wYXJlbnQoKTtcclxuXHJcbiAgICBpZiAoZGl2LnRleHQoKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAkLnBvc3QoYWN0aW9uUHJldmlld0xvYWRJbmZvLCB7aWQ6IGlkfSwgZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgZGl2Lmh0bWwoY29udGVudCk7XHJcbiAgICAgICAgICAgIHRyLmhhc0NsYXNzKCdoaWRkZW4nKSA/IHRyLnJlbW92ZUNsYXNzKCdoaWRkZW4nKSA6IHRyLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHIuaGFzQ2xhc3MoJ2hpZGRlbicpID8gdHIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpIDogdHIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogU2hvd3Mgb3IgaGlkZXMgZXhwaXJlZCBsb2FkIHByZXZpZXdcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGUgRXZlbnQgb2JqZWN0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBMb2FkIElEXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2xsYXBzZUV4cGlyZWRMb2FkUHJldmlldyhlLCBpZCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGNyZWRpdHMgPSAkKCcjY3JlZGl0cy1hbW91bnQnKTtcclxuICAgIHZhciB0ZCA9ICQoJyNsb2FkLXByZXZpZXctJyArIGlkKTtcclxuICAgIHZhciBkaXYgPSB0ZC5maW5kKCcuY29udGVudCcpO1xyXG4gICAgdmFyIHRyID0gdGQucGFyZW50KCk7XHJcblxyXG4gICAgaWYgKGRpdi50ZXh0KCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgJC5wb3N0KGFjdGlvblByZXZpZXdFeHBpcmVkTG9hZEluZm8sIHtpZDogaWR9LCBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgICAgICBkaXYuaHRtbChqc29uLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICBpZiAoY3JlZGl0cy5sZW5ndGggJiYganNvblsnY3JlZGl0cyddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNyZWRpdHMudGV4dChqc29uWydjcmVkaXRzJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChqc29uWydzdWJzY3JpcHRpb25fZW5kX2RhdGUnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuc3Vic2NyaXB0aW9uLWVuZC10aW1lJykudGV4dChqc29uWydzdWJzY3JpcHRpb25fZW5kX2RhdGUnXSk7XHJcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcjc3Vic2NyaXB0aW9uX2VuZF9kYXRlJykudGV4dChqc29uWydzdWJzY3JpcHRpb25fZW5kX2RhdGUnXS5zdWJzdHIoMCwgMTApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoanNvblsnc3Vic2NyaXB0aW9uX2NyZWRpdHMnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuc3Vic2NyaXB0aW9uLWNyZWRpdHMnKS5odG1sKGpzb25bJ3N1YnNjcmlwdGlvbl9jcmVkaXRzJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyLmhhc0NsYXNzKCdoaWRkZW4nKSA/IHRyLnJlbW92ZUNsYXNzKCdoaWRkZW4nKSA6IHRyLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHIuaGFzQ2xhc3MoJ2hpZGRlbicpID8gdHIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpIDogdHIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogU2hvd3MgbG9hZCBsaW5rXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBlIEV2ZW50IG9iamVjdFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaWQgTG9hZCBJRFxyXG4gKi9cclxuZnVuY3Rpb24gc2hvd0xvYWRMaW5rKGUsIGlkKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJC5wamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBhY3Rpb25QcmV2aWV3TG9hZExpbmssXHJcbiAgICAgICAgZGF0YToge2lkOiBpZH0sXHJcbiAgICAgICAgY29udGFpbmVyOiAnI2xvYWQtbGluay1wcmV2aWV3LXBqYXgnLFxyXG4gICAgICAgIHB1c2g6IGZhbHNlLFxyXG4gICAgICAgIHJlcGxhY2U6IGZhbHNlLFxyXG4gICAgICAgIHNjcm9sbFRvOiBmYWxzZVxyXG4gICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnI2xvYWQtbGluay1wcmV2aWV3LW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29waWVzIGxvYWQgbGluayB0byBjbGlwYm9hcmRcclxuICovXHJcbmZ1bmN0aW9uIGNvcHlMb2FkTGlua1RvQ2xpcGJvYXJkKCkge1xyXG4gICAgJCgnI2xvYWQtbGluay1maWVsZCcpLnNlbGVjdCgpO1xyXG4gICAgaWYgKGRvY3VtZW50LmV4ZWNDb21tYW5kKCdDb3B5JykpIHtcclxuICAgICAgICAkKFwiI2xvYWQtbGluay1zdWNjZXNzLWFsZXJ0XCIpLmZhZGVJbignc2xvdycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKFwiI2xvYWQtbGluay1zdWNjZXNzLWFsZXJ0XCIpLmZhZGVPdXQoJ3Nsb3cnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCA1MDAwKTsgLy8gNSBzZWNvbmRzXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gZGF0YVxyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyTWFwQWpheChkYXRhKSB7XHJcbiAgICAkLnBqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IGFjdGlvblJlbmRlck1hcCArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gsXHJcbiAgICAgICAgY29udGFpbmVyOiAnI0wtVC01JyxcclxuICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgcHVzaDogZmFsc2UsXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYXBSZW5kZXJlZCA9IHRydWU7XHJcbiAgICAgICAgbG9hZFNjcmlwdCgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZpbHRlcnNBamF4KCkge1xyXG4gICAgJC5wamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBhY3Rpb25SZW5kZXJGaWx0ZXJzICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCxcclxuICAgICAgICBjb250YWluZXI6ICcjZmlsdGVyJyxcclxuICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgcHVzaDogZmFsc2UsXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmaWx0ZXJzUmVuZGVyZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxvYWRDb250YWN0TWFwQWpheChlLCBjb250YWluZXIpXHJcbntcclxuICAgIHZhciBsb2FkSUQgPSAkKGUpLmRhdGEoJ2xvYWQnKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBhY3Rpb25SZW5kZXJDb250YWN0TWFwLFxyXG4gICAgICAgIGRhdGE6IHtsb2FkOiBsb2FkSUR9LFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5odG1sKGRhdGEpO1xyXG4gICAgICAgICAgICAkKGUpLmRhdGEoJ3JlbmRlcmVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoZSkuZGF0YSgnbWFwLW9wZW4nLCB0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiQoXCIuaGlkZV9jdXJyZW50X3Jvd1wiKS5jbGljayhmdW5jdGlvbigpeyQodGhpcykucGFyZW50KCkucGFyZW50KCkuaGlkZSgpO30pO1xyXG5mdW5jdGlvbiBzZW5kX21haWxfdXNlcmxvZyhlbWFpbCl7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICB1cmw6YWN0aW9uU2VuZE1haWxVc2VyTG9nLFxyXG4gICAgICAgIGRhdGE6e2VtYWlsOmVtYWlsfSxcclxuICAgICAgICBjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKGRhdGE9PTEpe1xyXG4gICAgICAgICAgICAgICAgJChcIiNhbGVydC1zZW50LW1haWxcIikucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpLmZhZGVJbigpLmFuaW1hdGUoe29wYWNpdHk6IDEuMH0sIDQwMDApLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nISBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VTZWFyY2hGaWx0ZXJJY29uKGUsbil7XHJcbiAgICBpZihuLnByZXZlbnREZWZhdWx0KCksbWFwT3BlbilcclxuICAgICAgICB2YXIgYT0nPGkgY2xhc3M9XCJmYSBmYS1wbHVzLWNpcmNsZSBidG4taWNvbiBtYXAtbGlua1wiPjwvaT4gPHNwYW4gY2xhc3M9XCJidG4tdGV4dCBtYXAtbGlua1wiPicrVEVYVF9TSE9XX0ZJTFRFUlMrXCI8L3NwYW4+XCI7XHJcbiAgICBlbHNlIFxyXG4gICAgICAgIHZhciBhPSc8aSBjbGFzcz1cImZhIGZhLW1pbnVzLWNpcmNsZSBtYXJnaW4tcmlnaHQtNSBidG4taWNvblwiPjwvaT48c3BhbiBjbGFzcz1cImJ0bi10ZXh0IGNvbG9yLWJsYWNrXCI+JytURVhUX0hJREVfRklMVEVSUytcIjwvc3Bhbj5cIjtcclxuICAgICQoZSkuc2libGluZ3MoKS5lYWNoKGZ1bmN0aW9uKGUsbil7bi5yZW1vdmUoKX0pLFxyXG4gICAgJChlKS5wYXJlbnQoKS5hcHBlbmQoYSksbWFwT3Blbj0hbWFwT3BlblxyXG59XHJcbiQoXCJbZGF0YS10b2dnbGU9cG9wb3Zlcl1cIikucG9wb3Zlcih7XHJcbiAgICBodG1sOiB0cnVlLGNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAkKHRoaXMpLm5leHQoKS5odG1sKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCdib2R5JykucG9wb3Zlcih7c2VsZWN0b3I6ICdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJyx0cmlnZ2VyOiAnaG92ZXInLGNvbnRhaW5lcjonYm9keScsYW5pbWF0aW9uOmZhbHNlfSkub24oJ2hpZGUuYnMucG9wb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJChcIi5wb3BvdmVyOmhvdmVyXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ21vdXNlbGVhdmUnLCAnLnBvcG92ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5wb3BvdmVyJykucG9wb3ZlcignaGlkZScpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5mdW5jdGlvbiBjaGFuZ2VfZW1haWxfYWRkcmVzcyhtb2RhbF9pZCl7XHJcbiAgICB2YXIgdXNlcl9pZCA9ICQoXCJpbnB1dC5sb2FkX3VzZXJfaWRcIikudmFsKCk7XHJcbiAgICB2YXIgZW1haWwgPSAkKFwiaW5wdXQubG9hZC11c2VyLWVtYWlsLXR4dC1ib3hcIikudmFsKCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6J1BPU1QnLFxyXG4gICAgICAgIHVybDphY3Rpb25DaGFuZ2VFbWFpbEFkZHJlc3MsXHJcbiAgICAgICAgZGF0YTp7ZW1haWw6ZW1haWwsdXNlcl9pZDp1c2VyX2lkfSxcclxuICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAkKFwiI1wiK21vZGFsX2lkKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIGlmKGRhdGE9PTEpe1xyXG4gICAgICAgICAgICAgICAgJChcIiNlbWFpbC11cGRhdGVkXCIpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5mYWRlSW4oKS5hbmltYXRlKHtvcGFjaXR5OiAxLjB9LCA0MDAwKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAkKFwiW2RhdGEtdGFyZ2V0PSNcIittb2RhbF9pZCtcIl1cIikuaHRtbChlbWFpbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZyEgUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gb3BlbkVtYWlsTW9kYWwoZW1haWwsIHVzZXJfaWQpIHtcclxuICAgICQoXCIjY2hhbmdlLWVtYWlsLWFkZHJlc3MtbW9kYWwgLmxvYWRfdXNlcl9pZFwiKS52YWwodXNlcl9pZCk7XHJcbiAgICAkKFwiI2NoYW5nZS1lbWFpbC1hZGRyZXNzLW1vZGFsIC5sb2FkLXVzZXItZW1haWwtdHh0LWJveFwiKS52YWwoZW1haWwpO1xyXG4gICAgJChcIiNjaGFuZ2UtZW1haWwtYWRkcmVzcy1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbn0iXX0=
