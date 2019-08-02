"use strict";function getDocumentType(t){return t.closest(".document-pjax").data("document-type")}function getCompanyId(t){return t.closest(".document-pjax").data("company-id")}function getPjaxContainerId(t){return t.closest(".document-pjax").attr("id")}function addDocument(){$(".document-file").change(function(t){var e=getDocumentType($(this)),n=$(this).attr("name");documents[e]={file:t.target.files,name:n}})}function getUploadAction(t,e,n){var o=$("#"+e+'[data-document-type="'+t+'"] .document-date').val(),c=$("#"+e+'[data-document-type="'+t+'"] .document-form').attr("action");return o.length>0&&(c+="/"+o),c+="/"+n,c+="/editCompanyDocuments"}function getDocument(t){var e=new FormData;return $.each(documents[t].file,function(n,o){e.append(documents[t].name,o)}),e}function uploadDocument(t,e,n){$.pjax({type:"POST",url:getUploadAction(t,e,n),data:getDocument(t),container:"#"+e,push:!1,scrollTo:!1,cache:!1,processData:!1,contentType:!1})}function submitForm(){$(".document-submit").unbind("click").click(function(){var t=getDocumentType($(this)),e=getCompanyId($(this));uploadDocument(t,getPjaxContainerId($(this)),e)})}function removeDocument(t,e){$.pjax({type:"POST",url:t,container:"#"+e,push:!1,scrollTo:!1})}function deleteDocument(){$(".document-remove").click(function(t){t.preventDefault(),removeDocument($(this).attr("href"),getPjaxContainerId($(this)))})}function showDocumentForm(){$(".document-update").click(function(){var t=getDocumentType($(this)),e=getPjaxContainerId($(this));$("#"+e+'[data-document-type="'+t+'"] .document-form-container').removeClass("hidden")})}function hideDocumentForm(){$(".document-form-close").click(function(){var t=getDocumentType($(this)),e=getPjaxContainerId($(this));$("#"+e+'[data-document-type="'+t+'"] .document-form-container').addClass("hidden")})}var documents={};$(document).on("ready pjax:end",function(){addDocument(),submitForm(),deleteDocument(),showDocumentForm(),hideDocumentForm()}),$(document).on("pjax:success","#document-cmr, #document-eu, #document-im",function(){$.pjax.reload({container:"#document-toastr",timeout:2e3})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9lZGl0Q29tcGFueURvY3VtZW50cy5qcyJdLCJuYW1lcyI6WyJnZXREb2N1bWVudFR5cGUiLCJlbGVtZW50IiwiY2xvc2VzdCIsImRhdGEiLCJnZXRDb21wYW55SWQiLCJnZXRQamF4Q29udGFpbmVySWQiLCJhdHRyIiwiYWRkRG9jdW1lbnQiLCIkIiwiY2hhbmdlIiwiZXZlbnQiLCJ0eXBlIiwidGhpcyIsIm5hbWUiLCJkb2N1bWVudHMiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJnZXRVcGxvYWRBY3Rpb24iLCJjb250YWluZXIiLCJjb21wYW55SWQiLCJkYXRlIiwidmFsIiwiYWN0aW9uIiwibGVuZ3RoIiwiZ2V0RG9jdW1lbnQiLCJGb3JtRGF0YSIsImVhY2giLCJrZXkiLCJ2YWx1ZSIsImFwcGVuZCIsInVwbG9hZERvY3VtZW50Iiwib3duZXJJZCIsInBqYXgiLCJ1cmwiLCJwdXNoIiwic2Nyb2xsVG8iLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdWJtaXRGb3JtIiwidW5iaW5kIiwiY2xpY2siLCJpZCIsInJlbW92ZURvY3VtZW50IiwiZGVsZXRlRG9jdW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNob3dEb2N1bWVudEZvcm0iLCJyZW1vdmVDbGFzcyIsImhpZGVEb2N1bWVudEZvcm0iLCJhZGRDbGFzcyIsImRvY3VtZW50Iiwib24iLCJyZWxvYWQiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQVdBLFNBQVNBLGlCQUFnQkMsR0FDckIsTUFBT0EsR0FBUUMsUUFBUSxrQkFBa0JDLEtBQUssaUJBU2xELFFBQVNDLGNBQWFILEdBQ2xCLE1BQU9BLEdBQVFDLFFBQVEsa0JBQWtCQyxLQUFLLGNBU2xELFFBQVNFLG9CQUFtQkosR0FDeEIsTUFBT0EsR0FBUUMsUUFBUSxrQkFBa0JJLEtBQUssTUFNbEQsUUFBU0MsZUFDTEMsRUFBRSxrQkFBa0JDLE9BQU8sU0FBVUMsR0FFakMsR0FBSUMsR0FBT1gsZ0JBQWdCUSxFQUFFSSxPQUV6QkMsRUFBT0wsRUFBRUksTUFBTU4sS0FBSyxPQUN4QlEsV0FBVUgsSUFDTkksS0FBTUwsRUFBTU0sT0FBT0MsTUFDbkJKLEtBQU1BLEtBWWxCLFFBQVNLLGlCQUFnQlAsRUFBTVEsRUFBV0MsR0FFdEMsR0FBSUMsR0FBT2IsRUFBRSxJQUFNVyxFQUFZLHdCQUEwQlIsRUFBTyxxQkFBcUJXLE1BSWpGQyxFQUFTZixFQUFFLElBQU1XLEVBQVksd0JBQTBCUixFQUFPLHFCQUFxQkwsS0FBSyxTQU01RixPQUxJZSxHQUFLRyxPQUFTLElBQ2RELEdBQVUsSUFBTUYsR0FFcEJFLEdBQVUsSUFBTUgsRUFDaEJHLEdBQVUsd0JBVWQsUUFBU0UsYUFBWWQsR0FFakIsR0FBSVIsR0FBTyxHQUFJdUIsU0FJZixPQUhBbEIsR0FBRW1CLEtBQUtiLFVBQVVILEdBQU1JLEtBQU0sU0FBVWEsRUFBS0MsR0FDeEMxQixFQUFLMkIsT0FBT2hCLFVBQVVILEdBQU1FLEtBQU1nQixLQUUvQjFCLEVBU1gsUUFBUzRCLGdCQUFlcEIsRUFBTVEsRUFBV2EsR0FDckN4QixFQUFFeUIsTUFDRXRCLEtBQU0sT0FDTnVCLElBQUtoQixnQkFBZ0JQLEVBQU1RLEVBQVdhLEdBQ3RDN0IsS0FBTXNCLFlBQVlkLEdBQ2xCUSxVQUFXLElBQU1BLEVBQ2pCZ0IsTUFBTSxFQUNOQyxVQUFVLEVBQ1ZDLE9BQU8sRUFDUEMsYUFBYSxFQUNiQyxhQUFhLElBT3JCLFFBQVNDLGNBQ0xoQyxFQUFFLG9CQUFvQmlDLE9BQU8sU0FBU0MsTUFBTSxXQUV4QyxHQUFJL0IsR0FBT1gsZ0JBQWdCUSxFQUFFSSxPQUV6QitCLEVBQUt2QyxhQUFhSSxFQUFFSSxNQUd4Qm1CLGdCQUFlcEIsRUFEQ04sbUJBQW1CRyxFQUFFSSxPQUNMK0IsS0FVeEMsUUFBU0MsZ0JBQWVWLEVBQUtmLEdBQ3pCWCxFQUFFeUIsTUFDRXRCLEtBQU0sT0FDTnVCLElBQUtBLEVBQ0xmLFVBQVcsSUFBTUEsRUFDakJnQixNQUFNLEVBQ05DLFVBQVUsSUFPbEIsUUFBU1Msa0JBQ0xyQyxFQUFFLG9CQUFvQmtDLE1BQU0sU0FBVWhDLEdBQ2xDQSxFQUFNb0MsaUJBS05GLGVBSFVwQyxFQUFFSSxNQUFNTixLQUFLLFFBRVBELG1CQUFtQkcsRUFBRUksVUFRN0MsUUFBU21DLG9CQUNMdkMsRUFBRSxvQkFBb0JrQyxNQUFNLFdBRXhCLEdBQUkvQixHQUFPWCxnQkFBZ0JRLEVBQUVJLE9BRXpCTyxFQUFZZCxtQkFBbUJHLEVBQUVJLE1BQ3JDSixHQUFFLElBQU1XLEVBQVksd0JBQTBCUixFQUFPLCtCQUErQnFDLFlBQVksWUFPeEcsUUFBU0Msb0JBQ0x6QyxFQUFFLHdCQUF3QmtDLE1BQU0sV0FFNUIsR0FBSS9CLEdBQU9YLGdCQUFnQlEsRUFBRUksT0FFekJPLEVBQVlkLG1CQUFtQkcsRUFBRUksTUFDckNKLEdBQUUsSUFBTVcsRUFBWSx3QkFBMEJSLEVBQU8sK0JBQStCdUMsU0FBUyxZQTVLckcsR0FBSXBDLGFBbUxKTixHQUFFMkMsVUFBVUMsR0FBRyxpQkFBa0IsV0FHN0I3QyxjQUdBaUMsYUFHQUssaUJBR0FFLG1CQUdBRSxxQkFNSnpDLEVBQUUyQyxVQUFVQyxHQUFHLGVBQWdCLDRDQUE2QyxXQUN4RTVDLEVBQUV5QixLQUFLb0IsUUFDSGxDLFVBQVcsbUJBQ1htQyxRQUFTIiwiZmlsZSI6ImNsaWVudC9lZGl0Q29tcGFueURvY3VtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbWVtYmVyIHtvYmplY3R9IENvbnRhaW5lciBmb3IgZG9jdW1lbnRzICovXHJcbnZhciBkb2N1bWVudHMgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGRvY3VtZW50IHR5cGVcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgQ3VycmVudCBkb2N1bWVudCBlbGVtZW50XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRUeXBlKGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJy5kb2N1bWVudC1wamF4JykuZGF0YSgnZG9jdW1lbnQtdHlwZScpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBjb21wYW55IGlkXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50IEN1cnJlbnQgZG9jdW1lbnQgZWxlbWVudFxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIGdldENvbXBhbnlJZChlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCcuZG9jdW1lbnQtcGpheCcpLmRhdGEoJ2NvbXBhbnktaWQnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgZG9jdW1lbnQgUEpBWCBjb250YWluZXIgSURcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgQ3VycmVudCBkb2N1bWVudCBlbGVtZW50XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UGpheENvbnRhaW5lcklkKGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJy5kb2N1bWVudC1wamF4JykuYXR0cignaWQnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgc2VsZWN0ZWQgZG9jdW1lbnQgdG8gZG9jdW1lbnQgY29udGFpbmVyXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGREb2N1bWVudCgpIHtcclxuICAgICQoJy5kb2N1bWVudC1maWxlJykuY2hhbmdlKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8qKiBAbWVtYmVyIHtzdHJpbmd9IERvY3VtZW50IHR5cGUgKi9cclxuICAgICAgICB2YXIgdHlwZSA9IGdldERvY3VtZW50VHlwZSgkKHRoaXMpKTtcclxuICAgICAgICAvKiogQG1lbWJlciB7c3RyaW5nfSBEb2N1bWVudCB1cGxvYWQgaW5wdXQgbmFtZSAqL1xyXG4gICAgICAgIHZhciBuYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgZG9jdW1lbnRzW3R5cGVdID0ge1xyXG4gICAgICAgICAgICBmaWxlOiBldmVudC50YXJnZXQuZmlsZXMsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWVcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHVwbG9hZCBkb2N1bWVudCBmb3JtIGFjdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBEb2N1bWVudCB0eXBlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250YWluZXIgUEpBWCBjb250YWluZXIgSURcclxuICogQHJldHVybnMgeyp8alF1ZXJ5fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VXBsb2FkQWN0aW9uKHR5cGUsIGNvbnRhaW5lciwgY29tcGFueUlkKSB7XHJcbiAgICAvKiogQG1lbWJlciB7c3RyaW5nfSBEb2N1bWVudCBkYXRlIG9mIGV4cGlyeSAqL1xyXG4gICAgdmFyIGRhdGUgPSAkKCcjJyArIGNvbnRhaW5lciArICdbZGF0YS1kb2N1bWVudC10eXBlPVwiJyArIHR5cGUgKyAnXCJdIC5kb2N1bWVudC1kYXRlJykudmFsKCk7XHJcbiAgICAvKiogQG1lbWJlciB7c3RyaW5nfSBzZWxlY3RlZCB0YWIgKi9cclxuICAgIHZhciBzZWxlY3RlZFRhYiA9ICdlZGl0Q29tcGFueURvY3VtZW50cyc7XHJcbiAgICAvKiogQG1lbWJlciB7c3RyaW5nfSBEb2N1bWVudCB1cGxvYWQgZm9ybSBhY3Rpb24gKi9cclxuICAgIHZhciBhY3Rpb24gPSAkKCcjJyArIGNvbnRhaW5lciArICdbZGF0YS1kb2N1bWVudC10eXBlPVwiJyArIHR5cGUgKyAnXCJdIC5kb2N1bWVudC1mb3JtJykuYXR0cignYWN0aW9uJyk7XHJcbiAgICBpZiAoZGF0ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgYWN0aW9uICs9ICcvJyArIGRhdGU7XHJcbiAgICB9XHJcbiAgICBhY3Rpb24gKz0gJy8nICsgY29tcGFueUlkO1xyXG4gICAgYWN0aW9uICs9ICcvJyArIHNlbGVjdGVkVGFiO1xyXG4gICAgcmV0dXJuIGFjdGlvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgZG9jdW1lbnQgZGF0YSwgcmVhZHkgZm9yIFBPU1RcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgRG9jdW1lbnQgdHlwZVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIGdldERvY3VtZW50KHR5cGUpIHtcclxuICAgIC8qKiBAbWVtYmVyIHtvYmplY3R9IERvY3VtZW50IGRhdGEgY29udGFpbmVyICovXHJcbiAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgJC5lYWNoKGRvY3VtZW50c1t0eXBlXS5maWxlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKGRvY3VtZW50c1t0eXBlXS5uYW1lLCB2YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogVXBsb2FkcyBkb2N1bWVudFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBEb2N1bWVudCB0eXBlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250YWluZXIgUEpBWCBjb250YWluZXIgSURcclxuICovXHJcbmZ1bmN0aW9uIHVwbG9hZERvY3VtZW50KHR5cGUsIGNvbnRhaW5lciwgb3duZXJJZCkge1xyXG4gICAgJC5wamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBnZXRVcGxvYWRBY3Rpb24odHlwZSwgY29udGFpbmVyLCBvd25lcklkKSxcclxuICAgICAgICBkYXRhOiBnZXREb2N1bWVudCh0eXBlKSxcclxuICAgICAgICBjb250YWluZXI6ICcjJyArIGNvbnRhaW5lcixcclxuICAgICAgICBwdXNoOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGxUbzogZmFsc2UsXHJcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSwgLy8gRG9uJ3QgcHJvY2VzcyB0aGUgZmlsZXNcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UgLy8galF1ZXJ5IHdpbGwgdGVsbCB0aGUgc2VydmVyIGl0cyBhIHF1ZXJ5IHN0cmluZyByZXF1ZXN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4ZWN1dGVzIGFub255bW91cyBmdW5jdGlvbiBvbiBkb2N1bWVudCBzdWJtaXQgYnV0dG9uIGNsaWNrXHJcbiAqL1xyXG5mdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xyXG4gICAgJCgnLmRvY3VtZW50LXN1Ym1pdCcpLnVuYmluZCgnY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqIEBtZW1iZXIge3N0cmluZ30gRG9jdW1lbnQgdHlwZSAqL1xyXG4gICAgICAgIHZhciB0eXBlID0gZ2V0RG9jdW1lbnRUeXBlKCQodGhpcykpO1xyXG4gICAgICAgIC8qKiBAbWVtYmVyIHtpbnRlZ2VyfSBjb21wYW55IGlkICovXHJcbiAgICAgICAgdmFyIGlkID0gZ2V0Q29tcGFueUlkKCQodGhpcykpO1xyXG4gICAgICAgIC8qKiBAbWVtYmVyIHtzdHJpbmd9IFBKQVggY29udGFpbmVyIElEICovXHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldFBqYXhDb250YWluZXJJZCgkKHRoaXMpKTtcclxuICAgICAgICB1cGxvYWREb2N1bWVudCh0eXBlLCBjb250YWluZXIsIGlkKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBkb2N1bWVudFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCB0byBkb2N1bWVudCByZW1vdmUgYWN0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250YWluZXIgUEpBWCBjb250YWluZXIgSURcclxuICovXHJcbmZ1bmN0aW9uIHJlbW92ZURvY3VtZW50KHVybCwgY29udGFpbmVyKSB7XHJcbiAgICAkLnBqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBjb250YWluZXI6ICcjJyArIGNvbnRhaW5lcixcclxuICAgICAgICBwdXNoOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGxUbzogZmFsc2VcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRXhlY3V0ZXMgYW5vbnltb3VzIGZ1bmN0aW9uIG9uIGRvY3VtZW50IHJlbW92ZSBidXR0b24gY2xpY2tcclxuICovXHJcbmZ1bmN0aW9uIGRlbGV0ZURvY3VtZW50KCkge1xyXG4gICAgJCgnLmRvY3VtZW50LXJlbW92ZScpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLyoqIEBtZW1iZXIge3N0cmluZ30gVVJMIHRvIGRvY3VtZW50IHJlbW92ZSBhY3Rpb24gKi9cclxuICAgICAgICB2YXIgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgLyoqIEBtZW1iZXIge3N0cmluZ30gUEpBWCBjb250YWluZXIgSUQgKi9cclxuICAgICAgICB2YXIgY29udGFpbmVyID0gZ2V0UGpheENvbnRhaW5lcklkKCQodGhpcykpO1xyXG4gICAgICAgIHJlbW92ZURvY3VtZW50KHVybCwgY29udGFpbmVyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRXhlY3V0ZXMgYW5vbnltb3VzIGZ1bmN0aW9uIG9uIGRvY3VtZW50IHVwZGF0ZSBidXR0b24gY2xpY2tcclxuICovXHJcbmZ1bmN0aW9uIHNob3dEb2N1bWVudEZvcm0oKSB7XHJcbiAgICAkKCcuZG9jdW1lbnQtdXBkYXRlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKiBAbWVtYmVyIHtzdHJpbmd9IERvY3VtZW50IHR5cGUgKi9cclxuICAgICAgICB2YXIgdHlwZSA9IGdldERvY3VtZW50VHlwZSgkKHRoaXMpKTtcclxuICAgICAgICAvKiogQG1lbWJlciB7c3RyaW5nfSBQSkFYIGNvbnRhaW5lciBJRCAqL1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBnZXRQamF4Q29udGFpbmVySWQoJCh0aGlzKSk7XHJcbiAgICAgICAgJCgnIycgKyBjb250YWluZXIgKyAnW2RhdGEtZG9jdW1lbnQtdHlwZT1cIicgKyB0eXBlICsgJ1wiXSAuZG9jdW1lbnQtZm9ybS1jb250YWluZXInKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4ZWN1dGVzIGFub255bW91cyBmdW5jdGlvbiBvbiBkb2N1bWVudCBmb3JtIGNsb2NrIGJ1dHRvbiBjbGlja1xyXG4gKi9cclxuZnVuY3Rpb24gaGlkZURvY3VtZW50Rm9ybSgpIHtcclxuICAgICQoJy5kb2N1bWVudC1mb3JtLWNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKiBAbWVtYmVyIHtzdHJpbmd9IERvY3VtZW50IHR5cGUgKi9cclxuICAgICAgICB2YXIgdHlwZSA9IGdldERvY3VtZW50VHlwZSgkKHRoaXMpKTtcclxuICAgICAgICAvKiogQG1lbWJlciB7c3RyaW5nfSBQSkFYIGNvbnRhaW5lciBJRCAqL1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBnZXRQamF4Q29udGFpbmVySWQoJCh0aGlzKSk7XHJcbiAgICAgICAgJCgnIycgKyBjb250YWluZXIgKyAnW2RhdGEtZG9jdW1lbnQtdHlwZT1cIicgKyB0eXBlICsgJ1wiXSAuZG9jdW1lbnQtZm9ybS1jb250YWluZXInKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4ZWN1dGVzIGFub255bW91cyBmdW5jdGlvbiB3aGVuIGRvY3VtZW50cyBmdWxseSBsb2Fkc1xyXG4gKi9cclxuJChkb2N1bWVudCkub24oJ3JlYWR5IHBqYXg6ZW5kJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8qKiBBZGRzIHNlbGVjdGVkIGRvY3VtZW50IHRvIGRvY3VtZW50IGNvbnRhaW5lciAqL1xyXG4gICAgYWRkRG9jdW1lbnQoKTtcclxuXHJcbiAgICAvKiogRXhlY3V0ZXMgYW5vbnltb3VzIGZ1bmN0aW9uIG9uIGRvY3VtZW50IHN1Ym1pdCBidXR0b24gY2xpY2sgKi9cclxuICAgIHN1Ym1pdEZvcm0oKTtcclxuXHJcbiAgICAvKiogRXhlY3V0ZXMgYW5vbnltb3VzIGZ1bmN0aW9uIG9uIGRvY3VtZW50IHJlbW92ZSBidXR0b24gY2xpY2sgKi9cclxuICAgIGRlbGV0ZURvY3VtZW50KCk7XHJcblxyXG4gICAgLyoqIEV4ZWN1dGVzIGFub255bW91cyBmdW5jdGlvbiBvbiBkb2N1bWVudCB1cGRhdGUgYnV0dG9uIGNsaWNrICovXHJcbiAgICBzaG93RG9jdW1lbnRGb3JtKCk7XHJcblxyXG4gICAgLyoqIEV4ZWN1dGVzIGFub255bW91cyBmdW5jdGlvbiBvbiBkb2N1bWVudCBmb3JtIGNsb2NrIGJ1dHRvbiBjbGljayAqL1xyXG4gICAgaGlkZURvY3VtZW50Rm9ybSgpO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBFeGVjdXRlcyBhbm9ueW1vdXMgZnVuY3Rpb24gb24gc3VjY2Vzc2Z1bCBzcGVjaWZpYyBQSkFYIGNvbnRhaW5lcnMgdXBkYXRlXHJcbiAqL1xyXG4kKGRvY3VtZW50KS5vbigncGpheDpzdWNjZXNzJywgJyNkb2N1bWVudC1jbXIsICNkb2N1bWVudC1ldSwgI2RvY3VtZW50LWltJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJC5wamF4LnJlbG9hZCh7XHJcbiAgICAgICAgY29udGFpbmVyOiAnI2RvY3VtZW50LXRvYXN0cicsXHJcbiAgICAgICAgdGltZW91dDogMmUzXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iXX0=