<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# LEOSHe Portfolio Website - Development Guidelines

## Project Overview

This is a professional portfolio website for LEOSHe, a digital HSE (Health, Safety & Environment) solutions platform. The website showcases the company's services, features, and development investment structure.

## Technology Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion and AOS for smooth interactions
- **Icons**: Heroicons and custom SVG icons
- **Fonts**: Inter from Google Fonts

## Design System

### Color Palette

Use the defined CSS custom properties in the design:

- `--color-primary: #23356B` (Deep Navy Blue)
- `--color-secondary: #48A146` (Leafy Green)
- `--color-accent: #1A8177` (Teal)
- `--color-background: #F4F6F8` (Soft White)
- `--color-text: #2A2A2A` (Dark Gray)

### Component Guidelines

- Use responsive design patterns with mobile-first approach
- Implement smooth animations and transitions
- Follow accessibility best practices
- Maintain consistent spacing using Tailwind utilities
- Use semantic HTML elements

## Animation Principles

- Use Framer Motion for complex animations
- Implement scroll-triggered animations with Intersection Observer
- Add hover effects and micro-interactions
- Ensure animations are smooth and purposeful
- Consider reduced motion preferences

## Content Focus

The website should emphasize:

- Professional HSE solutions and expertise
- Digital platform capabilities and features
- Development investment structure (8,000 AED total)
- Multi-industry support (Oil & Gas, Construction, Aviation)
- AI-powered analytics and modern technology
- Security and compliance features

## Code Quality

- Use TypeScript for type safety
- Follow React best practices and hooks patterns
- Implement proper error handling
- Optimize for performance and SEO
- Use semantic HTML and ARIA labels for accessibility

## File Structure

- Components in `/src/components/`
- Pages in `/src/app/`
- Styles in `/src/app/globals.css`
- Use absolute imports with `@/` prefix

When writing code for this project, prioritize professional design, smooth animations, and clear presentation of LEOSHe's digital HSE platform capabilities.
