var data = {} ;
self.onmessage = function (event) {
	console.log('data received is' + event.data)
     data = JSON.parse(event.data);
	 modifyAndSend(data)
   }
function modifyAndSend(d){
d.name = "Gaurav Khurana"   
self.postMessage(JSON.stringify(d)) ;	
}   
