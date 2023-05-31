<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src="../assets/CBR samen vooruit RGB.png" class="logo img-fluid">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Alternatives">Vervoers alternatieven</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Enquete invullen</a>
        </li>
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
</template>
<style>
.navbar.navbar-expand-lg{
  height: 95px;
  background-color: #ffffff;
}
.logo.img-fluid{
  width: 170px;
}
.nav-item .nav-link{
  color: #003DA5;
  font-weight: bolder;
}
.navbar-nav > li{
  margin-left:30px;
  margin-right:30px;
}
@media only screen and (max-width: 768px) {
  .navbar.navbar-expand-lg .container{
    background-color: #0588F0;
  }
}
</style>