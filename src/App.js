import React, { Component } from 'react';
import Student from './Student.js';
import './App.css';

class App extends Component {
	
	constructor(props){
		super(props);
		
		this.state={
			editShowing:false,
			position:0,
			students : [
				  {

					name:"Kevin",

					from:"San Antonio",

					funFact:"Has lived in Argentina",

					cityOrCountry:"Country",

					indoorsOrOutdoors:"Indoors",

					travel: "Travel everyday",

					food: "Top's",

					dogOrCat:"Dog"

				  },

				  {

					name: "Sabrina",

					from: "NYC",

					funFact: "Born in Bangladesh",

					cityOrCountry: "City",

					indoorsOrOutdoors: "Indoors",

					food: "Subway",

					dogOrCat: "Cats - can't have dogs"

				  },

				  {

					name: "Samuel",

					from: "Nigeria",

					funFact: "He has been away from home since 10 boarding school",

					cityOrCountry: "City",

					indoorsOrOutdoors: " Indoors",

					travel:"Everyday",

					food: "",

					dogOrCat:"Cat"

				  }, 

				  {

					name:"Yousef",

					from:"West Africa",

					funFact:"born in a village",

					cityOrCountry:"Lots of money in the city, otherwise country",

					indoorsOrOutdoors:"Outside but not working",

					travel: "yes",

					food: "subway",

					dogOrCat:"Cat"

				  },

				  {

					name: "Uriel",

					from: "Dallas, TX",

					funFact: "Plays Soccer",

					cityOrCountry: "Inbetween, rural",

					indoorsOrOutdoors: "Outdoors",

					travel: "Yes",

					food: "Subway",

					dogOrCat: ""

				  },

				  {

					name: "Jon",

					from: "Washington State",

					funFact: "Can count in Finnish (lived in Finland)",

					cityOrCountry: "The midlands",

					indoorsOrOutdoors: "indoors",

					travel: "travel",

					food: "",

					dogOrCat: "cat"

				  },

				  {

					name: 'Harry',

					from: 'Denton',

					funFact: 'Degree in music education',

					cityOrCountry: 'Country but not too far from the city',

					indoorsOrOutdoors: 'Outdoors for sure, yes definitely outdoors',

					travel: 'Yes, for sure',

					food: 'Tops sounds cool, subway is lame',

					dogOrCat: '2 dogs'

				  },

				  {

					name: "Blake",

					from: "Springdale Arkansas",

					funFact: "Blackbelt",

					cityOrCountry: "Country",

					indoorsOrOutdoors: "outdoors",

					travel: "home",

					food: "tops",

					dogOrCat: "dog"

				  },

				  {

					name: "Alec",

					from: "Plano, TX",

					funFact: "He is a musician",

					cityOrCountry: "both",

					indoorsOrOutdoors: "",

					travel: "never leave home",

					food: "subway",

					dogOrCat: "dog"

				  },

				  {

					name : "Candace",

					from: "North Dallas",

					funFact: "She can weld",

					cityOrCountry: "Country",

					indoorsOrOutdoors : "Outdoors",

					travel: "travel every day",

					food: "subway",

					dogOrCat: "werewolf cat"

				  },

				  {

					name: "Zaid",

					from: "New Jersey",

					funFact: "Plans to get engaged soon",

					cityOrCountry: "City for now, country to retire",     indoorsOrOutdoors: "Both, depends on mood",

					travel: "new country everday",

					dogOrCat: "unfortunately, none at the moment" 

				  },

				  {

					name: 'Dylan',

					from: 'Round Rock',

					funFact: 'Has been in drumline for 4 years',

					cityOrCountry: 'Country',

					indoorsOrOutdoors: 'Indoors',

					travel: 'travel',

					food: 'subway',

					dogOrCat: 'both'

					},

				  {

					name: "Caleb",

					from:"Wisconsin",

					funFact: "Has been to Asia",

					cityOrCountry:"City",

					indoorsOrOutdoors:"Indoors",

					travel:"yes",

					food:"subway",

					dogOrCat:"Neghter"

				  },

				  {

					name: "Sandra",

					from: "San Diego, CA",

					funFacts: "Moved to 5 Difference Countries",

					cityorCountry: "Both, depending on the weather",

					travel: "yes",

					food: "Subway",

					dogOrCat: "Dog"

				  }

				]
		}
		
		this.nextStudent = this.nextStudent.bind(this);
		this.prevStudent = this.prevStudent.bind(this);
		this.deleteStudent = this.deleteStudent.bind(this);
		this.newStudent  = this.newStudent.bind(this);
		this.editStudent = this.editStudent.bind(this);
	}
	
