import c1 from "../assets/images/C1.jpg"
import c2 from "../assets/images/C2.jpg"
import c3 from "../assets/images/C3.jpg"
import c4 from "../assets/images/C4.jpg"
import c5 from "../assets/images/C5.jpg"
import c6 from "../assets/images/C6.jpg"
import c7 from "../assets/images/C7.jpg"
import c8 from "../assets/images/C8.jpg"

function PopularSection() {
  return (
    <div className="popular">
      <h1 className="popular__title">Most popular</h1>
      <p className="popular__subtitle">Pick the best fit</p>

      <div className="popular__container">
        <div className="course-card">
          <img src={c1} alt="Python Course" />
          <p>2023 Python Data Visualization Masterclass</p>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐⭐</p>
          <p>₹499 <del>₹9999</del></p>
        </div>

        <div className="course-card">
          <img src={c2} alt="Programming Course" />
          <p>Basic to Advance Programming with EMC</p>
          <p>Col Steele</p>
          <p>3.0 ⭐⭐⭐</p>
          <p>₹499 <del>₹5999</del></p>
        </div>

        <div className="course-card">
          <img src={c3} alt="Fullstack Course" />
          <p>Fullstack Web Development Bootcamp 2023</p>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐</p>
          <p>₹499 <del>₹19999</del></p>
        </div>

        <div className="course-card">
          <img src={c4} alt="UI UX Course" />
          <p>Master UI/UX Designing with Figma</p>
          <p>Col Steele</p>
          <p>4.0 ⭐⭐⭐⭐</p>
          <p>₹499 <del>₹14999</del></p>
        </div>

        <div className="course-card">
          <img src={c5} alt="Fullstack Course" />
          <p>Fullstack Web Development Bootcamp 2023</p>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐</p>
          <p>₹499 <del>₹19999</del></p>
        </div>

        <div className="course-card">
          <img src={c6} alt="UI UX Course" />
          <p>Master UI/UX Designing with Figma</p>
          <p>Col Steele</p>
          <p>4.0 ⭐⭐⭐⭐</p>
          <p>₹499 <del>₹14999</del></p>
        </div>

        <div className="course-card">
          <img src={c7} alt="Python Course" />
          <p>2023 Python Data Visualization Masterclass</p>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐⭐</p>
          <p>₹499 <del>₹9999</del></p>
        </div>

        <div className="course-card">
          <img src={c8} alt="Programming Course" />
          <p>Basic to Advance Programming with EMC</p>
          <p>Col Steele</p>
          <p>3.0 ⭐⭐⭐</p>
          <p>₹499 <del>₹5999</del></p>
        </div>
      </div>
    </div>
  )
}

export default PopularSection

 
