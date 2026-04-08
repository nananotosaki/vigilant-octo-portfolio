import { useEffect, useRef } from "react";

export default function OutputDisplay(props) {
    const commandhistory = props.output;
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [commandhistory]);

    return (
        <div id="command-output">
            <div className="welcome-message">
                <p>Welcome to my portfolio! Type <span style={{ color: 'var(--green)' }}>'help'</span> to see the list of available commands.</p>
            </div>
        {/* <!-- all the command results goes here --> */}
        {commandhistory.map((item, index) => (
            <div key={index} className="command-result comm">
                {item.output.type === "text" && (
                    <>
                        <p className="user-input">user@portfolio:~$ {item.input}</p>  
                        <p className="command-output">{item.output.content}</p>
                    </>
                )
                }
                {item.output.type === "list" && (
                    <>
                        <p className="user-input">user@portfolio:~$ {item.input}</p>
                        <ul className="command-list">
                            {item.output.content.map((listItem, listIndex) => (
                                <li key={listIndex}>{listItem}</li>
                            ))}
                        </ul>
                    </>
                )}
                {item.output.type === "error" && (
                    <>
                        <p className="user-input">user@portfolio:~$ {item.input}</p>
                        <p className="command-error">{item.output.content}</p>
                    </>
                )}
            </div>
        ))}
        <div ref={bottomRef} /> {/* dummy div to scroll into view */}
      </div>
    );
}