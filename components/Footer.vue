<template>
  <footer id="footer">

    <div class="footer-top section-bg">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>ADX Project</h4>
            <p>The Anomalous Data Exchange<br/>
              <i class='bx bx-mail-send' ></i> <NuxtLink to="/#contact">Contact form</NuxtLink><br/>
              <i class="bx bxl-twitter"></i> <a href="https://twitter.com/adxproject">@adxproject</a><br/>
            </p><br/>
            <h4>Support the project</h4>
            <a href="https://www.buymeacoffee.com/adxproject"><img
              src="https://img.buymeacoffee.com/button-api/?text=Buy us a pizza&emoji=🍕&slug=adxproject&button_colour=47b2e4&font_colour=FFFFFF&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"></a>
          </div>
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Site</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i>
                <NuxtLink to="/" class="">Home</NuxtLink>
              </li>
              <li><i class="bx bx-chevron-right"></i>
                <NuxtLink to="about" class="">About</NuxtLink>
              </li>
              <li><i class="bx bx-chevron-right"></i>
                <NuxtLink to="adx-ds" class="">ADX Data Standards (ADX-DS)</NuxtLink>
              </li>
              <li><i class="bx bx-chevron-right"></i>
                <NuxtLink to="adx-dw" class="">ADX Data Warehouse (ADX-DW)</NuxtLink>
              </li>
              <li><i class="bx bx-chevron-right"></i>
                <NuxtLink to="collaborate" class="">Collaborate</NuxtLink>
              </li>
              <li><i class="bx bx-chevron-right"></i>
                <NuxtLink to="/#contact" class="">Contact</NuxtLink>
              </li>

            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Info</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i>
                <NuxtLink to="terms-and-conditions" class="">Terms and Conditions</NuxtLink>
              </li>
              <li><i class="bx bx-chevron-right"></i>
                <NuxtLink to="data-policy" class="">Data policy</NuxtLink>
              </li>
              <li><i class="bx bx-chevron-right"></i>
                <NuxtLink to="privacy-policy" class="">Privacy policy</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6">
            <h4>Open Source</h4>
            <p>Feel free to explore the project's GitHub repository at
              <strong><a href="https://www.github.com/adx-project/adx-ds">github.com/adx-project/adx-ds</a></strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><a href="https://adxproject.org">The ADX project</a></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
</template>
