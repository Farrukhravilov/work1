app.component("product-card", {
    template: //html 
        `
            <div class="group relative">
                                <div
                                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img 
                                        :src="product.image"
                                        :alt="product.title"
                                        class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <a href="#">
                                                {{product.title}}
                                            </a>
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-500">{{product.category}}</p>
                                    </div>
                                    <p class="text-sm font-medium text-gray-900">{{product.price}}</p>
                                </div>
                </div>
                    <!-- More products... -->
    `,
    props: ["product",]
});
// template shablon 