[![StandWithPalestine](https://github.com/Safouene1/support-palestine-banner/blob/master/StandWithPalestine.svg)](https://github.com/Safouene1/support-palestine-banner)

# Support Palestine Banners

Welcome to the Support Palestine Banner project! This repository contains a multitude of emblems to aid in showing support for Palestine on the web -- including website banners, ReadMe Banners and Github Badges -- that can be used by OSS projects to spread the word, support the cause, and help Palestine in this disastrous situation.

# Table of Contents
1. [How to Use](https://github.com/Safouene1/support-palestine-banner#how-to-use)
2. [Badges and Banners](https://github.com/Safouene1/support-palestine-banner#badges-and-banners)
3. [Banner Components for React, NextJs 13, Vue (V2 & V3) with Tailwind](https://github.com/Safouene1/support-palestine-banner#banner-components-for-react-nextjs-13-vue-v2--v3-with-tailwind)
4. [Website Banner Installation](https://github.com/Safouene1/support-palestine-banner#website-banner-installation)
5. [Banner Custom Web Component](https://github.com/Safouene1/support-palestine-banner#banner-custom-web-component)
6. [How to Contribute](https://github.com/Safouene1/support-palestine-banner#how-to-contribute)
7. [Troubleshooting](https://github.com/Safouene1/support-palestine-banner#troubleshooting)
8. [Used By](https://github.com/Safouene1/support-palestine-banner#used-by)
9. [License](https://github.com/Safouene1/support-palestine-banner#license)

# How to Use

**To include the shown support banners for usage in your own project--**

1. Locate the specific support banner you would like to utilize from the "Badges and Banners" section below.
  
2. Copy and paste the selected banner's associated Markdown code into your README file and/or any file that supports Markdown in your project.

3. To include the website banner, please make sure to copy the HTML snippet from the "Website Banner Installation" section and paste it right after the opening `<body>` tag of your project's HTML file.

4. If you would like to customize the link in the support banner, simply replace the existing link with your desired link.
   
5. The banner should display immediately after changes are saved. Please see "Troubleshooting" section below and/or reach out if there are any issues with viewing.
   

# Badges and Banners

### Badge Banner

[![StandWithPalestine](https://github.com/Safouene1/support-palestine-banner/blob/master/StandWithPalestine.svg)](./Markdown-pages/Support.md)

```md
[![StandWithPalestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://github.com/Safouene1/support-palestine-banner/blob/master/Markdown-pages/Support.md)
```

### ReadMe Banner

[![ReadMeSupportPalestine](https://github.com/Safouene1/support-palestine-banner/blob/master/banner-support.svg)](./Markdown-pages/Support.md)

```md
[![ReadMeSupportPalestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg)](https://github.com/Safouene1/support-palestine-banner/blob/master/Markdown-pages/Support.md)
```

### ReadMe Banner for Projects

[![ReadMeSupportPalestine](https://github.com/Safouene1/support-palestine-banner/blob/master/banner-project.svg)](./Markdown-pages/Support.md)

```md
[![ReadMeSupportPalestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-project.svg)](https://github.com/Safouene1/support-palestine-banner/blob/master/Markdown-pages/Support.md)
```

# Banner Components for React ,NextJs 13, Vue (V2 & V3) with Tailwind

### Sample of Mobile with dark mode

![example images mobile dark mode](React-Components/example-images/mobile-dark-mode.png)

### Sample of Desktop with light mode

![example images desktop light mode](React-Components/example-images/desktop-light-mode.png)

These components out of the box supports

|     | Features                    |
| --- | --------------------------- |
| ✅  | JavaScript                  |
| ✅  | TypeScript                  |
| ✅  | Server Components           |
| ✅  | Responsive                  |
| ✅  | Closeable                   |
| ✅  | Position Sticky or Relative |

If you are not using Tailwind, import this CSS file: [banner.css](React-Components/banner.css)

Components can be found [here](https://github.com/Safouene1/support-palestine-banner/tree/master/React-Components)

# Website Banner Installation

Use this snippet to show your support for Palestinians on the top of your website. Installing it takes minutes.

![image](https://github.com/Safouene1/support-palestine-banner/assets/22036449/bfbfe6de-0e2f-4d6d-8e7e-fd47ea00ddf2)

### About the Website Banner

This code adds a small black banner on top of your website with Palestinian flag and support message. It links to islamic-relief's donation site but you can change the link to point to a support channel of your choice.

![image](https://github.com/Safouene1/support-palestine-banner/assets/22036449/269d2610-7025-4b69-a3b1-00fbfc2a949a)

### Installation Banner

Installation is dead simple. Just copy this code to your template right after the opening `<body>` tag.

```html
<style>
  body {
    margin-top: 35px;
  }
  .support-palestine,
  .support-palestine:visited {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    background: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
    z-index: 10000;
    text-decoration: none;
    font-family: arial;
  }
  .support-palestine:hover,
  .support-palestine:active {
    background: black;
    display: flex;
    background: rgb(80, 80, 80);
    text-decoration: none;
  }
  .support-palestine__flag {
    margin-right: 10px;
  }

  .support-palestine__label {
    color: white;
    font-size: 12px;
    line-height: 24px;
  }
  .background {
    background: darkgreen;

    height: 21px;
  }
  .top {
    background: black;
    width: 40px;
    height: 8px;
    z-index: 1;
  }
  .middle {
    background: white;
    width: 100%;
    height: 8px;
    z-index: 1;
  }
  .triangle {
    background: auto;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 20px solid red;
    z-index: 2;
    position: relative;
    top: -16px;
    left: 0;
  }
</style>
<a
  class="support-palestine"
  href="https://www.islamic-relief.org.uk/giving/appeals/palestine/"
  target="_blank"
  rel="nofollow noopener"
  title="Donate to support palestine"
>
  <div
    class="support-palestine__flag"
    role="img"
    aria-label="Flag of palestine"
  >
    <div class="background">
      <div class="top"></div>
      <div class="middle"></div>
      <div class="triangle"></div>
    </div>
  </div>
  <div class="support-palestine__label">Donate to support Palestine</div>
</a>
```

# Banner Custom Web Component

Read more about the custom web component [here](Web-component/README.md).

# How to Contribute

Contributions to this project are welcome! If there is anything you would like to add to this repository, click [here](CONTRIBUTING.md) for contribution guidelines.

# Troubleshooting

**If the banner doesn't appear on your website?**    
*Solution:* Double check and make sure that you inserted the desired HTML code immediately following the opening `<body>` tag. Then, check for any conflicting CSS errors in styling.

**If the banner's text is not readable?**    
*Solution:* Locate the pasted HTML code and edit the CSS properties for color of text and background to improve contrast.


# Used By

- [satr14's corner](https://new.sx9.is-a.dev/)

- [LGU timetable](https://www.lgutimetable.online/)

- [Safouen Turki](https://safouen.me)

- [Amin Boulouma](https://github.com/aminblm)

- [Awesome #FreePalestine🇵🇸 Support Kit](https://github.com/aminblm/awesome-free-palestine-support-kit/tree/main)

- [envio CLI](https://github.com/envio-cli/envio)

- [Bixat.dev](https://bixat.dev)

# License
This project is currently licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
