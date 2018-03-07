

var url_Users = 'https://jsonplaceholder.typicode.com/users';

var datos = {};


$.getJSON(url_Users, datos, function(response){
    $.each(response, function(a, b) {
    	//console.log(b)
    	var rk_body_user = '<tr>\n\
			        			<td>'+ b.id +'</td>\n\
			        			<td>'+ b.name +'</td>\n\
			        			<td>'+ b.email +'</td>\n\
			        			<td>\n\
			        				<button type="button" class="btn btn-primary btn-block rk_'+ b.id +'"><span class="glyphicon glyphicon-list-alt"></span></button>\n\
			        			</td>\n\
			        		</tr>';
            $('.rk_body_users').append(rk_body_user);
		    $(".btn.btn-primary.btn-block.rk_" + b.id).click(function(event) {
				console.log(b.id);
				localStorage.setItem('rk_tableUser', b.id);
				window.location.href = 'details.html';
				//var rk_storage = localStorage.getItem("rk_tableUser");
			});
        });   
});
var rk_storage = localStorage.getItem("rk_tableUser");
var rk_UrlUserID = rk_storage;
var url_UsersId = 'https://jsonplaceholder.typicode.com/users/'+ rk_UrlUserID;
// console.log(rk_UrlUserID);
// console.log(url_UsersId);

$.getJSON(url_UsersId, datos, function(response){
    // console.log(response.id);
    // console.log(response.name);
    // console.log(response.username);
    // console.log(response.email);
    // console.log(response.phone);
    // // console.log(response.address);
    // console.log(response.address.city);
    // // console.log(response.address.geo);
    // console.log(response.address.geo.lat);
    // console.log(response.address.geo.lng);
    // console.log(response.address.street);
    // console.log(response.address.suite);
    // console.log(response.address.zipcode);
    // // console.log(response.company);
    // console.log(response.company.bs);
    // console.log(response.company.catchPhrase);
    // console.log(response.company.name);
    // console.log(response.website);

    /*-----**********-----*/
    //$(".rkUser_").append(response.id);
    $(".rkUser_name").html(response.name);
    $(".rkUser_username").html(response.username);
    $(".rkUser_email").html(response.email);
    $(".rkUser_phone").html(response.phone);
    $(".rkUser_AddressCity").html(response.address.city);
    $(".rkUser_GeoLat").html(response.address.geo.lat);
    $(".rkUser_GeoLng").html(response.address.geo.lng);
    $(".rkUser_AddressStreet").html(response.address.street);
    $(".rkUser_AddressSuite").html(response.address.suite);
    $(".rkUser_AddressZipcode").html(response.address.zipcode);
    $(".rkUser_CompanyBs").html(response.company.bs);
    $(".rkUser_CompanyCatchPhrase").html(response.company.catchPhrase);
    $(".rkUser_CompanyName").html(response.company.name);
    $(".rkUser_Website").html(response.website);

    var rk_lat = response.address.geo.lat;
    var rk_lng = response.address.geo.lng;
    
    var rk_SoloDetails = window.location.href.split("/");
    var rk_fileHtml = rk_SoloDetails[8];
    console.log(rk_fileHtml);
    if(rk_fileHtml === "details.html"){
    	console.log("comprobación hecha!!");
    	return Rk_initMap(rk_lat,rk_lng);
    }
    
    
    
});

$(".btn.btn-default.btn-back, .btn-back").click(function(event) {
	window.location.href = 'index.html';
	//var rk_storage = localStorage.getItem("rk_tableUser");
});


var url_PostUserId = "https://jsonplaceholder.typicode.com/posts?userId=" + rk_UrlUserID;
$.getJSON(url_PostUserId, datos, function(response){
   // console.log(response);
   $.each(response, function(index, val) {
   	 	// console.log(val.title);
   	 	// console.log(val.body);
   	 	var Send_post = '<div class="list-group">\n\
                  <a href="#" class="list-group-item active">\n\
                    <h4 class="list-group-item-heading">'+ val.title +'</h4>\n\
                    <p class="list-group-item-text">'+ val.body +'</p>\n\
                  </a>\n\
                </div>';
                $(".rk_postUserID").append(Send_post);
   });

    
});



var rk_createMaps = '<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15692.2304959306!2d-66.82606494999999!3d10.4961238!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sve!4v1520379156794" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';

function Rk_initMap(rkLat,rkLng) {

        var uluru = {lat: parseFloat(rkLat), lng: parseFloat(rkLng)};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        console.log("funciona el mapa")
      }



     $('#rk_ingresar').click(function(event) {
       var usuario = $('#user').val();
       var contraseña = $('#rk_st').val();
       var username = usuario + " "+ contraseña;
       if (usuario === 'tije'  && contraseña === 'travel') {         
            window.location.assign("index.html"); 
            localStorage.setItem("userRk", username);
       }else{
           alert('No está registrado o datos incorrecto, Intente Nuevamente');         
       }      
     });