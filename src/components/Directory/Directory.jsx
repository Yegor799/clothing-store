import "./Directory.scss";
import { useSelector } from "react-redux";
import MenuItem from "../MenuItem/MenuItem";




const Directory = () => {

    const sections = useSelector(state => state.directory)
    
    return (
        <div className="directory-menu">
            {sections.map(({ title, imageUrl, id, size }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))}
        </div>
    )
};

export default Directory;