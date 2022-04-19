
<template>
  <div class="detailsPage">
    <div class="container px-lg-5">
      <div class="row d-flex justify-content-center">
        <div class="col-sm-12 my-3">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6 mb-5">
                  <div class="bg-light">
                    <img class="w-100" :src="contentdetails.strMealThumb" />
                  </div>
                </div>
                <div class="col-sm-6  text-left">
                  <h5 class="card-title font-weight-bold">{{ contentdetails.strMeal }}</h5>
                  <p class="card-text">
                  <a :href="contentdetails.strYoutube" target="_blank"><u>Video of how to prepare the dish</u></a>                    
                  </p>
                  <h6 class="font-weight-bold">List of ingredients including measures-:</h6>
                  <table class="table table-bordered">
                    <tr>
                      <th>Ingredients</th>
                      <th>Quantity</th>
                    </tr>
                    <tr>
                      <td>{{contentdetails.strIngredient1}}</td>
                      <td>{{contentdetails.strMeasure1}}</td>
                    </tr>
                    <tr>
                      <td>{{contentdetails.strIngredient2}}</td>
                      <td>{{contentdetails.strMeasure2}}</td>
                    </tr>
                    <tr>
                      <td>{{contentdetails.strIngredient3}}</td>
                      <td>{{contentdetails.strMeasure3}}</td>
                    </tr>
                    <tr>
                      <td>{{contentdetails.strIngredient4}}</td>
                      <td>{{contentdetails.strMeasure4}}</td>
                    </tr>
                    <tr>
                      <td>{{contentdetails.strIngredient5}}</td>
                      <td>{{contentdetails.strMeasure5}}</td>
                    </tr>
                    <tr>
                      <td>{{contentdetails.strIngredient6}}</td>
                      <td>{{contentdetails.strMeasure6}}</td>
                    </tr>
                    <tr>
                      <td>{{contentdetails.strIngredient7}}</td>
                      <td>{{contentdetails.strMeasure7}}</td>
                    </tr>
                    <tr>
                      <td>{{contentdetails.strIngredient8}}</td>
                      <td>{{contentdetails.strMeasure8}}</td>
                    </tr>
                    <tr>
                      <td>{{contentdetails.strIngredient9}}</td>
                      <td>{{contentdetails.strMeasure9}}</td>
                    </tr>
                    <tr>
                      <td>{{contentdetails.strIngredient10}}</td>
                      <td>{{contentdetails.strMeasure10}}</td>
                    </tr>
                  </table>
                  <p class="text-justify"><span class="font-weight-bold text-danger">Instructions how to prepare the dish -:</span>
                  {{contentdetails.strInstructions}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  name: "DetailsPage",
  components: {},
  data() {
    return {
      productName: "",
    };
  },
  computed: mapGetters(['contentdetails']),

  mounted() {
    this.productName = this.$route.params.id;
    console.log("this.pdDetails=>", this.productName);
    this.productDetails();
  },
  methods: {
    ...mapActions(["getFoodDetails"]),

    productDetails() {
      this.getFoodDetails(this.productName);
    },
  },
};
</script>
