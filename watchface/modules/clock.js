import * as hmUI from '@zos/ui'
import { getScene, SCENE_AOD } from '@zos/app'
import timeArray from '../fontData/primaryFont'

export default function () {
  console.log("[modules]: clock module init")
  hmUI.createWidget(hmUI.widget.IMG_TIME, {
    hour_zero: 1, // Whether to make up zero.
    hour_startX: 10,
    hour_startY: 50,
    hour_array: timeArray,
    hour_space: 1,
    hour_align: hmUI.align.CENTER_H | hmUI.align.CENTER_V, //Я хз работает ли это
    show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONAL_AOD
  })
  hmUI.createWidget(hmUI.widget.IMG_TIME, {
    minute_startX: 118, //120 - space on center(2)
    minute_startY: 170,
    minute_array: timeArray,
    minute_space: 1,
    minute_align: hmUI.align.CENTER_H | hmUI.align.CENTER_V,
    show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONAL_AOD
  })
  if (getScene() != SCENE_AOD) {
    hmUI.createWidget(hmUI.widget.IMG_TIME, {
      second_startX: 220,
      second_startY: 290,
      second_array: timeArray,
      second_space: 1,
      second_align: hmUI.align.CENTER_H | hmUI.align.CENTER_V
    })
  }
}