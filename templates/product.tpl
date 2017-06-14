<div
  class="{{styles.product-tile}} product-tile"
  data-id={{data.id}}
>
  <div class="{{styles.img-cont}} bordered">
    <img src="/assets/images/{{data.image}}" alt="">
  </div>
  <div class="details t-center">
    <div><a href="/product/{{this.id}}">{{data.name}}</a></div>
    <div class="">
      <p>{{data.desc}}</p>
      <p>{{data.measurement}}</p>
      <p>S$ {{data.price}}</p>
    </div>
  </div>
</div>