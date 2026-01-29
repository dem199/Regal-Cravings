# 📥 MANUAL PROJECT SETUP GUIDE

Since folder download isn't working, follow these steps to manually recreate your project:

---

## 🚀 STEP-BY-STEP INSTRUCTIONS

### STEP 1: Create Project Structure

Open your terminal/command prompt and run:

```bash
# Create main folder
mkdir regal-cravings-production
cd regal-cravings-production

# Create folder structure
mkdir -p src/components
mkdir -p src/data
mkdir -p src/hooks
mkdir -p src/types
mkdir -p src/utils
mkdir -p public/images
```

---

### STEP 2: Download Configuration Files

Download these **10 files** above (Configuration section) and place in root:
- ✅ package.json
- ✅ tsconfig.json
- ✅ tsconfig.node.json
- ✅ vite.config.ts
- ✅ tailwind.config.js
- ✅ postcss.config.js
- ✅ .eslintrc (rename to .eslintrc.cjs)
- ✅ .gitignore
- ✅ .env (rename to .env.example)
- ✅ index.html

**Place all in:** `regal-cravings-production/` (root folder)

---

### STEP 3: Download Components

Download these **5 files** above (Components section) and place in `src/components/`:
- ✅ Navbar.tsx
- ✅ MenuCard.tsx
- ✅ CartSidebar.tsx
- ✅ CheckoutModal.tsx
- ✅ AboutUs.tsx

**Place all in:** `regal-cravings-production/src/components/`

---

### STEP 4: Download Source Files

Download these **7 files** above (Source Files section):
- ✅ App.tsx → place in `src/`
- ✅ main.tsx → place in `src/`
- ✅ index.css → place in `src/`
- ✅ menu.ts → place in `src/data/`
- ✅ hooks/index.ts → place in `src/hooks/`
- ✅ types/index.ts → place in `src/types/`
- ✅ utils/storage.ts → place in `src/utils/`

---

### STEP 5: Download Documentation (Optional)

Download these **4 files** above (Documentation section) and place in root:
- ✅ README.md
- ✅ SETUP_INSTRUCTIONS.md
- ✅ DEPLOYMENT.md
- ✅ PROJECT_SUMMARY.md

**Place all in:** `regal-cravings-production/` (root folder)

---

### STEP 6: Verify Structure

Your folder should look like this:

```
regal-cravings-production/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.cjs
├── .gitignore
├── .env.example
├── index.html
├── tsconfig.node.json
├── README.md
├── SETUP_INSTRUCTIONS.md
├── DEPLOYMENT.md
├── PROJECT_SUMMARY.md
├── public/
│   └── images/          (empty for now)
└── src/
    ├── components/
    │   ├── AboutUs.tsx
    │   ├── CartSidebar.tsx
    │   ├── CheckoutModal.tsx
    │   ├── MenuCard.tsx
    │   └── Navbar.tsx
    ├── data/
    │   └── menu.ts
    ├── hooks/
    │   └── index.ts
    ├── types/
    │   └── index.ts
    ├── utils/
    │   └── storage.ts
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

---

### STEP 7: Install Dependencies

```bash
cd regal-cravings-production
npm install
```

---

### STEP 8: Add Your Images

Place your food images in `public/images/` folder

---

### STEP 9: Configure Environment

1. Copy `.env.example` to `.env`
2. Add your API keys (EmailJS and Paystack)

---

### STEP 10: Run the Project

```bash
npm run dev
```

---

## 🎯 Quick Checklist

- [ ] Created folder structure (Step 1)
- [ ] Downloaded 10 config files (Step 2)
- [ ] Downloaded 5 component files (Step 3)
- [ ] Downloaded 7 source files (Step 4)
- [ ] Downloaded 4 documentation files (Step 5)
- [ ] Verified folder structure (Step 6)
- [ ] Ran `npm install` (Step 7)
- [ ] Added food images (Step 8)
- [ ] Configured .env file (Step 9)
- [ ] Tested with `npm run dev` (Step 10)

---

## 🔧 Important Notes

1. **File Extensions Matter!**
   - `.tsx` for React components
   - `.ts` for TypeScript files
   - `.js` for JavaScript config files
   - `.cjs` for CommonJS files

2. **Hidden Files:**
   - `.gitignore` starts with a dot
   - `.eslintrc.cjs` starts with a dot
   - `.env.example` starts with a dot

3. **Folder Names:**
   - `src/` NOT `SRC/` or `Src/`
   - `public/` NOT `Public/`
   - Case-sensitive!

---

## ❓ Troubleshooting

**Problem:** npm install fails
**Solution:** Make sure package.json is in the root folder

**Problem:** Files won't download
**Solution:** Try right-click → Save As on each file

**Problem:** Import errors
**Solution:** Check all files are in correct folders

---

## 🎉 You're Done!

Once all files are in place and npm install succeeds, your project is ready to run!

```bash
npm run dev
```

Visit http://localhost:3000 and see your application!