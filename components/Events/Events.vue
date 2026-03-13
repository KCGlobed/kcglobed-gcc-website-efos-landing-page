<template>
  <div class="timeline-area ptb-100">
    <div class="container">
      <div class="section-title">
        <h2>Pathway to Success</h2>
        <p>Your academic journey structured into semesters for a comprehensive learning experience.</p>
      </div>

      <div class="timeline">
        <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item"
          :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }">
          <div class="content" data-aos="fade-up" :data-aos-delay="item.delay">
            <div class="date">{{ item.period }}</div>
            <h3>{{ item.title }}</h3>
            <ul class="module-list" v-if="item.modules && item.modules.length">
              <li v-for="(module, mIndex) in item.modules" :key="mIndex">
                <i class="ti ti-check"></i> {{ module }}
              </li>
            </ul>
            <!-- <p v-else>{{ item.description }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="fun-fact-warp ptb-100">
      <div class="section-title">
        <h2>About ACCA</h2>
        <p>ACCA (Association of Chartered Certified Accountants) is one of the world’s most respected professional<br />
          accounting bodies, trusted by employers across audit, finance, consulting, and global business services.</p>
      </div>

      <div class="container">
        <div class="row justify-content-center g-4"><!--[-->
          <div class="col-lg-3 col-sm-6 col-md-6" data-aos="zoom-in-up" data-aos-delay="200">
            <div class="fun-fact-card">
              <div class="d-flex align-items-center">
                <div class="icon">
                  <div class="icon style"><img
                      src="data:image/svg+xml,%3csvg%20width=&#39;60&#39;%20height=&#39;60&#39;%20viewBox=&#39;0%200%2060%2060&#39;%20fill=&#39;none&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3e%3cpath%20d=&#39;M38.2598%2036.9905H30H21.7402C15.5591%2036.9905%2010.5304%2042.0192%2010.5304%2048.2003V60H49.4696V48.2003C49.4696%2042.0193%2044.4409%2036.9905%2038.2598%2036.9905ZM28.23%2050.1134V53.957L16.6996%2042.4266C17.4029%2041.8117%2018.2178%2041.3216%2019.1113%2040.9946L28.23%2050.1134ZM31.77%2050.1134L40.8886%2040.9947C41.7821%2041.3217%2042.597%2041.8119%2043.3004%2042.4268L31.77%2053.9571V50.1134ZM36.3467%2040.5304L30%2046.8772L23.6533%2040.5304H36.3467ZM14.0703%2048.2003C14.0703%2047.1946%2014.2669%2046.2344%2014.6203%2045.3536L25.7269%2056.4601H14.0703V48.2003ZM45.9297%2056.4601H34.2731L45.3796%2045.3536C45.7331%2046.2344%2045.9297%2047.1946%2045.9297%2048.2003V56.4601Z&#39;%20fill=&#39;%232B7258&#39;/%3e%3cpath%20d=&#39;M40.6198%2026.3706V18.3271C40.6198%2017.7473%2040.5551%2017.1828%2040.4357%2016.6384L44.1597%2014.5942V26.9607H47.6997V12.651L49.4862%2011.6703L30%200L10.514%2011.6703L19.5643%2016.6384C19.4449%2017.1828%2019.3802%2017.7473%2019.3802%2018.3271V26.3706C19.3802%2032.2264%2024.1442%2036.9904%2030%2036.9904C35.8558%2036.9904%2040.6198%2032.2264%2040.6198%2026.3706ZM17.6268%2011.5368L30%204.12627L42.3733%2011.5368L38.913%2013.4362C37.4673%2011.6135%2035.2354%2010.441%2032.7337%2010.441H27.2663C24.7646%2010.441%2022.5327%2011.6135%2021.087%2013.4362L17.6268%2011.5368ZM37.0038%2017.5208H22.9964C23.3756%2015.5083%2025.1455%2013.9809%2027.2665%2013.9809H32.7338C34.8547%2013.9809%2036.6245%2015.5085%2037.0038%2017.5208ZM30%2033.4505C26.0962%2033.4505%2022.9201%2030.2745%2022.9201%2026.3706V21.0607H37.0799V26.3706C37.0799%2030.2745%2033.9038%2033.4505%2030%2033.4505Z&#39;%20fill=&#39;%232B7258&#39;/%3e%3c/svg%3e"
                      alt=""></div>
                </div>
                <h2 class="counter">424,000</h2>
                <h2 class="plus">+</h2>
              </div>
              <p>Students - worldwide</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-md-6" data-aos="zoom-in-up" data-aos-delay="300">
            <div class="fun-fact-card">
              <div class="d-flex align-items-center">
                <div class="icon">
                  <div class="icon style"><img
                      src="data:image/svg+xml,%3csvg%20width=&#39;60&#39;%20height=&#39;60&#39;%20viewBox=&#39;0%200%2060%2060&#39;%20fill=&#39;none&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3e%3cg%20clip-path=&#39;url(%23clip0_34_56)&#39;%3e%3cpath%20d=&#39;M56.4694%2033.7531V16.0592L59.9793%2014.3841L29.9897%200.0708008L0%2014.3841L10.5713%2019.4294V31.3629L29.9897%2041.0722L49.4081%2031.3629V19.4294L52.9388%2017.7444V33.7532C50.884%2034.4819%2049.4081%2036.4441%2049.4081%2038.7455C49.4081%2041.6657%2051.7838%2044.0414%2054.7041%2044.0414C57.6244%2044.0414%2060%2041.6657%2060%2038.7455C60%2036.444%2058.5241%2034.4818%2056.4694%2033.7531ZM45.8775%2029.1808L29.9897%2037.1247L14.1019%2029.1808V21.1145L29.9897%2028.6973L45.8775%2021.1145V29.1808ZM29.9897%2024.7852L8.19681%2014.3841L29.9896%203.98297L51.7825%2014.3841L29.9897%2024.7852ZM54.7041%2040.5107C53.7306%2040.5107%2052.9388%2039.7188%2052.9388%2038.7454C52.9388%2037.772%2053.7306%2036.9801%2054.7041%2036.9801C55.6775%2036.9801%2056.4694%2037.772%2056.4694%2038.7454C56.4694%2039.7188%2055.6775%2040.5107%2054.7041%2040.5107Z&#39;%20fill=&#39;%237768E5&#39;/%3e%3cpath%20d=&#39;M47.6428%2045.8066C43.9087%2045.8066%2016.0282%2045.8066%2012.3366%2045.8066C9.36686%2045.8066%207.04065%2048.9083%207.04065%2052.8679C7.04065%2056.8275%209.36686%2059.9291%2012.3366%2059.9291H47.6428C50.6124%2059.9291%2052.9388%2056.8275%2052.9388%2052.8679C52.9388%2048.9083%2050.6124%2045.8066%2047.6428%2045.8066ZM10.5713%2052.8679C10.5713%2050.7126%2011.6168%2049.3373%2012.3366%2049.3373C13.0564%2049.3373%2014.1019%2050.7126%2014.1019%2052.8679C14.1019%2055.0232%2013.0564%2056.3985%2012.3366%2056.3985C11.6168%2056.3985%2010.5713%2055.0231%2010.5713%2052.8679ZM16.9433%2056.3985C17.863%2054.234%2017.8632%2051.5025%2016.9433%2049.3373H26.4591V56.3985H16.9433ZM29.9897%2056.3985V49.3373H35.2856V56.3985H29.9897ZM47.6428%2056.3985H38.8163V49.3373H47.6428C48.3626%2049.3373%2049.4081%2050.7126%2049.4081%2052.8679C49.4081%2055.0232%2048.3626%2056.3985%2047.6428%2056.3985Z&#39;%20fill=&#39;%237768E5&#39;/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id=&#39;clip0_34_56&#39;%3e%3crect%20width=&#39;60&#39;%20height=&#39;60&#39;%20fill=&#39;white&#39;/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                      alt=""></div>
                </div>
                <h2 class="counter">147,000</h2>
                <h2 class="plus">+</h2>
              </div>
              <p>Members Onboard</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-md-6" data-aos="zoom-in-up" data-aos-delay="400">
            <div class="fun-fact-card">
              <div class="d-flex align-items-center">
                <div class="icon ">
                  <div class="icon style"><img
                      src="data:image/svg+xml,%3csvg%20width=&#39;60&#39;%20height=&#39;60&#39;%20viewBox=&#39;0%200%2060%2060&#39;%20fill=&#39;none&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3e%3cg%20clip-path=&#39;url(%23clip0_34_65)&#39;%3e%3cpath%20d=&#39;M42.4489%2021.7039L52.0951%200H34.1473L30%209.33141L25.8527%200H7.90497L17.5511%2021.7039C12.2656%2025.558%208.82356%2031.7959%208.82356%2038.8235C8.82356%2050.5002%2018.3233%2060%2030%2060C41.6767%2060%2051.1765%2050.5002%2051.1765%2038.8235C51.1765%2031.7959%2047.7345%2025.558%2042.4489%2021.7039ZM39.408%2019.8556C38.5487%2019.4276%2037.6571%2019.0556%2036.7369%2018.746L43.4998%203.52941H46.664L39.408%2019.8556ZM36.441%203.52941H39.6374L33.252%2017.8967C32.2447%2017.7408%2031.2139%2017.6573%2030.1656%2017.6491L36.441%203.52941ZM28.0689%2013.6765L26.4706%2017.2726L20.3625%203.52941H23.5591L28.0689%2013.6765ZM13.3359%203.52941H16.5001L23.2631%2018.746C22.3429%2019.0556%2021.4512%2019.4276%2020.5919%2019.8556L13.3359%203.52941ZM30%2056.4706C20.2694%2056.4706%2012.353%2048.5541%2012.353%2038.8235C12.353%2029.0929%2020.2694%2021.1765%2030%2021.1765C39.7306%2021.1765%2047.6471%2029.0929%2047.6471%2038.8235C47.6471%2048.5541%2039.7306%2056.4706%2030%2056.4706Z&#39;%20fill=&#39;%23F8CA4D&#39;/%3e%3cpath%20d=&#39;M33.3942%2034.4972L30%2027.6199L26.6058%2034.4972L19.0162%2035.6L24.5081%2040.9533L23.2116%2048.5121L30%2044.9433L36.7884%2048.512L35.4919%2040.9532L40.9838%2035.5999L33.3942%2034.4972ZM32.1008%2042.0603L30%2040.9559L27.8992%2042.0603L28.3004%2039.721L26.6008%2038.0645L28.9495%2037.7232L30%2035.5947L31.0505%2037.723L33.3992%2038.0643L31.6996%2039.7209L32.1008%2042.0603Z&#39;%20fill=&#39;%23F8CA4D&#39;/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id=&#39;clip0_34_65&#39;%3e%3crect%20width=&#39;60&#39;%20height=&#39;60&#39;%20fill=&#39;white&#39;/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                      alt=""></div>
                </div>
                <h2 class="counter">90</h2>
                <h2 class="plus">+</h2>
              </div>
              <p>Nations Reached</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-md-6" data-aos="zoom-in-up" data-aos-delay="500">
            <div class="fun-fact-card">
              <div class="d-flex align-items-center">
                <div class="icon">
                  <div class="icon style"><img
                      src="data:image/svg+xml,%3csvg%20width=&#39;60&#39;%20height=&#39;60&#39;%20viewBox=&#39;0%200%2060%2060&#39;%20fill=&#39;none&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3e%3cg%20clip-path=&#39;url(%23clip0_34_74)&#39;%3e%3cpath%20d=&#39;M56.4706%2015.8824V21.1765H46.3396L31.7647%2013.0793V10.5882H44.1176V0H28.2353V13.0793L13.6604%2021.1765H3.52941V15.8824H0V60H60C60%2058.0538%2060%2017.8128%2060%2015.8824H56.4706ZM40.5882%207.05882H31.7647V3.52941H40.5882V7.05882ZM56.4706%2030H47.6471V24.7059H56.4706V30ZM47.6471%2045.8824H56.4706V49.4118H47.6471V45.8824ZM47.6471%2042.3529V33.5294H56.4706V42.3529H47.6471ZM44.1176%2035.2941H15.8824V23.9795L30%2016.1364L44.1176%2023.9795V35.2941ZM3.52941%2045.8824H12.3529V49.4118H3.52941V45.8824ZM3.52941%2042.3529V33.5294H12.3529V42.3529H3.52941ZM12.3529%2030H3.52941V24.7059H12.3529V30ZM3.52941%2056.4706V52.9412H12.3529V56.4706H3.52941ZM26.4706%2056.4706V45.8824H33.5294V56.4706H26.4706ZM37.0588%2056.4706V42.3529H22.9412V56.4706H15.8824V38.8235H44.1176V56.4706H37.0588ZM47.6471%2056.4706V52.9412H56.4706V56.4706H47.6471Z&#39;%20fill=&#39;%23FC6441&#39;/%3e%3cpath%20d=&#39;M24.7059%2026.4706C24.7059%2029.3899%2027.0809%2031.7647%2030.0001%2031.7647C32.9192%2031.7647%2035.2942%2029.3899%2035.2942%2026.4706C35.2942%2023.5513%2032.9192%2021.1765%2030.0001%2021.1765C27.0809%2021.1765%2024.7059%2023.5513%2024.7059%2026.4706ZM31.7648%2026.4706C31.7648%2027.4437%2030.9731%2028.2353%2030.0001%2028.2353C29.027%2028.2353%2028.2353%2027.4437%2028.2353%2026.4706C28.2353%2025.4976%2029.027%2024.7059%2030.0001%2024.7059C30.9731%2024.7059%2031.7648%2025.4976%2031.7648%2026.4706Z&#39;%20fill=&#39;%23FC6441&#39;/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id=&#39;clip0_34_74&#39;%3e%3crect%20width=&#39;60&#39;%20height=&#39;60&#39;%20fill=&#39;white&#39;/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                      alt=""></div>
                </div>
                <h2 class="counter">83</h2>
                <h2 class="plus">+</h2>
              </div>
              <p>Global Offices</p>
            </div>
          </div><!--]-->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Events",
  data() {
    return {
      timelineItems: [
        {
          period: "Trimester 1 (July – Sept 2026)",
          title: "Foundation & Fundamentals",
          modules: [
            "Financial Reporting (FR)",
            "Financial Management (FM)",
            "AI for Finance, Audit & Accounting",
            "Data analytics, Power BI, Advance Excel",
            "MS Office",
            "Communication & Presentation Skills – British Council",
            "Corporate Internal Training"
          ],
          delay: "100"
        },
        {
          period: "Trimester 2 (Oct – Dec 2026) ",
          title: "Advanced Concepts & Application",
          modules: [
            "Audit and Assurance (AA)",
            "Performance Management (PM)",
            "GCC Internship – 6 hr/day(Interim Busy Season)",
          ],
          delay: "200"
        },
        {
          period: "Trimester 3 (Jan – Mar 2027)",
          title: "Strategic Professional Level",
          modules: [
            "Strategic Business Reporting (SBR)",
            "Strategic Business Leader (SBL)",
            "GCC Internship – 6 hr/day (Year-End Busy Season)",
          ],
          delay: "300"
        },
        {
          period: "Trimester 4 (Apr – Jun 2027)",
          title: "Beyond Graduation",
          modules: [
            "Advanced Audit & Assurance (AAA)",
            "Advanced Financial Management (AFM) ",
            "Corporate Internal Training (Earmarked GCC Candidates)",
          ],
          delay: "400"
        }
      ],
    };
  },
});
</script>

<style scoped>
.timeline-area {
  position: relative;
  overflow: hidden;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The vertical line */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #e9ecef;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  border-radius: 3px;
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  box-sizing: border-box;
}

/* Circles on the timeline */
.timeline-item::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -12.5px;
  /* Half of width */
  background-color: #fff;
  border: 4px solid #F57C00;
  /* Primary Color */
  top: 25px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -12.5px;
}

/* The content container */
.content {
  padding: 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;
  transition: transform 0.3s ease;
}

.content:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.date {
  display: inline-block;
  background: #D98E23;
  color: #fff;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
}

.content h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #2b2b2b;
  font-weight: 700;
}

.module-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.module-list li {
  margin-bottom: 8px;
  font-size: 16px;
  color: #555;
  display: flex;
  align-items: flex-start;
}

.module-list li i {
  color: #D98E23;
  margin-right: 10px;
  margin-top: 4px;
}

/* Media queries - Responsive timeline on smaller screens */
@media screen and (max-width: 768px) {
  .timeline::after {
    left: 31px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .timeline-item::after {
    left: 19px;
    /* Adjust circle position */
  }

  .left::after,
  .right::after {
    left: 19px;
  }

  .right {
    left: 0%;
  }
}
</style>
