// handles command logic - what the commands do

// command line commands
function help() { 
    const help = { type: "list", content: [
        "about - Know about me",
        "skills - What tech stacks I use (use -specific to get more details)",
        "projects - My projects",
        "resume - My resume(coming soon)",
        "contact - Contact information",
        "clear - Clear the terminal",
        "blog - Visit my blog(coming soon)"
    ] }
    return help;
}

function skills(specific) { 
    const skills = { type: "list", content:  [
        "Fullstack Web Development", "Web penetration testing and bug bounty hunting"
    ] }
    // if "-speciifc" is used
    const specificSkills = { type: "list", content: [
        "Languages: JavaScript, Python, HTML/CSS",
        "Frameworks: React, Node.js, Express", "Unit testing: Jest", "Database management: MongoDB", "Version control: Git", "Web security testing tools: Burp Suite", "Firebase for hosting and backend services"
    ]}
    if (specific) {
        return specificSkills;
    }
    else {
        return skills;
    }
}

function projects() { 
    const projects = { type: "list", content: ["Todo API: https://github.com/nananotosaki/curly-tribble", "Tarot reading: https://nananotosaki.github.io/Misty_esoterica/", 
        "Simple portfolio: https://nananotosaki.github.io/Misty_esoterica/", "This terminal style portfolio!"  ] }
    return projects;
}

function about() { 
    const about = { type: "text", content: "Hi! I'm Nana, a fullstack web developer and aspiring bug bounty hunter. I have a passion for web applications, especially finding security vulnerabilities in them. In my free time, I enjoy not working." }
    return about;
}

function contact() { 
    const contact = { type: "list", content: [
        "Email: nananotosaki@gmail.com",
        "GitHub: https://github.com/nananotosaki"
    ] }
    return contact;
}

function clear() { 
    const clear = { type: "clear", content: null }
    return clear;
}

function resume() {
    const resume = { type: "text", content: "Coming soon!" }
    return resume;
}

function blog() {
    const blog = { type: "text", content: "Coming soon!" }
    return blog;
}

function invalidCommand() {
    const invalidCommand = { type: "text", content: "Invalid command. Type 'help' to see the list of available commands." }
    return invalidCommand;
}

function easterEgg() { 
    const easterEgg = { type: "text", content: "Ha! Ha! Sneaky aint you? (｡•̀ᴗ-)✧" }
    return easterEgg;
}

// main function to parse input and handle commands
function handleCommand(input) { 
    const userinput = input.trim().toLowerCase();
    switch (userinput) {
        case "help":
            return help();
        case "skills":
            return skills(false);   

        case "skills -specific":
            return skills(true);
        case "projects":
            return projects();
        case "about":
            return about();
        case "contact":
            return contact();
        case "clear":
            return clear();
        case "resume":
            return resume();
        case "blog":
            return blog();
        case "sudo rm -rf /":
            return easterEgg();
        case "cat /etc/passwd":
            return easterEgg();
        default:
            return invalidCommand();
    }
}

export { help, skills, projects, about, contact, clear, resume, blog, invalidCommand, easterEgg, handleCommand };