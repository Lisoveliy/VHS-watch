import { getScene, SCENE_AOD } from '@zos/app'
import * as hmUI from '@zos/ui';
import secondaryFont from '../fontData/secondaryFont';

const moduleX = 50
const moduleY = 405
export default function () {
    console.log("[modules]: distance module init")
    if (getScene() != SCENE_AOD) {
        hmUI.createWidget(hmUI.widget.IMG, {
            x: moduleX,
            y: moduleY,
            src: 'misc/dist.PNG'
        })
        hmUI.createWidget(hmUI.widget.TEXT_IMG, {
            x: moduleX + 150,
            y: moduleY,
            font_array: secondaryFont,
            h_space: 1,
            align_h: hmUI.align.LEFT,
            type: hmUI.data_type.DISTANCE
        })
    }
}