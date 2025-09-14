# How to Set Up Google Analytics for Your Website

This guide will walk you through creating a Google Analytics account and connecting it to your website to start tracking visitor traffic.

## Part 1: Create a Google Analytics Account

First, you need to create a Google Analytics account and a "property" for your website.

1.  **Go to Google Analytics:** Navigate to the [Google Analytics website](https://analytics.google.com/) and sign in with your Google account.
2.  **Start Setup:** If this is your first time, you'll be prompted to start creating an account. If you already have an account, go to the **Admin** section (look for the gear icon &#9881;&#65039; in the bottom-left corner) and click **Create Account**.
3.  **Account Setup:**
    *   **Account Name:** Give your account a name (e.g., "My Websites").
    *   **Data Sharing Settings:** Review and accept the data sharing settings. Click **Next**.
4.  **Property Setup:**
    *   **Property Name:** Enter a name for your website (e.g., "Mark's Campaign Site").
    *   **Reporting Time Zone & Currency:** Select your time zone and currency. Click **Next**.
    *   **Business Details:** Provide your industry category and business size. Click **Next**.
    *   **Business Objectives:** Select your objectives (e.g., "Generate leads" and "Examine user behavior"). Click **Create**.
    *   Accept the terms of service.

## Part 2: Get Your Measurement ID

After creating the property, you need to set up a "data stream" to collect data from your website. This is where you'll find your Measurement ID.

1.  **Choose a Platform:** Select **Web** as the platform.
2.  **Set Up Data Stream:**
    *   **Website URL:** Enter your website's domain (e.g., `mark4sc.com`).
    *   **Stream Name:** Give the stream a name (e.g., "Website Stream").
    *   Click **Create stream**.
3.  **Find Your Measurement ID:** A new window will appear with your stream details. In the top-right corner, you will see your **Measurement ID**. It will look like `G-XXXXXXXXXX`.
    *   **Copy this ID.** This is the key that connects your website to Google Analytics.

## Part 3: Add the Measurement ID to Your Website

Now, you need to add the Measurement ID you just copied into your `index.html` file.

1.  **Open `index.html`:** Open the `index.html` file in your code editor.
2.  **Find the Placeholders:** Look for the Google Analytics script in the `<head>` section of the file. You will see two placeholders that look like `G-XXXXXXXXXX`.

    ```html
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-XXXXXXXXXX'); // <-- REPLACE THIS
    </script>
    ```

3.  **Replace the Placeholders:** Replace **both** instances of `G-XXXXXXXXXX` with your actual Measurement ID.

## Part 4: Verify the Setup

After you've added your ID and deployed the latest version of your site, you can verify that it's working.

1.  **Visit Your Live Website:** Open your live website in a browser.
2.  **Check Realtime Report:** In your Google Analytics dashboard, navigate to **Reports** > **Realtime**. Within a minute or two, you should see at least one user (yourself) appear in the report.

If you see activity, the setup is complete! Google Analytics is now tracking traffic on your website.
