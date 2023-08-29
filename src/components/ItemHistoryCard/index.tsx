import { RewardType } from "../../../types/common/main"
import { ITEMQUALITY } from "../../static/enums"
import "./style.css"

const ItemHistoryCard = (props: {reward: RewardType, showTrash: boolean}) => {
    const overlayDirectory="/images/frames/"

    return (
        <div className={`historyItemCard ${props.reward!.quality} ${(!props.showTrash&&(props.reward.quality===ITEMQUALITY.common || props.reward.quality===ITEMQUALITY.fine))? 'hideTrash' : ''}`}>
            <div className="historyImageSection">
                <img className="historyRewardImage" src={props.reward!.cardImage} alt="" />
                <img className="historyRewardOverlay" src={`${overlayDirectory+props.reward!.type+"_"+props.reward!.quality+".png"}`} alt="" />
            </div>
            <div className="historyRewardName">
                <span className={`rewardsText`}>{props.reward!.name}</span>
            </div>
        </div>
    
    )
}

export default ItemHistoryCard