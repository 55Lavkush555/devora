# Devora 🚀

A modern full-stack developer blogging platform built with a production-focused architecture using Next.js, MongoDB, and Clerk Authentication.

## 🌐 Live Demo

https://devora-opal.vercel.app/

---

# ✨ Overview

Devora is a modern blogging platform designed with a premium SaaS-style UI inspired by platforms like Linear, Medium, Notion, and Vercel.

The project focuses on:
- Real-world architecture
- Clean UI/UX
- Backend security
- Performance optimization
- Responsive design
- Production-ready implementation

This project was built independently without following a complete tutorial, focusing on system design, optimization, scalability, and real product-building experience.

---

# 🛠 Tech Stack

## Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- shadcn/ui
- Framer Motion

## Backend
- Next.js API Routes
- MongoDB with Mongoose

## Authentication
- Clerk Authentication
- Google Login

## Image Storage
- Cloudinary

## Markdown & Code Rendering
- react-markdown
- react-syntax-highlighter

---

# 🔥 Features

## 🔐 Authentication & Security
- Google Authentication
- Protected Routes
- Backend Authorization Validation
- Secure Blog Edit/Delete APIs
- Rate Limiting
- User-based blog ownership protection

Only the original blog creator can edit or delete their blogs.

---

## ✍️ Blogging System
- Create Blog
- Edit Blog
- Delete Blog
- Markdown Blog Editor
- Syntax Highlighting
- Responsive Reading Experience
- Reading Progress Bar

---

## 🔎 Optimized Search System
- Dedicated Search Page
- Displays only 12 most relevant blogs
- Optimized rendering
- Lightweight and scalable search architecture

---

## 📂 Categories & Discovery
- Category-based blog filtering
- Featured Blogs section
- Trending Categories
- Modern blog cards

---

## ❤️ User Features
- Save Articles functionality
- User Dashboard
- User Profiles

---

## ⚡ Performance Optimizations
- Pagination implemented
- Optimized image delivery using Cloudinary
- Next.js Image optimization
- Fast production builds
- Skeleton loading states
- Lightweight API responses

---

## 🎨 UI/UX
- Modern SaaS-inspired UI
- Dark/Light Theme
- Smooth animations
- Glassmorphism effects
- Responsive design
- Toast notifications
- Clean typography
- Premium startup-style appearance

---

# 📸 Pages

- Home Page
- Blog Listing Page
- Single Blog Page
- Categories Page
- Search Page
- Login Page
- Dashboard
- Create Blog Page
- Edit Blog Page
- Saved Blogs Page
- User Profile Page

---

# 📁 Folder Structure

```bash
src/
├── app/
├── components/
├── lib/
├── models/
├── actions/
├── hooks/
├── utils/
└── styles/
```

---

# 🚀 Performance & Scalability

Devora was built with optimization and scalability in mind.

Implemented optimizations include:
- Pagination
- Limited search results
- Optimized image rendering
- Backend validation
- Rate limiting
- Lightweight API architecture

The application performs smoothly in production builds with fast route transitions and responsive UI interactions.

---

# 🧠 What I Learned

This project helped improve skills in:
- Full Stack Development
- System Design Thinking
- Backend Security
- API Architecture
- Performance Optimization
- UI/UX Design
- Responsive Development
- Production Deployment
- Real-world Project Structuring

---

# ⚙️ Installation

```bash
# Clone repository
git clone <your-repo-url>

# Install dependencies
npm install

# Run development server
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env.local` file and add:

```env
MONGODB_URI=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

# 🌐 Deployment

Deployed on:
- Vercel

---

# 📌 Future Plans

- Comments System
- Followers System
- Notifications
- AI Writing Tools
- Analytics Dashboard
- Advanced Search
- Blog Recommendations

---

# 👨‍💻 Developer

Built independently by Lavkush Kushwaha.

## GitHub
https://github.com/55lavkush555

## Portfolio
https://55lavkush555.netlify.app/

---

# ⭐ Final Note

Devora is more than just a CRUD project.

It is a production-style full-stack blogging platform focused on real-world architecture, optimization, scalability, security, and clean user experience.
