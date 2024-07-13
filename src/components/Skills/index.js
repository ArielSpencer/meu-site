import './Skills.css'

const Skills = () => {
    return (
        <div className="skills">
                <p className="skills__bigode">&#123;</p>
                <div>
                    <img src="../assets/skills/html5.webp" alt="HTML" className="skills__icon" />
                    <p className="skills__titulo">HTML</p>
                </div>
                <div>
                    <img src="../assets/skills/css3.webp" alt="CSS" className="skills__icon" />
                    <p className="skills__titulo">CSS</p>
                </div>
                <div>
                    <img src="../assets/skills/javascript.webp" alt="JavaScript" className="skills__icon" />
                    <p className="skills__titulo">JavaScript</p>
                </div>
                <div>
                    <img src="../assets/skills/ux-ui-design.webp" alt="UX Design" className="skills__icon" />
                    <p className="skills__titulo">UX/UI</p>
                </div>
                <div>
                    <img src="../assets/skills/node-js.webp" alt="Node JS" className="skills__icon" />
                    <p className="skills__titulo">Node.JS</p>
                </div>
                <div>
                    <img src="../assets/skills/wordpress.webp" alt="WordPress" className="skills__icon" />
                    <p className="skills__titulo">WordPress</p>
                </div>
                <div>
                    <img src="../assets/skills/figma.webp" alt="Figma" className="skills__icon" />
                    <p className="skills__titulo">Figma</p>
                </div>
                <div>
                    <img src="../assets/skills/github.webp" alt="GitHub" className="skills__icon" />
                    <p className="skills__titulo">GitHub</p>
                </div>
                <p className="skills__bigode">&#125;</p>
            </div>
    )
}

export default Skills