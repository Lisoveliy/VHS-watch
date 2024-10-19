import * as hmSensor from '@zos/sensor'
import * as hmUI from '@zos/ui';
import secondaryFont from '../fontData/secondaryFont';

let distWg;
export default function(){
    console.log("[modules]: distance module init")
    let distance = new hmSensor.Distance();
    updateDistance(distance.getCurrent())
    distance.onChange(() => updateDistance(distance.getCurrent()))
    hmUI.createWidget(hmUI.widget.IMG, {
        x: 10,
        y: 405,
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
    dist = (dist * 1000).toFixed(0)
    distWg = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        x: 160,
        y: 405,
        type: hmUI.data_type.DISTANCE,
        font_array: secondaryFont,
        h_space: 1,
        align_h: hmUI.align.LEFT,
        text: dist
      })
}