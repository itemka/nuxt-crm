<template>
  <div>
    <div class="page-title">
      <h3>{{ 'Title_RecordHistory' | localize }}</h3>
    </div>
    <div class="history-chart">
      <canvas ref="canvas"></canvas>
    </div>
    <section>
      <!-- <Loader v-if="loading" /> -->
      <!-- <p
        v-else-if="!records.length"
        class="center"
      > -->
      <p
        v-if="!records.length"
        class="center"
      >
        {{
          'Message_RecordsAreEmpty' | localize
        }} <nuxt-link to="/record" :no-prefetch="true">{{
          'Message_AddNewRecord' | localize
        }}</nuxt-link>
      </p>
      <HistoryTable v-else :records="items" />
      <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="handlePageChange"
        :prev-text="'Prev' | localize"
        :next-text="'Next' | localize"
        :container-class="'pagination'"
        :page-class="'page-item'"
      />
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Pie } from 'vue-chartjs'
import HistoryTable from '@/components/HistoryTable.vue'
import paginationMixin from '@/mixins/pagination'
import { localizeFilter } from '@/filters/localize'
import { getRandomColors } from '@/utils/helper'

export default {
  name: 'History',
  head() {
    return {
      title: this.$getMetaTitle('Menu_History')
    }
  },
  extends: Pie,
  mixins: [paginationMixin],
  data: () => ({
    // loading: true,
    records: []
  }),
  components: {
    HistoryTable
  },
  methods: {
    ...mapActions({
      fetchCategories: 'category/fetchCategories',
      fetchRecords: 'record/fetchRecords',
    }),
    setup(categories) {
      this.setupPagination(
        this.records.map(record => ({
          ...record,
          categoryName: categories.find(({ id }) => id === record.categoryId).title,
          ...(record.type === 'income'
            ? { typeClass: 'green', typeText: localizeFilter(this.$store, 'Income') }
            : { typeClass: 'red', typeText: localizeFilter(this.$store, 'Outcome') }
          )
        }))
      )

      const { backgroundColor = [], borderColor = [] } = getRandomColors(categories)

      this.renderChart({
        labels: categories.map(({ title }) => title),
        datasets: [{
          label: localizeFilter(this.$store, 'Tutle_Chart'),
          data: categories.map(category => {
            return this.records.reduce((acc, record) => {
              if (record.categoryId === category.id && record.type === 'outcome') {
                acc += +record.amount
              }

              return acc
            }, 0)
          }),
          backgroundColor,
          borderColor,
          borderWidth: 1
        }]
      }, {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      })
    }
  },
  async mounted() {
    try {
      const categories = await this.fetchCategories()
      this.records = await this.fetchRecords()

      this.setup(categories)

      // this.loading = false // TODO
    } catch (error) {}
  }
}
</script>
