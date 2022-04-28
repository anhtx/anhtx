## SUNTORY MAIL TEMPLATE
```
Create the input layout for Suntory content mail.
Currently the input layout is ONLY support for the content mail with 4 items of product.
```

### node
`>=16.15.0`

### Setup

```
npm install
```

### Build

```
npm run build

If run build have stuck or trouble with "react-is".
Please practices
npm install react-is
and 
npm run build
```

### Dev Server

```
npm start
```

Open http://localhost:8000/


### GUIDE CREATE SUNTORY MAIL

```
Step 1: Please copy all images of content mail to the folder img in the folder dist.
Structure: /dist/img/{all images}

Step 2: Input whole content of "Input SUNTORY Content Mail" screen.

Step 3: Click to button "Create the HTML file".

Step 4: View the content mail after input content and check.

Step 5: 
    a) The button "Absolute mail" is view content mail with images have the absolute path directory.
    b) The button "Relative mail" is view content mail with images have the relative path directory.

Step 6:
    a) The button "View source" to see source this content mail.
    b) Use the button have notify to copy content source HTML.
        - The notification "Copy HTML Absolute mail" mean copy source with images have the absolute path.
        - The notification "Copy HTML Absolute mail" mean copy source with images have the relative path.
    c) The button "Preview" is back to Step 4.

Step 7: Create the new folder with name of content mail in ticket code.
Structure: inspXX (/mail-view/mail/10/spot/prspwthdrev/202109/inspXX)

Step 8: Copy all images of this content mail add to the folder img inside folder inspXX.
Structure: inspXX/img/{all images}

Step 9: Create the index file HTML with name is index.html (File index.html with content is images relative path).

    - Structure: inspXX/index.html
    - Use "Command (or Cmd) + V" to PASTE content mail from "Step 6 - b".

Step 10: Create the メール原稿 file HTML with name is メール原稿.html (File メール原稿.html with content is images absolute path).
    - Structure: inspXX/メール原稿.html
    - Use "Command (or Cmd) + V" to PASTE content mail from "Step 6 - b".

Step 11: Any UPDATE or FIX CONTENT MAIL SHOULD BE DO in the folder inspXX (/mail-view/mail/10/spot/prspwthdrev/202109/inspXX).
    - inspXX/img
    - inspXX/index.html (SAME UPDATE OR SAME FIX)
    - inspXX/メール原稿.html (SAME UPDATE OR SAME FIX)

Step 12: Review the content mail in folder inspXX (/mail-view/mail/10/spot/prspwthdrev/202109/inspXX).

```
