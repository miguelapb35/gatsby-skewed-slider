import React, { Component } from "react"
import ReactDOM from 'react-dom'

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

import Main from './main';
import '../../src/index.css'


class Home extends Component {

render() { 
return ( 
  <div>
  <section class="slider-pages">

  <article class="js-scrolling__page js-scrolling__page-1 js-scrolling--active">
    <div class="slider-page slider-page--left">
      <div class="slider-page--skew">
        <div class="slider-page__content">
        </div>
      </div>
    </div>


    <div class="slider-page slider-page--right">
      <div class="slider-page--skew">
        <div class="slider-page__content">
          <h1 class="slider-page__title slider-page__title--big">
            Gray & White - Skewed Slider with Scrolling
          </h1>
          <h2 class="slider-page__title">
            Start of your story
          </h2>
          <p class="slider-page__description">
            Please scroll down or press the down arrow on your keyboard
          </p>
        </div>
      </div>
    </div>
  </article>
  


  <article class="js-scrolling__page js-scrolling__page-2">
    <div class="slider-page slider-page--left">
      <div class="slider-page--skew">
        <div class="slider-page__content">
          <h1 class="slider-page__title">
            Now you are here
          </h1>
          <p class="slider-page__description">
            Please continue scrolling
          </p>
        </div>
      </div>
    </div>

    <div class="slider-page slider-page--right">
      <div class="slider-page--skew">
        <div class="slider-page__content">
        </div>
      </div>
    </div>
  </article>



  <article class="js-scrolling__page js-scrolling__page-3">
    <div class="slider-page slider-page--left">
      <div class="slider-page--skew">
        <div class="slider-page__content">
        </div>
      </div>
    </div>

    <div class="slider-page slider-page--right">
      <div class="slider-page--skew">
        <div class="slider-page__content">
          <h1 class="slider-page__title">
            Final is just the beginning
          </h1>
          <p class="slider-page__description">
            Feel free to follow me on <a class="slider-page__link" href="https://twitter.com/WispProxy"
                                        target="_blank">Twitter</a>
            and check of <a class="slider-page__link" href="https://codepen.io/WispProxy/pens/public"
                            target="_blank">my other works</a>
          </p>
        </div>
      </div>
    </div>
  </article>

  <article class="js-scrolling__page js-scrolling__page-4">
    <div class="slider-page slider-page--left">
      <div class="slider-page--skew">
        <div class="slider-page__content">
        </div>
      </div>      
    </div>
    

    <div class="slider-page slider-page--right">
      <div class="slider-page--skew">
        <div class="slider-page__content">
          <h1 class="slider-page__title">
            Final is just the beginning
          </h1>          
          <p class="slider-page__description">
            Feel free to follow me on <a class="slider-page__link" href="https://twitter.com/WispProxy"
                                        target="_blank">Twitter</a>
            and check of <a class="slider-page__link" href="https://codepen.io/WispProxy/pens/public"
                            target="_blank">my other works</a>
          </p>
        </div>
      </div>
    </div>
  </article>

      <article class="js-scrolling__page js-scrolling__page-5">
        <section class="">
          <div class="slider-page slider-page--left">
            <h1>Trueque</h1>
          </div>
          <div class="slider-page slider-page--right">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos omnis velit deleniti modi? Vitae doloribus repellendus consectetur qui, nulla fugit ea ullam debitis sequi animi dolorem aspernatur dolores dolorum voluptatibus!
              Illo accusantium eligendi rem nulla consectetur iste necessitatibus numquam, cupiditate placeat optio animi earum error magnam repellat aut? Iure officiis minus deserunt consectetur. Quo inventore provident veniam aliquam earum amet.
              Molestiae, commodi provident. Molestias consequuntur voluptas molestiae nisi enim repudiandae ea modi corporis maxime rem quae porro, nemo soluta ut libero perferendis? Iste aperiam qui ratione corporis totam fuga officiis.
              Quam ipsum nam natus? Exercitationem minus vero sit iure, saepe quibusdam praesentium perspiciatis id mollitia alias. Optio quae vero iste architecto ea nemo ratione tempore cumque dignissimos, natus, eius delectus.
              Quae nesciunt saepe omnis quaerat facere dolores ut at sed atque, eligendi earum enim voluptatem aliquid, vitae modi ullam minima voluptate iusto aperiam nemo? Id consequuntur magni impedit consequatur nam.
            </p>
          </div> 
        </section>  
      </article>
    </section>
    
</div> 
);
}
}

export default Home;

