$(document).ready(function() {
    
    
    for (var i = 0; i < 36; i++) {
        
        $(".container").append("<div class='quadrato'></div>");
    };
    
    $('.quadrato').click(function(){
        
        var quadratoAcceso = $(this);
        
        
        if(!$(this).hasClass('giallo') && !$(this).hasClass('verde')) {
            
            
            $.ajax({
                'url': 'https://flynn.boolean.careers/exercises/api/random/int',
                'method' : 'GET',
                'success' : function(data) {
                    var numero = data.response;
                    $(quadratoAcceso).text(data.response);
                    
                    if (numero <=5) {
                        
                        $(quadratoAcceso).addClass('giallo');
                        
                        } else {
                            $(quadratoAcceso).addClass('verde');
                        }
    
                },
                
                'error' : function() {
                    alert('error');
                }
                });
            }
        });
    });
    
        

    
    
    
