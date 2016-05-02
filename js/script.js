$(window).load(function(){
    $('#medio').fadeIn('slow',function(){
    });
    $('').fadeIn('slow',function(){
    });
});

$.ajax
    ({
        type: "POST",
        //the url where you want to sent the userName and password to
        url: "http://your-url.com/secure/authenticate.php",
        dataType: 'json',
        async: false,
        //json object to sent to the authentication url
        data: '{"userName": "' + userName + '", "password" : "' + password + '"}',
        success: function (){
            //do any process for successful authentication here
        }
    });

/*$('.ani').mouseover(function(){
    $('ani').toggle( "highlight" );
});*/
