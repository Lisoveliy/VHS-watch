import * as hmUI from '@zos/ui'
import fontArray from '../fontData/secondaryFont'
export default function () {
    console.log("[modules]: date module init")
    hmUI.createWidget(hmUI.widget.IMG_DATE, {
        day_startX: 10,
        day_startY: 10,
        day_align: hmUI.align.LEFT,
        day_space: 0,
        day_zero: 1,
        day_en_array: fontArray
    })
    hmUI.createWidget(hmUI.widget.IMG, {
        x: 54,
        y: 14,
        src: 'date/point.PNG'
    })
    hmUI.createWidget(hmUI.widget.IMG_DATE, {
        month_startX: 70,
        month_startY: 10,
        month_align: hmUI.align.LEFT,
        month_space: 0,
        month_zero: 1,
        month_en_array: fontArray
    })
}