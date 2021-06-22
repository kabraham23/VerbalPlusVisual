import Vue from 'vue';
import '../theme';
import getAllProducts from '../graphql/collection-starter-code';
import { render } from 'node-sass';


// getAllProducts('test-collection') => returns a Promise, which resolves to an Array of Product Objects

// Your Code Here



export default {

    state = {
        data: {}
    },

    getData = () => ({ products: [] }),
    methods: {
        beforeCreate() {
            fetch(getAllProducts('test-collection'))
            .then(data => data.json())
            .then(data => this.setState({data}))
        },
        render() {
            return (
                <div>
                    {Object.keys(this.state.data).length && this.state.data.products.map((data) => {
                        return (
                            <div id="product-card">
                                
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}