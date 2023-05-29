import React from "react";
import "../Home/Home.scss";
import Card from "../../../component/Card";
const Home = () => {
  return (
    <div>
      <div className="section1">
        <div className="section1__right">
          <p>5 TO 9 MAY 2019, MARDAVALL HOTEL, NEW YORK</p>
          <h1>Change Your Mind To Become Sucess</h1>
          <button>Buy Ticket</button>
        </div>

        <div className="section1__left">
          <img
            src="https://preview.colorlib.com/theme/manup/img/hero-right.png"
            alt=""
          />
        </div>
      </div>

      <div className="section2">
        <div className="section2__img">
          <img
            src="https://preview.colorlib.com/theme/manup/img/h-about.jpg"
            alt=""
          />
        </div>
        <div className="section2__text">
          <h1>About Conference</h1>
          <p>
            When I first got into the online advertising business, I was looking
            for the magical combination that would put my website into the top
            search engine rankings, catapult me to the forefront of the minds or
            individuals looking to buy my product, and generally make me rich
            beyond my wildest dreams! After succeeding in the business for this
            long, I’m able to look back on my old self with this kind of
            thinking and shake my head.
          </p>
          <ul>
            <li> Write On Your Business Card</li>
            <li> Advertising Outdoors</li>
            <li> Effective Advertising Pointers</li>
            <li> Kook 2 Directory Add Url Free</li>
          </ul>
          <button>
            Discover Now <hr />
          </button>
        </div>
      </div>

      <Card />

      <div className="section3">
        <div className="section3__text">
          <h2>Who’s speaking</h2>
          <p>
            These are our communicators, you can see each person information
          </p>
        </div>

        <div className="section3__img">
          <div className="img1"></div>

          <div className="img2"></div>
          <div className="img3"></div>
          <div className="img4"></div>
          <div className="img5"></div>
          <div className="img6"></div>
          <div className="img7"></div>
          <div className="img8"></div>
          <div className="img9"></div>
          <div className="img10"></div>
        </div>
      </div>

      <div className="section4">
        <div className="section__text">
          <h1>Our Schedule</h1>
          <p>Do not miss anything topic about the event</p>
        </div>

        <div className="section4__card">
          <div className="card1">
            <h3>Day 1</h3>
            <p>May 04,19</p>
          </div>
          <div className="card2">
            <h3>Day 2</h3>
            <p>May 05, 2019</p>
          </div>
          <div className="card3">
            <h3>Day 3</h3>
            <p>May 06, 2019</p>
          </div>
          <div className="card4">
            <h3>Day 4</h3>
            <p>May 07,2019</p>
          </div>
          <div className="card5">
            <h3>Day 5</h3>
            <p>May 08,2019</p>
          </div>
        </div>
      </div>

      <div className="section5">
        <div className="section5__left">
          <h1>Location</h1>
          <p id="pp">Get directions to our event center</p>
          <p id="p">Address:</p>
          <p>01 Pascale Springs Apt. 339, NY City United State</p>
          <p id="p">Phone:</p>
          <p>(+12)-345-67-8910</p>
          <p id="p">Email:</p>
          <p>info.colorlib@gmail.com</p>
          <p id="p">Website:</p>
          <p>https://conference.colorlib.com</p>
        </div>


        <div className="section5__right">
          <iframe id="frm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235495.62780269101!2d-73.932551722484!3d41.33466214858558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sbd!4v1637254792714!5m2!1sen!2sbd" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
