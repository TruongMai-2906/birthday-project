import { useEffect, useRef, useState } from "react";
import "./App.css";
import AOS from "aos";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeCard, setActiveCard] = useState(-1);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const now = new Date();
    const target = new Date("2024-06-22");

    if (target.getTime() - now.getTime() < 0) {
      setShowLocation(true);
    }
  }, []);

  const onOpenPopup = (index) => {
    setShowPopup(true);
    setActiveCard(index);
  };

  const onHiddenPopup = () => {
    setShowPopup(false);
    setActiveCard(-1);
  };

  const onShowVideo = () => {
    setShowVideo(true);
    videoRef.current.play();
  };

  return (
    <div className="root">
      <div className="container">
        <img className="image-flag" src="/top-flag.png" alt="flag" />
        <div className="subtitle">You’re invited to</div>
        <div className="title">Truong’s birthday</div>
        <img className="image-main" src="/main-image.jpg" alt="main" />
        <div className="agenda">AGENDA</div>
        <div className="cards-container">
          {/* <div className="cards-line"></div> */}
          <div
            className="card"
            data-aos="fade-up"
            data-aos-offset="200"
            onClick={() => onOpenPopup(0)}
          >
            <div className="card-decor card-decor-1"></div>
            <div className="card-content">15h00 - 18h30</div>
          </div>
          <div
            className="card card-right"
            data-aos="fade-up"
            data-aos-offset="200"
            onClick={() => onOpenPopup(1)}
          >
            <div className="card-content">18h30 - 21h00</div>
            <div className="card-decor card-decor-2"></div>
          </div>
          <div
            className="card"
            data-aos="fade-up"
            data-aos-offset="200"
            onClick={() => onOpenPopup(2)}
          >
            <div className="card-decor card-decor-3"></div>
            <div className="card-content">21h00 - ???</div>
          </div>
        </div>
        <div
          className="button"
          data-aos="fade-up"
          data-aos-offset="100"
          onClick={() => onShowVideo()}
        >
          end
        </div>
        <img
          className="image-end-left"
          data-aos="fade-up"
          data-aos-offset="100"
          src="/end-left.png"
          alt="end"
        />
        <img
          className="image-end-right"
          data-aos="fade-up"
          data-aos-offset="100"
          src="/end-right.png"
          alt="end"
        />
      </div>

      <div className={`popup ${showPopup && "popup-active"}`}>
        <div className="popup-overlay" onClick={() => onHiddenPopup()}></div>
        <div
          className={`popup-card ${activeCard === 0 && "popup-card-active"}`}
        >
          <div className="popup-subtitle">15h00 - 18h30</div>
          <div className="popup-title">
            {showLocation ? "Decathlon" : "???"}
          </div>
          <img className="popup-image-1" src="/card-decathlon.png" alt="card" />
          <img className="popup-decor-1" src="/decor-1.svg" alt="card" />
        </div>

        <div
          className={`popup-card ${activeCard === 1 && "popup-card-active"}`}
        >
          <img className="popup-decor-2-1" src="/card-steak-1.png" alt="card" />
          <img className="popup-decor-2-2" src="/card-steak-2.png" alt="card" />
          <div className="popup-subtitle">18h30 - 21h00</div>
          <div className="popup-title">
            {" "}
            {showLocation ? "Steak fries" : "???"}
          </div>
          <img className="popup-image-2" src="/card-lemonde.png" alt="card" />
          <img className="popup-decor-2" src="/decor-1.svg" alt="card" />
        </div>

        <div
          className={`popup-card ${activeCard === 2 && "popup-card-active"}`}
        >
          <div className="popup-subtitle">21h00 - ???</div>
          <div className="popup-title">
            {showLocation ? "Noc nha Rooftop" : "???"}
          </div>
          <img className="popup-image-3" src="/card-rooftop.png" alt="card" />
          <img className="popup-decor-3-1" src="/decor-3.svg" alt="card" />
          <img className="popup-decor-3-2" src="/decor-2.svg" alt="card" />
        </div>
      </div>

      <div className={`video ${showVideo && "video-active"}`}>
        <video
          autoPlay
          ref={videoRef}
          onEnded={() => {
            setShowVideo(false);
          }}
        >
          <source src="/end-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
