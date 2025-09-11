# Deploying Your Site to Netlify with a Namecheap Domain

This guide provides step-by-step instructions to deploy your website on Netlify and connect it to your custom domain purchased from Namecheap.

## Part 1: Deploying the Site to Netlify

The simplest way to deploy this project is using Netlify's drag-and-drop feature.

1.  **Log in to Netlify:** Go to [app.netlify.com](https://app.netlify.com/) and log in to your account.
2.  **Navigate to the Sites Page:** This is your main dashboard where all your sites are listed.
3.  **Drag and Drop Your Project Folder:**
    *   Locate the project folder on your computer (the `mark4sc.com` folder).
    *   Drag the entire folder and drop it onto the designated area in the Netlify "Sites" tab.
    ![Netlify Drag and Drop](https://docs.netlify.com/images/drag-and-drop-ui.gif)
4.  **Deployment Complete:** Netlify will automatically build and deploy your site. It will be live in a few moments at a randomly generated Netlify URL (e.g., `your-random-site-name.netlify.app`). You can use this link to verify that the site looks correct.

## Part 2: Connecting Your Namecheap Domain

Now, let's point your custom domain (e.g., `mark4sc.com`) to your newly deployed Netlify site.

### Step A: Add the Domain to Netlify

1.  **Go to Site Settings:** In your Netlify dashboard, click on the site you just deployed.
2.  **Open Domain Settings:** From the site's overview page, go to **Site settings** > **Domain management**.
3.  **Add Custom Domain:** Click the **Add a domain** button. Enter your custom domain (e.g., `mark4sc.com`) and click **Verify**.
4.  **Confirm Ownership:** Netlify will ask you to confirm that you are the owner. Click **Add domain**.

### Step B: Configure Nameservers in Namecheap

Netlify will now show you a list of 4 nameservers. They will look something like this (your nameservers may be different):
*   `dns1.p01.nsone.net`
*   `dns2.p01.nsone.net`
*   `dns3.p01.nsone.net`
*   `dns4.p01.nsone.net`

You need to update your domain settings in Namecheap to use these nameservers.

1.  **Log in to Namecheap:** Go to your [Namecheap Dashboard](https://www.namecheap.com/myaccount/dashboard/).
2.  **Find Your Domain:** Go to the **Domain List** on the left sidebar and click the **Manage** button next to your domain.
3.  **Change Nameservers:**
    *   Look for the **NAMESERVERS** section.
    *   Click the dropdown menu and select **Custom DNS**.
    ![Namecheap Custom DNS](https://www.namecheap.com/support/assets/images/info-articles/nc-custom-dns.png)
4.  **Enter Netlify Nameservers:**
    *   Copy the first nameserver from Netlify and paste it into the `Nameserver 1` field in Namecheap.
    *   Repeat this for all four nameservers provided by Netlify.
    *   Click the green checkmark to save your changes.

### Step C: Wait for DNS Propagation

1.  **Wait:** It can take anywhere from a few minutes to 48 hours for these DNS changes to take effect across the internet. You can check the status in your Netlify domain management settings.
2.  **Secure Your Site:** Once the domain is pointing to Netlify, Netlify will automatically provision a free SSL certificate from Let's Encrypt, so your site will be served securely over HTTPS.

That's it! Once propagation is complete, your website will be live at your custom domain.
