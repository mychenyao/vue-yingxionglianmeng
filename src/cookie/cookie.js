export function setCookie(user,pass){
	document.cookie="user="+user; 
	document.cookie="pass="+pass; 
}
export function getCookie(){
	var cookie=document.cookie;
	if(cookie==""){
		return null;
	}else{
		var arr = cookie.match(new RegExp("(^| )user=([^;]*)(;|$)"));
		var arr2 = cookie.match(new RegExp("(^| )pass=([^;]*)(;|$)"));
	return [unescape(arr2[2]),unescape(arr[2])];
	}
}