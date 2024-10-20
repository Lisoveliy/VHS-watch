import * as hmUI from '@zos/ui'
import fontArray from '../fontData/secondaryFont'
const moduleX = 225
const moduleY = 50

export default function () {
    console.log("[modules]: date module init")
    hmUI.createWidget(hmUI.widget.IMG_DATE, {
        day_startX: moduleX,
        day_startY: moduleY,
        day_align: hmUI.align.LEFT,
        day_space: 0,
        day_zero: 1,
        day_en_array: fontArray
    })
    hmUI.createWidget(hmUI.widget.IMG, {
        x: moduleX + 44,
        y: moduleY + 4,
        src: 'date/point.PNG'
    })
    hmUI.createWidget(hmUI.widget.IMG_DATE, {
        month_startX: moduleX + 60,
        month_startY: moduleY,
        month_align: hmUI.align.LEFT,
        month_space: 0,
        month_zero: 1,
        month_en_array: fontArray
    })
}