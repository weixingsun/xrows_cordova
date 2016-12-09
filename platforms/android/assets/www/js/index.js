var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
	openFile: function(){
		fileChooser.open(function(uri) {
			alert(uri);
		}); 
	}
    // 'pause', 'resume', etc.
	onDeviceReady: function() {
		//alert("PhoneGap is working in index.js onDeviceReady");
		var opener1 = document.getElementById("opener");
		opener1.addEventListener('click',this.openFile,false);
		this.receivedEvent('deviceready');
	},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();