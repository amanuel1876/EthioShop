MERN EthioShop E-Commerce Store - Backend

## Description

The backend of the MERN E-Commerce Store handles API requests, user authentication, product management, and order processing. Built with Node.js, Express, and MongoDB, it provides a robust server-side solution for the e-commerce platform.

## Features

- **API Endpoints**: Provides endpoints for users, products, categories, orders, and file uploads.
- **Authentication**: Handles user authentication with JWT.
- **File Uploads**: Manages image uploads and serves static files.
- **PayPal Integration**: Configures PayPal for payment processing.

## Installation

1. Navigate to the `backend` directory:
 
   cd backend
Install dependencies:


npm install
Create a .env file in the backend directory with the following environment variables:

env
PORT=5000=mongodb://localhost:27017/mern-ecommerce
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id

Start the backend server:


npm start
Deployment
Deploy the backend to Render:

Push to GitHub: Ensure that your backend folder is pushed to a GitHub repository.
Connect to Render: Link your GitHub repository to Render.
Configure Environment: Set up environment variables on Render (e.g., PORT, MONGODB_URL, JWT_SECRET, PAYPAL_CLIENT_ID).
Deploy: Render will automatically deploy your backend application.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions or suggestions, feel free to reach out to [amanedesaleng@gmail.com].



### README for Frontend

**`frontend/README.md`**


# MERN EthioShop E-Commerce Store - Frontend

## Description

The frontend of the MERN E-Commerce Store is a React application built with Vite. It provides a dynamic user interface for browsing products, managing the shopping cart, and placing orders. The frontend communicates with the backend API to fetch and display data.

## Features

- **User Interface**: Provides a responsive UI for users to interact with the e-commerce platform.
- **Product Listings**: Displays products, categories, and details.
- **Shopping Cart**: Manages cart functionality and checkout process.
- **Order History**: Allows users to view and track their orders.

## Installation

1. Navigate to the `frontend` directory:

   cd frontend
Install dependencies:


npm install
Start the frontend development server:


npm run dev
Deployment
Deploy the frontend to Render:

Push to GitHub: Ensure that your frontend folder is pushed to a GitHub repository.
Connect to Render: Link your GitHub repository to Render.
Configure Deployment: Set up deployment settings in Render. Configure build commands if necessary (e.g., npm run build for production).
Deploy: Render will automatically deploy your frontend application.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions or suggestions, feel free to reach out to [amanedesaleng@gmail.com].



### Deployment on Render

**For Backend:**
1. Push your code to a GitHub repository.
2. Go to Render, create a new service, and select the backend repository.
3. Configure the environment variables in Render’s dashboard.
4. Deploy the service.

**For Frontend:**
1. Push your frontend code to a GitHub repository.
2. Create a new static site service on Render and select the frontend repository.
3. Set up the build command (`npm run build`) and the publish directory (usually `dist`).
4. Deploy the static site.

This structure should help you get both parts of your project up and running on Render with appropriate documentation.





