Titanium.UI.setBackgroundColor('#fff');
var win1 = Titanium.UI.createWindow({  //Windows
    text: 'Vandal Appointments',
    backgroundColor: 'fff'
});
var scheduleWindow = Ti.UI.createWindow({
	text:'MySchedule',
	fontFamily: 'Museo Slab',
	backgroundColor:'#fff'
});
var makeappointmentWindow = Ti.UI.createWindow({
	text:'Make Appointment',
	fontFamily: 'Museo Slab',
	
});

var studentsearch = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#9f9d9d',
  top: '35%', 
  width: '35%', 
  height: '5%'
});


var studentsearchLabelView = Ti.UI.createView({
	top: '22%',
	left: '20%',
	height: '15%',
	width: '80%',
});
	
var studentsearchLabel = Ti.UI.createLabel({
	textAlign: 'center',
	top: '30%',
	width: '95%',
	text: 'Student Search',
	font:{
		fontSize:'10sp',
		fontWeight:'bold',
		fontFamily: 'Helvetica Neue',
	}	
});

makeappointmentWindow.add(studentsearchLabelView);
makeappointmentWindow.add(studentsearchLabel);




var timesearch = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#9f9d9d',
  top: '50%', 
  width: '35%', 
  height: '5%'
});

var timesearchLabelView = Ti.UI.createView({
	top: '45%',
	left: '20%',
	height: '15%',
	width: '80%',
});

var timesearchLabel = Ti.UI.createLabel({
	textAlign: 'center',
	top: '45%',
	width: '95%',
	text: 'Time Select',
	font:{
		fontSize:'10sp',
		fontWeight:'bold',
		fontFamily: 'Helvetica Neue',
}});
makeappointmentWindow.add(timesearchLabelView);
makeappointmentWindow.add(timesearchLabel);
makeappointmentWindow.add(studentsearch);
makeappointmentWindow.add(timesearch);

var submitButton =Ti.UI.createButton({
	title: 'Submit',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		top: '65%',
		width:'30%',
		height: '5%',
		borderColor: 'black',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
}
});

makeappointmentWindow.add(submitButton);

var tableData = [];
	tableData[0] = 'Time1- Appointment 1: Student 1'; 
	tableData[1] = 'Time2- Appointment 2: Student 2'; 
	tableData[2] = 'Time3- Appointment 3: Student 3'; 
	tableData[3] = 'Time4- Appointment 4: Student 4';
	tableData[4] = 'Time5- Appointment 5: Student 5';
	tableData[5] = 'Time6- Appointment 6: Student 6';
	tableData[6] = 'Time7- Appointment 7: Student 7';
		
//creating an empty array to store the rows in
var rowViewData = [];
//this function is binding the rows together with the background color. Custom Trait of cbeTag to keep track of each entry
function bindRowData (){
for (var i=0; i<tableData.length; i++) {
var rowView = Ti.UI.createTableViewRow({
	title: tableData[i],
		font: 'Helvetica Neue',
		fontSize: '10sp',
	height:45,
	backgroundColor: '#9f9d9d',
	fontColor: 'black',
	fontSize: '10sp',
	cbeTag: i
});
//Pushing the row data into the finished array
rowViewData.push(rowView);
}
return rowViewData;
}
/*Simply put, adds the above data to the table. */
var table1 = Ti.UI.createTableView({
	headerTitle: 'My Appointments',
	font:{
		fontFamily: 'Helvetica Neue',
		fontSize: '10sp',
	},
	data: bindRowData(),
	top: '22%',
	bottom: '15%'
		
});


var cancelWindow = Ti.UI.createWindow({
	text:'Cancel Appointment',
	fontFamily: 'Museo Slab',
	backgroundColor:'#fff'
});
var appointmentlistWindow = Ti.UI.createWindow({
	text:'Appointment List',
	fontFamily: 'Museo Slab',
	backgroundColor:'#fff'
});
var titleView = Ti.UI.createView({		//Titles
	top: '3.1%',
	backgroundColor: 'black',
	height: '17%',
	width: '100%',	
});
var titleLabel = Ti.UI.createLabel({
	text:'Vandal Appointments',
	textAlign: 'center',
	color: 'b18e5f',
	height: Ti.UI.FILL,
	font:{
			fontSize:'12sp',
			fontWeight:'bold',
			fontFamily: 'Museo Slab',
	}									
});
var scheduleTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'20%',
	width: '100%',
});
var scheduleTitleLabel = Ti.UI.createLabel({
	text:'My Schedule',
	textAlign: 'center',
	color: '#b18e5f',
	height:Ti.UI.FILL,
	font:{
		fontSize:'12sp',
		fontWeight:'bold',
		fontFamily: 'Museo Slab',
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
	color: '#b18e5f',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'12sp',
		fontWeight:'bold',
		fontFamily: 'Museo Slab',
	}
});
var cancelTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'20%',
	width: '100%',
});
var cancelTitleLabel = Ti.UI.createLabel({
	text:'Cancel Appointment',
	color: '#b18e5f',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'12sp',
		fontWeight:'bold',
		fontFamily: 'Museo Slab',
	}
});
var appointmentlistTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'20%',
	width: '100%',
});
var appointmentlistTitleLabel = Ti.UI.createLabel({
	text:'Appointment List',
	color: '#b18e5f',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'12sp',
		fontWeight:'bold',
		fontFamily: 'Museo Slab',
	}
});
// START CENTER SCREEN
var homescreenImage = Ti.UI.createImageView({				//HOME SCREEN
	top:'40%',
	width:'70%',
	left:'25%',
	image: '/Images/UISeal.jpg'
});
					
var schedulepic = Ti.UI.createImageView({
	top: '25%',
	height: '60%',
	width: '95%',
	image: '/Images/image23.png',
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
	backgroundImage: '/Images/image23.png',
});	


var blurbLabel = Ti.UI.createLabel({		
	textAlign: 'center',
	top: '5%',
	width: '95%',
	text: 'Vandal Appointments is a resource for students and professors to schedule meeting times with one another. Easily schedule a time to meet with your professor without the hassle of sending them an email or going to their office hours!',
	font:{
		fontSize:'10sp',
		fontWeight:'bold',
		fontFamily: 'Helvetica Neue',
	}	
});

var scheduleButton = Ti.UI.createButton({			//Buttons
	title: 'Schedule',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#b18e5f',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Museo Slab',
		},
		backgroundColor:'black'
});
var makeappointmentButton = Ti.UI.createButton({
	title:'Create',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#b18e5f',
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Museo Slab',
		},
		backgroundColor:'black'
});
var cancelButton = Ti.UI.createButton({
	title:'Cancel',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#b18e5f',
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Museo Slab',
		},
		backgroundColor:'black'
});
var appointmentlistButton = Ti.UI.createButton({
	title:'List',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#b18e5f',
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Museo Slab',
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
	backgroundColor: '#9f9d9d',
	textAlign:'center',
	font:{
		fontSize:'10sp',
		fontWeight:'bold',
		fontFamily: 'Museo Slab',
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
win1.add(homescreenImage);
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
scheduleWindow.add(schedulepic);
appointmentlistWindow.add(table1);
