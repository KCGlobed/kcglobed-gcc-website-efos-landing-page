<template>
  <div class="blog-page-warp ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="blog-big-widget">
            <div class="blog-title">
              <h2>Check Our Latest News</h2>
            </div>
            <div class="row g-5">
              <div
                class="col-lg-6 col-md-6"
                v-for="blog in blogs"
                :key="blog.id"
                data-aos="fade-up"
                :data-aos-delay="blog.dataDelay"
              >
                <div class="main-blog-card">
                  <div class="image">
                    <NuxtLink to="/blog-details">
                      <img :src="blog.image" alt="image" />
                    </NuxtLink>
                  </div>
                  <div class="content">
                    <span>{{ blog.tag }}</span>
                    <h3>
                      <NuxtLink to="/blog-details">
                        {{ blog.title }}
                      </NuxtLink>
                    </h3>
                    <ul class="blog-list">
                      <li>{{ blog.date }}</li>
                      <li>{{ blog.readTime }} read</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <nav
              aria-label="Page navigation example"
              class="inner-pages-pagination"
            >
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    <i class="ti ti-chevron-left"></i>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <i class="ti ti-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col-lg-4">
          <BlogWidget />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/blogs/inner-blog1.jpg";
import image2 from "~/assets/img/blogs/inner-blog2.jpg";
import image3 from "~/assets/img/blogs/inner-blog3.jpg";
import image4 from "~/assets/img/blogs/inner-blog4.jpg";
import image5 from "~/assets/img/blogs/inner-blog5.jpg";
import image6 from "~/assets/img/blogs/inner-blog6.jpg";

export default defineComponent({
  name: "Blog",
  data() {
    return {
      blogs: [
        {
          id: 1,
          image: image1,
          title:
            "Nominate a teacher who made a difference through Humber’s Greatest High School Teacher contest",
          tag: "Career",
          date: "20 Nov 2024",
          readTime: "2 min",
          dataDelay: "200",
        },
        {
          id: 2,
          image: image2,
          title:
            "Advanced Television and Film program updated to provide specialized training in virtual production",
          tag: "Art & Design",
          date: "18 Nov 2024",
          readTime: "5 min",
          dataDelay: "300",
        },
        {
          id: 3,
          image: image3,
          title: "Student Life Unveiled: A Look at Campus Activities and Clubs",
          tag: "Student Life",
          date: "17 Nov 2024",
          readTime: "3 min",
          dataDelay: "400",
        },
        {
          id: 4,
          image: image4,
          title: "Alumni Success Stories: Where Our Graduates Are Today",
          tag: "Art & Design",
          date: "16 Nov 2024",
          readTime: "2 min",
          dataDelay: "500",
        },
        {
          id: 5,
          image: image5,
          title:
            "Embracing Technology: How Our University Adapts to a Digital World",
          tag: "Career",
          date: "15 Nov 2024",
          readTime: "1 min",
          dataDelay: "600",
        },
        {
          id: 6,
          image: image6,
          title: "The Campus Experience: A Virtual Tour of Our University",
          tag: "Art & Design",
          date: "14 Nov 2024",
          readTime: "5 min",
          dataDelay: "700",
        },
      ],
    };
  },
});
</script>
