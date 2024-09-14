# Blogging Website

## Table of Contents
- [Introduction](#introduction)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

---

## Introduction
The **Online Blogging System** is a platform that allows users to share their thoughts, ideas, and content through blog posts. Users can easily create, edit, and manage their blog posts. The website offers a dedicated section for blog creation, as well as login and signup features. Once registered, users can create blogs with titles and content, which are published and displayed on the home page for others to view.

--- 

## Live Demo
Visit the website: [Blogger](https://blogger-v43u.onrender.com/)

## Features
Here are some of the key features of this Blogging Website:

🔥 **User Authentication and Profiles**: Users can sign up, log in, and manage their profiles, complete with email verification for enhanced security.

🔥 **Blogging**: Users can create and publish blogs with rich text formatting.

🔥 **Sharing**: Blogs can be shared on social media platforms directly from the website.

🔥 **Project Posting**: Users can showcase their personal projects on their profile.

🔥 **Responsive Design**: The website is fully responsive and works smoothly across devices of various screen sizes.

🔥 **Security**: Best practices for web security are followed, including secure password hashing, JSON Web Tokens (JWT) for authentication, and encrypted sessions.

---

## Technologies Used
The Blogging Website is built using the following technologies:

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript Templates)
- JSON Web Tokens (JWT)
- Multer (for file uploads)

--- 


## Getting Started
To set up and run this project locally, follow the steps below.

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (which includes npm, the Node Package Manager)
- [Git](https://git-scm.com/)
- MongoDB (local or cloud, e.g., MongoDB Atlas)

### Installation

**Step 1**: Clone this GitHub repository to your local machine:

```bash
git clone https://github.com/SidGit195/Blogger.git
```

**Step 2**: Install backend dependencies:
```bash
npm install
```

**Step 3**: Configure the .env file with your MongoDB connection details and other environment variables such as JWT secret, port, etc.
```bash
MONGODB_URI=<your-mongo-db-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=8000
```

**Step 4**: Start the server:
```bash
npm start
```
**Step 5**: Open your web browser and navigate to http://localhost:8000 to access the website.

---

## Usage
Once the project is set up, you can:

- Sign up as a new user and log in to your account.
- Create, edit, and delete blog posts.
- View and comment on blogs created by other users.
- Share blog posts on social media.
- Manage your profile and view your posted blogs or projects.

## Screenshots
- signin page
![Screenshot (455)](https://github.com/user-attachments/assets/f301a17e-fe5f-4aa4-86b7-46e728d00f9f)

- Add Blog
![Screenshot (456)](https://github.com/user-attachments/assets/23ce3cbe-5198-4e43-9b77-8743f51821aa)

- Home
![Screenshot (454)](https://github.com/user-attachments/assets/e1aa66bc-7ece-47d5-b73c-3f6eb24022b4)

- Blog
![Screenshot 2024-09-13 210837](https://github.com/user-attachments/assets/04a37d89-ac11-41f2-8e9e-57e2c0c61c60)
![Screenshot (453)](https://github.com/user-attachments/assets/fef33227-d308-4bc7-9577-b4b36d136081)

Enjoy using the Blogging Website! If you find this project helpful, feel free to star the repository or follow me on GitHub! 😄
