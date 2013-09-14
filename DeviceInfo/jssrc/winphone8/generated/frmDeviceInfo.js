//Form JS File
function addWidgetsfrmDeviceInfo() {
    var lblHeaderWin = new kony.ui.Label({
        "id": "lblHeaderWin",
        "isVisible": true,
        "text": "DeviceInfo",
        "skin": "sknLblHeaderwin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var segDeviceInfobox = new kony.ui.Box({
        "id": "segDeviceInfobox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 24
    }, {});
    var segDeviceInfo = new kony.ui.SegmentedUI2({
        "id": "segDeviceInfo",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbox1930040990146631": "hbox1930040990146631",
            "lblKey": "lblKey",
            "lblVal": "lblVal"
        },
        "rowTemplate": segDeviceInfobox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "sknSeg2NormalSampleApp",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24
    }, {});
    var lblKey = new kony.ui.Label({
        "id": "lblKey",
        "isVisible": true,
        "skin": "sknLblFontBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [2, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lblVal = new kony.ui.Label({
        "id": "lblVal",
        "isVisible": true,
        "skin": "sknLblFontGrey"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    var hbox1930040990146631 = new kony.ui.Box({
        "id": "hbox1930040990146631",
        "isVisible": true,
        "skin": "sknHbxTrans",
        "focusSkin": "sknHbxTrans",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 38,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990146631.add(
    lblKey, lblVal);
    segDeviceInfobox.add(
    hbox1930040990146631);
    frmDeviceInfo.add(
    lblHeaderWin, segDeviceInfo);
};

function frmDeviceInfoGlobals() {
    var MenuId = [];
    frmDeviceInfo = new kony.ui.Form2({
        "id": "frmDeviceInfo",
        "title": "DeviceInfo",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmDeviceInfo
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["segDeviceInfo", "lblHeaderWin"]
    });
};