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
                    //_details = document.getElementById('details'),
                    _markerTitle = document.getElementById('marker-title'),
                    _markerDetails = document.getElementById('marker-details');

                
                    var markerData = {
                        "markers": [
                            { "name": "gown", "description": "single gown use", "position": { x: 0, y: 3, z: -4 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "cap", "description": "disposable cap", "position": { x: 0, y: 5, z: -4.5 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "textiles", "description": "non-recyclable Sms-Polypropylene textiles", "position": { x: 4, y: 2.5, z: -4 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "tray", "description": "reusable tray but with disposable components", "position": { x: -3, y: 2, z: -4 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "packaging", "description": "single-use packaging", "position": { x: -2.8, y: 1, z: -4 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "robot-console", "description": "robot console reusable", "position": { x: -4.5, y: 2, z: -4 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "robot-arm", "description": "robotic arm plastic wrap - municipal solid waste", "position": { x: -5, y: 4, z: -3.5 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "waste-bag", "description": "red waste bag", "position": { x: -4.5, y: 2, z: -4 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "surgical-robot", "description": "reusable surgical robot", "position": { x: -6, y: 7, z: -1.5 },"hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "bunny-suit",  "description": "bunny suit - disposable", "position": { x: -4, y: 3, z: 2 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "led-lighting",  "description": "overhead LED lighting", "position": { x: -5, y: 9, z: 0 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "cautery", "description": "monitoring equipment with cautery station", "position": { x: -1, y: 4, z: 4 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "drape-hoses", "description": "warm air drape hoses are reusable, the rest are not", "position": { x: -0.5, y: 3, z: 5 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "underlayer", "description": "disposable: polypropylene fabric underlayer fluid boundary absorbant plastic layer on top", "position": { x: 0, y: 1, z: 3 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "waste", "description": "municipal solid waste", "position": { x: 1.2, y: 3, z: 4 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "textiles2", "description": "non-recyclable Sms-Polypropylene textiles", "position": { x: 1, y: 2, z: 3 }, "hasDetails": false, "details_image": "", "details_text" : "" },
                            { "name": "AF6", "description": "AF6 image 1", "position": { x: 2, y: 2, z: 3 }, "hasDetails": true, "details_image": "images/AF6_image_1.jpeg", "details_text" : "" },

                        ]
                    }

                    //console.log("names: " + markerData.markers[0].name);

                    var infoMarkersContainer = document.createElement('a-entity');


                    for (var i = 0; i < markerData.markers.length; i++) {

                        console.log("names: " + markerData.markers[i].name);

                        infoPosition = markerData.markers[i].position;
                        infoText = markerData.markers[i].description;
                        infoTarget = markerData.markers[i].name;


                        eventEnter = "_event: mouseenter; _target: #" + infoTarget + "; visible: true";
                        eventLeave = "_event: mouseleave; _target: #" + infoTarget + "; visible: false";

                        var _infoMarkerEl = document.createElement("a-plane"),
                            _infoTextEl = document.createElement("a-text"),
                            _infoImageEl = document.createElement("a-plane"),
                            _hasDetails = markerData.markers[i].hasDetails;

                        // format info icon hotspot    
                        _infoMarkerEl.setAttribute("event-set__enter", eventEnter);
                        _infoMarkerEl.setAttribute("event-set__leave", eventLeave);
                        _infoMarkerEl.setAttribute("material", _infoMaterial);
                        _infoMarkerEl.setAttribute("class", _class);
                        _infoMarkerEl.setAttribute("position", infoPosition);
                        _infoMarkerEl.setAttribute("scale", _scale);
                        _infoMarkerEl.setAttribute("look-at", _lookAtCam);
                        _infoMarkerEl.setAttribute("src", _image);
                        _infoMarkerEl.setAttribute("cursor-listener");             
                        
                        if ( _hasDetails ) { // add image to a plane
                          var _image = markerData.markers[i].details_image;
                          _infoImageEl.setAttribute("id", infoTarget);
                          _infoImageEl.setAttribute("src" , _image);
                          _infoImageEl.setAttribute("material", _infoMaterial);
                          _infoImageEl.setAttribute("position", { x: 2, y: 0.55, z: 0 });
                          _infoImageEl.setAttribute("scale", {x:5, y:5, z:5});
                          
                          _infoMarkerEl.addEventListener('click', function(evt) {

                           var _detailsContainer = document.getElementById('details');
                            // _markerTitle = document.getElementById('marker-title');
                            // _markerDetails = document.getElementById('marker-details'); 

                            // _details.style.visibility =  "visible";
                            console.log('I was clicked at: ', evt.detail.intersection.point);

                            _detailsContainer.style.display = 'block' ;
                            _detailsContainer.style.display = 'block' ;

                            _detailsContainer.innerHTML = "<h2>"+ infoTarget +"</h2><img src="+ _image + ">";
                            // _markerTitle.innerHTML = this.;
                            // _markerDetails.innerHTML = infoText;


                        });

                          _infoMarkerEl.appendChild(_infoImageEl);

                        } else { // add text
                        
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
                      }

                       

                        infoMarkersContainer.appendChild(_infoMarkerEl);

                    }
                    scene.appendChild(infoMarkersContainer);
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