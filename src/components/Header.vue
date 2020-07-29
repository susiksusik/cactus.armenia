<template>

  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">


      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu cct-justify">
      <div class="cct-justify has-text-justified has-text-centered">
        <a  class="navbar-item" href="/">
          HOME
        </a>

        <a class="navbar-item" href="/about">
          ABOUT US
        </a>

        <a class="navbar-item" href="/contact">
          CONTACT US
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            CACTUSES
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              INFO
            </a>
            <a class="navbar-item" href="/blog">
              BLOG
            </a>
          </div>
        </div>


      </div>

    </div>
  </nav>

</template>
