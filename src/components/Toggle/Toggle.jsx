import svgImage from "./svg_toggle.svg"

function Toggle({isActive, setState}) {


    return (
        <div>
            {
                isActive ?
                    <img onClick={setState} src={svgImage} alt="SVG Image"
                         style={{
                             filter: 'drop-shadow(2px 2px 2px yellow',
                             width: "80px",
                             position: "absolute",
                             right: "20px",
                             top: "20px",
                             transform: 'rotate(180deg)',
                             cursor: "pointer"
                         }}/> :
                    <img onClick={setState} src={svgImage} alt="SVG Image"
                         style={{
                             filter: 'drop-shadow(2px 2px 2px white',
                             width: "80px",
                             position: "absolute",
                             right: "20px",
                             top: "20px",
                             transform: 'rotate(180deg)',
                             cursor: "pointer"
                         }}/>
            }
        </div>
    );
}

export default Toggle;