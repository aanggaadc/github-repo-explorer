# GitHub Repositories Explorer

## 📌 Project Description
GitHub Repositories Explorer is a React application that integrates with the GitHub API to allow users to search users with a username similar to the inputted value. Upon selecting a user, the application displays all repositories associated with that user.

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript
- **Styling:** Tailwind CSS, ShadCN
- **State Management & Data Fetching:** TanStack React Query

## 🎯 Features
- Search for GitHub users based on input.
- Show repositories for a selected user.
- Proper error handling for API requests.

## 📂 Project Structure
```
/src
 ├── components/      # Reusable components
 ├── services/        # API call functions
 ├── lib/             # Helper functions
 ├── providers/       # Context providers
 ├── types/           # TypeScript type definitions
 ├── App.tsx          # Main app component
 ├── main.tsx         # React entry point
```

## 🔧 Installation & Setup
### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (v18+ recommended)
- npm or yarn

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/aanggaadc/github-repo-explorer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd github-repo-explorer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
5. Open your browser and go to `http://localhost:5173/` (or the provided port).

## 🛠️ API Integration
This project uses the [GitHub REST API v3](https://developer.github.com/v3/) to fetch user data and repositories.

### Endpoints Used
- **Search Users:** `GET https://api.github.com/search/users?q={username}`
- **Get User Repositories:** `GET https://api.github.com/users/{username}/repos`

## ✅ Error Handling
- Displays appropriate error messages if the API request fails.
- Handles cases where no users or repositories are found.
- Implements loading states for better UX.

---

Happy Coding! 🚀

