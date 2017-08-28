// Registering component in marker-component.js

AFRAME.registerComponent('markers', {

    init: function() {
        var data = document.getElementById('data').innerHTML;
        var markerData = JSON.parse(data);

        var scene = document.querySelector('a-scene');
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
            _markerTitle = document.getElementById('marker-title'),
            _markerDetails = document.getElementById('marker-details'),
            imageClicked = false,
            touchMsg = "Touch 'i' for more Information.";

        var infoMarkersContainer = document.createElement('a-entity');
        var _detailsContainer = document.getElementById('details-content');

        for (var i = 0; i < markerData.markers.length; i++) {

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



                _infoMarkerEl.addEventListener('click', function(evt) {

                    var _index = this.getAttribute("data-index");

                    var _imageSrc = markerData.markers[_index].details_image,
                        _imageDescription = markerData.markers[_index].description,
                        _imageName = markerData.markers[_index].name;

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

        //take out keyboard control
        document.querySelector('[camera]').removeAttribute('wasd-controls');

    },
});