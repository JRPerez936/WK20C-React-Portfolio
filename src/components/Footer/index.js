import React from "react";

function Footer(){
    return (
        <footer>
            <h2>Reach Out:
                <a href="https://github.com/JRPerez936" className="ml-2" target="_blank" rel="noopener noreferrer">
                    <button><i class="fab fa-github"></i>Github</button>
                </a>
                <a href="https://www.linkedin.com/in/justin-perez-667268211/" target="_blank" rel="noopener noreferrer">
                <button><i class="fab fa-linkedin"></i>Linkedin</button>
                </a>
                <a href="https://twitter.com/justin_pretzel" target="_blank" rel="noopener noreferrer">
                    <button><i class="fab fa-twitter"></i>Twitter</button>
                </a>
            </h2>
        </footer>
    )
}

export default Footer;