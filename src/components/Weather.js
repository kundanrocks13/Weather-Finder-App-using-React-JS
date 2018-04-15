import React, {Component} from "react";

const Weather = props=>(
	<div>
		{props.temperature && props.humidity && <p>Temperature=>{props.temperature}
		,{props.humidity}</p>}

		{props.name && <p>City name=>{props.name}</p>}
		{props.country && <p>Country=>{props.country}</p>}
		{props.wind_speed && <p>Wind speed=>{props.wind_speed}</p>}
		{props.error && <p>{props.error}</p>}
	</div>
	);

export default Weather;