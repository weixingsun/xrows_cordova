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
		/*
		alasql.from.csv = function(filename,opts){
			var self=this
			$.get(filename,function(data){
				alert('from csv ')
				var arr = data.split(/\r?\n/);
				var h = arr.shift().split(',');
				return {rows:aaa,headers:h};
			})
		} */
		console.log('index.js select_count() '+csv)
		alasql('SELECT count(1) from csv("'+csv+'",{headers:true}) ',[],function(data){
			console.log('alasql.select()'+JSON.stringify(data))
		})
	},
};

app.initialize();