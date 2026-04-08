import { useEffect, useRef } from "react";

export default function OutputDisplay(props) {
    const commandhistory = props.output;
    return (
        <div id="command-output">
        {/* <!-- all the command results goes here --> */}
        {commandhistory.map((item, index) => (
            <div key={index} className="command-result">
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
            </div>
        ))}
      </div>
    );
}