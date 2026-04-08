export default function InputLine(props) {

    return (
        <div className="InputLine-container">
            <label htmlFor="command" className="input-label"> user@portfolio:~$
                <input type="text" value={props.input} onChange={props.onChange} onKeyDown={(e) => {
                if (e.key === "Enter") {
                    props.onSubmit(e);
                }
                if (e.key === "ArrowUp") {
                    props.onKeyDown(e);
                }
                if (e.key === "ArrowDown") {
                    props.onKeyUp(e);
                }
                }} autoFocus/>
            </label>
        </div>
    );
}