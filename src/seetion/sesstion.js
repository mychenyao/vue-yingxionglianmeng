	export const KEY="user";
	export function setItem(value){
		//设置 
		var arr=[value];
		sessionStorage.setItem(KEY,JSON.stringify(arr));
	};
	//获取
	export function getItem(){
		var jsonString=sessionStorage.getItem(KEY);
		return JSON.parse(jsonString);
	}