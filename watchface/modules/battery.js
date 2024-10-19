import * as hmSensor from '@zos/sensor'
import * as hmUI from '@zos/ui'
import fontArray from '../fontData/secondaryFont'

let batteryWg;

export default function(){
    console.log("[modules]: battery module init")
    let battery = new hmSensor.Battery()
    updateBatteryWidget(battery.getCurrent())
    battery.onChange(() => updateBatteryWidget(battery.getCurrent()))
    hmUI.createWidget(hmUI.widget.IMG, {
        x: 355,
        y: 10,
        src: 'date/perc.PNG'
      })
}
function updateBatteryWidget(batteryPercentage){
      if(batteryWg){
        hmUI.deleteWidget(batteryWg)
      }
      batteryWg = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        x: 270,
        y: 10,
        type: hmUI.data_type.BATTERY,
        font_array: fontArray,
        h_space: 1,
        align_h: hmUI.align.RIGHT,
        text: batteryPercentage
      })
}