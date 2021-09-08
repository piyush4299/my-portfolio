function showProject(projectObject){
    const projectHTML = `
            <li class="projectItem">
                <section class="projectSection">
                    
                    <p class="projectHeading">${projectObject.name}</p>
                    <small>${projectObject.timestamp}</small>
                    <p class="projectContent">${projectObject.detail}</p>

                    <p class="techStackContent"> Tech Stack:</p>
                    <p class="technologies"> ${projectObject.techstack} </p>

                    <ul class="liveDemoSection">
                        <li>
                            <a class="hostedProject" target="_blank" href="${projectObject.hostedProjectLink}"><button href="/"> View App </button></a>
                        </li>
                        
                        <li>
                            <a class="hostedCode" target="_blank" href="${projectObject.hostedCodeLink}"><button href="/"> View Sourcecode </button></a>
                        </li>
                    </ul>

                </section>
            </li>`;
    
    const projects = document.querySelector(".projects");
    projects.insertAdjacentHTML("afterbegin",projectHTML);
}


const projectDetails = [
    // {
    //     "name": "PPE-KIT-TRACKER",
    //     "timestamp": "Nov 13,2020",
    //     "detail": "This a PPE Inventory management and Ordering application for Hospitals and Manufacturers",
    //     "techstack": "ReactJS,Firebase,Javascript,HTML,CSS, Material-UI",
    //     "hostedCodeLink": "https://github.com/PPE-KIT-TRACKING/PPEKIT-TRACKER"
    //     "hostedProjectLink": "https://ppetracker-9a27e.web.app/",
    // },
    // {
    //     "name": "Housy-Game",
    //     "timestamp": "Aug 12,2020",
    //     "detail": "This is a project based on concepts of operating system like shared memory and synchronization.",
    //     "techstack": "C Language, CLI App",
    //     "hostedCodeLink": "https://github.com/piyush4299/Housy-game"
    //     "hostedProjectLink": "https://github.com/piyush4299/Housy-game",
    // },
    // {
    //     "name": "KD-Range-Search",
    //     "timestamp": "Sept 21,2020",
    //     "detail": "It is a visualization of KD-Range-Search Tree.",
    //     "techstack": "Python,Algorithms,CLI App",
    //     "hostedCodeLink": "https://github.com/piyush4299/KD-Range-Search"
    //     "hostedProjectLink": "https://github.com/piyush4299/KD-Range-Search",
    // },
    // {
    //     "name": "XMEME-STORE Frontend",
    //     "timestamp": "Feb 15,2021",
    //     "detail": "This is a frontend part of project named Meme store where anyone can post meme and see other's posted meme as well.",
    //     "techstack": "AngularJS,HTML,CSS,Typescript",
    //     "hostedCodeLink": "https://github.com/piyush4299/xmemestorefrontend"
    //     "hostedProjectLink": "https://gallant-shaw-d55a65.netlify.app/",
    // },
    // {
    //     "name": "XMEME-STORE Backend",
    //     "timestamp": "Feb 15,2021",
    //     "detail": "This is the REST API for XMEME App build using Nodejs tech stack through which one can make POST,GET,PATCH,DELETE requests.",
    //     "techstack": "Nodejs,MongoDB",
    //     "hostedCodeLink": "https://github.com/piyush4299/xmemestore"
    //     "hostedProjectLink": "https://github.com/piyush4299/xmemestore",
    // },
    {
        "name": "Stock Price Calculator",
        "timestamp": "Sep 7,2021",
        "detail": "It is a simple application through which you can calculate whether your current stocks investing are at profit or not.",
        "techstack": "HTML,CSS,Javascript",
        "hostedCodeLink": "https://github.com/piyush4299/stock-price-calculator",
        "hostedProjectLink": "https://admiring-swirles-47c9a2.netlify.app/"
    },
    {
        "name": "Pallindromic Birthday",
        "timestamp": "Sep 8,2021",
        "detail": "It is a simple application built with html,css and javascript for calculating if your entered birthdate is pallindrome or not.",
        "techstack": "HTML,CSS,Javascript",
        "hostedCodeLink": "https://github.com/piyush4299/Pallindromic-Birthday",
        "hostedProjectLink": "https://kind-hermann-1f6384.netlify.app/"
    },
    {
        "name": "Fun with Triangles",
        "timestamp": "Sep 3,2021",
        "detail": "It is a simple application through which you can play around some mathematical and geometrical questions.",
        "techstack": "HTML,CSS,Javascript",
        "hostedCodeLink": "https://github.com/piyush4299/fun-with-triangles",
        "hostedProjectLink": "https://adoring-kare-9464a5.netlify.app/"
    },
    {
        "name": "Cash Register App",
        "timestamp": "Aug 30,2021",
        "detail": "It is an application through which you can get the details on how much change will remain if bill amount and cash is given.",
        "techstack": "HTML,CSS,Javascript",
        "hostedCodeLink": "https://github.com/piyush4299/cash-register-app",
        "hostedProjectLink": "https://clever-yonath-0b28af.netlify.app/"
    },
    {
        "name": "Movie Recommender",
        "timestamp": "Aug 8,2021",
        "detail": "It is simple REACT application which recommends movies based on my recommendation.",
        "techstack": "HTML,CSS,ReactJS",
        "hostedCodeLink": "https://github.com/piyush4299/movie_recommender",
        "hostedProjectLink": "https://agitated-shaw-2e2c28.netlify.app/"
    },
    {
        "name": "Emoji Center",
        "timestamp": "Aug 8,2021",
        "detail": "It is a simple REACT APP for finding what some of emoji's listed actually mean.",
        "techstack": "HTML,CSS,ReactJS",
        "hostedCodeLink": "https://github.com/piyush4299/emoji_center",
        "hostedProjectLink": "https://jolly-kalam-07d7ce.netlify.app/"
    },
    {
        "name": "Reminder App",
        "timestamp": "Sep 1,2021",
        "detail": "It is a TO-DO Application through which you can add.edit and delete todo item. Along with that I have also provided functionalities for search and filter options.",
        "techstack": "HTML,CSS,ReactJS",
        "hostedCodeLink": "https://github.com/piyush4299/reminder-app",
        "hostedProjectLink": "https://pedantic-blackwell-62d21a.netlify.app/"
    }
]

projectDetails.forEach(projectObject => showProject(projectObject))