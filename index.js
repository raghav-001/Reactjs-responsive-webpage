import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.jfif';
import image4 from './image4.jfif';
class DisplayWebpage extends React.Component{
	render(){
		return (
		<div>
		
		<h1><u>Welcome! Click on any image to get directed to the hackclub.tech page!!</u></h1>
		<div class="row">
			<div class="column">
			<a href="http://hackclub.tech/"><img src={image1} height='180'/></a>
			</div>
			<div class="column">
			<a href="http://hackclub.tech/"><img src={image2} /></a>
			</div>
			<div class="column">
			<a href="http://hackclub.tech/"><img src={image3} /></a>
			</div>
			<div class="column">
			<a href="http://hackclub.tech/"><img src={image4} /></a>
			</div>
		</div>
		<div><h1><u><i>Let us have a look at the problems faced by some VIT students in VIT</i></u></h1></div>
		<iframe src='https://www.youtube.com/embed/6GSBEOLD3bY'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
		height='500'
		width='900'
		/>
	
		
		</div>
		);
	}
}
ReactDOM.render(<DisplayWebpage/>,document.getElementById("root"));