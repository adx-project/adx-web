<template>
  <header id="header" class="fixed-top header-scrolled">
    <div class="container d-flex align-items-center">
      <NuxtLink to="/" class="logo me-auto">
        <img src="~/assets/img/logo.png" alt="" class="img-fluid">
      </NuxtLink>
      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="about" class="nav-link">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="adx-ds" class="nav-link">ADX-DS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="adx-dw" class="nav-link">ADX-DW</NuxtLink>
          </li>
          <li>
            <NuxtLink to="collaborate" class="nav-link">Collaborate</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#contact" class="nav-link scrollto">Contact</NuxtLink>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle" @click="toggle"></i>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggle: function () {
      let burger = document.querySelector('.mobile-nav-toggle');

      document.querySelector('#navbar').classList.toggle('navbar-mobile');
      burger.classList.toggle('bi-list');
      burger.classList.toggle('bi-x');
    },
  }
}
</script>
