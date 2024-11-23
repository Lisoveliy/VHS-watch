import batteryModule from "./modules/battery"
import clockModule from "./modules/clock"
import dateModule from "./modules/date"
import distanceModule from "./modules/distance"
import heartRateModule from "./modules/heartRate"
import weekModule from "./modules/week"

WatchFace({
  onInit() {
    clockModule()
    dateModule()
    batteryModule()
    heartRateModule()
    distanceModule()
    weekModule()
  },

  build() {
  },

  onDestroy() {
    
  }
})
