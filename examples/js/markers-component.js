// Registering component in marker-component.js

AFRAME.registerComponent('markers', {

    init: function() {

        var scene = document.querySelector('a-scene');
        // in a loop create a-plane, set events, add class, add material, link to image, set position, set scale, make it look at camera
        var checkPointsContainer,
            infoText,
            infoTarget,
            eventEnter,
            eventLeave,
            infoMaterial = "shader: flat; transparent: true; side: double",
            markerClass = "marker",
            image = "#info",
            scale = { x: 0.5, y: 0.5, z: 0.5 },
            lookAtCam = "[camera]",
            alignment = "center",
            black = "#000",
            white = "#ffffff",
            labelPosition = { x: 4.55, y: 0.55, z: 0 },
            textGeometry = "primitive: plane; width: 7; height: 3",
            textGeometryImage = "primitive: plane; width: 4; height: 3",
            textMaterial = "color: #FFF; side: double",
            textWidth = "6",
            textWrapCount = "20",
            offset = 2,
            visible = "false",
            //_details = document.getElementById('details'),
            _markerTitle = document.getElementById('marker-title'),
            _markerDetails = document.getElementById('marker-details'),
            imageClicked = false,
            touchMsg = "Touch 'i' for more Information.";


        var markerData = {
            "markers": [
                { "name": "gown", "description": "single gown use", "position": { x: 0, y: 3, z: -4 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "cap", "description": "disposable cap", "position": { x: 0, y: 5, z: -4.5 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "textiles", "description": "non-recyclable Sms-Polypropylene textiles", "position": { x: 4, y: 2.5, z: -4 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "tray", "description": "reusable tray but with disposable components", "position": { x: -3, y: 2, z: -4 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "packaging", "description": "single-use packaging", "position": { x: -2.8, y: 1, z: -4 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "robot-console", "description": "robot console reusable", "position": { x: -4.5, y: 2, z: -4 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "robot-arm", "description": "robotic arm plastic wrap - municipal solid waste", "position": { x: -5, y: 4, z: -3.5 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "waste-bag", "description": "red waste bag", "position": { x: -4.5, y: 2, z: -4 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "surgical-robot", "description": "reusable surgical robot", "position": { x: -6, y: 7, z: -1.5 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "bunny-suit", "description": "bunny suit - disposable", "position": { x: -4, y: 3, z: 2 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "led-lighting", "description": "overhead LED lighting", "position": { x: -5, y: 9, z: 0 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "cautery", "description": "monitoring equipment with cautery station", "position": { x: -1, y: 4, z: 4 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "drape-hoses", "description": "warm air drape hoses are reusable, the rest are not", "position": { x: -0.5, y: 3, z: 5 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "underlayer", "description": "disposable: polypropylene fabric underlayer fluid boundary absorbant plastic layer on top", "position": { x: 0, y: 1, z: 3 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "waste", "description": "municipal solid waste", "position": { x: 1.2, y: 3, z: 4 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "textiles2", "description": "non-recyclable Sms-Polypropylene textiles", "position": { x: 1, y: 2, z: 3 }, "hasDetails": false, "details_image": "", "details_text": "" },
                { "name": "AF6", "description": "Image of objects on surface", "position": { x: 1, y: 3, z: -4 }, "hasDetails": true, "details_image": "images/AF6_image_1.jpeg", "details_text": "" },
                { "name": "BF6", "description": "Items on tray", "position": { x: -5, y: 3, z: -1.5 }, "hasDetails": true, "details_image": "images/BF6_image_2.jpg", "details_text": "" },
                { "name": "DAU", "description": "Items on tray", "position": { x: -5, y: 3, z: -1.5 }, "hasDetails": true, "details_image": "images/DAu_image_4.jpg", "details_text": "" },
                { "name": "EAU", "description": "Items on tray", "position": { x: -5, y: 3, z: -1.5 }, "hasDetails": true, "details_image": "images/EAu_image_3.jpg.jpg", "details_text": "" },
            ]
        }
        //console.log("names: " + markerData.markers[0].name);

        var infoMarkersContainer = document.createElement('a-entity');
        var _detailsContainer = document.getElementById('details-content');

        for (var i = 0; i < markerData.markers.length; i++) {

            //console.log("names: " + markerData.markers[i].name);

            var _infoPosition = markerData.markers[i].position;
            var _infoText = markerData.markers[i].description;
            var _infoTarget = markerData.markers[i].name;

            var _eventEnter = "_event: mouseenter; _target: #" + _infoTarget + "; visible: true";
            var _eventLeave = "_event: mouseleave; _target: #" + _infoTarget + "; visible: false";

            var _infoMarkerEl = document.createElement("a-plane"),
                _infoTextEl = document.createElement("a-text"),
                _infoImageEl = document.createElement("a-plane"),
                _hasDetails = markerData.markers[i].hasDetails; //does the position have images or more data

            


            // format info icon hotspot    
            _infoMarkerEl.setAttribute("event-set__enter", _eventEnter);
            _infoMarkerEl.setAttribute("event-set__leave", _eventLeave);
            _infoMarkerEl.setAttribute("material", infoMaterial);
            _infoMarkerEl.setAttribute("class", markerClass);
            _infoMarkerEl.setAttribute("position", _infoPosition);
            _infoMarkerEl.setAttribute("scale", scale);
            _infoMarkerEl.setAttribute("look-at", lookAtCam);
            _infoMarkerEl.setAttribute("src", image);
            //_infoMarkerEl.setAttribute("cursor-listener");


            _infoTextEl.setAttribute("id", _infoTarget);
            _infoTextEl.setAttribute("align", alignment);
            _infoTextEl.setAttribute("color", black);
            _infoTextEl.setAttribute("visible", visible);
            _infoTextEl.setAttribute("position", labelPosition);
            _infoTextEl.setAttribute("material", white);
            _infoTextEl.setAttribute("width", textWidth);
            _infoTextEl.setAttribute("wrap-count", textWrapCount);

            if (_hasDetails) { // make message for more info marker 


                _infoTextEl.setAttribute("value", touchMsg);
                _infoTextEl.setAttribute("geometry", textGeometryImage);

                _infoMarkerEl.setAttribute("data-index", i);
                
                console.log("index: " , _infoMarkerEl.getAttribute("data-index"));

                _infoMarkerEl.addEventListener('click', function(evt) {
                    //console.log('I was clicked at: ', evt.detail.intersection.point);
                var _index = this.getAttribute("data-index");    
                
                console.log("clicked index: " , _index);
                    var _imageSrc = markerData.markers[_index].details_image,
                        _imageDescription = markerData.markers[_index].description,
                        _imageName = markerData.markers[_index].name;

                    console.log("image source: ", _imageSrc);

                    imageClicked = true;

                    if (imageClicked) {

                        _detailsContainer.innerHTML = "<span id='close'>X</span><h2>" + _imageName + "</h2><p>" + _imageDescription + "</p><img src=" + _imageSrc + ">";
                        _detailsContainer.parentNode.className = 'show';

                        //close button on info panel
                        var closeButton = document.getElementById('close');
                        closeButton.addEventListener('click', function(evt) {

                            this.parentNode.parentNode.className = 'hidden';
                            _detailsContainer.innerHTML = "";
                            return false;

                        });
                    } else {
                        _detailsContainer.innerHTML = "";
                    }
                });

                _infoMarkerEl.appendChild(_infoTextEl);

            } else { // add text

                _infoTextEl.setAttribute("value", _infoText);
                _infoTextEl.setAttribute("geometry", textGeometry);

                _infoMarkerEl.appendChild(_infoTextEl);

                _infoMarkerEl.addEventListener('click', function(evt) {
                    imageClicked = false;


                    _detailsContainer.innerHTML = "";
                    _detailsContainer.parentNode.className = 'hidden';
                });
            }
            infoMarkersContainer.appendChild(_infoMarkerEl);
        }
        scene.appendChild(infoMarkersContainer);

    },

    update: function() {




    },
});

// const infoPositions = [
//     { x: 0, y: 3, z: -4 }, // gown
//     { x: 0, y: 5, z: -4.5 }, //  cap               
//     { x: 4, y: 2.5, z: -4 }, //  textiles            
//     { x: -3, y: 2, z: -4 }, //tray
//     { x: -2.8, y: 1, z: -4 }, //packaging
//     { x: -4.5, y: 2, z: -4 }, //robot console
//     { x: -5, y: 4, z: -3.5 }, //robot arm
//     { x: -5, y: 2.1, z: -0.5 }, //red waste bag
//     { x: -6, y: 7, z: -1.5 }, //surgical robot
//     { x: -4, y: 3, z: 2 }, //bunny suit
//     { x: -5, y: 9, z: 0 }, //  LED lighting
//     { x: -1, y: 4, z: 4 }, //cautery
//     { x: -0.5, y: 3, z: 5 }, //drape hoses
//     { x: 0, y: 1, z: 3 }, //fabric underlayer
//     { x: 1.2, y: 3, z: 4 }, //solid waste 
//     { x: 1, y: 2, z: 3 }, //textiles 2
// ];

// const infoTextArray = [
//     "single gown use", //gown 
//     "disposable cap", //cap
//     "non-recyclable Sms-Polypropylene textiles", //textiles
//     "reusable tray but with disposable components", //tray
//     "single-use packaging", //packaging
//     "robot console reusable", //robot console
//     "robotic arm plastic wrap - municipal solid waste", //robot arm
//     "red waste bag", //red waste bag
//     "reusable surgical robot", //surgical robot
//     "bunny suit - disposable", //bunny suit
//     "overhead LED lighting", //LED lighting
//     "monitoring equipment with cautery station", //cautery
//     "warm air drape hoses are reusable, the rest are not", //drape hoses
//     "disposable: polypropylene fabric underlayer fluid boundary absorbant plastic layer on top", // fabric underlayer
//     "municipal solid waste", //solid waste
//     "non-recyclable Sms-Polypropylene textiles", //textiles 2
// ];

// const infoTargetNames = [
//     "gown",
//     "cap",
//     "textiles",
//     "tray",
//     "packaging",
//     "robot-console",
//     "robot-arm",
//     "waste-bag",
//     "surgical-robot",
//     "bunny-suit",
//     "led-lighting",
//     "cautery",
//     "drape-hoses",
//     "underlayer",
//     "waste",
//     "textiles2",
// ];