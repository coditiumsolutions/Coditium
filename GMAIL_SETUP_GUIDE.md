# Gmail Email Setup Guide - Step by Step

## Step 1: Google Account mein jayein
1. Browser mein jayein: https://myaccount.google.com/
2. Apna Gmail account se login karein

## Step 2: Security Settings
1. Left side menu se **"Security"** par click karein

## Step 3: 2-Step Verification Enable karein (Agar nahi hai)
1. **"2-Step Verification"** par click karein
2. Agar already ON hai, to Step 4 par jayein
3. Agar OFF hai:
   - **"Get Started"** par click karein
   - Phone number enter karein
   - Verification code enter karein
   - **"Turn On"** par click karein

## Step 4: App Password Generate karein
1. Security page par wapas jayein
2. **"2-Step Verification"** section mein scroll karein
3. **"App passwords"** par click karein
   - Ya directly jayein: https://myaccount.google.com/apppasswords
4. Agar pehli baar ho to:
   - **"Select app"** dropdown se **"Mail"** select karein
   - **"Select device"** dropdown se **"Other (Custom name)"** select karein
   - Name field mein type karein: **"Coditium Server"**
   - **"Generate"** button par click karein
5. **16-character password** dikhega (jaise: `abcd efgh ijkl mnop`)
6. **Ye password copy kar lein** (ye sirf ek baar dikhega!)

## Step 5: .env File Update karein
1. Project folder mein `.env` file open karein
2. Ye lines update karein:

```
EMAIL_USER=apna-email@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

**Important:**
- `EMAIL_USER`: Apna Gmail address (jo form se emails bhejni hain)
- `EMAIL_PASS`: App Password (jo Step 4 mein generate kiya)

## Step 6: Server Restart karein
1. Terminal mein server stop karein (Ctrl+C)
2. Phir wapas start karein: `npm run dev`

## Test karein
1. Website par demo request form fill karein
2. Submit karein
3. User ko email jayegi automatically!

---

**Note:** Agar koi problem ho to:
- Check karein ke App Password sahi hai
- Check karein ke 2-Step Verification ON hai
- Server logs check karein (terminal mein)

