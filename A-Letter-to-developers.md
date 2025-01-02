# 🌩️ Storm Platform Development Standards

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Frontend Development Standards](#2-frontend-development-standards)
3. [Backend Development Standards](#3-backend-development-standards)
4. [Shared Development Practices](#4-shared-development-practices)
5. [Architecture and Design Principles](#5-architecture-and-design-principles)
6. [Performance and Optimization](#6-performance-and-optimization)
7. [Security Guidelines](#7-security-guidelines)
8. [Deployment and CI/CD](#8-deployment-and-cicd)
9. [Contribution Guidelines](#9-contribution-guidelines)

## 1. Project Overview

### 1.1 Project Structure

```markdown
storm/
├── packages/                 # Monorepo packages
│   ├── core/                 # Core functionality
│   ├── ui/                   # UI component library
│   ├── hooks/                # Shared React hooks
│   ├── utils/                # Utility functions
│   └── contracts/            # Smart contract definitions
├── apps/
│   ├── horizon/              # Frontend web application
│   └── thunder/              # Backend services
└── tools/                    # Development scripts
```

### 1.2 Technology Stack

#### Frontend

- React 18.3
- TypeScript 5.6
- Vite
- Valtio (State Management)
- React Router 6.28
- Tailwind CSS
- Web3.js / Ethers.js

#### Backend

- NestJS 10
- TypeScript 5.1
- SWC
- RxJS
- Prisma ORM
- PostgreSQL
- Redis

## 2. Frontend Development Standards

### 2.1 Project Structure

```markdown
src/
├── components/               # Reusable UI components
│   └── st-button/
│       ├── StButton.tsx
│       ├── StButton.types.ts
│       ├── StButton.styles.ts
│       └── StButton.test.tsx
├── features/                 # Feature-specific modules
├── hooks/                    # Custom React hooks
├── pages/                    # Page components
├── services/                 # API and service layers
├── stores/                   # State management
└── utils/                    # Utility functions
```

### 2.2 Naming Conventions

```typescript
// Component Prefix: St
export const StButton = () => {};

// Hook Prefix: useSt
export const useStWallet = () => {};

// Utility Function Prefix: st
export const stFormatAddress = () => {};

// Type Prefix: St
interface StUserProfile {}
type StChainId = number;
```

### 2.3 Component Guidelines

1. Use functional components with hooks
2. Prefer composition over inheritance
3. Keep components small and focused
4. Use prop types and TypeScript interfaces
5. Implement proper error boundaries

### 2.4 State Management

- Use Valtio for global state
- Implement minimal, atomic state
- Avoid prop drilling
- Use context for theme and global settings

## 3. Backend Development Standards

### 3.1 Project Structure

```markdown
src/
├── modules/                  # Feature modules
│   ├── users/
│   ├── auth/
│   └── content/
├── common/                   # Shared resources
│   ├── decorators/
│   ├── guards/
│   └── interceptors/
├── config/                   # Configuration
└── database/                 # Database-related files
```

### 3.2 Module Design

- Each module should be self-contained
- Follow SOLID principles
- Use dependency injection
- Implement clear separation of concerns

### 3.3 API Design

- Use RESTful conventions
- Implement versioned APIs
- Use DTOs for input validation
- Implement comprehensive error handling

### 3.4 Database Interactions

- Use Prisma ORM
- Implement database transactions
- Use migrations for schema changes
- Implement soft delete where applicable

## 4. Shared Development Practices

### 4.1 Code Style

- Use ESLint and Prettier
- Follow TypeScript best practices
- Maximum line length: 80 characters
- Use meaningful variable and function names

### 4.2 Documentation

```typescript
/**
 * Formats blockchain address
 * @param {string} address - Wallet address
 * @returns {string} Formatted address
 */
export const stFormatAddress = (address: string): string => {
  // Implementation
};
```

### 4.3 Error Handling

```typescript
class StBaseException extends Error {
  constructor(
    public message: string,
    public code: number,
    public context?: Record<string, unknown>
  ) {
    super(message);
  }
}

// Usage
throw new StBaseException(
  'Wallet connection failed', 
  ErrorCodes.WALLET_CONNECTION_ERROR,
  { address: walletAddress }
);
```

## 5. Architecture and Design Principles

### 5.1 Web3 Integration

- Use abstraction layers for blockchain interactions
- Implement multi-chain support
- Create robust wallet connection mechanisms

### 5.2 Microservices Considerations

- Design stateless services
- Use message queues for inter-service communication
- Implement circuit breakers
- Design for horizontal scalability

## 6. Performance and Optimization

### 6.1 Frontend Optimization

- Code splitting
- Lazy loading
- Memoization
- Efficient re-rendering strategies

### 6.2 Backend Optimization

- Implement caching strategies
- Use database indexing
- Optimize database queries
- Implement request throttling

## 7. Security Guidelines

### 7.1 General Security

- Implement HTTPS
- Use helmet middleware
- Validate and sanitize all inputs
- Implement rate limiting

### 7.2 Web3 Security

- Secure private key management
- Implement transaction validation
- Regular smart contract audits
- Implement replay attack prevention

## 8. Deployment and CI/CD

### 8.1 Containerization

- Use Docker for consistent environments
- Implement multi-stage builds
- Use Docker Compose for local development

### 8.2 CI/CD Pipeline

- Automated testing
- Static code analysis
- Security scanning
- Automated deployment

## 9. Contribution Guidelines

### 9.1 Branching Strategy

```markdown
main                    # Stable release
├── develop             # Development branch
│   ├── feature/*       # New features
│   ├── bugfix/*        # Bug fixes
│   └── refactor/*      # Code refactoring
└── release/*           # Release preparation
```

### 9.2 Pull Request Process

1. Create detailed PR description
2. Link related issues
3. Pass all automated checks
4. Require code review from maintainers

---

## Additional Resources

- [Contribution Guide](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)
