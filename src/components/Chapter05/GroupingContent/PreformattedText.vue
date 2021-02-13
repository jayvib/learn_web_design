<template>
  <div>
    <h2>Preformatted Text</h2>
    <pre>
      <code>
        // Example
        import "http"

        func main() {
          http.HandleFunc('/hello', func(w http.RequestWriter, r *http.Request) {
            fmt.Fprintln(w, "Hello World")
          })

          if err := http.ListenAndServe(":8080", nil); err != nil {
            log.Fatal(err)
          }
        }
      </code>
    </pre>
  </div>
</template>

<script>
  export default {
    name: "PreformattedText"
  }
</script>

<style scoped>

</style>