var Observable = require('FuseJS/Observable');

var ID = Observable("");

var getID = Observable("");
var newPW = Observable("");
var newName = Observable("");

// var ID = LoginPage.ID;
var ID = this.Parameter._values[0].ID;
console.log(ID);
// console.log("ID value = " + JSON.stringify(ID));


function Get(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인
 
	fetch(`http://ef3f9797.ngrok.io/users/`+ ID,{method: 'GET', headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(res){
		status=res.status;
		response_ok = res.ok;
	    return res.json();

	}).then(function(res){
		// console.log(JSON.stringify(res));
		console.log(res[0].name);

		getID.value="name : "+ res[0].name ;
		console.log(getID)
		
		// console.log(response);
	}).catch(function(err){
		console.log(err);
	});
}
Get();
console.log("finish get function");





module.exports = {
	getID : getID,
	newPW : newPW,
	newName : newName,
	Get : Get,
	ID : ID
};
