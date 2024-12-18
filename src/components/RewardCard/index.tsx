import { RewardType } from "../../../types/common/main"
import { ITEMQUALITY } from "../../static/enums"
import "./style.css"

const RewardCard = (props: {reward: RewardType, overlayLink: string, openCardFunc: Function, cardIndex: number, isOpen: boolean}) => {
    const overlayDirectory="/images/frames/"

    const handleClick = () => {
        props.openCardFunc(props.cardIndex)
    }

    const itemQualityShadow = (props.reward!.quality!== ITEMQUALITY.common&&props.reward!.quality!== ITEMQUALITY.fine) ? props.reward!.quality+"Shadow" : ''

    return (
        <div className={`rewardCard ${props.reward!.quality}`} onClick={handleClick}>
            <div className={`imageSection ${itemQualityShadow}`}>
                <img className="rewardImage" src={props.reward!.cardImage} alt="" />
                <img className="rewardOverlay" src={`${overlayDirectory+props.reward!.type+"_"+props.reward!.quality+".png"}`} alt="" />
                <img className={`rewers ${props.isOpen? 'invisibleRewers' : 'visibleRewers'}`} src={props.overlayLink} alt=""/>
            </div>
            <div className="rewardName">
                <span className={`rewardsText ${!props.isOpen? 'nameInvisible' : 'nameVisible'}`}>{props.reward!.name}</span>
            </div>
        </div>
    
    )
}

export default RewardCard