	nextStudent(){
		var {position,students} = this.state;
		console.log(students.length);
		if(position >=students.length-1) this.setState({position: 0});
		else this.setState({position: position+1});
	}
	
	prevStudent(){
		var {position, students} = this.state;
		if(position <=0) this.setState({position: students.length-1});
		else this.setState({position: position-1});
		
	}
	
	deleteStudent(){
		var {position, students} = this.state;
		students.splice(position,1);
		if(position===students.length)position=0;
		this.setState({students:students, position:position});
	}
	
	editStudent(){
		if(this.state.editShowing){
			document.querySelector("#edit").style.display ="none";
			this.setState({editShowing:false});
		}
		else{
			document.querySelector("#edit").style.display ="flex";
			this.setState({editShowing:true});
		}
	}
	
	newStudent(){
		var {students} = this.state;
		students.push({
			name:"",
			from:"",
			funFact:"",
			cityOrCountry:"",
			indoorsOrOutdoors:"",
			travel: "",
			food: "",
			dogOrCat:""
		});
	}
	
	handleNameChange(e){
		var {students, position}=this.state;
		students[position].name = e.target.value;
		this.setState({students:students});
	}
	handleFromChange(e){
		var {students, position}=this.state;
		students[position].from = e.target.value;
		this.setState({students:students});
	}
	handleFunChange(e){
		var {students, position}=this.state;
		students[position].funFact = e.target.value;
		this.setState({students:students});
	}
	handleCityChange(e){
		var {students, position}=this.state;
		students[position].cityOrCountry = e.target.value;
		this.setState({students:students});
	}
	handleIndoorsChange(e){
		var {students, position}=this.state;
		students[position].indoorsOrOutdoors = e.target.value;
		this.setState({students:students});
	}
	handleTravelChange(e){
		var {students, position}=this.state;
		students[position].travel = e.target.value;
		this.setState({students:students});
	}
	handleFoodChange(e){
		var {students, position}=this.state;
		students[position].food = e.target.value;
		this.setState({students:students});
	}
	handleDogChange(e){
		var {students, position}=this.state;
		students[position].dogOrCat = e.target.value;
		this.setState({students:students});
	}
	
  render() {
    var {position, students} = this.state;
    return (
      <div className="main-div">
		<header>
			<h2>Home</h2>
			<h2>DevMountain Directory</h2>
		</header>
		<main>
			<Student
				number={position+1}
				length={students.length}
				name={students[position].name}
				from={students[position].from}
				funFact={students[position].funFact}
				cityOrCountry={students[position].cityOrCountry}
				indoorsOrOutdoors={students[position].indoorsOrOutdoors}
				travel={students[position].travel}
				food={students[position].food}
				dogOrCat={students[position].dogOrCat}
			/>
			
		</main>
		<div id="buttons">
			<button onClick={this.prevStudent} className="firstLast">&lt; Prev Student</button>
			<button onClick={this.editStudent}>Edit</button>
			<button onClick={this.deleteStudent}>Delete</button>
			<button onClick={this.newStudent}>New</button>
			<button onClick={this.nextStudent} className="firstLast">Next Student &gt;</button>
		</div>
		
		
		<div id="edit">
			
			<input 
				value={students[position].name}
				placeholder="Name"
				onChange={e => this.handleNameChange(e)}
			/>
			
			<input 
				value={students[position].from}
				placeholder="From"
				onChange={e => this.handleFromChange(e)}
			/>
			
			<input 
				value={students[position].funFact}
				placeholder="Fun Fact"
				onChange={e => this.handleFunChange(e)}
			/>
			
			<input 
				value={students[position].cityOrCountry}
				placeholder="City/Country"
				onChange={e => this.handleCityChange(e)}
			/>
			
			<input 
				value={students[position].indoorsOrOutdoors}
				placeholder="Indoors/Outdoors"
				onChange={e => this.handleIndoorsChange(e)}
			/>
			
			<input 
				value={students[position].travel}
				placeholder="Travel/Home"
				onChange={e => this.handleTravelChange(e)}
			/>
			
			<input 
				value={students[position].food}
				placeholder="Tops/Subway"
				onChange={e => this.handleFoodChange(e)}
			/>
			
			<input 
				value={students[position].dogOrCat}
				placeholder="Dog/Cat"
				onChange={e => this.handleDogChange(e)}
			/>
			
		</div>
		
      </div>
    );
  }
}

export default App;
