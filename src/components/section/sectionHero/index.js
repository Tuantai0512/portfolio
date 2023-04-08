import "../sectionHero/style.scss";
import BgImage from "../../../assets/images/background-image.jpg"
function SectionHero(){
    return(
        <section id="section-hero">
            <img src={BgImage} alt="background"/>
        </section>
    )
}

export default SectionHero