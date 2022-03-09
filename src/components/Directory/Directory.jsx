import "./Directory.scss";
import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import {MAINPAGE_DATA} from "../../data"



const Directory = () => {

    const [sections, setSections] = useState(MAINPAGE_DATA);
    
    return (
        <div className="directory-menu">
            {sections.map(({ title, imageUrl, id, size }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))}
        </div>
    )
}

export default Directory;