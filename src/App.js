import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY="03bc4f43cdeba70b1aafb54165af53f1";


class App extends Component 
{
  state=
  {
    temperature:undefined,
    humidity:undefined,
    name:undefined,
    country:undefined,
    wind_speed:undefined,
    error:undefined
  }
    getWeather = async (e) =>
    {
       e.preventDefault();

       const city=e.target.elements.city.value;
       const country=e.target.elements.country.value;
       const api_call  = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
       const data= await api_call.json();

       if(city && country)
       {

          console.log(data);

          this.setState({
          temperature:data.main.temp,
          humidity:data.main.humidity,
          name:data.name,
          country:data.sys.country,
          wind_speed:data.wind.speed,
          error:""
          });
       }
       else
       {
          this.setState({
          temperature:undefined,
          humidity:undefined,
          name:undefined,
          country:undefined,
          wind_speed:undefined,
          error:"worng content"
          });
       }
    }

  render() 
  {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
             <h1>Weather Finder App</h1>
              <div className="row">
                <div className=".col-xs-5 title-container">
                 

                  <Title/>
                
                <Form getWeather={this.getWeather}/>
                  <Weather 
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    name={this.state.name}
                    country={this.state.country}
                    wind_speed={this.state.wind_speed}
                    error={this.state.error}
                  />
                  </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;



        
        