<template lang="html">
  <VApp dark>
    <VContent>
      <VContainer
        fluid
        fill-height
      >
        <VLayout justify-center>
          <VFlex
            xs12
            sm6
          >
            <VCard light>
              <VCardTitle>
                <div>
                  <h1>404 Page not found</h1>
                  <p>Beep boop, the AI did it's best, but it could not find the page you where looking for.</p>
                  <p>The URL may be misspelled or the page you're looking for is no longer available.</p>
                  <VBtn
                    ripple
                    :to="{ name: 'Home' }"
                  >
                    Take Me Home
                  </VBtn>
                </div>
              </VCardTitle>
            </VCard>
          </VFlex>
        </VLayout>
      </VContainer>
    </VContent>
  </VApp>
</template>

<script>
export default {
  name: 'PageNotFound'
};
</script>

<style lang="css">
</style>
