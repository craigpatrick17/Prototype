Titanium.UI.setBackgroundColor('#000');

var win1 = Titanium.UI.createWindow({  //Windows
    text: 'VandalAppointments',
    backgroundColor:'#d2b45b'
});
var scheduleWindow = Ti.UI.createWindow({
	text:'MySchedule',
	backgroundColor:'#fff'
});
var makeappointmentWindow = Ti.UI.createWindow({
	text:'Make Appointment',
	backgroundColor:'#fff'
});
var cancelWindow = Ti.UI.createWindow({
	text:'Cancel Appointment',
	backgroundColor:'#fff'
});
var appointmentlistWindow = Ti.UI.createWindow({
	text:'Appointment List',
	backgroundColor:'#fff'
});
var titleView = Ti.UI.createView({		//Titles
	height: '20%',
	width: '100%',
	top:'0%',
	backgroundImage: 'Summer-Sand-Volleyball.jpg'
});
var titleLabel = Ti.UI.createLabel({
	text:'VandalAppointments',
	left: '45%',
	height: Ti.UI.FILL,
	font:{
			fontSize:'75sp',
			fontWeight:'bold',
			fontColor:'#FF0000'
	}									
});
var scheduleTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'20%',
	width: '100%',
});
var scheduleTitleLabel = Ti.UI.createLabel({
	text:'MySchedule',
	textAlign: 'center',
	color: '#d2b45b',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});
var makeappointmentTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'20%',
	width: '100%',
});
var makeappointmentTitleLabel = Ti.UI.createLabel({
	text:'Make Appointment',
	color: '#d2b45b',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});
var cancelTitleView = Ti.UI.createView({
	top: 0,
	height:'20%',
	width: '100%',
});
var cancelTitleLabel = Ti.UI.createLabel({
	text:'Cancel Appointment',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});
var appointmentlistTitleView = Ti.UI.createView({
	top: 0,
	height:'20%',
	width: '100%',
});
var appointmentlistTitleLabel = Ti.UI.createLabel({
	text:'Appointment List',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});
// START CENTER SCREEN
var ContactList = Ti.UI.createView({				//HOME SCREEN
	height:'13%',
	width:'45%',
	left:'35%',
	top: '40%',				
});
var contactInfo = Ti.UI.createLabel({
	text: 'Butch Fealy \nDirector of Intramural Sports \nPhone: (208) 885-8979 \nEmail:bfealy@uidaho.edu',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'25sp'
	}
});
var soccerpic = Ti.UI.createImageView({
	top: 0,
	left: 0,
	height:'17%',
	width:'10%',
	image: '/Images/soccerball.png'
});
var basketballpic = Ti.UI.createImageView({
	top: 0,
	right: 0,
	height:'17%',
	width:'10%',
	image: '/Images/basketball.jpg'
});
var baseballpic = Ti.UI.createImageView({
	bottom: 0,
	left: 0,
	height:'17%',
	width:'10%',
	image: '/Images/baseball.png'
});
var tennispic = Ti.UI.createImageView({
	bottom: 0,
	right: 0,
	height:'17%',
	width:'10%',
	image: '/Images/tennisball.png'
});
var HomeScrnPic = Ti.UI.createView({
	height:'35%',
	width:'80%',
	left:'20%',
	bottom: 0,
	borderRadius: 20,
	backgroundImage:'/Images/IntramuralsSports.jpg'
});
var returnView = Ti.UI.createView({		//ButtonViews
	bottom: '0',
	left: 0,
	height:'10%',
	width:'100%',
	backgroundColor:'black'
});
var scheduleView = Ti.UI.createView({		
	height: '20%',
	width: '20%',
	left: 0,
	top: '20%'
});
var makeappointmentView = Ti.UI.createView({
	height: '20%',
	width: '20%',
	left: 0,
	top: '40%'
});
var cancelView = Ti.UI.createView({
	height: '20%',
	width: '20%',
	left: 0,
	top: '60%'
});
var appointmentlistView = Ti.UI.createView({
	height: '20%',
	width: '20%',
	left: 0,
	top: '80%'
});
var blurbView = Ti.UI.createView({
	top: '22%',
	left: '20%',
	height: '15%',
	width: '80%',
});	
var scheduleWindView = Ti.UI.createView({
	height: '70%',
	width: '100%',
	top: '20%',
	bottom: '5%',
	backgroundImage: '/Images/Bus 353- Scores.JPG',
});	
var scheduleWindView = Ti.UI.createView({
	height: '70%',
	width: '100%',
	top: '20%',
	bottom: '5%',
	backgroundImage: '/Images/Bus 353-Schedule.JPG',
});		

