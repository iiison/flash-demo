<ul class="u-4-5 zero">
  {{#each data.activeProducts}}
    <li
      class="bordered {{../styles.product-tile}} product-tile"
      data-id={{this.id}}
    >
      <div class="{{../styles.img-cont}}">
        <img src="/assets/images/{{this.image}}" alt="">
      </div>
      <div class="details t-center">
        <div><a href="">{{this.name}}</a></div>
        <div class="center">
          <p>{{this.measurement}}</p>
          <p>S$ {{this.price}}</p>
        </div>
      </div>
      <div class="btn t-upper t-center padded-s" data-id={{this.id}}>add to cart</div>
    </li>
  {{/each}}
</ul>
