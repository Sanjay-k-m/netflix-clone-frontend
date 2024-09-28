# <span style="font-size: 36px;">🎬</span> Netflix Clone Frontend

## <span style="font-size: 28px;">📜</span> Overview

This repository contains the frontend for a Netflix Clone built with React and styled using Tailwind CSS. The frontend communicates with the backend API (Node.js/Express) to fetch movie data and display trending movies and TV shows. Users can view details and watch trailers embedded via YouTube.

> **Note:** This project is created for educational purposes to help understand the full-stack development process and the technologies involved.

- **Backend Repository**: Check out the backend API here: [Netflix Clone Backend](https://github.com/Sanjay-k-m/netflix-clone-backend)

## <span style="font-size: 28px;">🚀</span> Features

- **Trending Movies/Shows**: Real-time data fetched from the TMDb API.
- **Movie/Show Details**: Comprehensive details, including trailers.
- **Responsive Design**: Fully responsive, built with Tailwind CSS.
- **YouTube Trailers**: Integrated video player using React Player.
- **State Management**: Managed with Zustand for simplicity.

## <span style="font-size: 28px;">🛠</span> Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Zustand**: State management solution for React.
- **Axios**: For making API requests.
- **React Router DOM**: Client-side routing.
- **React Player**: YouTube video player integration.
- **Vite**: Fast build tool for development and production.

## <span style="font-size: 28px;">📦</span> Installation & Setup

### Prerequisites
- Node.js and npm installed.
- Ensure that the backend API is running and configured with a valid TMDb API key.

### Steps
1. Clone this repository:
    ```bash
    git clone https://github.com/Sanjay-k-m/netflix-clone.git
    cd netflix-clone
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file:
    Copy the provided `.env.example` to a new file named `.env` and update the necessary values.
    ```bash
    cp .env.example .env
    ```

    Add your API URL:
    ```
    VITE_APP_API_URL=http://localhost:5000
    ```

4. Run the app:
    ```bash
    npm run dev
    ```

5. Visit [http://localhost:5173 ](http://localhost:5173 ) to view the app.

## <span style="font-size: 28px;">🛠</span> Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode using Vite.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Lints the code using ESLint.

## <span style="font-size: 28px;">🔧</span> Key Packages

- **Axios**: For handling API requests.
- **Tailwind CSS**: For styling the UI.
- **React Router DOM**: For managing routes and navigation.
- **Zustand**: Lightweight state management for React.
- **React Player**: To embed and play YouTube videos.

## <span style="font-size: 28px;">📚</span> Purpose

This project is created for educational purposes to demonstrate full-stack development using the MERN stack and enhance skills in building responsive web applications.

## <span style="font-size: 28px;">🎥</span> Acknowledgments

This project was created by referring to the tutorial provided by [Asa Programmer](https://www.youtube.com/@asaprogrammer_) on YouTube. Special thanks for the guidance and valuable insights into building a Netflix clone using the MERN stack.

## <span style="font-size: 28px;">🤝</span> Contributing

Contributions are welcome! Feel free to fork this repo, make changes, and submit a pull request.

## <span style="font-size: 28px;">📧</span> Contact

- **Sanjay K M**: dev.sanjaykm@outlook.com
- **GitHub**: [https://github.com/Sanjay-k-m](https://github.com/Sanjay-k-m)
