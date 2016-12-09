var app = {
    // Application Constructor
    initialize() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		this.selectCount=this.selectCount.bind(this);
		this.openFileChooser=this.openFileChooser.bind(this);
    },

    // 'pause', 'resume', etc.
	onDeviceReady() {
		var opener1 = document.getElementById("opener");
		opener1.addEventListener('click',this.openFileChooser,false);
		this.receivedEvent('deviceready');
	},
    // Update DOM on a Received Event
    receivedEvent(id) {
        /* var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id); */
    },
	openFileChooser(){
		var self=this
		fileChooser.open( 
		  function(uri){
			  self.selectCount(uri) 
		  },
		  function(err){
			  alert(err)
		  }
		)
	},
	processData(allText) {
		var resJSON_str = "";
		var items = allText.split(',');
		var keys = [items[0],items[1]];
		var items_str = "";
		for(var i = 2; i< items.length;i = i+2){
			items_str += (i==2) ? '{"'+keys[0]+'":'+items[i]+',"'+keys[1]+'":'+items[i+1]+'}' : ',{"'+keys[0]+'":'+items[i]+',"'+keys[1]+'":'+items[i+1]+'}';     
		}
		items_str = items_str.replace("\n","");
		items_str = items_str.replace("\r","");
		var resJSON_str = myJSON_str.substring(0,myJSON_str.length-2)+items_str+myJSON_str.substring(myJSON_str.length-2,myJSON_str.length);
		alert(resJSON_str);
		return resJSON_str
	},
	selectCount(csv){
		alasql('SELECT count(1) from csv("'+csv+'",{headers:true}) ',[],function(data){
			alert(JSON.stringify(data))
		})
		/*var self=this
		$.get(csv,function(data){
			console.clear();
			var arr = self.processData(data);
			alasql('SELECT * FROM ?',[arr],function(data){
				//alert(JSON.stringify(data));
			});
		})*/
	},
};

app.initialize();