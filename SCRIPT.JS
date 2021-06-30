var select = $("#dp1");



$.ajax({
    url:"https://dog.ceo/api/breeds/list/all",
    method:"get",
    success:function(data){

        var breeds = data.message;
        for (let breed in breeds){
            
            $("#dp1").append('<option value="' + breed + '">' + breed + '</option>');

        }
        function initate(){

            var selected =select.val();
            if(selected==null){
                alert("please select a breed");
            }
        
            $.ajax({
                url:"https://dog.ceo/api/breed/" + selected + "/list",
                method:"get",
                success: function(data){
        
        
                    var breedop = data.message;
                    console.log(breedop)
        
                     if((breedop.length)>1){
               
                         $("#dp2").css("visibility","visible");
        
                         for(let bp in breedop){
                            $("#dp2").append('<option value="' + breedop[bp] + '">' + breedop[bp] + '</option>');
                         }
                        
                         $('#dp2').change(function(){

                            var select2 =$("#dp2").val();
                            $('#btn').click(function(){

                                $.ajax({

                                    url:"https://dog.ceo/api/breed/" + selected + "/" +select2 + "/images",
                                    method:"get",
                                    success:function(data){
                                        var select3 = data.message;
                                        console.log(select3)
                                        for(let i of select3){
    
                                            $("#lower").append('<img src="' + i + '" alt=" ">')
    
                                        }
                                        
                                        
                                    }
        
                                 })
                                
    

                            })

                         })

                    }else{

                        $('#btn').click(function(){

                            $.ajax({
                                url:"https://dog.ceo/api/breed/"+ selected+"/images",
                                method:"get",
                                success:function(data){
                                    var select3 = data.message;
                                    console.log(select3)
                                    for(let i of select3){
    
                                        $("#lower").append('<img src="' + i + '" alt=" ">')
    
                                    }
                                    
    
                                }
                            })

                        })

                    }
                }
            })
        }
    
        
    $('#dp1').change(initate)

    }

        
});

