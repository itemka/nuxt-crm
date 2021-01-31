export default {
  data: () => ({
    page: 1,
    pageSize: 3,
    pageCount: 0,
    allItems: [],
    items: [],
  }),
  methods: {
    handlePageChange(page) {
      this.$router.push(`${this.$route.path}?page=${page}`)
      this.items = this.allItems[page - 1] || this.allItems[0]
    },
    setupPagination(allItems) {
      this.page = +this.$route.query.page || 1
      this.allItems = this._.chunk(allItems, this.pageSize)
      this.pageCount = this._.size(this.allItems)
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    },
  },
}
