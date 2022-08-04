import FrameBoy from "../../assets/FrameBoy.svg";
import UpwardGrowth from "../../assets/UpwardGrowth.png";
import "./index.css";

function Banner() {
  return (
    <div>
      <main className="banner">
        <section className="banner-intro">
          <div className="banner-heading">
            Unlock <span className="highlighted-primary">your</span> online
            growth Potential{" "}
            <span className="highlighted-secondary">
              <span className="highlighted-secondary-inbox">Yes</span>
            </span>
          </div>
          <div className="banner-explore">
            <button className="banner-product">Our Product</button>
            <button className="banner-play-btn">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
        </section>
        <section className="banner-img">
          <img
            src={FrameBoy}
            alt="banner-img"
            style={{ width: "100%", height: "100%" }}
          />
        </section>
      </main>
      <div className="suggestion">
        <div className="suggestion-content">
          <div>
            <img
              src={UpwardGrowth}
              alt="growth-img"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <p className="smart-money">Drive your money to work smarter than others</p>
          <p className="secure-money">
            A safe and secure invesment nedd guided aproach with real time
            analytics and risk analysis , we can help you to catch all at once.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
