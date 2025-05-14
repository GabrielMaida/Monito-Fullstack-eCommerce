![Status](https://img.shields.io/badge/Status-Ready_for_Review-green)

# Monito eCommerce

A full-featured eCommerce platform for pet products with a React Frontend and a NestJS Backend, connected to MongoDB. This project demonstrates modern web development practices and architecture patterns in a complete, functional application.

## 🎯 Project Objective

The Monito eCommerce platform was built to create a complete online shopping experience for pet products and services. The application focuses on usability, performance, and design aesthetics while implementing best practices in software architecture and programming.

## 🚀 Technologies

### **Frontend**

-   **Framework**: React 19 with React Router DOM 7
-   **Build Tool**: Vite 6
-   **Language**: TypeScript 5.7
-   **Styling**: Tailwind CSS 4
-   **Asset Management**: SVG integration with vite-plugin-svgr
-   **Package Manager**: npm

### **Backend**

-   **Framework**: NestJS 11
-   **Language**: TypeScript 5.7
-   **Database ODM**: Mongoose 8.14
-   **API Design**: RESTful architecture
-   **Package Manager**: npm

### **Database**

-   MongoDB Atlas (Cloud-hosted)

## 💻 Key Features Implemented

-   **Product Category Browsing**: Filter products by type, color, size, and gender
-   **Featured Products Display**: Showcase of highlighted products on the homepage
-   **Detailed Product View**: Complete product information with multiple image display
-   **Pagination System**: Navigate through product listings efficiently
-   **Advanced Filtering**: Filter products by various attributes
-   **Interactive UI Elements**: Smooth animations on hover and state changes
-   **Image Gallery**: Dynamic selection of product images
-   **Responsive Design**: Works across multiple device sizes

## 📡 API Documentation

The backend exposes the following REST endpoints:

### Product Endpoints

#### `GET /api`

-   **Description**: Basic health check endpoint
-   **Response**: Text confirmation that API is working

#### `GET /api/product`

-   **Description**: Retrieve products with optional filtering
-   **Query Parameters**:
    -   `product` (optional): Filter by product type (e.g., "Dog")
    -   `exclude` (optional): Exclude specific product type (e.g., "Dog")
    -   `gender` (optional): Filter by gender ("Male" or "Female")
    -   `color` (optional): Filter by color
    -   `size` (optional): Filter by size
    -   `page` (optional, default: 1): Page number for pagination
    -   `limit` (optional, default: 10): Number of items per page
-   **Example**: `GET /api/product?product=Dog&gender=Female&page=1&limit=6`

#### `GET /api/product/:sku`

-   **Description**: Retrieve a specific product by SKU
-   **Path Parameters**:
    -   `sku`: The unique SKU identifier for the product
-   **Example**: `GET /api/product/230`

#### `POST /api/product`

-   **Description**: Create a new product (for admin use)
-   **Request Body**: JSON object with product details (see example in requests.http)
-   **Authentication**: Not implemented in demo version

## 📂 Project Structure

monito-fullstack-ecommerce/ ├── .gitignore ├── LICENSE ├── README.md ├── requests.http # API request examples ├── BackEnd/ │ ├── src/ │ │ ├── main.ts # App bootstrap │ │ ├── app.module.ts # Root module │ │ ├── app.controller.ts # Root controller │ │ ├── app.service.ts # Root service │ │ └── products/ │ │ ├── product.module.ts │ │ ├── product.controller.ts │ │ ├── interfaces/ │ │ │ └── IProductEntity.ts │ │ ├── repositories/ │ │ │ └── product.repository.ts │ │ ├── schemas/ │ │ │ └── product.schema.ts │ │ └── services/ │ │ └── product.service.ts │ ├── nest-cli.json │ ├── package.json │ ├── tsconfig.json │ └── tsconfig.build.json ├── FrontEnd/ │ ├── src/ │ │ ├── app.tsx # Main React application │ │ ├── assets/ │ │ │ └── svgs/ # SVG assets │ │ ├── components/ │ │ │ ├── home/ # Home page components │ │ │ ├── product/ # Product detail components │ │ │ ├── products/ # Products listing components │ │ │ └── utils/ # Shared UI components │ │ ├── interfaces/ │ │ │ └── IProductEntity.ts │ │ ├── pages/ │ │ │ ├── home.page.tsx │ │ │ ├── product.page.tsx │ │ │ └── products.page.tsx │ │ └── styles/ # CSS styles │ ├── public/ │ │ ├── fonts/ # Font files │ │ ├── imgs/ # Image assets │ │ └── svgs/ # Public SVG files │ ├── index.html │ ├── package.json │ ├── vite.config.ts │ └── tsconfig.json └── docs/ # Documentation assets ├── folders.png ├── home.png └── product.png

## 🚀 Getting Started

### Prerequisites

-   Node.js (version 18 or later)
-   npm or yarn package manager
-   Git

### Installation & Setup

1. Clone the repository:

    ```bash

    git clone https://github.com/yourusername/monito-fullstack-ecommerce.git
    cd monito-fullstack-ecommerce

    ```

    Install frontend dependencies:
    cd FrontEnd
    npm install

Install backend dependencies:
cd ../BackEnd
npm install

Running the Application
Start the backend server:
cd BackEnd
npm run start:dev

The API will be available at http://localhost:3101/api

In a new terminal, start the frontend development server:
cd FrontEnd
npm run dev

The frontend will be available at http://localhost:5173

Database Access
The application is pre-configured to connect to a MongoDB Atlas database with a read-only user. No additional database setup is required for running the application.

📝 License
This project is licensed under the MIT License - see the LICENSE file for details. ```
