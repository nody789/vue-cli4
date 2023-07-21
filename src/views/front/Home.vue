<template>
  <div class="home">
    <div class="container px-0 px-md-3">
      <div class="header">
        <div
          class="header-main-image bg-cover"
          style="
            background-image: url(https://img.boylondon.tw/20190429181919_2.jpg);
          "
        ></div>
        <div class="row no-gutters justify-content-center rectangle-section">
          <div class="col-md-10">
            <div class="row no-gutters">
              <a
                href="#"
                class="col-4 rectangle-image-wrap"
                @click.prevent="
                  $router.push({ name: 'About', params: { category: '漢堡' } })
                "
              >
                <span class="rectangle-text">漢堡</span>
                <div class="four-sides rectangle-over zindex--1"></div>
                <div
                  class="rectangle-image bg-cover"
                  style="
                    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-CtheZNhFwynCOV2IhPsJm0Lvye47IcSzIw&usqp=CAU);
                  "
                ></div>
              </a>
              <a
                href="#"
                class="col-4 rectangle-image-wrap"
                @click.prevent="
                  $router.push({
                    name: 'About',
                    params: { category: '義大利麵' },
                  })
                "
              >
                <span class="rectangle-text">義大利麵</span>
                <div class="four-sides rectangle-over zindex--1"></div>
                <div
                  class="rectangle-image bg-cover"
                  style="
                    background-image: url(https://images.chinatimes.com/newsphoto/2019-09-25/1024/20190925003872.jpg);
                  "
                ></div>
              </a>
              <a
                href="#"
                class="col-4 rectangle-image-wrap"
                @click.prevent="
                  $router.push({
                    name: 'About',
                    params: { category: '漢堡' },
                  })
                "
              >
                <span class="rectangle-text">燉飯</span>
                <div class="four-sides rectangle-over zindex--1"></div>
                <div
                  class="rectangle-image bg-cover"
                  style="
                    background-image: url(https://shoplineimg.com/566bfb31e37ec66e5f000003/5bf2df1d482a930012b3e3c2/800x.webp?source_format=jpg);
                  "
                ></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section my-md-9">
      <div class="row justify-content-center no-gutters d-md-none">
        <div class="col-8">
          <h2 class="h4 my-5 text-center text-title d-md-none">
            想吃漢堡——
            <br />
            是不需要理由的。
          </h2>
        </div>
      </div>
      <div class="bg-primary-lighter">
        <div class="container">
          <div class="row">
            <div class="col-md-6 break-vertical-block">
              <div
                class="bg-cover h-100 section-image"
                style="
                  background-image: url(https://angelala.tw/wp-content/uploads/img/20180911150941_90.jpg);
                "
              ></div>
            </div>
            <div class="col-md-6 section-content d-flex justify-content-end">
              <div class="text-md-vertical py-md-7 py-5">
                <p class="mb-0">
                  十九世紀晚期，美國進入大量的工業化之後，工人們不可能回家吃中餐，有時甚至晚餐也在外面吃。
                </p>
                <p class="mb-0">
                  他們沒有安藤百福的泡麵、也沒有飯糰、便當，但是又必須補充大量的體力，應付勞動階級的工作，快速填飽肚子。
                </p>
                <p class="mb-0">
                  此時美國不少地方都出現行動餐車，在工廠外或是公園旁，提供上班的人可以迅速、便宜地解決一餐。
                </p>
              </div>
              <h2
                class="break-vertical-block text-md-vertical text-title d-none d-md-block"
              >
                為什麼——
                <br />
                <span class="mt-5">選擇做漢堡？</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section my-md-9">
      <div class="row justify-content-center no-gutters d-md-none my-5">
        <div class="col-8">
          <h2 class="h4 my-5 text-center text-title d-md-none">
            想吃漢堡——
            <br />
            是不需要理由的。
          </h2>
        </div>
      </div>
      <div class="bg-primary-lighter">
        <div class="container">
          <div class="row flex-row-reverse">
            <div class="col-md-6 break-vertical-block">
              <div
                class="bg-cover h-100 section-image"
                style="
                  background-image: url(https://i2.wp.com/www.daisyyohoho.com/wp-content/uploads/2018/02/Ribs-of-Vienna-2.jpg?resize=1000%2C667);
                "
              ></div>
            </div>
            <div class="col-md-6 section-content d-flex justify-content-end">
              <div class="text-md-vertical py-md-7 py-5">
                <p class="mb-0">
                  粗獷的美式烤豬肋排，帶著多種原汁原味的口感，鮮嫩而富有彈性的肉質，挑動著肉食動物們的味蕾。
                </p>
                <p class="mb-0">
                  美式燒烤中，此乃「第一主角」。精選一塊上等豬肋排，
                </p>
                <p class="mb-0">
                  刷上秘制豬排醬，用木炭精心烘烤，香氣撲鼻、鮮嫩多汁、口味濃郁、大快朵頤！
                </p>
              </div>
              <h2
                class="break-vertical-block text-md-vertical text-title d-none d-md-block"
              >
                為什麼
                <br />
                <span class="mt-5">選擇做豬叻排？</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="container my-5 my-md-7">
      <div class="row">
        <div class="col-md-4">
          <div class="item-card mb-4">
            <div
              class="item-image"
              style="
                background-image: url(https://previews.123rf.com/images/gdolgikh/gdolgikh1812/gdolgikh181200131/113111188-pizza-with-salami-and-chorizo.jpg);
              "
            >
              <div class="item-tag">本日精選</div>
            </div>
            <div class="item-body d-flex text-center">
              <div class="item-name col">瑪格麗特</div>
              <strong class="item-price col">NT$ 450</strong>
            </div>
            <a href="#" class="btn-lg btn-primary-lighter btn btn-block">
              加入購物車
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="item-card mb-4">
            <div
              class="item-image"
              style="
                background-image: url(https://previews.123rf.com/images/jagcz/jagcz1511/jagcz151100036/47420819-delicious-hamburger-served-on-wooden-planks.jpg);
              "
            >
              <div class="item-tag">本日精選</div>
            </div>
            <div class="item-body d-flex text-center">
              <div class="item-name col">超大牛肉漢堡</div>
              <strong class="item-price col">NT$ 450</strong>
            </div>
            <a href="#" class="btn-lg btn-primary-lighter btn btn-block">
              加入購物車
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="item-card mb-4">
            <div
              class="item-image"
              style="
                background-image: url(https://miro.medium.com/max/7728/1*sYi17gLZlW9MEMEBxHpgYA.jpeg);
              "
            >
              <div class="item-tag">本日精選</div>
            </div>
            <div class="item-body d-flex text-center">
              <div class="item-name col">美味豬叻排</div>
              <strong class="item-price col">NT$ 450</strong>
            </div>
            <a href="#" class="btn-lg btn-primary-lighter btn btn-block">
              加入購物車
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-md-5 d-flex align-items-center justify-content-center
            justify-content-md-start mb-4 mb-md-0"
          >
            <span class="mx-3 text-white h4 mb-0">定位你我的美味郵件</span>
          </div>
          <div class="col-md-5">
            <div
              class="form-square form-square-withicon d-flex justify-content-between"
            >
              <label
                for="subscription"
                class="form-square-icon-left fas fa-envelope"
                ><p class="text-hide">email</p></label
              >
              <input
                type="email"
                id="subscription"
                class="form-input w-100 text-white"
              />
              <button
                class="btn btn-primary btn-lg d-flex align-items-center fas fa-arrow-right"
              >
                <p class="text-hide">arrow</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
