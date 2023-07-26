import React from "react";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div className="createHome">
            <div>
                <a onClick={() => navigate("/create", {replace : true})}></a>
            </div>
            <h2>Homepage</h2>
        </div>
    )
}

export default Homepage