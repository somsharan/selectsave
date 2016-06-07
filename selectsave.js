
(function( $ ) { 
    $.fn.addNext = function() {
        var currentSelector = this;
        var selectedArrayList = [];
        function removeA(arr) {
            var what, a = arguments, L = a.length, ax;
            while (L > 1 && arr.length) {
                what = a[--L];
                while ((ax= arr.indexOf(what)) !== -1) {
                    arr.splice(ax, 1);
                }
            }
            return arr;
        }
        $(document).on('change', currentSelector.selector, function(e){
            if(selectedArrayList.indexOf($(this).val()) <= -1 && $(this).val() != 0) {
                selectedArrayList.push($(this).val());                
                $(this).after('<span class="userCloud" style="background:#efefef;border-radius:5px;display: inline-block;padding: 5px;margin: 5px;">'+$(this).val()+' <span class="delUserCloud" style="font-size:15px;" aval ="'+$(this).val()+'" >&times;</span></span>');
                  $('.delUserCloud').on('click',function(el,e){ 
                      $(this).parent().remove();
                     removeA(selectedArrayList, $(this).attr('aval'))
                     $('#'+id+'addNext').val(selectedArrayList);   
                  });
                var id = $(this).attr('id');
                //console.log(id)
                $($('#'+id+' option')[0]).attr('selected',true);
               // $('#'+id+'addNext').val = selectedArrayList;
                var inputFieldExists = $('#'+id+'addNext')
                if(inputFieldExists.length <= 0) {
                    if(typeof angular !== 'undefined'){
                         $(this).before('<input type="hidden" id="'+id+'addNext" ng-model="'+id+'addNext" value="'+selectedArrayList+'">');
                    } else {
                        $(this).before('<input type="hidden" id="'+id+'addNext" value="'+selectedArrayList+'">');
                    }
                } else {
                    $('#'+id+'addNext').val(selectedArrayList);
                }
               // console.log(inputFieldExists.length,'dataexistsdataexists',typeof angular == undefined, typeof angular)
                
            } else {
                 var id = $(this).attr('id');
                $($('#'+id+' option')[0]).attr('selected',true);
            } 
            
            return selectedArrayList;            
        });
        
    };
    
}( jQuery ));