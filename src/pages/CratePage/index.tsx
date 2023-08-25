import { useParams } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react";
import cratesArray from "../../static/crates";
import { CrateType, RewardType } from "../../../types/common/main";
import { bonusChance, reward1, reward2, reward3, reward4, rewardBonus } from "../../static/chances";
import { ITEMQUALITY } from "../../static/enums";
import { randomNumber } from "../../utils";
const _ = require("lodash");

const CratePage = () => {
    const params = useParams();
    const [crate, setCrate] = useState({} as CrateType)
    const [currentShownItems, setCurrentShownItems] = useState(Array<RewardType | undefined>())
    const [itemsHistory, setItemsHistory] = useState(Array<RewardType>())
    const cratesAnount = 1

    useEffect(() => {
        const crateFilteered = cratesArray.filter((crate: CrateType) => {
            return crate.link === params.name
        })[0]

        setCrate(crateFilteered)
    }, [])

    const openCrate = () => {
        let itemsDropped = Array<RewardType | undefined>()
        let bonusItem = undefined as RewardType | undefined
        for (let k = 0; k < cratesAnount; k++) {
            var number1 = Math.random() * 100; //card 1
            var number2 = Math.random() * 100; //card 2
            var number3 = Math.random() * 100; //card 3
            var number4 = Math.random() * 100; //card 4
            var bonusNumber = Math.random() * 100; //bonus dropped or not?

            for (var i = 0; i < reward1.length; i++) {
                if (number1 >= reward1[i].chance) {
                    itemsDropped.push(getItem(reward1[i].name, 'reward1Chance'))
                    break;
                }
            }

            for (var i = 0; i < reward2.length; i++) {
                if (number2 >= reward2[i].chance) {
                    itemsDropped.push(getItem(reward2[i].name, 'reward2Chance'))
                    break;
                }
            }

            for (var i = 0; i < reward3.length; i++) {
                if (number3 >= reward3[i].chance) {
                    itemsDropped.push(getItem(reward3[i].name, 'reward3Chance'))
                    break;
                }
            }

            for (var i = 0; i < reward4.length; i++) {
                if (number4 >= reward4[i].chance) {
                    itemsDropped.push(getItem(reward4[i].name, 'reward4Chance'))
                    break;
                }
            }

            if (bonusNumber >= 100 - bonusChance) {
                var newBonus = Math.random() * 100;
                for (var i = 0; i < rewardBonus.length; i++) {
                    if (newBonus >= rewardBonus[i].chance) {
                        bonusItem = getItem(rewardBonus[i].name, 'rewardBonusChance')
                        break;
                    }
                }
            }
        }
        console.log(itemsDropped, bonusItem)
        let itemsShuffled = itemsDropped
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        if(!_.isNil(bonusItem)){
            itemsShuffled.splice(2,0,bonusItem)
        }

        console.log(itemsShuffled)
        setCurrentShownItems(itemsShuffled)
    }

    const getItem = (quality: ITEMQUALITY, cardName: string): RewardType | undefined =>  {
        const dropMap = crate.dropMap[quality]
        const myVar = cardName as keyof RewardType;

        const sumChance = dropMap.reduce(
            (accumulator, curr: RewardType) => _.isNil(curr[myVar]) ? accumulator : accumulator + curr[myVar], 0
        );

        let randomN = randomNumber(0, sumChance);
        for (var i = 0; i < dropMap.length; i++) {
            if (!_.isNil(dropMap[i][myVar])) {
                randomN -= dropMap[i][myVar];
                if (randomN <= 0) {
                    return dropMap[i]
                }
            }
        }
        return undefined
    }

    return (
        <div>
            <button onClick={openCrate}>Roll</button>
            {currentShownItems?.map((reward: RewardType | undefined) => {
                if(!_.isNil(reward)){
                    return <img src={reward!.cardImage} alt="" />
                }
            })}
        </div>
    )
}

export default CratePage