Brief overview of the project, its purpose, and main features.
Frontend
Technologies Used

React.js
Redux
React Flow
Bootstrap
Tailwind CSS
Components

Footer: A component displayed at the bottom of the page, providing navigation links, contact information, or other relevant details.
Navbar: A navigation bar typically displayed at the top of the page, allowing users to navigate between different sections or pages of the application.
Hero: A prominent component often placed at the top of the homepage, showcasing key features, promotions, or content to grab users' attention.
Auth:
Login: A component allowing users to authenticate by entering their credentials (username/email and password).
Signup: A component enabling users to create a new account by providing necessary details such as username, email, and password.
Forgot Password: A component offering functionality for users to reset their password if they've forgotten it, typically by entering their email address.
Private Outlet: A component representing a private section or outlet within the application, accessible only to authenticated users.
Email:
Flowchart.js: A component where users can fill in related details that are sent to another email address. The information is then visualized using React Flow.
Async Thunk
Contact: Information about how users can get in touch with the project maintainers or support team. This may include an email address, contact form, or social media links.

createAsyncThunk.js: A file containing an async thunk function for fetching email data filled by the user and storing it in Redux.

About: A brief description of the project, its goals, and the team behind it. This section can provide context for users who want to learn more about the project's background.

Setup Instructions

Clone the repository.
Install dependencies: npm install.
Start the development server: npm start.




The backend of this project is built using Node.js and Express.js,jwt with MongoDB as the database. It handles user authentication and database operations.

Technologies Used
Node.js
Express.js
MongoDB

Auth Folder
auth.js:-
Contains API routes for user authentication.
Uses POST method for sign up and login.
Utilizes PUT method for forget password functionality.

Database Folder
Schema.js:-
Defines the schemas for MongoDB collections.
Includes the User schema and email services schema.
Email Service Folder
Overview

Contains routes for managing email service data.
Utilizes HTTP methods such as POST, PUT, GET, and DELETE for handling email service operations.
Each route uses the middleware Fetch User to decode the token and extract the user ID.
Routes

POST Route:

Handles the creation of new email service data.
Used to add new email service entries.
PUT Route:

Handles updating existing email service data.
Used to modify existing email service entries.
GET Route:

Handles retrieving email service data.
Used to fetch email service entries.
DELETE Route:

Handles deleting email service data.
Used to remove email service entries.
Setup Instructions
Clone the repository.
Navigate to the backend directory.
Install dependencies: npm install.
Start the backend server: npm run server.
Usage
Use the provided routes to perform CRUD operations on email service data.
Ensure proper authentication and authorization using the Fetch User middleware
