

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
console.log(rk_UrlUserID);
console.log(url_UsersId);

$.getJSON(url_UsersId, datos, function(response){
    console.log(response.id);
    console.log(response.name);
    console.log(response.username);
    console.log(response.email);
    console.log(response.phone);
    // console.log(response.address);
    console.log(response.address.city);
    // console.log(response.address.geo);
    console.log(response.address.geo.lat);
    console.log(response.address.geo.lng);
    console.log(response.address.street);
    console.log(response.address.suite);
    console.log(response.address.zipcode);
    // console.log(response.company);
    console.log(response.company.bs);
    console.log(response.company.catchPhrase);
    console.log(response.company.name);
    console.log(response.website);

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

    
});

$(".btn.btn-default.btn-back").click(function(event) {
	window.location.href = 'index.html';
	//var rk_storage = localStorage.getItem("rk_tableUser");
});


