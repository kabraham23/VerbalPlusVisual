import Vue from 'vue';
import '../theme';
import getAllProducts from '../graphql/collection-starter-code';


// getAllProducts('test-collection') => returns a Promise, which resolves to an Array of Product Objects

// Your Code Here



export default {
    data: () => ({ products: [] }),
    methods: {
        beforeCreate() {
            console.log(getAllProducts('test-collection'));
            return this.$api.get('products')
            .then(r => {
                this.products = r.data
            })
            .catch(error => {
                this.$notify.error('Something is amiss...')
                throw error
            })
        },
        async asyncAction() {
            await this.performAsyncMethod(
                await this.$store.dispatch('someAction')
            )
        }
    }
}