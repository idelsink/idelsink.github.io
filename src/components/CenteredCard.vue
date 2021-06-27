<template lang="html">
  <VMain>
    <VContainer fluid>
      <VLayout
        align-center
        justify-center
      >
        <VFlex
          xs12
          sm6
        >
          <VCard light>
            <slot />
          </VCard>
        </VFlex>
      </VLayout>
    </VContainer>
  </VMain>
</template>

<script>
export default {
  name: 'CenteredCard'
};
</script>

<style lang="css" scoped>
</style>
