import React, { useEffect } from 'react';
import PastEvents from './PastEvents';
import UpComingEvents from './UpComingEvents';
import Booklet from './Booklet';
import PastEvents1 from './PastEvents1';
import UpComingEvents1 from './UpComingEvents1';

function EventsMain( {compeleted, ongoing} ) {
    useEffect(()=>{
        window.$('.slide-nav').on('click', function(e) {
            e.preventDefault();
            // get current slide
            var current = window.$('.flex--active').data('slide'),
              // get button data-slide
              next = window.$(this).data('slide');
          
            window.$('.slide-nav').removeClass('active');
            window.$(this).addClass('active');
          
            if (current === next) {
              return false;
            } else {
              window.$('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
              window.$('.flex--active').addClass('animate--end');
              setTimeout(function() {
                window.$('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                window.$('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
              }, 800);
            }
          });
    })
    return (
        <>
            <div className="slider__warpper">
                <div className="flex__container flex--piplup flex--active" data-slide="1" style={{overflowX:"hidden"}}>
                    <div className="flex__item flex__item--left Events_Left">
                        <div className="flex__content">
                            <p className="text--sub">IEEE NMIMS</p>
                            <h1 className="flow-text" style={{fontWeight: "bold"}}>Upcoming Events</h1>
                            <p className="text--normal">
                            Use the 'Next and 'Prev' buttons to navigate through the booklet. Clicking on any Event poster will redirect you to a page with further details.
                            </p>
                        </div>
                        <p className="text__background">Upcoming</p>
                    </div>
                    <div className="flex__item flex__item--right Events_Right">
                        <UpComingEvents1 ongoing={[...ongoing]}/>
                    </div>
                    {/* <img className="pokemon__img" src="https://lh3.googleusercontent.com/proxy/TWeJIT5--zilVt58aWjypiRSIMhV3g3OJ5cNwd4PyAB0rgqLNbkyY9V0KVnnvDgSa9FxulY69Fr_tMNzfH2FzLZ3NIjNayLAfGICK6DshRxXBKZvXcs_0Pk" /> */}
                    {/* <UpComingEvents /> */}
                    
                </div>
                <div className="flex__container flex--dialga animate--start" data-slide="2" style={{overflowX:"hidden"}}>
                    <div className="flex__item flex__item--left Events_Left">
                        <div className="flex__content">
                            <p className="text--sub">IEEE NMIMS</p>
                            <h1 className="flow-text" style={{fontWeight: "bold"}}>Past Events</h1>
                            <p className="text--normal">
                            Use the 'Next and 'Prev' buttons to navigate through the booklet. Clicking on any Event poster will redirect you to a page with further details.
                            </p>
                        </div>
                        <p className="text__background">Past</p>
                    </div>
                    <div className="flex__item flex__item--right Events_Right">
                        <PastEvents1 completed={compeleted}/>
                    </div>
                    {/* <img className="pokemon__img" src="https://s4.postimg.org/sa9dl4825/pilup.png" /> */}
                    {/* <PastEvents /> */}
                </div>
            </div>

            <div className="slider__navi">
                <a href="#" className="slide-nav active" data-slide="1">Upcoming</a>
                <a href="#" className="slide-nav" data-slide="2">Past</a>
            </div>
        </>
    )

}

export default EventsMain
