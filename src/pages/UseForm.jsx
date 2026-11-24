import { useState } from "react";
function UseForm() {
    const [nama, setNama] = useState();
    return(
        <form>
            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}
export default UseForm;
