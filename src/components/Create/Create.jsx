import React from "react";
import CreateSaladRequired from "../../Downloads/CreateSalad_Required.zip"

export const Create = (props) => {
    return (
        <div className="createHome">
            <h2>CreateSalad</h2>
            <label>Required Mods</label>
            <a
             href={CreateSaladRequired}
             download="CreateSalad_Required"
             target="_blank"
             rel="noopener noreferrer"
            >
                <button className="link-btn">.zip</button>
            </a>
        </div>
    )
}

export default Create