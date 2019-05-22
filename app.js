new Vue({
    el: '#app',
    data: {
        breed: {},
        breeds: [],
        selected_breed: {},
        images: [],
        current_image: {}
    },
    mounted() {
        this.getBreeds();
        this.getImages("abys");
    },
    methods: {
        async getBreeds()
        {
            try {
                axios.defaults.headers.common['x-api-key'] = "fd680846-74cf-41c1-9b76-6e0832eb6ef1"

                let response = await axios.get('https://api.thecatapi.com/v1/breeds/')
                this.breeds = response.data;
            } catch (e) {
                console.log('app_getBreeds_error: ' + e)
            }
        },
        async getImages(selected_breed) {
            try {
                let limit = 10
                let response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + selected_breed + '&limit=' + limit)

                this.images = response.data
                this.current_image = this.images[0]

            } catch (e) {
                console.log('app_getImages_error: ' + e)
            }
        }
    }
})