![CI](https://github.com/Reward360-Global-Services-pvt-Ltd/r360-sb-onesmartbuy-service/actions/workflows/ci.yml/badge.svg)
![Coverage](https://raw.githubusercontent.com/Reward360-Global-Services-pvt-Ltd/r360-sb-onesmartbuy-service/main/docs/badges/coverage.svg)

## ⚙️ Tech Stack & Configuration

This project is built using the latest **Next.js 15.2 App Router**, **TailwindCSS**, **ShadCN UI**, and custom font optimization for a modern and scalable frontend experience.

### 🧭 App Router (Next.js 15.2)

Using the new `/app` directory:

- File-based routing
- Built-in layouts (`layout.tsx`)
- Loading and error UI
- Server & client components

📁 Example structure:

```
app/
├─ layout.tsx
├─ page.tsx
├─ home/
│   └─ page.tsx
```

---

### 💨 Tailwind CSS

Tailwind is used for utility-first styling:

- Mobile-first responsive classes
- Custom themes via `tailwind.config.ts`
- JIT mode for optimized builds

📦 Installed with PostCSS & Autoprefixer

---

### 🎨 ShadCN UI

Built on:

- 🧱 Radix UI (accessible components)
- 🎨 TailwindCSS
- ⚙️ Themeable with CSS variables

UI components are installed using the CLI and live in the `/components/ui` folder.

```bash
npx shadcn-ui@latest init
```

```bash
pnpm dlx shadcn@latest add [component]
```

> Customize components, colors, and layouts using Tailwind and themes.

---

### 🔤 Custom Fonts

Custom fonts are included and served locally from:

```
src/assets/fonts/
```

> Fonts are optimized for performance and consistency across the project.

---

### 🔌 tRPC

This project uses **tRPC** for end-to-end type-safe APIs:

- No need for REST or GraphQL boilerplate
- Type inference from backend to frontend
- Seamless integration with React & Next.js

---

## 🚀 Getting Started

Follow these steps to set up the project locally and start developing.

---

### 🧱 Prerequisites

Make sure you have the following installed:

- **Node.js** `v18.18` or higher
- **npm** or **pnpm** (recommended **pnpm**)
- Optional: **VS Code** with extensions for ESLint, Prettier, and Tailwind CSS

---

### 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-org/your-repo-name.git
cd your-repo-name
```

2. **Install dependencies**

Using pnpm:

```bash
pnpm install
```

1. **Set up environment variables**

Create a `.env` file and paste values shared by senior dev.

```bash
.env
```

Fill in required environment variables (API keys, URLs, etc.).

---

### 🏃 Run the Development Server

```bash
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🧹 Code Quality & Formatting

This project uses **ESLint**, **Prettier**, **Husky**, and **lint-staged** to maintain a consistent and clean codebase.

### 🔧 Tools in Use

| Tool            | Purpose                             |
| --------------- | ----------------------------------- |
| **ESLint**      | Lint JS/TS code, catch bad patterns |
| **Prettier**    | Auto-formatting for code            |
| **Husky**       | Run Git hooks (e.g., pre-commit)    |
| **lint-staged** | Lint and format only staged files   |

---

## 🔄 Code Quality

### For All Developers

- On commit: Prettier and ESLint run automatically on staged files via Husky.

### For Maintainers

- Run full linting/formatting:
  ```bash
  pnpm run code:cleanup
  ```

### 📜 NPM Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm run lint         # Run ESLint across the codebase
pnpm run lint:fix     # Auto-fix lint issues
pnpm run format       # Check Prettier formatting
pnpm run format:fix   # Format the entire project using Prettier
pnpm run code:cleanup # Format + lint fix across all files

```

## ✍️ Commit Message Formatting

---

This project follows **conventional commit** standards to keep commit history clean, readable, and useful for changelogs, automation, and collaboration.

### 🧾 Format

### 🎯 Types

| Type       | Purpose                                                           |
| ---------- | ----------------------------------------------------------------- |
| `feat`     | A new feature                                                     |
| `fix`      | A bug fix                                                         |
| `docs`     | Documentation-only changes                                        |
| `style`    | Changes that do not affect meaning (e.g. formatting, white-space) |
| `refactor` | A code change that neither fixes a bug nor adds a feature         |
| `perf`     | A code change that improves performance                           |
| `test`     | Adding or updating tests                                          |
| `build`    | Changes that affect the build system or external dependencies     |
| `ci`       | Changes to CI/CD configuration files and scripts                  |
| `chore`    | Other changes that don’t modify src or test files                 |
| `revert`   | Reverts a previous commit                                         |

---

### ✅ Examples

```bash
feat: add points slider to checkout page

fix(auth): handle expired JWT token properly

docs(readme): add instructions for linting and formatting

style: format UI button component with Prettier

refactor(api): simplify product fetch logic

test: add unit test for coupon redemption logic

chore: update dependencies and regenerate lockfile

```
# cache-demo
