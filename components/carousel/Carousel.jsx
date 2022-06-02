import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = (props) => {
    const {children, show, infiniteLoop} = props;

    const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
    const [length, setLength] = useState(children.length);

    const [isRepeating, setIsRepeating] = useState(infiniteLoop && children.length > show);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const [touchPosition, setTouchPosition] = useState(null);

    useEffect(() => {
        setLength(children.length);
        setIsRepeating(infiniteLoop && children.length > show);
    }, [children, infiniteLoop, show]);

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true);
            }
        }
    }, [currentIndex, isRepeating, show, length]);

    const next = () => {
        if (isRepeating || currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    };

    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if(touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            next();
        }

        if (diff < -5) {
            prev();
        }

        setTouchPosition(null);
    };

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false);
                setCurrentIndex(length);
            } else if (currentIndex === length + show) {
                setTransitionEnabled(false);
                setCurrentIndex(show);
            }
        }
    };

    const renderExtraPrev = () => {
        let output = [];
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index]);
        }
        output.reverse();
        return output;
    };

    const renderExtraNext = () => {
        let output = [];
        for (let index = 0; index < show; index++) {
            output.push(children[index]);
        }
        return output;
    };

    return (
      <div className="carousel-container">
        <div className="carousel-wrapper">
		{
		(isRepeating || currentIndex > 0) &&
       		<button onClick={prev} className="left-arrow">
        	    <svg className="size-arrow" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768">
                    <path id="arrow-left" d="M572.07 384a27.2 27.2 0 008 19.27L747.4 570.62a27.26 27.26 0 0038.6-38.55L637.87 384l148.07-148.07a27.25 27.25 0 10-38.54-38.54L580.05 364.73a27.18 27.18 0 00-7.98 19.27z" fill="#f2f2f2"/>
                </svg>
        	</button>
		}
          <div className="carousel-content-wrapper"
		  	onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
		>
            <div
              className={`carousel-content show-${show}`}
              style={{ 
				transform: `translateX(-${currentIndex * (100 / show)}%)`, 
				transition: !transitionEnabled ? 'none' : undefined,
			}}
			onTransitionEnd={() => handleTransitionEnd()}
        >
			{
				(length > show && isRepeating) &&
				renderExtraPrev()
			}
        	{children}
			{
				(length > show && isRepeating) &&
				renderExtraNext()
			}
            </div>
          </div>
		  {
			(isRepeating || currentIndex < (length - show)) &&
				<button onClick={next} className="right-arrow">
            	    <svg className="size-arrow" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768">
                        <path id="arrow-right" d="M793.93 384a27.2 27.2 0 01-8 19.27L618.6 570.62a27.26 27.26 0 01-38.55-38.55L728.13 384 580.06 235.93a27.25 27.25 0 1138.54-38.54L786 364.73a27.18 27.18 0 017.93 19.27z" fill="#f2f2f2"/>
                    </svg>
          		</button>
		  }
      </div>
    </div>
    );
};

export default Carousel;