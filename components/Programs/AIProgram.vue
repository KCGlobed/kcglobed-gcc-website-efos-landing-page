<template>
    <div class="ai-program-main ptb-100">
        <div class="container">
            <div class="section-title text-center mb-50">
                <h2 class="title">AI-ENABLED <span class="highlight">INTEGRATED PROGRAM</span></h2>
                <h3 class="sub-title">100% ALIGNED FOR THE GCC NICHE DOMAINS FOR NEXT-GEN PREMIUM CAREERS</h3>
            </div>

            <div class="domains-grid">
                <div v-for="(domain, index) in domains" :key="index"
                    :class="['domain-card', domain.color, { 'centered-card': domain.centered }]">
                    <div class="domain-icon">
                        <i :class="domain.icon"></i>
                    </div>
                    <div class="card-footer-text">
                        <h4 class="domain-title" v-html="domain.title"></h4>
                        <p class="domain-subtitle">{{ domain.subtitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AIProgram",
    data() {
        return {
            domains: [
                { title: 'Audit &<br>Assurance', icon: 'ti ti-shield-check', subtitle: "110K+Jobs Available", color: 'blue' },
                { title: 'Accounting<br>Advisory', icon: 'ti ti-building-bank', subtitle: "235K+ Jobs Available", color: 'magenta' },
                { title: 'Risk<br>Management', icon: 'ti ti-shield', subtitle: "37K+Jobs Available", color: 'purple' },
                { title: 'Financial<br>Accounting &<br>Reporting', icon: 'ti ti-file-text', subtitle: "269K+ Jobs Available", color: 'magenta' },
                { title: 'Management<br>Accounting', icon: 'ti ti-user-cog', subtitle: "224K+ Jobs Available", color: 'purple' },
                { title: 'FP&A', icon: 'ti ti-chart-arrows', subtitle: "77K+ Jobs Available", color: 'blue' },
                { title: 'CFO<br>Advisory', icon: 'ti ti-user-search', subtitle: "20K + Jobs Available ", color: 'blue' },
                { title: 'Transaction<br>Advisory', icon: 'ti ti-coins', subtitle: "11K+ Jobs Available", color: 'magenta' },
                { title: 'Corporate<br>Governance &<br>Compliance', icon: 'ti ti-gavel', subtitle: "165K+ Jobs Available", color: 'purple' },
                // { title: 'International<br>Tax Advisory', icon: 'ti ti-calculator', color: 'purple', centered: true },
            ]
        }
    }
};
</script>

<style scoped>
.ai-program-main {
    background-color: #f3f4f6;
}

.section-title {
    margin-bottom: 50px;
}

.title {
    font-size: 32px;
    font-weight: 700;
    color: #0d0d25;
    margin-bottom: 20px;
    text-transform: uppercase;
    position: relative;
}

.title::after {
    content: "";
    display: block;
    width: 70px;
    height: 4px;
    background: #F1A63E;
    margin: 15px auto 0;
    border-radius: 10px;
}

.highlight {
    color: #F1A63E;
}

.sub-title {
    font-size: 18px;
    font-weight: 600;
    color: #555;
    text-transform: uppercase;
    max-width: 800px;
    margin: 10px auto 0;
}

.domains-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    max-width: 1000px;
    margin: 0 auto;
}

.domain-card {
    border-radius: 12px;
    padding: 20px;
    color: #fff;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: transform 0.3s ease;
    cursor: pointer;
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.domain-card:hover {
    transform: translateY(-5px);
}

.domain-card.blue {
    background-color: #1d2050;
    /* Navy mapping to blue class */
}

.domain-card.magenta {
    background-color: #ba1b94;
}

.domain-card.purple {
    background-color: #63189f;
}

.centered-card {
    grid-column: 2 / 3;
}

.domain-title {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    margin: 0;
    line-height: 1.2;
    text-align: left;
}

.domain-subtitle {
    font-size: 14px;
    color: #fff;
    margin: 0;
    line-height: 1.3;
    text-align: left;
    margin-top: 5px;
}

.domain-icon {
    background: #fff;
    border-radius: 6px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    right: 20px;
}

.domain-icon i {
    font-size: 28px;
}

/* Color icons based on card background */
.domain-card.blue .domain-icon i {
    color: #1d2050;
}

.domain-card.magenta .domain-icon i {
    color: #ba1b94;
}

.domain-card.purple .domain-icon i {
    color: #63189f;
}

.ai-program-bottom-footer {
    max-width: 1000px;
    margin: 50px auto 0;
}

.learning-platform h5 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: #fff;
    /* Adjusted to be visible on grayish bg if needed, but in image it looks white/light */
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    color: #eee;
}

.learning-platform span {
    font-size: 14px;
    color: #bbb;
}

.certification-list span {
    font-size: 18px;
    font-weight: 600;
    color: #eee;
    margin-left: 20px;
}

/* Responsive Styles */
@media screen and (max-width: 991px) {
    .domains-grid {
        grid-template-columns: repeat(2, 1fr);
        max-width: 650px;
    }

    .centered-card {
        grid-column: span 1;
    }
}

@media screen and (max-width: 767px) {

    .ai-program-main {
        padding: 40px 0px;
    }

    .section-title {
        margin-bottom: 30px;
    }

    .title {
        font-size: 24px;
    }

    .title::after {
        margin: 8px auto 0;
    }

    .sub-title {
        font-size: 14px;
    }

    /* .domains-grid {
        grid-template-columns: 1fr;
       
    } */

    .domains-grid {
        grid-template-columns: repeat(2, 1fr);
        max-width: 100%;
    }

    .certification-list {
        text-align: center;
        margin-top: 20px;
    }

    .certification-list span {
        margin: 0 10px;
        display: inline-block;
    }

    .text-end {
        text-align: center !important;
    }

    .learning-platform {
        text-align: center;
    }
}
</style>