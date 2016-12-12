var app = {
    // Application Constructor
    initialize() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		this.selectCount=this.selectCount.bind(this);
		this.openFileChooser=this.openFileChooser.bind(this);
		this.toggle=this.toggle.bind(this);
		this.showMenu=this.showMenu.bind(this);
		this.hideMenu=this.hideMenu.bind(this);
		this.menu={
			open:false,
		}
    },

    // 'pause', 'resume', etc.
	onDeviceReady() {
		var opener = document.getElementById("opener")
		opener.addEventListener('click',this.openFileChooser,false);
		this.receivedEvent('deviceready');
		$(".showMenu").click(this.toggle);
		//$("#menu, .pages").live("swipeleft",this.hideMenu);
		//$("#.pages").live("swiperight",this.showMenu);
		$("#menu li a").click(function () {
			var p = $(this).parent();
			p.siblings().removeClass('active');
			p.addClass('active');
		});
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
	showMenu(){
		if (this.menu.open) return;
		$('#menu').show()
		var self=this
		//$.mobile.activePage.animate({marginLeft:200px},300,function(){
			self.menu.open=true
		//})
	},
	hideMenu(){
		if (!this.menu.open) return;
		var self=this
		//$.mobile.activePage.animate({marginLeft:0px},300,function(){
			self.menu.open=false
			$('#menu').hide()
		//})
	},
	toggle(){
		if (!this.menu.open) this.showMenu()
		else this.hideMenu()
		alert('toggle')
		return false
	},
};

app.initialize();
