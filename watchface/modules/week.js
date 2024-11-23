import { getScene, SCENE_AOD } from '@zos/app'
import * as hmSetting from '@zos/settings'
import * as hmUI from '@zos/ui'
import { ru, en } from '../fontData/weekData'

const moduleX = 225
const moduleY = 90

export default function () {
    console.log("[modules]: week module init")
    const language = hmSetting.getLanguage()
    if (getScene() != SCENE_AOD) {
        switch (language) {
            case 4: //ru-RU
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: moduleX,
                    y: moduleY,
                    week_en: ru,
                    week_tc: ru,
                    week_sc: ru
                })
                break;
            default:
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: moduleX,
                    y: moduleY,
                    week_en: en,
                    week_tc: en,
                    week_sc: en
                })
                break;
        }
    }
}