// Registering component in marker-component.js

AFRAME.registerComponent('markers', {

    init: function() {


        var scene = document.querySelector('a-scene');
        // in a loop create a-plane, set events, add class, add material, link to image, set position, set scale, make it look at camera
        var checkPointsContainer,
            infoPosition,
            infoText,
            infoTarget,
            eventEnter,
            eventLeave,
            _infoMaterial = "shader: flat; transparent: true; side: double",
            _class = "marker",
            _image = "#info",
            _scale = { x: 0.5, y: 0.5, z: 0.5 },
            _lookAtCam = "[camera]",
            _alignment = "center",
            _black = "#000",
            _white = "#ffffff",
            _infoPosition = { x: 4, y: 0.55, z: 0 },
            _textGeometry = "primitive: plane; width: 7; height: 3",
            _textMaterial = "color: #FFF; side: double",
            _textWidth = "6",
            _textWrapCount = "20",
            _offset = 2,
            _visible = "false",
            _details = document.getElementById('details'),
            _markerTitle = document.getElementById('marker-title'),
            _markerDetails = document.getElementById('marker-details'); 


        const infoPositions = [
            { x: 0, y: 3, z: -4 }, // gown
            { x: 0, y: 5, z: -4.5 }, //  cap               
            { x: 4, y: 2.5, z: -4 }, //  textiles            
            { x: -3, y: 2, z: -4 }, //tray
            { x: -2.8, y: 1, z: -4 }, //packaging
            { x: -4.5, y: 2, z: -4 }, //robot console
            { x: -5, y: 4, z: -3.5 }, //robot arm
            { x: -5, y: 2.1, z: -0.5 }, //red waste bag
            { x: -6, y: 7, z: -1.5 }, //surgical robot
            { x: -4, y: 3, z: 2 }, //bunny suit
            { x: -5, y: 9, z: 0 }, //  LED lighting
            { x: -1, y: 4, z: 4 }, //cautery
            { x: -0.5, y: 3, z: 5 }, //drape hoses
            { x: 0, y: 1, z: 3 }, //fabric underlayer
            { x: 1.2, y: 3, z: 4 }, //solid waste 
            { x: 1, y: 2, z: 3 }, //textiles 2
        ];

        const infoTextArray = [
            "single gown use", //gown 
            "disposable cap", //cap
            "non-recyclable Sms-Polypropylene textiles", //textiles
            "reusable tray but with disposable components", //tray
            "single-use packaging", //packaging
            "robot console reusable", //robot console
            "robotic arm plastic wrap - municipal solid waste", //robot arm
            "red waste bag", //red waste bag
            "reusable surgical robot", //surgical robot
            "bunny suit - disposable", //bunny suit
            "overhead LED lighting", //LED lighting
            "monitoring equipment with cautery station", //cautery
            "warm air drape hoses are reusable, the rest are not", //drape hoses
            "disposable: polypropylene fabric underlayer fluid boundary absorbant plastic layer on top", // fabric underlayer
            "municipal solid waste", //solid waste
            "non-recyclable Sms-Polypropylene textiles", //textiles 2
        ];

        const infoTargetNames = [
            "gown",
            "cap",
            "textiles",
            "tray",
            "packaging",
            "robot-console",
            "robot-arm",
            "waste-bag",
            "surgical-robot",
            "bunny-suit",
            "led-lighting",
            "cautery",
            "drape-hoses",
            "underlayer",
            "waste",
            "textiles2",
        ];

        var infoMarkersContainer = document.createElement('a-entity');


        for (var i = 0; i < infoPositions.length; i++) {

            infoPosition = infoPositions[i];
            infoText = infoTextArray[i];
            infoTarget = infoTargetNames[i];
            eventEnter = "_event: mouseenter; _target: #" + infoTarget + "; visible: true";
            eventLeave = "_event: mouseleave; _target: #" + infoTarget + "; visible: false";

            var _infoMarkerEl = document.createElement("a-plane"),
                _infoTextEl = document.createElement("a-text");


            _infoMarkerEl.setAttribute("event-set__enter", eventEnter);
            _infoMarkerEl.setAttribute("event-set__leave", eventLeave);
            _infoMarkerEl.setAttribute("material", _infoMaterial);
            _infoMarkerEl.setAttribute("class", _class);
            _infoMarkerEl.setAttribute("position", infoPosition);
            _infoMarkerEl.setAttribute("scale", _scale);
            _infoMarkerEl.setAttribute("look-at", _lookAtCam);
            _infoMarkerEl.setAttribute("src", _image);
            _infoMarkerEl.setAttribute("cursor-listener");


            _infoTextEl.setAttribute("id", infoTarget);
            _infoTextEl.setAttribute("value", infoText);
            _infoTextEl.setAttribute("align", _alignment);
            _infoTextEl.setAttribute("color", _black);
            _infoTextEl.setAttribute("visible", _visible);
            _infoTextEl.setAttribute("position", _infoPosition);
            _infoTextEl.setAttribute("geometry", _textGeometry);
            _infoTextEl.setAttribute("material", _white);
            _infoTextEl.setAttribute("width", _textWidth);
            _infoTextEl.setAttribute("wrap-count", _textWrapCount);

            _infoMarkerEl.appendChild(_infoTextEl);
            
            _infoMarkerEl.addEventListener('click', function(evt) {

               // _details = document.getElementById('details');
               // _markerTitle = document.getElementById('marker-title');
               // _markerDetails = document.getElementById('marker-details'); 

              // _details.style.visibility =  "visible";
              // //console.log('I was clicked at: ', evt.detail.intersection.point);
              // _markerTitle.innerHTML = this.;
              // _markerDetails.innerHTML = infoText;

              
            }); 

            infoMarkersContainer.appendChild(_infoMarkerEl);

        }
        scene.appendChild(infoMarkersContainer);
    },

});