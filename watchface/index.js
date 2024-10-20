import batteryModule from "./modules/battery"
import clockModule from "./modules/clock"
import dateModule from "./modules/date"
import distanceModule from "./modules/distance"
import heartRateModule from "./modules/heartRate"

WatchFace({
  onInit() {
    clockModule()
    dateModule()
    batteryModule()
    heartRateModule()
    distanceModule()
  },

  build() {
  },

  onDestroy() {
    
  }
})
