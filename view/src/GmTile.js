import "./App.css"

export default function GmTiles(gm) {
    return (
        <div style = {{backgroundColor: "OldLace", marginTop: "16px", padding: "8px", borderRadius: "40px"}}>
            <h2 className="tileText1">{`${gm.gm.address}`}</h2>
            <h3 className="tileText">{`${gm.gm.createdAt}`}</h3>
        </div>
    );
}