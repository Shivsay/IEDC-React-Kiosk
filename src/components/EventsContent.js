import React from "react"
import logo from '../IEDC_Logo.png';
import img1 from '../IEDC_Nest_examle.png';
import CardContent from './CardContent';
function EventsContent() {
    return (
        <div className="card-content">
            <h1>Events</h1>
            <div></div>     {/* spacing*/}
            <CardContent />
            <CardContent />
            <CardContent />
            <CardContent />
        </div>
    );
}

export default EventsContent;
