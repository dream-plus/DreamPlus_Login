var Observable = require('FuseJS/Observable');

function goBack()
{
	router.push("LogIn");
    console.log("goback");
    
     
}


var newID = Observable("");
var newPW = Observable("");
var newName = Observable("");

function Save(){
	// router.push("Test1");
	// console.log("Move to MainPage");
 //    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://ef3f9797.ngrok.io/users/signup',{
	            method: "POST",
	            headers: {
	            	"Content-type": "application/json"
	            },
	            body : JSON.stringify({
	            	'_id' : newID.value,
	                'pw' : newPW.value,
	                'name' : newName.value,
	                'major' : "",
	                'class' : "2"
	              })
	        }).then((res)=>{ return res.json()
	        }).then((res)=>{
	            // console.log( JSON.parse(res._bodyInit).documents[1].address_name )
	            console.log(JSON.stringify(res));
	            console.log(res.success);

	            if( JSON.parse(res.success) == true){
	            	router.push("LoginPage");
	            	console.log("Move to LoginPage");
	            }


	            // JSON.parse(res._bodyInit).documents[1].address_name
	        }).catch((err)=>{
	            console.log(err);
	        });


}





module.exports = {
	newID : newID,
	newPW : newPW,
	newName : newName,
	Save : Save,
	goBack : goBack
};
