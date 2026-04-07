<img width="1902" height="966" alt="Screenshot 2026-04-07 230515" src="https://github.com/user-attachments/assets/a2760313-802e-4db8-9f15-b5413b3c1b27" />
# YouTube Clone

A full-stack, feature-rich YouTube clone built with Next.js, React, tRPC, and a robust suite of modern web development tools. This application handles everything from video uploads and processing to user authentication and background AI workflows.

## 🚀 Features

- **Video Processing & Playback:** High-performance video streaming, uploading, and processing powered by **Mux**.
- **Authentication:** Secure user login and session management via **Clerk**.
- **API & Data Fetching:** Fully typed, end-to-end API using **tRPC** and **React Query**.
- **Database:** Serverless Postgres database hosted on **Neon** and queried using **Drizzle ORM**.
- **Background Jobs & AI Processing:** Resilient background tasks, rate limiting, and AI workflows (such as title/description generation via Groq AI) managed using **Upstash Workflows & Redis**.
- **Supplementary Uploads:** Seamless image and asset uploads via **UploadThing**.
- **Modern UI/UX:** Responsive, accessible, and highly interactive interface built with **Tailwind CSS**, **Radix UI**, and custom **Shadcn UI** components.
- **Dark Mode:** Built-in theme switching mechanism.

## 💻 Tech Stack

### Frontend
- Next.js 15 (App Router)
- React 19
- Tailwind CSS & Tailwind-Animate
- Radix UI Primitives (Shadcn UI)
- Lucide React (Icons)
- Embla Carousel & Recharts

### Backend / Full-stack
- tRPC (Client/Server) & TanStack React Query
- Next.js Server Actions & API Routes
- Drizzle ORM
- Neon (Serverless PostgreSQL)
- UploadThing (Image/Asset Storage)
- Mux (Video Processing, Delivery, & Player)

### Infrastructure & Services
- Clerk (Authentication)
- Upstash Redis (Rate Limiting)
- Upstash Workflow (Background AI processing & Task execution)
- ngrok (Webhook testing)

## 🛠️ Prerequisites

Make sure you have the following installed to run the local development server:
- Node.js (v18+)
- Bun (Package manager & script runner)

## 📦 Local Development

1. **Clone the repository and install dependencies:**
   ```bash
   bun install
   ```

2. **Set up Environment Variables:**
   Create a `.env.local` file at the root of the project. You will need to provision API keys from the following services to run the app effectively:
   - Next.js (Base URL points)
   - Clerk (Publishable Key, Secret Key, Webhook Secret)
   - Neon (Database connection string)
   - Mux (Token ID, Token Secret, Webhook Secret)
   - Upstash Redis (REST URL, REST Token)
   - Upstash QStash (Token for workflows)
   - UploadThing (Secret & App ID)
   - Groq AI (for generation workflows)

3. **Database Setup:**
   Run Drizzle Kit to migrate the database schema with:
   ```bash
   bunx drizzle-kit push
   ```

4. **Run the Development Server:**
   This project uses `concurrently` to run both the Next.js dev server and ngrok for local webhook testing!

   ```bash
   bun run dev:all
   ```
   *Note: This command runs the default Next dev server along with an ngrok tunnel. If you don't need webhooks active locally, you can simply run `bun run dev`.*

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Changes
This project uses Drizzle ORM. If you modify any schemas in `src/db/schema.ts`, make sure to push changes to your database:
```bash
bunx drizzle-kit push
bunx drizzle-kit generate
```

## 📝 Scripts
- `bun run dev` - Starts the Next.js development server
- `bun run dev:all` - Starts the dev server + an ngrok tunnel (`dev:webhook`) concurrently
- `bun run build` - Builds for production
- `bun run start` - Starts the production server
- `bun run lint` - Runs ESLint

---
*Built with modern web standards and highly resilient background infrastructure for a scalable viewing experience.*
