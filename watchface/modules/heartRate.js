import { getScene, SCENE_AOD } from '@zos/app'
import * as hmUI from '@zos/ui';
import secondaryFont from '../fontData/secondaryFont';

export default function () {
    console.log("[modules]: heartrate module init")
    if (getScene() != SCENE_AOD) {
        hmUI.createWidget(hmUI.widget.IMG, {
            x: 20,
            y: 365,
            src: 'misc/hb.PNG'
        })
        hmUI.createWidget(hmUI.widget.TEXT_IMG, {
            x: 105,
            y: 365,
            font_array: secondaryFont,
            h_space: 1,
            align_h: hmUI.align.LEFT,
            type: hmUI.data_type.HEART
        })
    }
}