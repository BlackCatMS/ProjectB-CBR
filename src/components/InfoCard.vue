<script setup lang="ts">


</script>

<template>
    <div class="infocard">

        <img src="/assets/icons/oranje/Fiets.png" alt="Fiets">

        <div class="infocard-text">

            <h2>Fietsen</h2>

            <p>
                Beschrijving van fietsen, hier komt een korte beschrijving te staan van wat het ongeveer inhoud.
                ik maak de text nog even wat langer want dat is cool
            </p>

        </div>

        <RouterLink class="routerlink" to="/fietsen">
            <button>Meer over fietsen</button>
        </RouterLink>

    </div>
</template>

<style scoped lang="scss">
.infocard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius-value);
    background-color: white;
    width: 300px;
    height: 370px;
    box-shadow: var(--color-blue-main) 0px 1px 3px 0px, 
    var(--color-blue-main) 0px 0px 0px 1px;
}

img {
    object-fit: contain;
    margin-top: 2rem;
    margin-right: 6rem;
    margin-left: 6rem;
    height: 5rem;
}

.infocard-text {
  border: none;
  padding: 0.75rem;
  text-align: center;
}

h2 {
  letter-spacing: 0;
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

p {
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.routerlink {
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  outline: none;

  margin-bottom: 2rem;
}

button {
  border: none;
  outline: none;

  text-decoration: none;

  color: white;
  text-transform: uppercase;

  font-weight: bold;
  font-size: .75rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-blue-main);
  border-radius: var(--border-radius-value);
}

button:hover {
    background-color: var(--color-orange-main);

    cursor: pointer;
}

</style>