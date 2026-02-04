# 🍽️ Regal Cravings - Food Ordering Web App

![Regal Cravings](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, full-featured food ordering application built with React, TypeScript, and Tailwind CSS. Experience seamless ordering with real-time cart management, payment integration, and email notifications.

## 🌐 Live Demo

**GitHub Pages:** [https://dem199.github.io/Regal-Cravings/](https://dem199.github.io/Regal-Cravings/)

## ✨ Features

### 🛒 Shopping Experience
- **Browse Menu** - 28+ delicious Nigerian dishes across multiple categories
- **Smart Filtering** - Filter by category (Rice, Swallow, Sides, Drinks)
- **Real-time Search** - Find your favorite meals instantly
- **Favorites System** - Save your go-to dishes for quick access
- **Shopping Cart** - Add, update, and remove items with live total calculation

### 💳 Payment & Orders
- **Paystack Integration** - Secure payment processing
- **Test Mode Available** - Test the full flow without real charges
- **Order Confirmation** - Instant email notifications via EmailJS
- **Professional Receipts** - Beautiful HTML email templates

### 🎨 User Experience
- **Responsive Design** - Perfect on mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion
- **Persistent Cart** - Your cart saves even after closing the browser
- **Dark/Light Mode Ready** - Clean, modern interface

## 🚀 Tech Stack

### Frontend
- **React 18.2** - UI library
- **TypeScript 5.2** - Type safety
- **Vite 5.2** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first styling
- **Framer Motion 11** - Smooth animations

### Integrations
- **Paystack** - Payment processing
- **EmailJS** - Order confirmation emails
- **Lucide React** - Beautiful icons

### State Management
- **React Hooks** - useState, useEffect, custom hooks
- **Local Storage** - Cart and favorites persistence

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Clone Repository
```bash
git clone https://github.com/dem199/Regal-Cravings.git
cd Regal-Cravings
```

### Install Dependencies
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Paystack Configuration (Use TEST key for development)
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_test_key
```

**Get your API keys:**
- **EmailJS:** [https://www.emailjs.com/](https://www.emailjs.com/)
- **Paystack:** [https://dashboard.paystack.com/](https://dashboard.paystack.com/)

### Run Development Server
```bash
npm run dev
```

Visit: `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment

### GitHub Pages (Current)
Automatically deployed via GitHub Actions on every push to `main` branch.

**Workflow:** `.github/workflows/deploy.yml`

**Required GitHub Secrets:**
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_PAYSTACK_PUBLIC_KEY`

Add these in: Repository → Settings → Secrets and variables → Actions

### Netlify
1. Connect your GitHub repository
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Add environment variables in Netlify dashboard
4. Deploy!

### Vercel
```bash
npm i -g vercel
vercel --prod
```

Add environment variables in Vercel dashboard.

## 📁 Project Structure

```
regal-cravings/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── IMG_E6750-*.png        # Food images (28 items)
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/
│   │   ├── AboutUs.tsx        # About page
│   │   ├── CartSidebar.tsx    # Shopping cart sidebar
│   │   ├── CheckoutModal.tsx  # Payment modal
│   │   ├── MenuCard.tsx       # Food item card
│   │   └── Navbar.tsx         # Navigation bar
│   ├── data/
│   │   └── menu.ts            # Menu items data
│   ├── hooks/
│   │   └── index.ts           # Custom React hooks
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── utils/
│   │   └── storage.ts         # LocalStorage utilities
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # App entry point
│   ├── index.css              # Global styles
│   └── vite-env.d.ts          # Vite type definitions
├── .eslintrc.cjs              # ESLint configuration
├── .gitignore                 # Git ignore rules
├── index.html                 # HTML template
├── package.json               # Dependencies
├── postcss.config.js          # PostCSS config
├── tailwind.config.js         # Tailwind config
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite configuration
└── README.md                  # This file
```

## 🧪 Testing Payment

Use Paystack test cards:

**Card Number:** `4084084084084081`  
**Expiry:** Any future date (e.g., `12/25`)  
**CVV:** `408`  
**PIN:** `0000`  
**OTP:** `123456`

More test cards: [Paystack Test Payments](https://paystack.com/docs/payments/test-payments)

## 🎨 Customization

### Update Menu Items
Edit `src/data/menu.ts`:

```typescript
export const menuArray: FoodItem[] = [
  {
    id: 0,
    name: "Your Dish Name",
    ingredients: ["ingredient1", "ingredient2"],
    price: 2000,
    image: "your-image.png",
    category: 'Rice' // Rice, Swallow, Sides, Drinks
  }
]
```

### Update Colors
Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      orange: {
        500: '#f97316', // Primary color
        600: '#ea580c', // Hover color
      }
    }
  }
}
```

### Update Business Info
- **Company Name:** `src/components/Navbar.tsx`
- **About Page:** `src/components/AboutUs.tsx`
- **Contact Email:** `src/components/CheckoutModal.tsx`

## 📧 Email Template Setup

1. Create EmailJS account
2. Add email service (Gmail recommended)
3. Create template with these variables:
   - `{{customer_name}}`
   - `{{customer_email}}`
   - `{{message}}`
   - `{{payment_ref}}`
   - `{{total_price}}`

Template example in: Email confirmation sent after successful payment.

## 🔒 Security

- ✅ API keys stored as environment variables
- ✅ `.env` file excluded from Git
- ✅ GitHub Secrets for deployment
- ✅ Test mode for Paystack during development
- ✅ Client-side only (public keys used)

**Never commit:**
- `.env` file
- Secret keys
- Live payment credentials

## 🐛 Known Issues

- Images must be in `public/` folder (not `public/images/`)
- Environment variables must be set in GitHub Secrets for deployment
- Hard refresh may be needed after deployment (Ctrl+Shift+R)



## 👨‍💻 Developer

**Olatunbosun Opeyemi**  
- GitHub: [@dem199](https://github.com/dem199)
- Email: olatunbosunopeyemi186035@gmail.com

## 🙏 Acknowledgments

- React Team for the amazing library
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- Paystack for payment processing
- EmailJS for email service
- Lucide for beautiful icons

## 📞 Support

For issues or questions:
1. Open an issue on GitHub
2. Check existing issues for solutions
3. Contact via email

---

**Made with ❤️ By Optimistic**

