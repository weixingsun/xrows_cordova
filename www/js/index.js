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
        /*
		var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
		*/
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
	selectCount(csv){
		$.get(csv,function(data){
			var sql = 'SELECT people,age,sex,region,word,count(1) '
			         +'from csv(?,{headers:true,fromString:true}) '
					 +'group by people,age,sex,region,word'
			alasql(sql,[data],function(result){
				alert('alasql.count(1) = '+JSON.stringify(result))
			})
		})
	},
};

app.initialize();