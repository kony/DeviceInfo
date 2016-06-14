/*****************************************************************
 *	Name    : deviceInfo
 *	Author  : Kony
 *	Purpose : To display the device information on the form.
 ******************************************************************/
function deviceInfo() {
    var deviceInfo = kony.os.deviceInfo();
    var details = new Array();
    if (kony.os.deviceInfo().name == "android") {
        details.push({
            lblKey: "Device ID",
            lblVal: "" + kony.os.deviceInfo().deviceid
        });
        details.push({
            lblKey: "Name",
            lblVal: "" + kony.os.deviceInfo().name
        });
        details.push({
            lblKey: "Model",
            lblVal: "" + kony.os.deviceInfo().model
        });
        details.push({
            lblKey: "APILevel",
            lblVal: "" + kony.os.deviceInfo().APILevel
        });
        details.push({
            lblKey: "Version",
            lblVal: "" + kony.os.deviceInfo().version
        });
        details.push({
            lblKey: "OS Version",
            lblVal: "" + kony.os.deviceInfo().osversion
        });
        details.push({
            lblKey: "DeviceWidth",
            lblVal: "" + kony.os.deviceInfo().deviceWidth
        });
        details.push({
            lblKey: "DeviceHeight",
            lblVal: "" + kony.os.deviceInfo().deviceHeight
        });
        details.push({
            lblKey: "FreeMemory",
            lblVal: "" + kony.os.freeMemory()
        });
        details.push({
            lblKey: "UserAgent",
            lblVal: "" + kony.os.userAgent()
        });
        details.push({
            lblKey: "AccelerometerSupport",
            lblVal: "" + kony.os.hasAccelerometerSupport()
        });
        details.push({
            lblKey: "GPSSupport",
            lblVal: "" + kony.os.hasGPSSupport()
        });
        details.push({
            lblKey: "OrientationSupport",
            lblVal: "" + kony.os.hasOrientationSupport()
        });
        details.push({
            lblKey: "CameraSupport",
            lblVal: "" + kony.os.hasCameraSupport()
        });
        details.push({
            lblKey: "TouchSupport",
            lblVal: "" + kony.os.hasTouchSupport()
        });
    } else {
        for (var key in deviceInfo) {
            if ((key == "model" || key == "deviceid") && (kony.os.deviceInfo().name == "thinclient")) {
                //Do not include this Key-Value pair for thinclient
            } else {
                var detail = new Object();
                detail.lblKey = "" + key;
                detail.lblVal = "" + deviceInfo[key];
                details.push(detail);
            }
        }
        details.push({
            lblKey: "freeMemory",
            lblVal: "" + kony.os.freeMemory()
        });
        details.push({
            lblKey: "userAgent",
            lblVal: "" + kony.os.userAgent()
        });
    }
    frmDeviceInfo.segDeviceInfo.setData(details);
}