import { useState } from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import EventsContent from "./components/EventsContent";
import AboutContent from "./components/AboutContent";
import ContactContent from "./components/ContactContent";


function App() {

        const router = createBrowserRouter([
            {
                path: "/",
                element: <SideBar />,
                errorElement: <ErrorPage />,
                children: [         //Pathless Routes not working so had to add an SideBar element in Error Page instead
                    {
                        //errorElement: <ErrorPage />,
                        children: [
                            { index: true, element: <MainContent /> },
                            {
                                path: "home",
                                element: <MainContent />,
                            },

                            {
                                path: "events",
                                element: <EventsContent />,
                            }, 

                            {
                                path: "about",
                                element: <AboutContent />,
                            }, 

                            {
                                path: "contact",
                                element: <ContactContent />,
                            },

                        ],
                    },
                ],
            },
        ]);

        return (
            <div>
                <RouterProvider router={router} />
            </div>
        );
            
}

export default App;
