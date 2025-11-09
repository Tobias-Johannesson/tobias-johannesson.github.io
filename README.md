# Welcome to your Portfolio Project

## Project info

**URL**: https://tobias-johannesson.github.io/

## How can I edit this code?

### Use your preferred IDE

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed. On macOS, you can install Node via Homebrew:

```sh
# Install Homebrew if you haven't already
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node
brew install node
```

Once Node is installed, follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Build the project for production.
npm run build

# Step 5: Navigate into the built files.
cd dist

# Step 6: Run a simple local server using Python.
# For Python 3:
python3 -m http.server 8080
# Open http://localhost:8080 in your browser
```

## What technologies are used for this project?

This project is built with:
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You can deploy by pushing to GitHub Pages:
- The dist folder contains the production build.
- Simply push your dist folder to the gh-pages branch or configure GitHub Pages to serve from main → /dist.