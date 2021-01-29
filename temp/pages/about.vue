<template>
  <section>
    <h1>About</h1>
    <p
     v-for="(paragraph, idx) in paragraphs"
     :key="idx"
    >
      {{ paragraph.text }}
    </p>
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
  data: () => ({
    paragraphs: [
      {
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsum, ad. Dicta quasi quam ipsum, iure, voluptatum ipsa consectetur voluptatibus cumque
              obcaecati vero facere itaque est aperiam beatae veniam repudiandae nam?`
      },
      {
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nihil cumque perferendis praesentium nulla necessitatibus quas in voluptas asperiores consequuntur quaerat,
              officia perspiciatis hic quae ad distinctio laudantium ipsam ipsa. Sint?`
      },
      {
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vero eum quo soluta reprehenderit quasi numquam nam consectetur ad odio pariatur doloremque,
              iste minima ipsum labore recusandae mollitia excepturi, magni aliquid?`
      }
    ]
  })
}
</script>

<style>
</style>
