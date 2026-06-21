# CAMPUS COLLAB
### AI Powered University Based Ecosystem
---

UniConnect is a standalone application built on CampusCollab's base platform to enhance its ecosystem, upskill student talent, and engage alumni.

---
### TruSpace
<img width="959" alt="image" src="https://i.imgur.com/hjcLFHB.png">







## Main Features (Both web and app-based)
* **CIA**: Collective Intelligence Agents (CIAs) are LLMs trained upon specialized information, initiated with additional context prompts.CIAs can also be added as team members while creating a new team on CampusCollab. They can act as project managers, code reviewers, meeting assistants, etc.
  <img width="956" alt="image" src="https://i.imgur.com/0TLx6oT.png">

 


* **Mentorship Availability**: Students can explore mentor profiles and view their availability. They can book sessions, connect for personalised guidance and rate their experiences for a transparent learning journey.
  <img width="950" alt="image" src="https://i.imgur.com/0EFRTAw.png">

 


* **TruNotes**: Create save and organize notes and according to permissions publish them to specific communities.
  <img width="581" alt="image" src="https://i.imgur.com/GFVEgHz.png">
  ![image](https://i.imgur.com/lJkdJNC.png)




  
 

* **Gamification**: Users earn badges and sparks for their activity and achievements, and compete on the leaderboard for recognition. Tiers will be displayed on the student’s profile and will help clients become aware of their skill level.
 <img width="960" alt="image" src="https://i.imgur.com/xj7tGND.png">



* **Extensions**:
    * ChatBot
    * Milestone Tracker
    * Code Summarizer
 
      
  ![image](https://i.imgur.com/Eu5qXyV.png)
  ![image](https://i.imgur.com/r8MSNQg.png)








## Setting up the project in your local environment💻

### 1. Fork this repository.<br>
   OR <br>
   
   On GitHub.com, navigate to the [repository].<br>
         
   In the top-right corner of the page, click **Fork**.

### 2. Clone the **forked** repository:
   
   
   On GitHub.com, navigate to **your fork** of the repository.<br>
         
   Above the list of files, click `<> Code` . Copy the url mentioned. Go to the location where you want the cloned directory.<br>
         
   In the terminal Type -`git clone` , and then paste the URL you copied earlier. It will look like this, with your GitHub username instead of YOUR-USERNAME:<br>
         
   `git clone https://github.com/YOUR-USERNAME/<repo link> `<br>
   
   Press Enter. Your local clone will be created.
      

## Installation

### Prerequisites

1.  [Git](https://git-scm.com/downloads).
2.  [Node & npm](https://nodejs.org/en/download/) _(version 12 or greater)_.

Move to the clonned repository in your local environment

### Steps to Set up Backend
* Move to backend folder - `cd backend `
* Install the required nodes modules package - `npm i`
* Create a .env file as follows with the required APIs- MongoDB, Cloudinary, OpenAI
   
  ```
   PORT=5000
   MONGODB_URI=
   DB_NAME=
   ADMIN_EMAIL=
   ADMIN_PASS=
   SESSION_SECRET=
   CLOUD_NAME=
   API_KEY=
   API_SECRET=
   OPENAI_API_KEY=

  ```
  
* Start the development server - ` npm start `

### Steps to Set up Frontend
* Move to frontend folder -`cd frontend `
* Install the required nodes modules package - `npm i`
* Start the development server - ` npm start `
  
  > The model will be served on **http://localhost:3000/**


 
           

## Directory Structure
```
├───.vscode
├───backend
│   ├───.adminbro
│   ├───config
│   ├───controllers
│   ├───models
│   └───routes
├───frontend
│   ├───public
│   └───src
│       ├───Assets
│       ├───components
│       │   ├───BookSession
│       │   ├───CIA
│       │   ├───Comments
│       │   ├───Crousel_Achievements
│       │   ├───Leaderboard
│       │   ├───Mentor
│       │   ├───MilestoneTracker
│       │   ├───noteList
│       │   └───NotesComponent
│       ├───hooks
│       └───pages
└───campus-collab-agents
    ├───.vscode
    ├───API
    ├───media
    │   ├───bot
    │   ├───milestone
    │   └───web
    └───test
        └───suite
 ```

