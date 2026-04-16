# Google Search Console & Business Profile Setup Guide

## Part 1: Google Search Console Setup (15-20 minutes)

### Step 1: Create Google Search Console Account

1. **Open your browser** and go to: https://search.google.com/search-console
2. **Sign in** with your Google account (preferably the one you use for your business)
   - If you don't have a Google account, click "Create account" first
3. You'll see a page titled **"Start now with Google Search Console"**
4. Click the **"Start now"** button

### Step 2: Add Your Property (Website)

1. On the left side, you'll see a dropdown that says **"All properties"**
2. Click on the **"+ Add property"** button (blue button)
3. A dialog box will appear with two options:
   - **Domain** (left side)
   - **URL prefix** (right side) ← **CHOOSE THIS ONE**

4. **Select "URL prefix"** (easier verification method)
5. In the text field, enter: `https://mousetech.app`
   - ⚠️ Make sure to include `https://` not just `mousetech.app`
6. Click **"Continue"**

### Step 3: Verify Ownership

You'll now see several verification methods. We'll use the **HTML tag method**:

#### Option A: HTML Tag (Recommended)

1. Under **"Verify ownership"**, scroll to **"HTML tag"**
2. Click on **"HTML tag"** to expand it
3. You'll see a meta tag that looks like this:
   ```html
   <meta name="google-site-verification" content="YOUR_UNIQUE_CODE_HERE" />
   ```
4. **Copy the entire meta tag** (click the "Copy" button or manually select and copy)
5. **Save this code** - you'll need it in the next step

#### What to do next:
Once you have the verification code, I'll add it to your website's code. Just send me the code (the part that says `content="..."`), and I'll update your site immediately.

---

## Part 2: Update Your Website Code

After you get the verification code from Google Search Console:

### What I'll Do:
I'll update your `layout.tsx` file to include the verification code like this:

```typescript
verification: {
  google: "YOUR_CODE_HERE", // I'll add this for you
},
```

### What You Need to Do:
1. Copy the verification meta tag from Google Search Console
2. Send me the code (the long string inside `content="..."`)
3. I'll update your website
4. After I update it, go back to Google Search Console and click **"Verify"**

---

## Part 3: Google Business Profile Setup (20-30 minutes)

### Step 1: Go to Google Business Profile

1. Open your browser and go to: https://business.google.com
2. Click **"Manage now"** or **"Sign in"**
3. Sign in with your Google account

### Step 2: Create Your Business Profile

1. **Enter your business name**: `MouseTech`
   - If it suggests creating a page, click **"Create a business with this name"**

2. **Choose business type**: 
   - Search for and select: **"Software company"**
   - Or: **"Web designer"** or **"Computer service"**

3. **Add your location**:
   - Question: "Do you have a location customers can visit?"
   - Select: **"No"** (if you're online-only) OR **"Yes"** (if you have an office)
   
4. **Service area**:
   - Select: **"Yes"** (you deliver services to customers)
   - Add service areas:
     - Type: `Lagos, Nigeria` → Select it
     - Type: `Nigeria` → Select it (for nationwide coverage)

### Step 3: Add Contact Information

1. **Phone number**: `+234 807 893 3943`
2. **Website**: `https://mousetech.app`
3. Click **"Next"**

### Step 4: Business Hours

Set your operating hours:
- **Monday**: 9:00 AM – 6:00 PM
- **Tuesday**: 9:00 AM – 6:00 PM
- **Wednesday**: 9:00 AM – 6:00 PM
- **Thursday**: 9:00 AM – 6:00 PM
- **Friday**: 9:00 AM – 6:00 PM
- **Saturday**: Closed (or add hours if you work)
- **Sunday**: Closed

### Step 5: Add Description

Add a compelling business description (copy this):

```
MouseTech is a leading software solutions company in Nigeria specializing in professional website design, mobile app development, and custom software solutions. We help businesses, organizations, and churches build powerful digital products that drive growth. From startups to enterprises, we transform your ideas into reality. Services include web development, iOS & Android apps, e-commerce solutions, UI/UX design, and ongoing maintenance & support.
```

### Step 6: Verification

Google will ask how you want to verify your business:

**Option 1: Postcard by mail** (most common)
- Google sends a postcard with a verification code to your address
- Takes 5-14 days to arrive
- Enter the code when it arrives

**Option 2: Phone verification** (if available)
- Instant verification via SMS or call
- Not always available

**Option 3: Email verification** (if available)
- Instant verification via email
- Not always available

**Option 4: Video verification** (becoming more common)
- Record a short video showing your business
- Upload it for verification

### Step 7: Complete Your Profile

After verification, add these details:

1. **Services**:
   - Website Design & Development
   - Mobile App Development
   - Custom Software Development
   - UI/UX Design
   - E-commerce Solutions
   - Website Maintenance & Support

2. **Photos** (very important!):
   - Upload your logo
   - Add 3-5 photos of your work
   - Add team photos if available

3. **Attributes**:
   - ✓ Online appointments
   - ✓ Online estimates

---

## Part 4: After Setup - What to Monitor

### Google Search Console (Check Weekly):
1. **Performance Report**
   - See which keywords people use to find you
   - Track clicks and impressions
   
2. **Index Coverage**
   - Make sure all pages are indexed
   - Fix any errors

3. **Sitemap Status**
   - Confirm `sitemap.xml` is processed
   - Check for errors

### Google Business Profile (Check Monthly):
1. **Insights**
   - How many people viewed your profile
   - How they found you (search vs maps)
   - Actions they took (called, visited website)

2. **Reviews**
   - Respond to all reviews (positive and negative)
   - Encourage happy clients to leave reviews

---

## Quick Checklist

### Google Search Console:
- [ ] Go to https://search.google.com/search-console
- [ ] Sign in with Google account
- [ ] Click "+ Add property"
- [ ] Choose "URL prefix"
- [ ] Enter: `https://mousetech.app`
- [ ] Select "HTML tag" verification method
- [ ] Copy the meta tag
- [ ] Send me the verification code
- [ ] I'll update your website
- [ ] Click "Verify" in Search Console
- [ ] Submit sitemap: `https://mousetech.app/sitemap.xml`

### Google Business Profile:
- [ ] Go to https://business.google.com
- [ ] Click "Manage now"
- [ ] Enter business name: "MouseTech"
- [ ] Select category: "Software company"
- [ ] Add service areas: Lagos, Nigeria
- [ ] Add phone: +234 807 893 3943
- [ ] Add website: https://mousetech.app
- [ ] Set business hours
- [ ] Add business description
- [ ] Complete verification (postcard/phone/video)
- [ ] Add services
- [ ] Upload logo and photos
- [ ] Request reviews from clients

---

## 🆘 Need Help?

If you get stuck at any step:
1. Take a screenshot of where you are
2. Send it to me
3. I'll guide you through that specific step

---

## 📞 What to Do Right Now:

**Step 1**: Go to https://search.google.com/search-console  
**Step 2**: Follow the steps to add your property  
**Step 3**: Get the HTML verification code  
**Step 4**: Send me the code  
**Step 5**: I'll update your website immediately  

Let me know when you have the verification code! 🚀
