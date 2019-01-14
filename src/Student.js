import React from 'react';

function Student(props){
	
	return(
		<div>
			<p id="number">{props.number} of {props.length}</p>
			<h2> {props.name}</h2>
			<p><b>From:</b> {props.from}</p>
			<p><b>Fun Fact:</b> {props.funFact}</p>
			
			<p><b>Would you rather...</b></p>
			<ul>
				<li><b>...live in the city or country?</b> {props.cityOrCountry}</li>
				<li><b>...be indoors or outdoors</b> {props.indoorsOrOutdoors}</li>
				<li><b>...travel every day or never leave home?</b> {props.travel}</li>
				<li><b>...eat at Top's or Subway?</b> {props.food}</li>
				<li><b>...have a dog or a cat?</b> {props.dogOrCat}</li>
			</ul>
		</div>
	)
	
}

export default Student;