var blurbLabel = Ti.UI.createLabel({		
	textAlign: 'center',
	top: '5%',
	text: 'Intramural Sports are available for the University of Idaho campus community to participate in structured activities at a competitive or recreational level. No matter what your skill level you will have a good time.',
	font:{
		fontSize:'25sp',
		fontWeight:'bold',
	}	
});

var scheduleButton = Ti.UI.createButton({			//Buttons
	title: 'Schedule',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#d2b45b',							
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
var makeappointmentButton = Ti.UI.createButton({
	title:'Make Appointment',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
var cancelButton = Ti.UI.createButton({
	title:'Cancel Appointment',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
var appointmentlistButton = Ti.UI.createButton({
	title:'Appointment List',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
var returnButton = Ti.UI.createButton({
	title:'Return',
	color:'black',
	borderRadius: 10,
	height:Ti.UI.FILL,
	width:'15%',
	height:'100%',
	left: 0,
	bordercolor:'black',
	backgroundColor: '#d2b45b',
	textAlign:'center',
	font:{
		fontSize:'35sp',
		fontWeight:'bold',
	},
	backgroundcolor:'#333333'
});


scheduleButton.addEventListener('click', function(e){			//Event Listeners
	win1.close();
	scheduleWindow.close();
	makeappointmentWindow.close();
	cancelWindow.close();
	appointmentlistWindow.close();
	scheduleWindow.open();
	
});
makeappointmentButton.addEventListener('click', function(e){
	win1.close();
	scheduleWindow.close();
	makeappointmentWindow.close();
	cancelWindow.close();
	appointmentlistWindow.close();
	makeappointmentWindow.open();
});
cancelButton.addEventListener('click', function(e){
	win1.close();
	scheduleWindow.close();
	makeappointmentWindow.close();
	cancelWindow.close();
	appointmentlistWindow.close();
	cancelWindow.open();
});
appointmentlistButton.addEventListener('click', function(e){
	win1.close();
	scheduleWindow.close();
	makeappointmentWindow.close();
	cancelWindow.close();
	appointmentlistWindow.close();
	appointmentlistWindow.open();
});
returnButton.addEventListener('click', function(e){
	win1.open();
});

win1.open();
win1.add(titleView);
titleView.add(titleLabel);
win1.add(scheduleView);
win1.add(makeappointmentView);
win1.add(cancelView);
win1.add(appointmentlistView);
win1.add(blurbView);
win1.add(HomeScrnPic);
win1.add(ContactList);
scheduleWindow.add(returnView);
makeappointmentWindow.add(returnView);
cancelWindow.add(returnView);
appointmentlistWindow.add(returnView);
scheduleWindow.add(scheduleTitleView);
makeappointmentWindow.add(makeappointmentTitleView);
cancelWindow.add(cancelTitleView);
appointmentlistWindow.add(appointmentlistTitleView);
scheduleWindow.add(scheduleWindView);
scheduleWindow.add(scheduleWindView);


blurbView.add(blurbLabel);
scheduleView.add(scheduleButton);
makeappointmentView.add(makeappointmentButton);
cancelView.add(cancelButton);
appointmentlistView.add(appointmentlistButton);
returnView.add(returnButton);
scheduleTitleView.add(scheduleTitleLabel);
makeappointmentTitleView.add(makeappointmentTitleLabel);
cancelTitleView.add(cancelTitleLabel);
appointmentlistTitleView.add(appointmentlistTitleLabel);
ContactList.add(contactInfo);
ContactList.add(soccerpic);
ContactList.add(basketballpic);
ContactList.add(baseballpic);
ContactList.add(tennispic);

