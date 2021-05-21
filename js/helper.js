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
    {
        "name": "PPE-KIT-TRACKER",
        "timestamp": "Nov 13,2020",
        "detail": "This a PPE Inventory management and Ordering application for Hospitals and Manufacturers",
        "techstack": "ReactJS,Firebase,Javascript,HTML,CSS, Material-UI",
        "hostedProjectLink": "https://ppetracker-9a27e.web.app/",
        "hostedCodeLink": "https://github.com/PPE-KIT-TRACKING/PPEKIT-TRACKER"
    },
    {
        "name": "Housy-Game",
        "timestamp": "Aug 12,2020",
        "detail": "This is a project based on concepts of operating system like shared memory and synchronization.",
        "techstack": "C Language, CLI App",
        "hostedProjectLink": "https://github.com/piyush4299/Housy-game",
        "hostedCodeLink": "https://github.com/piyush4299/Housy-game"
    },
    {
        "name": "KD-Range-Search",
        "timestamp": "Sept 21,2020",
        "detail": "It is a visualization of KD-Range-Search Tree.",
        "techstack": "Python,Algorithms,CLI App",
        "hostedProjectLink": "https://github.com/piyush4299/KD-Range-Search",
        "hostedCodeLink": "https://github.com/piyush4299/KD-Range-Search"
    },
    {
        "name": "XMEME-STORE Frontend",
        "timestamp": "Feb 15,2021",
        "detail": "This is a frontend part of project named Meme store where anyone can post meme and see other's posted meme as well.",
        "techstack": "AngularJS,HTML,CSS,Typescript",
        "hostedProjectLink": "https://gallant-shaw-d55a65.netlify.app/",
        "hostedCodeLink": "https://github.com/piyush4299/xmemestorefrontend"
    },
    {
        "name": "XMEME-STORE Backend",
        "timestamp": "Feb 15,2021",
        "detail": "This is the REST API for XMEME App build using Nodejs tech stack through which one can make POST,GET,PATCH,DELETE requests.",
        "techstack": "Nodejs,MongoDB",
        "hostedProjectLink": "https://github.com/piyush4299/xmemestore",
        "hostedCodeLink": "https://github.com/piyush4299/xmemestore"
    }


]

projectDetails.forEach(projectObject => showProject(projectObject))