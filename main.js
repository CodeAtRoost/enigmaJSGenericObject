import qSessionObject from "./qSessionObject";
import qGenericObject from "./qGenericObject";
import qChildObject from "./qChildObject";
import Filter from "./filter";
import getApp from "./qApp";

let bar = new qGenericObject({
      "qInfo": {
      "qId": "",
      "qType": "table"
    },
    "qMetaDef": {},
    "qHyperCubeDef": {
      "qDimensions": [
        {
          "qDef": {
            "qGrouping": "N",
            "qFieldDefs": [
              "Case Owner"
            ],
            "qFieldLabels": [
              "Case Owner"
            ],
            "qSortCriterias": [
              {
                "qSortByNumeric": 1,
                "qSortByAscii": 1,
                "qSortByLoadOrder": 1,
                "qExpression": {}
              }
            ],
            "qNumberPresentations": [],
            "qActiveField": 0,
            "autoSort": false,
            "cId": "CMRptr",
            "othersLabel": "Others"
          },
          "qOtherTotalSpec": {
            "qOtherMode": "OTHER_OFF",
            "qOtherCounted": {
              "qv": "10"
            },
            "qOtherLimit": {
              "qv": "0"
            },
            "qOtherLimitMode": "OTHER_GE_LIMIT",
            "qForceBadValueKeeping": true,
            "qApplyEvenWhenPossiblyWrongResult": true,
            "qOtherSortMode": "OTHER_SORT_DESCENDING",
            "qTotalMode": "TOTAL_OFF",
            "qReferencedExpression": {}
          },
          "qOtherLabel": {},
          "qTotalLabel": {},
          "qCalcCond": {},
          "qAttributeExpressions": [],
          "qAttributeDimensions": [],
          "qCalcCondition": {
            "qCond": {},
            "qMsg": {}
          }
        },
        {
          "qDef": {
            "qGrouping": "N",
            "qFieldDefs": [
              "Employee Status"
            ],
            "qFieldLabels": [
              "Status"
            ],
            "qSortCriterias": [
              {
                "qSortByNumeric": 1,
                "qSortByAscii": 1,
                "qSortByLoadOrder": 1,
                "qExpression": {}
              }
            ],
            "qNumberPresentations": [],
            "qActiveField": 0,
            "autoSort": true,
            "cId": "PkZUhCw",
            "othersLabel": "Others"
          },
          "qOtherTotalSpec": {
            "qOtherMode": "OTHER_OFF",
            "qOtherCounted": {
              "qv": "10"
            },
            "qOtherLimit": {
              "qv": "0"
            },
            "qOtherLimitMode": "OTHER_GE_LIMIT",
            "qForceBadValueKeeping": true,
            "qApplyEvenWhenPossiblyWrongResult": true,
            "qOtherSortMode": "OTHER_SORT_DESCENDING",
            "qTotalMode": "TOTAL_OFF",
            "qReferencedExpression": {}
          },
          "qOtherLabel": {},
          "qTotalLabel": {},
          "qCalcCond": {},
          "qAttributeExpressions": [],
          "qAttributeDimensions": [],
          "qCalcCondition": {
            "qCond": {},
            "qMsg": {}
          }
        }
      ],
      "qMeasures": [
        {
          "qLibraryId": "RWUpaMm",
          "qDef": {
            "qTags": [],
            "qGrouping": "N",
            "qNumFormat": {
              "qType": "U",
              "qnDec": 10,
              "qUseThou": 0
            },
            "qAccumulate": 0,
            "qActiveExpression": 0,
            "qExpressions": [],
            "autoSort": true,
            "cId": "vYuTnD"
          },
          "qSortBy": {
            "qSortByNumeric": 1,
            "qSortByAscii": 1,
            "qSortByLoadOrder": 1,
            "qExpression": {}
          },
          "qAttributeExpressions": [],
          "qAttributeDimensions": [],
          "qCalcCond": {},
          "qCalcCondition": {
            "qCond": {},
            "qMsg": {}
          },
          "showInPercent": false
        },
        {
          "qLibraryId": "MPcQeZ",
          "qDef": {
            "qTags": [],
            "qGrouping": "N",
            "qNumFormat": {
              "qType": "U",
              "qnDec": 10,
              "qUseThou": 0
            },
            "qAccumulate": 0,
            "qActiveExpression": 0,
            "qExpressions": [],
            "autoSort": true,
            "cId": "rPCps"
          },
          "qSortBy": {
            "qSortByNumeric": 1,
            "qSortByAscii": 1,
            "qSortByLoadOrder": 1,
            "qExpression": {}
          },
          "qAttributeExpressions": [],
          "qAttributeDimensions": [],
          "qCalcCond": {},
          "qCalcCondition": {
            "qCond": {},
            "qMsg": {}
          },
          "showInPercent": false
        },
        {
          "qLibraryId": "nmnRv",
          "qDef": {
            "qTags": [],
            "qGrouping": "N",
            "qNumFormat": {
              "qType": "F",
              "qnDec": 2,
              "qUseThou": 0,
              "qFmt": "#,##0",
              "qDec": ".",
              "qThou": ","
            },
            "qAccumulate": 0,
            "qActiveExpression": 0,
            "qExpressions": [],
            "autoSort": true,
            "cId": "jaSxtms"
          },
          "qSortBy": {
            "qSortByNumeric": 1,
            "qSortByAscii": 1,
            "qSortByLoadOrder": 1,
            "qExpression": {}
          },
          "qAttributeExpressions": [],
          "qAttributeDimensions": [],
          "qCalcCond": {},
          "qCalcCondition": {
            "qCond": {},
            "qMsg": {}
          },
          "showInPercent": false
        },
        {
          "qLibraryId": "vpjnFZ",
          "qDef": {
            "qTags": [],
            "qGrouping": "N",
            "qNumFormat": {
              "qType": "F",
              "qnDec": 2,
              "qUseThou": 0,
              "qFmt": "#,##0",
              "qDec": ".",
              "qThou": ","
            },
            "qAccumulate": 0,
            "qActiveExpression": 0,
            "qExpressions": [],
            "autoSort": false,
            "cId": "WTRLkj"
          },
          "qSortBy": {
            "qSortByNumeric": -1,
            "qSortByAscii": -1,
            "qSortByLoadOrder": 1,
            "qExpression": {}
          },
          "qAttributeExpressions": [],
          "qAttributeDimensions": [],
          "qCalcCond": {},
          "qCalcCondition": {
            "qCond": {},
            "qMsg": {}
          },
          "showInPercent": false
        },
        {
          "qLibraryId": "PXChPe",
          "qDef": {
            "qTags": [],
            "qGrouping": "N",
            "qNumFormat": {
              "qType": "U",
              "qnDec": 10,
              "qUseThou": 0
            },
            "qAccumulate": 0,
            "qActiveExpression": 0,
            "qExpressions": [],
            "autoSort": true,
            "cId": "NVmJfJH"
          },
          "qSortBy": {
            "qSortByNumeric": 1,
            "qSortByAscii": 1,
            "qSortByLoadOrder": 1,
            "qExpression": {}
          },
          "qAttributeExpressions": [],
          "qAttributeDimensions": [],
          "qCalcCond": {},
          "qCalcCondition": {
            "qCond": {},
            "qMsg": {}
          },
          "showInPercent": false
        },
        {
          "qLibraryId": "KKAuzYz",
          "qDef": {
            "qTags": [],
            "qGrouping": "N",
            "qNumFormat": {
              "qType": "U",
              "qnDec": 10,
              "qUseThou": 0,
              "qDec": "."
            },
            "qAccumulate": 0,
            "qActiveExpression": 0,
            "qExpressions": [],
            "autoSort": true,
            "cId": "zvXKm",
            "numFormatFromTemplate": true
          },
          "qSortBy": {
            "qSortByNumeric": -1,
            "qSortByLoadOrder": 1,
            "qExpression": {}
          },
          "qAttributeExpressions": [],
          "qAttributeDimensions": [],
          "qCalcCond": {},
          "qCalcCondition": {
            "qCond": {},
            "qMsg": {}
          }
        },
        {
          "qLibraryId": "QYLgZ",
          "qDef": {
            "qTags": [],
            "qGrouping": "N",
            "qNumFormat": {
              "qType": "U",
              "qnDec": 10,
              "qUseThou": 0,
              "qDec": "."
            },
            "qAccumulate": 0,
            "qActiveExpression": 0,
            "qExpressions": [],
            "autoSort": true,
            "cId": "LJUHvp",
            "numFormatFromTemplate": true
          },
          "qSortBy": {
            "qSortByNumeric": -1,
            "qSortByLoadOrder": 1,
            "qExpression": {}
          },
          "qAttributeExpressions": [],
          "qAttributeDimensions": [],
          "qCalcCond": {},
          "qCalcCondition": {
            "qCond": {},
            "qMsg": {}
          }
        },
        {
          "qLibraryId": "eqZjE",
          "qDef": {
            "qTags": [],
            "qGrouping": "N",
            "qNumFormat": {
              "qType": "U",
              "qnDec": 10,
              "qUseThou": 0
            },
            "qAccumulate": 0,
            "qActiveExpression": 0,
            "qExpressions": [],
            "autoSort": true,
            "cId": "BCDhRf"
          },
          "qSortBy": {
            "qSortByNumeric": 1,
            "qSortByAscii": 1,
            "qSortByLoadOrder": 1,
            "qExpression": {}
          },
          "qAttributeExpressions": [],
          "qAttributeDimensions": [],
          "qCalcCond": {},
          "qCalcCondition": {
            "qCond": {},
            "qMsg": {}
          },
          "showInPercent": false
        }
      ],
      "qInterColumnSortOrder": [
        5,
        0,
        1,
        2,
        3,
        4,
        6,
        7,
        8,
        9
      ],
      "qSuppressMissing": true,
      "qInitialDataFetch": [],
      "qReductionMode": "N",
      "qMode": "S",
      "qPseudoDimPos": -1,
      "qNoOfLeftDims": -1,
      "qMaxStackedCells": 5000,
      "qCalcCond": {},
      "qTitle": {},
      "qCalcCondition": {
        "qCond": {},
        "qMsg": {}
      },
      "qLayoutExclude": {},
      "columnOrder": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "columnWidths": [
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1
      ]
    },
    "showTitles": true,
    "title": "Resource Details",
    "subtitle": "",
    "footnote": "",
    "totals": {
      "show": true,
      "position": "noTotals"
    },
    "visualization": "table"
 
  
  });

