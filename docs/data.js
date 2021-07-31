var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 0.05885675495019882,
        "pitch": 0.2647088911820621,
        "fov": 1.4525496255158559
      },
      "linkHotspots": [
        {
          "yaw": -0.08893823846590365,
          "pitch": 0.35405557231842977,
          "rotation": 6.283185307179586,
          "target": "1-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8747920027846163,
          "pitch": 0.10439832161720553,
          "title": "nnnnnn",
          "text": "nnhhdhfdhghdg"
        }
      ]
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 132.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.19242454793467978,
          "pitch": 0.02186829287011882,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
