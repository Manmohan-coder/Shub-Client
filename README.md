# 🎁 ShubGift - E-commerce Frontend

A modern, responsive e-commerce platform built with React and Redux, featuring a beautiful UI for gift shopping.

## 🚀 Features

- **User Authentication**
  - Login/Register functionality
  - JWT token-based authentication
  - Protected routes for authenticated users
  - User profile management

- **Product Management**
  - Product browsing and searching
  - Category-based filtering
  - Product details view
  - Shopping cart functionality
  - Responsive product cards with hover effects

- **UI/UX**
  - Responsive design for all devices
  - Modern and clean interface
  - Smooth transitions and animations
  - User-friendly navigation
  - Search functionality
  - Interactive product cards

- **Admin Dashboard**
  - Product management (CRUD operations)
  - User management
  - Order tracking
  - Analytics dashboard

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Remix Icons
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Notifications**: React Toastify

## 📦 Project Structure

```
src/
├── components/         # Reusable components
├── config/            # Configuration files
├── context/           # React context providers
├── pages/             # Page components
│   ├── admin/         # Admin dashboard pages
│   └── users/         # User-related pages
├── routes/            # Route configurations
├── stores/            # Redux store setup
│   ├── actions/       # Redux actions
│   └── reducers/      # Redux reducers
└── utils/             # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd shub-client
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=your_backend_api_url
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Visit `http://localhost:5173` to see the application running.

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL |

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🔒 Authentication Flow

1. User registers/logs in through the auth forms
2. Backend validates credentials and returns JWT token
3. Token is stored in localStorage
4. Axios interceptors add token to all subsequent requests
5. Protected routes check for valid authentication
6. Token is removed on logout

## 🎨 Styling Guide

- Primary Color: Pink (#FFCCEA)
- Secondary Color: Deep Pink (#FF5151)
- Text Colors: 
  - Primary: #161616
  - Secondary: Gray shades
- Font: System default font stack
- Responsive Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 📝 API Integration

- Base URL: `VITE_API_URL`
- Authentication endpoints:
  - POST `/user/login`
  - POST `/user/register`
  - POST `/user/logout`
- Product endpoints:
  - GET `/products`
  - GET `/products/:id`
  - POST `/products` (Admin)
  - PUT `/products/:id` (Admin)
  - DELETE `/products/:id` (Admin)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributors

- Initial work - [Your Name]

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Remix Icons](https://remixicon.com/)
- [Vite](https://vitejs.dev/)
