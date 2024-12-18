import cratesArray from "../../static/crates"
import { CrateType } from "../../../types/common/main"
import CrateLink from "../../components/CrateLink"
import FooterComponent from "../../components/FooterComponent"
import HeaderComponent from "../../components/HeaderComponent"
import { Link } from "react-router-dom"
import "./style.css"

const HomePage = () => {
    return (
        <>
            <HeaderComponent />
            <div className='content centered'>
                <div className="linksSection">
                    <div className="sectionTitle">Available crates</div>
                    <div className="crateLinks">
                        {cratesArray.map((crate: CrateType, key: number) => {
                            return <CrateLink crate={crate} key={key} />
                        })}
                    </div>
                </div>
                <div className="linksSection">
                    <div className="sectionTitle">What is this thing?</div>
                    <div className="description common">This is a Crown Crates Simulator. You can try your luck for free and better see how ESO Crown Crates work. Chances of receiving items are based on data from <Link to={"https://www.crowncrates.com/"} className="textLink" target="_blank">crowncrates.com</Link> website.<br/> Simulator is not perfect as replicating in-game system without knowing internals is not possible. Current implementation lacks this: "<em>On some rewards, chances improve with each successive missed roll and resets once you receive the reward</em>".<br/>BIG thank you to <Link to={"https://en.uesp.net/wiki/Main_Page"} className="textLink" target="_blank">UESP</Link> for providing all images of cards and more.<br/> Another thank you to <Link to={"https://www.crowncrates.com/"} className="textLink" target="_blank">crowncrates.com</Link> for making item drop stats public.</div>
                </div>
                <div className="linksSection">
                    <div className="sectionTitle">Will more crates be available in the future?</div>
                    <div className="description common">If I have some free time, I will probably add more. This is an early version and In the future will be provided with updates regarding new features, crates, etc.</div>
                </div>
                <div className="linksSection">
                    <div className="sectionTitle">Other stuff</div>
                    <div className="description common">If you get bored, you can play other game I made - <Link to={"https://esoguessr.netlify.app/"} className="textLink" target="_blank">ESOGuessr</Link>.</div>
                </div>
                <div className="linksSection">
                    <div className="sectionTitle">Note</div>
                    <div className="description common">This is a personal project made for fun.</div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}
export default HomePage