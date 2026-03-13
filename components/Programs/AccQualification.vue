<template>
    <div class="acca-structure-wrapper py-5">
        <div class="container">
            <div class="section-title text-center mb-50">
                <h2 class="title">ACCA <span class="highlight">Qualification Structure</span></h2>
            </div>

            <div class="qualification-container">
                <!-- Level 1 -->
                <div class="level-box level-knowledge">
                    <div class="level-header">
                        <h3 class="level-title">Applied <br /> Knowledge Level</h3>
                        <p class="level-subtitle">(Foundation in accounting & finance)</p>
                    </div>
                    <div class="level-card-main">
                        <ul class="subjects-list">
                            <li>1. Business & Technology (BT)*</li>
                            <li>2. Management Accounting (MA)*</li>
                            <li>3. Financial Accounting (FA)*</li>
                        </ul>
                        <span class="level-number">01</span>
                        <div class="next-arrow"></div>
                    </div>

                </div>

                <!-- Level 2 -->
                <div class="level-box level-skills">
                    <div class="level-header">
                        <h3 class="level-title">Applied Skills <br /> Level</h3>
                        <p class="level-subtitle">(Applied and advanced finance capability)</p>
                    </div>
                    <div class="level-card-main card-two">
                        <ul class="subjects-list">
                            <li>1. Corporate & Business (LW)*</li>
                            <li>2. Performance Management (PM)</li>
                            <li>3. Taxation (TX)*</li>
                            <li>4. Financial Reporting (FR)</li>
                            <li>5. Audit & Assurance (AA)</li>
                            <li>6. Financial Management (FM)</li>
                        </ul>
                        <span class="level-number">02</span>
                        <div class="next-arrow"></div>
                    </div>
                </div>

                <!-- Level 3 -->
                <div class="level-box level-strategic">
                    <div class="level-header">
                        <h3 class="level-title">Strategic <br /> Professional <br /> Level</h3>
                    </div>
                    <div class="level-card-main card-three">
                        <ul class="subjects-list">
                            <li>1. Strategic Business Reporting (SBR)</li>
                            <li>2. Strategic Business Leader (SBL)</li>
                            <li>3. Advanced Audit & Assurance (AAA)</li>
                            <li>4. Advanced Financial Management (AFM)</li>
                            <li>5. Ethics & Professional Skills Module</li>
                        </ul>
                        <span class="level-number">03</span>
                        <div class="next-arrow"></div>
                    </div>
                </div>

                <!-- Success Box -->
                <div class="success-box card-four">
                    <div class="acca-red-box">
                        ACCA
                    </div>
                    <div class="congrats-section">
                        <h4>Congratulations!</h4>
                        <p>You’re a new member of the world’s most forward-thinking professional accountancy body.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.acca-structure-wrapper {
    background-color: #fff;
    font-family: 'Inter', sans-serif;
    padding-bottom: 50px;
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


.qualification-container {
    display: flex;
    align-items: flex-end;
    gap: 0;
    flex-wrap: nowrap;
}

.level-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 15px;
    /* Space for arrow */
}

/* Staggered Vertical Alignment - Exact Staircase */
.level-knowledge {
    margin-top: 180px;
}

.level-skills {
    margin-top: 100px;
}

.level-strategic {
    margin-top: 20px;
}

.success-box {
    margin-top: 75px;
    flex: 0.8;
}

.level-header {
    min-height: 80px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.level-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 5px;
}

.level-subtitle {
    font-size: 15px;
    font-weight: 500;
    color: #333;
    margin-bottom: 0;
}

.level-card-main {
    border: 1.5px solid;
    padding: 30px 20px;
    min-height: 280px;
    background: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
}

.card-two {
    min-height: 380px;
}

.card-three {
    min-height: 480px;
}

.card-four {
    min-height: 480px;
}

/* The Arrow Pointer on the right border */
.next-arrow {
    position: absolute;
    right: -10px;
    top: 18%;
    width: 18px;
    height: 18px;
    background: #fff;
    border-top: 1.5px solid;
    border-right: 1.5px solid;
    transform: translateY(-50%) rotate(45deg);
    z-index: 2;
}

/* Level Specific Colors */
.level-knowledge .level-title {
    color: #C2861F;
}

.level-knowledge .level-card-main {
    border-color: #C2861F;
}

.level-knowledge .next-arrow {
    border-color: #C2861F;
}

.level-knowledge .level-number {
    color: #C2861F;
}

.level-skills .level-title {
    color: #5B8467;
}

.level-skills .level-card-main {
    border-color: #5B8467;
}

.level-skills .next-arrow {
    border-color: #5B8467;
}

.level-skills .level-number {
    color: #5B8467;
}

.level-strategic .level-title {
    color: #4B1D6F;
}

.level-strategic .level-card-main {
    border-color: #4B1D6F;
}

.level-strategic .next-arrow {
    border-color: #4B1D6F;
}

.level-strategic .level-number {
    color: #4B1D6F;
}

.subjects-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.subjects-list li {
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 6px;
    line-height: 1.3;
}

.level-number {
    position: absolute;
    bottom: 5px;
    right: 15px;
    font-size: 52px;
    font-weight: 800;
    opacity: 0.3;
}

/* ACCA Success Section */
.acca-red-box {
    background-color: red;
    color: #fff;
    font-size: 44px;
    font-weight: 900;
    padding: 22px 42px;
    text-align: center;
    border-radius: 2px;
    width: fit-content;
    margin-bottom: 30px;
}

.congrats-section h4 {
    font-weight: 700;
    font-size: 19px;
    color: #333;
    margin-bottom: 8px;
}

.congrats-section p {
    font-size: 13px;
    color: #666;
    line-height: 1.5;
    max-width: 220px;
}

.exemption-note {
    font-size: 11px;
    font-weight: 700;
    color: #1a1a1a;
    margin-top: 15px;
}

@media (max-width: 1200px) {
    .qualification-container {
        flex-wrap: wrap;
        gap: 40px;
        align-items: flex-start;
        /* Reset from flex-end */
    }

    .level-box,
    .success-box {
        margin-top: 0 !important;
        /* Reset staggered layout */
        flex: none;
        width: calc(50% - 20px);
    }

    /* Reset custom heights for flexibility */
    .level-card-main,
    .card-two,
    .card-three,
    .card-four {
        min-height: auto !important;
        padding-bottom: 50px;
    }

    .next-arrow {
        display: block;
        /* Ensure visibility */
        right: auto;
        left: 50%;
        bottom: -10px;
        top: auto;
        transform: translateX(-50%) rotate(135deg);
        /* Point downwards */
    }
}

@media (max-width: 768px) {
    .title {
        font-size: 24px;
    }

    .section-title {
        margin-bottom: 30px;
    }

    .level-box,
    .success-box {
        width: 100%;
        padding-right: 0;
    }

    .qualification-container {
        gap: 20px;
    }

    .acca-red-box {
        margin: 0;
    }

    .success-box {
        display: flex;
        align-items: center;
        gap: 14px;
        justify-content: center;
    }

    .acca-red-box {
        padding: 24px;
    }

    .card-four {
        padding-bottom: 0px;
    }
}
</style>