# Portfolio Website - Replit.md

## Overview

This is a modern full-stack portfolio website built with React, TypeScript, and Express.js. The application features a Thai-language portfolio showcasing a computer science student's work, including projects, skills, and contact information. The site includes a contact form with backend data storage and a responsive design using Tailwind CSS and shadcn/ui components.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, built with Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but currently using in-memory storage)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query for server state management
- **Deployment**: Configured for Replit with autoscale deployment

## Key Components

### Frontend Architecture
- **Single Page Application** using React with client-side routing via Wouter
- **Component Library**: shadcn/ui components for consistent UI design
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Management**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions and animations
- **Icons**: Lucide React and React Icons for consistent iconography

### Backend Architecture
- **RESTful API** with Express.js
- **Type Safety**: Shared TypeScript schemas between client and server
- **Validation**: Zod schemas for request validation
- **Middleware**: Request logging and error handling
- **Development**: Hot reload with tsx for development server

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared schema definitions in TypeScript
- **Migrations**: Drizzle Kit for database migrations
- **Current Implementation**: In-memory storage (MemStorage class) for development
- **Production Ready**: Configured for PostgreSQL with Neon Database

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form on frontend
   - Form data validated with Zod schema
   - POST request to `/api/contact` endpoint
   - Server validates and stores contact information
   - Success/error response with toast notification

2. **Portfolio Display**:
   - Static content rendered on client side
   - Smooth scrolling navigation between sections
   - Responsive layout adapts to screen sizes
   - Social media links and downloadable content placeholders

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **drizzle-orm**: Type-safe database ORM
- **framer-motion**: Animation library
- **wouter**: Lightweight client-side routing

### UI/UX Dependencies
- **@radix-ui**: Unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Modern icon library
- **react-icons**: Additional icon collections

### Development Dependencies
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript/TypeScript bundler for production

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Development**: `npm run dev` - Runs both client and server with hot reload
- **Build**: `npm run build` - Builds client assets and bundles server code
- **Production**: `npm run start` - Serves production build
- **Database**: `npm run db:push` - Pushes schema changes to database

### Environment Configuration
- **NODE_ENV**: Set to development/production appropriately
- **DATABASE_URL**: PostgreSQL connection string (required for production)
- **Port Configuration**: Server runs on port 5000, mapped to external port 80

### Replit-Specific Features
- **Cartographer**: Development debugging tool integration
- **Runtime Error Modal**: Development error overlay
- **Autoscale Deployment**: Automatic scaling based on traffic

## Changelog

Changelog:
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.