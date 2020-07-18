import React, { Component } from "react"
import ReactDOM from 'react-dom'
import Slider from 'react-slick'

import item1 from '../../public/images/item1.jpg'
import item2 from '../../public/images/item2.jpg'
import item3 from '../../public/images/item3.jpg'
import item4 from '../../public/images/item4.jpg'
import item5 from '../../public/images/item5.jpg'
import item6 from '../../public/images/item6.jpg'
import item7 from '../../public/images/item7.jpg'
import item8 from '../../public/images/item8.jpg'
import item9 from '../../public/images/item9.jpg'
import item10 from '../../public/images/item10.jpg'
import item11 from '../../public/images/item11.jpg'
import item12 from '../../public/images/item12.jpg'
import item13 from '../../public/images/item13.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../../src/index.css'

const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 1500      
}; 

const settingsRight = {
      rtl: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
 /*       autoplay: true,
      autoplaySpeed: 1500  */     
  }; 

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
    // this.handleWheel = this.handleWheel.bind(this);
  }

  componentDidMount() {
    // ReactDOM.findDOMNode(this).addEventListener('wheel', this.handleWheel);
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

/*   componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('wheel', this.handleWheel);
  }

  handleWheel(e) {
    e.preventDefault();
    e.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev();
  } */
  render() { 
    return ( 
  <div>
    <div className="left-carousel box">
      {/* </div>/<Slider {...settings} ref={slider => this.slider1 = slider}> */}
          <Slider
            {...settings}
            asNavFor={this.state.nav2}
            ref={slider => this.slider1 = slider}
            swipeToSlide={true}
          >
        <div className='img-wrapper'>
          <img src={item1}  alt="item1" />
          {/* <img src={item6}  className='opacit' alt="item6"/> */}
        </div>
        <div>
          <img src={item2} alt="item2"/>
        </div>
        <div>
          <img src={item3} alt="item3"/>
        </div>
        <div>
          <img src={item4} alt="item4"/>
        </div>
        <div>
          <img src={item5} alt="item5"/>
        </div>
        <div>
          <img src={item6} alt="item6"/>
        </div>
      </Slider>
    </div>
    <div className="right-carousel">
        {/* <Slider {...settingsRight} ref={slider => this.slider2 = slider}> */}
          <Slider
            {...settingsRight}
            asNavFor={this.state.nav1}
            ref={slider => this.slider2 = slider}
          swipeToSlide={true}
          focusOnSelect={true}            
          >
        <div>
          <img src={item7} alt="item7"/>
        </div>  
        <div>
          <img src={item9} alt="item9"/>
          </div> 
        <div>
          <img src={item10} alt="item10"/>
          </div>
        <div>
          <img src={item11} alt="item11"/>
        </div>          
        <div className='img-wrapper'>
          <img src={item12}  alt="item12" />
        </div>
        <div>
          <img src={item13} alt="item13"/>
        </div>              
      </Slider>
    </div>
</div> 
    );
  }
}

export default Home;

/* export default function Home() {

  return (
   
  );
} */
