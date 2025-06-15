SUDHEER MANDI - Personal Portfolio
This is a responsive personal portfolio website built with React and Tailwind CSS, showcasing skills, work experience, projects, education, and awards.

Features
Responsive Design: Adapts to various screen sizes (desktop, tablet, mobile).

Smooth Scrolling: Navigates smoothly between sections.

Interactive Contact: Easily copy email and phone number.

Project Showcase: Dedicated section to highlight personal projects with links and images.

Clean UI: Modern and minimalist design using Tailwind CSS.

Getting Started
Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js and npm (Node Package Manager) or Yarn installed on your machine.

Node.js: Download & Install Node.js (which includes npm)

Yarn (Optional): npm install --global yarn

Installation
Clone the repository:

git clone https://github.com/mandisudheer059/mandisudheer059.github.io.git
cd mandisudheer059


Install dependencies:
Using npm:

npm install

Or using Yarn:

yarn install

Running the Application
To run the application in development mode:

Using npm:

npm start

Or using Yarn:

yarn start

This will open your application in your browser at http://localhost:3000. The page will reload if you make edits. You will also see any lint errors in the console.

Building for Production
To build the application for production to the build folder:

Using npm:

npm run build

Or using Yarn:

yarn build

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

Customization
src/App.js: Update the resumeData object with your personal information, skills, experience, and especially your projects. Make sure to replace placeholder links (https://github.com/YourGitHubUser/your-repo) with your actual GitHub repository URLs.

Images: Replace placeholder images (https://placehold.co/...) with your actual project screenshots or relevant background images.

Icons: The project uses inline SVG icons. You can replace them with icons from libraries like Lucide React or React Icons for more variety.

Deployment
This project can be easily deployed to services like GitHub Pages, Netlify, Vercel, or Firebase Hosting.

Deploying to GitHub Pages
Install gh-pages:

npm install --save-dev gh-pages
# or
yarn add --dev gh-pages

Add homepage to package.json:
Open package.json and add a homepage field at the top level:

{
  "name": "my-portfolio",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://<your-github-username>.github.io/my-portfolio",
  "dependencies": {
    // ...
  }
}

Replace <your-github-username> with your actual GitHub username.

Add deploy scripts to package.json:
In the scripts section of package.json, add:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},

Deploy:

npm run deploy
# or
yarn deploy

After a few minutes, your portfolio will be live at the homepage URL you specified.

Contributing
Feel free to fork this repository, make changes, and use it as a base for your own portfolio! If you find any issues or have suggestions, please open an issue or submit a pull request.