let sheet = new qGenericObject({
			"title":"Test",
			"description":"DEscription",
			"qInfo": {
				
				"qType": "sheet"
			},	
			"qExtendsId": "",
			"qMetaDef": {},
			"qChildListDef": {
			"qData": {
          "title": "/title",
          "description": "/description",
          "meta": "/meta",
          "order": "/order",
          "id": "/qInfo/qId",
          "type": "/qInfo/qType",
          "lb": "/qListObjectDef",
          "hc": "/qHyperCubeDef"
        }
			},
			"qMetaDef": {
				"title": "Test",
				"description": "Description"
			},
			"rank": 3,
			"columns": 24,
			"rows": 12
		});
sheet.open().then(function(){
	
sheet.object.createChild(bar.properties).then(function(qInfo,qReturn){
console.log(qInfo);
//getApp.doSave();

sheet.object.getFullPropertyTree().then(function(qPropEntry){
	qPropEntry["qProperty"]["cells"]=[{
						"name": qInfo.id,
						"type": "table",
						"col": 0,
						"row": 0,
						"colspan": 24,
						"rowspan": 10
					}];
					
		sheet.object.setFullPropertyTree(qPropEntry).then(function(){
			
			getApp.then((app) => {
			return app.doSave ().then(() => {
			  console.log("App Saved");
			});
		  });

		});
	
});
});
});


  
  
  