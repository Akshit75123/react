//Lecture -31 (Portals) -- used for creating a component(tag) outside the parent component (outside the DOM tree) like all components or tags are in present in "root" id. To create a component out of root id, portals are used.
//  putting the below heading in the 'portal-root' id which is other than 'root' in which 'app' component is present.
import React from 'react';
import ReactDOM from "react-dom";
function PortalDemo(){
    return ReactDOM.createPortal(
        <h1>
        Portals demo
        </h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo;