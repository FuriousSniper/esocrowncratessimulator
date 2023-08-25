import { RewardType } from "../../../types/common/main";
import { reward1Chances, reward3Chances, reward4Chances  } from "../chances";
import { ITEMQUALITY, ITEMTYPE } from "../enums";

const genericFineRewards: RewardType[] = [
    {
        name: "Crown Combat Mystic's Stew",
        cardImage: '/images/crates/genericFine/Crown_Combat_Mystics_Stew.png',
        quality: ITEMQUALITY.fine,
        type: ITEMTYPE.consumable,
        gems: 1,
        reward1Chance:reward1Chances.fine.consumable,
        reward3Chance:reward3Chances.fine.normal,
    },
    {
        name: "Crown Lesson: Riding Capacity",
        cardImage: '/images/crates/genericFine/Crown_Lesson_Riding_Capacity.png',
        quality: ITEMQUALITY.fine,
        type: ITEMTYPE.upgrade,
        gems: 1,
        reward1Chance:reward1Chances.fine.upgrade,
        reward3Chance:reward3Chances.fine.normal,
    },
    {
        name: "Crown Lesson: Riding Speed",
        cardImage: '/images/crates/genericFine/Crown_Lesson_Riding_Speed.png',
        quality: ITEMQUALITY.fine,
        type: ITEMTYPE.upgrade,
        gems: 1,
        reward1Chance:reward1Chances.fine.upgrade,
        reward3Chance:reward3Chances.fine.normal,
    },
    {
        name: "Crown Lesson: Riding Stamina",
        cardImage: '/images/crates/genericFine/Crown_Lesson_Riding_Stamina.png',
        quality: ITEMQUALITY.fine,
        type: ITEMTYPE.upgrade,
        gems: 1,
        reward1Chance:reward1Chances.fine.upgrade,
        reward3Chance:reward3Chances.fine.normal,
    },
    {
        name: "Crown Repair Kit",
        cardImage: '/images/crates/genericFine/Crown_Repair_Kit.png',
        quality: ITEMQUALITY.fine,
        type: ITEMTYPE.consumable,
        gems: 1,
        reward1Chance:reward1Chances.fine.consumable,
        reward3Chance:reward3Chances.fine.normal,
    },
    {
        name: "Crown Soul Gem",
        cardImage: '/images/crates/genericFine/Crown_Soul_Gem.png',
        quality: ITEMQUALITY.fine,
        type: ITEMTYPE.consumable,
        gems: 1,
        reward1Chance:reward1Chances.fine.consumable,
        reward3Chance:reward3Chances.fine.normal,
    },
    {
        name: "Crown Stout Magic Liqueur",
        cardImage: '/images/crates/genericFine/Crown_Stout_Magic_Liqueur.png',
        quality: ITEMQUALITY.fine,
        type: ITEMTYPE.consumable,
        gems: 1,
        reward1Chance:reward1Chances.fine.consumable,
        reward3Chance:reward3Chances.fine.normal,
    },
    {
        name: "Crown Vigorous Ragout",
        cardImage: '/images/crates/genericFine/Crown_Vigorous_Ragout.png',
        quality: ITEMQUALITY.fine,
        type: ITEMTYPE.consumable,
        gems: 1,
        reward1Chance:reward1Chances.fine.consumable,
        reward3Chance:reward3Chances.fine.normal,
    },
    {
        name: "Crown Vigorous Tincture",
        cardImage: '/images/crates/genericFine/Crown_Vigorous_Tincture.png',
        quality: ITEMQUALITY.fine,
        type: ITEMTYPE.consumable,
        gems: 1,
        reward1Chance:reward1Chances.fine.consumable,
        reward3Chance:reward3Chances.fine.normal,
    }
    ,
    {
        name: "Gold Coast Experience Scroll",
        cardImage: '/images/crates/genericFine/Gold_Coast_Experience_Scroll.png',
        quality: ITEMQUALITY.fine,
        type: ITEMTYPE.consumable,
        gems: 1,
        reward1Chance:reward1Chances.fine.scroll,
        reward4Chance:reward4Chances.fine.scroll,
    }
]

export default genericFineRewards