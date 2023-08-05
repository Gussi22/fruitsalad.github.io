import React from "react";
import discord from '../Downloads/Discord Logo.png'
import config from '../Downloads/config.png'

export const Homepage = () => {

    return (
        <div className="Homepage">
            <h1>Welccome to Fruitsalads</h1>
            <div className="home-buttons">
                <a href="http://discord.gg/CdFj2B9Ub5" className="home-links">
                    <label htmlFor="discord-logo" className="home-label">Discord</label>
                    <img id="discord-logo" src={discord} alt="Discord Logo" className="discord-logo" title="Discord Serveer" />
                </a>
                <a href="https://apexminecrafthosting.com/how-to-install-mods-on-forge/" className="home-links">
                    <label htmlFor="discord-logo" className="home-label">Tutorial</label>
                    <img id="discord-logo" src={config} alt="Discord Logo" className="discord-logo" title="Discord Serveer" />
                </a>
            </div>
        </div>
    )
}

export default Homepage