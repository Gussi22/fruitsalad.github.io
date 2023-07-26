import React from "react";
import CreateSaladRequired from "../../Downloads/CreateSalad_Required.zip"
import CreateSaladOptional from "../../Downloads/CreateSalad_Optional.zip"
import useBackButton from "../../useBackButton";
import { useNavigate } from "react-router-dom";

export const Create = () => {
    const navigate = useNavigate();

    const toDo = () => {
        navigate("/fruitsalads");
    }

    useBackButton(toDo);
    return (
        <div className="createHome">
            <h2>CreateSalad</h2>
            <div className="mods-container">
                <div className="required">
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
                <div className="required">
                    <label>Optional Mods</label>
                    <a
                    href={CreateSaladOptional}
                    download="CreateSalad_Optional"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <button className="link-btn">.zip</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Create