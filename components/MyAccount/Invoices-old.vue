<template>
  <section class="user-orders">
    <div class="table-content table-responsive" id="cart-container">
      <table class="table" ref="DownloadComp">
        <thead>
          <tr>
            <th>{{ t('Image',1) }}</th>
            <th>{{ t('package-name',1) }}</th>
            <th>{{ t('quantity',1) }}</th>
            <th>{{ t('Payment Method',1) }}</th>
            <th>{{ t('Payment Status',1) }}</th>
            <th>{{ t('total-price',1) }}</th>
            <th>{{ t('Created Date',1) }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in items" :key="order.id">
            <td v-if="order.product.productImageUrl"><img :src="apiBase + '/' + order.product.productImageUrl" alt="" width="65" height="40" /></td>
            <td v-if="!order.product.productImageUrl">----</td>
            <td>
                {{ useTranslate(order.product, 'name').slice(0, 20) ?? '----' }}
            </td>
            <td>
              {{ order.quantity ?? '----' }}
            </td>
            <td>
              {{ order.paymentType ?? '----' }}
            </td>
            <td>
              {{ order.status ?? '----' }}
            </td>
            <td>
              {{ order.totalPrice ?? '----' }}
            </td>
            <td>
              {{ useDate(order.createdOn) ?? '----' }}
            </td> 
          </tr>
        </tbody>
      </table>      
    </div>
    <!-- <div class="text-end">
      <button class="btn-main" @click="Print">Print</button>
    </div> -->
    <div class="pagination d-none">
      <div class="row w-100 mx-auto my-3">
        <div class="col-6 text-start">
          <button type="button" :class="`btn btn-outline-secondary px-4 py-1 ${page == 0 ? 'disabled' : ''}`" @click="prevRecords">Prev</button>
        </div>
        <div class="col-6 text-end">
          <button type="button" :class="`btn btn-outline-secondary px-4 py-1 ${lastPage ? 'disabled' : ''}`" @click="nextRecords">Next</button>
        </div>
      </div>
    </div>

  </section>
</template>
<script>
  export default {
    components: {
    },
    methods: {
      Print() {
          let w = window.open()
          w.document.write(this.$refs.DownloadComp.outerHTML)
          w.document.close()
          w.setTimeout(function () {
            w.print()
          }, 1000)
      }
    },
  }
</script>
<script setup>
  const { public: {api, apiBase} } = useRuntimeConfig()
  const { items } = defineProps(['items'])
  // console.log('items', items)
  const page = ref(0);
  const productNumberPerPage = ref(8);
  const orders = ref([]);
  const lastPage = ref(false);

  const { data, error, pending: dataPending, execute } = await useAsyncData(
    'orders',
    () => $fetch(`${api.ClientOrdersApi}`, {
      method: 'GET',
      baseURL: `${apiBase}`,
      params: {PageNumber: page.value, PageSize: productNumberPerPage.value},
      headers: {
        'Authorization': `Bearer ${useToken().value}`
      },

    } ), {
      watch: [page, productNumberPerPage],
    }
  );

  // refetch the token if 401 error occure
  if (error.value && error.value.statusCode == 401) {
    await useReauthorization().reAuthorize()
  }

  const appendOrders = ( newOrders ) => {    
    if (newOrders.length == 0) {
      lastPage.value = true
      return;
    } else {
      lastPage.value = false
      orders.value = [];
      newOrders.forEach( ( product ) => {
        orders.value.push( product );
      });
    }
  }

  const nextRecords = () => {
    if (!lastPage.value) {
      page.value = page.value + 1
    }
  }

  const prevRecords = () => {
    if (lastPage.value) {
      page.value = page.value - 2
    }
    if (page.value != 0) {
      page.value = page.value - 1
    }
  }

  // Life cycle Hook
  onMounted(() => {
    if (data.value) orders.value = data.value
    else execute()
  })
  watch(data, (newData) => appendOrders( newData ))
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/scss/theme/theme";
  .table-responsive {
    // &::-webkit-scrollbar { height: 6px; }
    // &::-webkit-scrollbar-track { background: #2e2b2b; }
    // &::-webkit-scrollbar-thumb { background: $gold; border-radius: 10px; }
    // &::-webkit-scrollbar-thumb:hover { background: #555; }
    @include horizontal-scrollbar(6px, '#2e2b2b', $green, '#555');
  }
  table.table {
    color: #000;
    thead th,
    tbody td { height: 60px; vertical-align: middle; white-space: nowrap; text-align: center; }
  }
  button.btn:focus:not(:focus-visible) {
    box-shadow: unset;
  }
</style>