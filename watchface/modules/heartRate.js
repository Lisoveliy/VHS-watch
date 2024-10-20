import { getScene, SCENE_AOD } from '@zos/app'
import * as hmSensor from '@zos/sensor'
import * as hmUI from '@zos/ui';
import secondaryFont from '../fontData/secondaryFont';

let heartRateWg;
export default function () {
    console.log("[modules]: heartrate module init")
    if (getScene() != SCENE_AOD) {
        let heart = new hmSensor.HeartRate();
        updateHeartWidget(heart.getLast())
        heart.onCurrentChange(() => updateHeartWidget(heart.getCurrent()))
        hmUI.createWidget(hmUI.widget.IMG, {
            x: 10,
            y: 365,
            src: 'misc/hb.PNG'
        })
    }
}

function updateHeartWidget(hbpm) {
    if (!hbpm) {
        hbpm = 0
    }
    if (heartRateWg) {
        hmUI.deleteWidget(heartRateWg)
    }
    if (getScene() != SCENE_AOD) {
        heartRateWg = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
            x: 100,
            y: 365,
            type: hmUI.data_type.BATTERY,
            font_array: secondaryFont,
            h_space: 1,
            align_h: hmUI.align.LEFT,
            text: hbpm
        })
    }
}