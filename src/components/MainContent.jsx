import image1 from "../assets/imagesWeights/hardorckDumbell2.jpeg";
import image2 from "../assets/imagesWeights/cat.jpg";
import image3 from "../assets/imagesWeights/hardrockdumbell3.jpeg";
import image4 from "../assets/imagesWeights/hardRockdumbell.jpeg";

const MainContent = () => {
  return (
    <div>
      <main>
        <article className="article-featured">
          <h2 className="article-title">
            Making Heavy Dumbells Affordable for EVERYONE!
          </h2>
          <img src={image2} alt="" className="article-image-featured" />{" "}
          <p className="article-info">How we Operate</p>{" "}
          <p className="article-body">
            {" "}
            {/* Changed 'class' to 'className' */}
            RockFitness offers a range of dumbbells, including 20 KG, 40 KG, and
            60 KG options, all reinforced with high-quality rubber and backed by
            a 60-day guarantee for your peace of mind.
          </p>
          <a href="#" className="article-read-more">
            Read More
          </a>
        </article>

        <article className="article-recent">
          <div className="article-recent-main">
            <h2 className="article-title">
              The Perfect Weight Training Solution
            </h2>
            <p className="article-body">
              At RockFitness, we're dedicated to making premium quality
              dumbbells accessible to all fitness enthusiasts. Our range
              includes 20 KG, 40 KG, and 60 KG dumbbells, all crafted with the
              highest quality materials and reinforced with durable rubber.
              We're so confident in our product that we offer a 60-day
              satisfaction guarantee, ensuring you get the best out of your
              fitness journey.
            </p>
            <a href="#" className="article-read-more">
              {" "}
              Read More{" "}
            </a>
          </div>
          <div className="article-recent-secondary">
            <img src={image1} alt="" className="article-image" />{" "}
            <p className="article-info">January, 2019 | 3 Ratings </p>{" "}
          </div>
        </article>
        <article className="article-recent">
          <div className="article-recent-main">
            <h2 className="article-title">Strength, Durability, and Quality</h2>
            <p className="article-body">
              Looking to take your fitness journey to new heights? RockFitness
              is your ultimate companion. Our premium dumbbells, like the 40 KG
              powerhouse, provide unmatched durability and performance. Designed
              to last, our dumbbells are built to withstand your toughest
              workouts. Are you ready to up your game and achieve your fitness
              goals?
            </p>
            <a href="#" className="article-read-more">
              {" "}
              Read More{" "}
            </a>
          </div>
          <div className="article-recent-secondary">
            <img src={image3} alt="" className="article-image" />{" "}
            <p className="article-info">February, 2019 | 8 Ratings</p>{" "}
          </div>
        </article>
        <article className="article-recent">
          <div className="article-recent-main">
            <h2 className="article-title">Explore Fitness with RockFitness</h2>
            <p className="article-body">
              When it comes to weight training, RockFitness stands out. Our
              heavy-duty 60 KG dumbbells are the epitome of strength and
              resilience. Crafted with precision, these dumbbells provide you
              with the tools to achieve your fitness aspirations. Discover the
              power of RockFitness today!
            </p>
            <a href="#" class="article-read-more">
              {" "}
              Read More{" "}
            </a>
          </div>
          <div className="article-recent-secondary">
            <img src={image4} alt="" className="article-image" />{" "}
            <p className="article-info">
              March, 2019 | <span className="article-info">6 ratings </span>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default MainContent;
