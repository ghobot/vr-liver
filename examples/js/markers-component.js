// Registering component in marker-component.js


AFRAME.registerComponent('marker', {

    init: function() {

        // <a-plane event-set__enter="_event: mouseenter; _target: #text-gown; visible: true" event-set__leave="_event: mouseleave; _target: #text-gown; visible: false" class="marker" material="shader: flat; transparent: true; side: double" src="#info" position="1 2 -6" scale=".5 .5 .5" look-at="[camera]" data-desc="single gown use">
        //        <a-text id="text-gown" value="single gown use" align="center" color="#000" visible="false" position="4 0.55 0.55" geometry="primitive: plane; width: 6" material="color: #FFF" width="6" wrap-count="20" ></a-text>
        //    </a-plane>

        var scene = document.querySelector('a-scene');

        // in a loop create a-plane, set events, add class, add material, link to image, set position, set scale, make it look at camera

        var checkPointsContainer,
            infoPosition,
            infoText,
            infoTarget,
            eventEnter = "_event: mouseenter; _target: #text-" + infoTarget + "; visible: true",
            eventLeave = "_event: mouseleave; _target: #text-" + infoTarget + "; visible: false",
            _infoMaterial = "shader: flat; transparent: true; side: double",
            _class = "marker",
            _image = "#info",
            _scale = [.5 .5 .5],
            _lookAtCam = "[camera]",
            _alignment = "center",
            _color = "#000",
            _infoPosition = [4 0.55 0.55],
            _textGeometry = "primitive: plane; width: 6",
            _textMaterial = "color: #FFF"
        _textWidth,
        _text,
        _textWrapCount = 20;


        const infoPositions = [
            { x: 1.000, y: 2, z: -6.000 }, // gown
            { x: , y: , z: }, //cap               
            { x: , y: , z: }, //textiles            
            { x: , y: , z: }, //tray
            { x: , y: , z: }, //packaging
            { x: , y: , z: }, //robot console
            { x: , y: , z: }, //robot arm
            { x: , y: , z: }, //red waste bag
            { x: , y: , z: }, //surgical robot
            { x: , y: , z: }, //bunny suit
            { x: , y: , z: }, //LED lighting
            { x: , y: , z: }, //cautery
            { x: , y: , z: }, //drape hoses
            { x: , y: , z: }, //fabric underlayer
            { x: , y: , z: }, //solid waste
            { x: , y: , z: }, //textiles 2
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
            "textiles2"
        ];

        var infoMarkersContainer = document.createElement('a-entity');


        for (var i = 0; i < infoPositions.length; i++) {
            infoPosition = infoPositions[i];
            infoText = infoTextArray[i];
            infoTarget = infoTargetNames[i];
            var infoMarker = document.createElement("a-plane"),
                infoText = document.createElement("a-text");
            infoMarker.setAttribute("event-set__enter", eventEnter );
            infoMarker.setAttribute("event-set__leave", eventLeave);
            infoMarker.setAttribute("material", _infoMaterial);
            infoMarker.setAttribute("class", _class );
            infoMarker.setAttribute("position", infoPosition );


            

        }


    }
});


// // create marker
//     var marker= '<button class="Hotspot Hotspot--editorial  is-showing is-visible" style="position: absolute; z-index: 19; left: 200px; top: 200px;"><div class="Hotspot-inner">';
//     marker+= '<span class="Hotspot-icons">';
//     marker+= '<span class="Hotspot-icon Hotspot-icon--info">';
//     marker+= '<svg class="Icon Icon--info" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve" preserveAspectRatio="xMinYMin meet"><path class="Hotspot-iconEditorialBody is-animated" d="M7,8.8h9V23h2.9v3H7.1v-3h3V11.1h-3L7,8.8L7,8.8z" style="animation-delay: 12s;"></path><circle class="Hotspot-iconEditorialDot is-animated" cx="13" cy="3" r="3" style="animation-delay: 12s;"></circle></svg>';
//     marker+= '</span></span>';
//     marker+= '<span class="Hotspot-label" data-id=""></span>';
//     marker+= '</div>';
//     marker+= '<div class="Hotspot-arrow"></div>';
//     marker+= '</button>';


/*
<button class="Hotspot Hotspot--editorial  is-showing is-visible" style="position: absolute; z-index: 19; left: 200px; top: 200px;">
        <div class="Hotspot-inner">
            <span class="Hotspot-icons">
            <span class="Hotspot-icon Hotspot-icon--info">
                <svg class="Icon Icon--info" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve" preserveAspectRatio="xMinYMin meet">
                    <path class="Hotspot-iconEditorialBody is-animated" d="M7,8.8h9V23h2.9v3H7.1v-3h3V11.1h-3L7,8.8L7,8.8z" style="animation-delay: 12s;"></path>
                    <circle class="Hotspot-iconEditorialDot is-animated" cx="13" cy="3" r="3" style="animation-delay: 12s;"></circle>
                </svg>
            </span>
            </span>
            <span class="Hotspot-label" data-id=""></span>
        </div>
        <div class="Hotspot-arrow"></div>
    </button>
*/


// document.addEventListener("click", function() {

//     function sphericalCoordsToVector3(distance, latitude, longitude) {
//         return new THREE.Vector3(
//             distance * -Math.cos(latitude) * Math.cos(longitude),
//             distance * Math.sin(latitude),
//             distance * -Math.cos(latitude) * Math.sin(longitude)
//         );
//     }


//     var camera = document.querySelector("a-camera");
//     var cursor = document.querySelector("a-cursor");
//     var camera_pos = new THREE.Vector3().copy(camera.object3D.getWorldPosition()); // get camera's world position
//     var cursor_pos = new THREE.Vector3().copy(cursor.object3D.getWorldPosition()); // get cursor's world position
//     var direction = new THREE.Vector3().subVectors(cursor_pos, camera_pos); //calculate direction from camera to cursor
//     var raycaster = new THREE.Raycaster(camera_pos, direction.normalize()); // make raycaster 
//     var sky = document.querySelector("a-sky");
//     var intersects = raycaster.intersectObject(sky.object3D.children[0]); //let raycaster intersect the 'a-sky' sphere
//     console.log(intersects[0].point);

// });