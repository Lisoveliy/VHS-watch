import { getScene, SCENE_AOD } from '@zos/app'
import * as hmUI from '@zos/ui'
import fontArray from '../fontData/secondaryFont'

const moduleX = 310
const moduleY = 10
export default function () {
	console.log("[modules]: battery module init")
	if (getScene() != SCENE_AOD) {
		hmUI.createWidget(hmUI.widget.IMG, {
			x: moduleX,
			y: moduleY,
			src: 'date/perc.PNG'
		})
		hmUI.createWidget(hmUI.widget.TEXT_IMG, {
			x: moduleX - 85,
			y: moduleY,
			font_array: fontArray,
			h_space: 1,
			align_h: hmUI.align.RIGHT,
			type: hmUI.data_type.BATTERY
		})
	}
}