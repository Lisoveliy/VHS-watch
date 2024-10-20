import * as hmSensor from '@zos/sensor'
import * as hmUI from '@zos/ui';
import secondaryFont from '../fontData/secondaryFont';

let distWg;
const moduleX = 50
const moduleY = 405
export default function(){
    console.log("[modules]: distance module init")
    let distance = new hmSensor.Distance();
    updateDistance(distance.getCurrent())
    distance.onChange(() => updateDistance(distance.getCurrent()))
    hmUI.createWidget(hmUI.widget.IMG, {
        x: moduleX,
        y: moduleY,
        src: 'misc/dist.PNG'
      })
}

function updateDistance(dist){
    if(!dist){
        dist = 0
    }
    if(distWg){
        hmUI.deleteWidget(distWg)
    }
    distWg = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        x: moduleX + 150,
        y: moduleY,
        type: hmUI.data_type.DISTANCE,
        font_array: secondaryFont,
        h_space: 1,
        align_h: hmUI.align.LEFT,
        text: dist
      })
}