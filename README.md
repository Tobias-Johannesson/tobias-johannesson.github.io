# Welcome to Your Portfolio Project

## Project Info

**Live Site:** [https://tobias-johannesson.github.io/](https://tobias-johannesson.github.io/)  
**Repository:** [https://github.com/Tobias-Johannesson/tobias-johannesson.github.io](https://github.com/Tobias-Johannesson/tobias-johannesson.github.io)

This is a personal **portfolio website** built with **React**, **TypeScript**, **Vite**, **TailwindCSS**, and **shadcn-ui**.  
It’s deployed using **GitHub Pages** through the **gh-pages** package.

---

## Local Development

### Install Node.js
If you don’t already have Node.js installed, install it via **Homebrew** on macOS:

```bash
# Install Homebrew (if you don't have it)
 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

---

### Set Up the Project

```bash
# 1️. Clone the repository
git clone https://github.com/Tobias-Johannesson/tobias-johannesson.github.io.git

# 2️. Navigate into the project directory
cd tobias-johannesson.github.io

# 3️. Install dependencies
npm install

# 4️. Run the project in development mode
npm run dev
```

This will start a local development server (usually at [http://localhost:8080](http://localhost:8080)).

---

### Build and Preview Locally

To test your production build locally:

```bash
# 1️. Build the production version
npm run build

# 2️. Navigate to the build output folder
cd dist

# 3️. Serve the static files with Python
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🚀 Deployment to GitHub Pages

### 1️. Configure Vite

In your **vite.config.ts**, make sure the base path is `/`:

```ts
export default defineConfig({
  plugins: [react()],
  base: "/",
});
```

---

### 2️. Update `package.json`

Add the following fields to the root of your `package.json`:

```json
"homepage": "https://<your-username>.github.io/<your-repo-name>/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then install the deployment dependency:

```bash
npm install gh-pages --save-dev
```

---

### 3️. Deploy to GitHub Pages

Deploy your portfolio with a single command:

```bash
npm run deploy
```

This builds your app and pushes the contents of the `dist/` folder to a new branch called `gh-pages`, which GitHub Pages serves automatically.

---

### 4️. Configure GitHub Pages

1. Go to your repo’s **Settings → Pages**  
2. Under **Branch**, select `gh-pages`  
3. Set the directory to `/ (root)`  
4. Click **Save**

Your portfolio should now be live at:  
👉 [https://tobias-johannesson.github.io/](https://tobias-johannesson.github.io/)

---

## ⚙️ Technologies Used

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **shadcn-ui**
- **gh-pages** (for deployment)

---

 _Developed and maintained by Tobias Johannesson._
