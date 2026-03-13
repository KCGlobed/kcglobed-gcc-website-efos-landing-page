<template>
    <div class="mentors-section" id="our-mentor">
        <!-- Section Header -->
        <div class="section-header">
            <h2 class="section-title">Our Mentors</h2>
            <!-- <p class="section-subtitle">Learn from industry leaders and experienced professionals</p> -->
        </div>

        <!-- Tab Navigation -->
        <div class="tab-navigation">
            <div class="tab-buttons">
                <button v-for="tab in tabs" :key="tab.key" class="tab-button"
                    :class="{ 'active': activeTab === tab.key }" @click="activeTab = tab.key">
                    {{ tab.label }}
                    <span class="tab-indicator" v-if="activeTab === tab.key"></span>
                </button>
            </div>
        </div>

        <!-- Tab Content -->
        <div class="tab-content-container">
            <!-- Board of Governors -->
            <div v-if="activeTab === 'board'" class="tab-content fade-in">
                <div class="mentor-grid">
                    <div class="mentor-card" v-for="(mentor, index) in boardMentors" :key="index">
                        <a :href="mentor.link" target="_blank">
                            <div class="mentor-image-wrapper">
                                <img :src="mentor.image" :alt="mentor.name" class="mentor-image" />
                            </div>
                        </a>

                    </div>
                </div>
            </div>

            <!-- Executive Leaders -->
            <div v-if="activeTab === 'leaders'" class="tab-content fade-in">

                <div class="mentor-grid compact">
                    <div class="mentor-card compact" v-for="(leader, index) in executiveLeaders" :key="index">
                        <img :src="leader.image" :alt="leader.name" class="mentor-image compact" />

                    </div>
                </div>
            </div>

            <!-- Masters in Residence -->
            <div v-if="activeTab === 'masters'" class="tab-content fade-in">
                <div class="mentor-grid compact">
                    <div class="mentor-item" v-for="(master, index) in masters" :key="index">
                        <img :src="master.image" :alt="master.name" class="mentor-image compact" />

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mentor1 from '@/assets/img/mentor/mentor1.png'
import mentor2 from '@/assets/img/mentor/mentor2.png'
import mentor3 from '@/assets/img/mentor/mentor3.png'
import mentor4 from '@/assets/img/mentor/mentor4.png'
import mentor5 from '@/assets/img/mentor/mentor5.png'
import mentor6 from '@/assets/img/mentor/mentor6.png'
import expert1 from '@/assets/img/expert/expert1.png'
import expert2 from '@/assets/img/expert/expert2.png'
import expert3 from '@/assets/img/expert/expert3.png'
import expert4 from '@/assets/img/expert/expert4.png'
import expert5 from '@/assets/img/expert/expert5.png'
import expert6 from '@/assets/img/expert/expert6.png'
import expert7 from '@/assets/img/expert/expert7.png'
import expert8 from '@/assets/img/expert/expert8.png'
import industryMentor1 from '@/assets/img/industryMentor/1.png'
import industryMentor2 from '@/assets/img/industryMentor/2.png'
import industryMentor3 from '@/assets/img/industryMentor/3.png'
import industryMentor4 from '@/assets/img/industryMentor/4.png'
import industryMentor5 from '@/assets/img/industryMentor/5.png'
import industryMentor6 from '@/assets/img/industryMentor/6.png'
import industryMentor7 from '@/assets/img/industryMentor/7.png'
import industryMentor8 from '@/assets/img/industryMentor/8.png'
import industryMentor10 from '@/assets/img/industryMentor/10.png'
import industryMentor11 from '@/assets/img/industryMentor/11.png'
import industryMentor12 from '@/assets/img/industryMentor/12.png'
import industryMentor13 from '@/assets/img/industryMentor/13.png'
import industryMentor14 from '@/assets/img/industryMentor/14.png'
import industryMentor15 from '@/assets/img/industryMentor/15.png'
import industryMentor16 from '@/assets/img/industryMentor/16.png'









export default {
    name: "OurMentors",
    data() {
        return {
            activeTab: "board",
            tabs: [
                { key: "board", label: "Think Tank" },
                { key: "leaders", label: "Subject Matter Experts" },
                { key: "masters", label: "Industry Mentors" },
            ],
            boardMentors: [
                {

                    image: mentor1,
                    link: "https://www.linkedin.com/in/prof-dr-nirmaljeet-singh-kalsi-ias-retd-0b84561/"
                },
                {

                    image: mentor2,
                    link: "https://www.linkedin.com/in/sarvesh-mathur-4951a03/"
                },
                {

                    image: mentor3,
                    link: "https://www.linkedin.com/in/harinderjit-singh-0ba49093/"
                },
                {

                    image: mentor4,
                    link: "https://www.linkedin.com/in/caparveen/"
                },
                {

                    image: mentor5,
                    link: "https://www.linkedin.com/in/drmanna/"
                },
                {

                    image: mentor6,
                    link: "https://www.linkedin.com/in/kamalchhabra/"
                },

            ],
            executiveLeaders: [
                {
                    name: "Alexandra Park",
                    position: "Chief Executive Officer",
                    image: expert1
                },
                {
                    name: "David Miller",
                    position: "Chief Academic Officer",
                    image: expert2
                },
                {
                    name: "Lisa Wang",
                    position: "Chief Technology Officer",
                    image: expert3
                },
                {
                    name: "James Wilson",
                    position: "Chief Operations Officer",
                    image: expert4
                },
                {
                    name: "James Wilson",
                    position: "Chief Operations Officer",
                    image: expert5
                },
                {
                    name: "James Wilson",
                    position: "Chief Operations Officer",
                    image: expert6
                },
                {
                    name: "James Wilson",
                    position: "Chief Operations Officer",
                    image: expert7
                },
                {
                    name: "James Wilson",
                    position: "Chief Operations Officer",
                    image: expert8
                },

            ],
            masters: [
                {
                    name: "Dr. Emily Rodriguez",
                    expertise: "Data Science & AI",
                    experience: "15+ years at Tech Giants",
                    image: industryMentor1
                },
                {
                    name: "Kenji Tanaka",
                    expertise: "Business Strategy",
                    experience: "Former Fortune 500 Executive",
                    image: industryMentor2
                },
                {
                    name: "Dr. Emily Rodriguez",
                    expertise: "Data Science & AI",
                    experience: "15+ years at Tech Giants",
                    image: industryMentor3
                },
                {
                    name: "Kenji Tanaka",
                    expertise: "Business Strategy",
                    experience: "Former Fortune 500 Executive",
                    image: industryMentor4
                },
                {
                    name: "Dr. Emily Rodriguez",
                    expertise: "Data Science & AI",
                    experience: "15+ years at Tech Giants",
                    image: industryMentor5
                },
                {
                    name: "Kenji Tanaka",
                    expertise: "Business Strategy",
                    experience: "Former Fortune 500 Executive",
                    image: industryMentor6
                },
                {
                    name: "Dr. Emily Rodriguez",
                    expertise: "Data Science & AI",
                    experience: "15+ years at Tech Giants",
                    image: industryMentor7
                },
                {
                    name: "Kenji Tanaka",
                    expertise: "Business Strategy",
                    experience: "Former Fortune 500 Executive",
                    image: industryMentor8
                },

                {
                    name: "Kenji Tanaka",
                    expertise: "Business Strategy",
                    experience: "Former Fortune 500 Executive",
                    image: industryMentor10
                },
                {
                    name: "Dr. Emily Rodriguez",
                    expertise: "Data Science & AI",
                    experience: "15+ years at Tech Giants",
                    image: industryMentor11
                },
                {
                    name: "Kenji Tanaka",
                    expertise: "Business Strategy",
                    experience: "Former Fortune 500 Executive",
                    image: industryMentor12
                },
                {
                    name: "Kenji Tanaka",
                    expertise: "Business Strategy",
                    experience: "Former Fortune 500 Executive",
                    image: industryMentor13
                },
                {
                    name: "Kenji Tanaka",
                    expertise: "Business Strategy",
                    experience: "Former Fortune 500 Executive",
                    image: industryMentor14
                },
                {
                    name: "Kenji Tanaka",
                    expertise: "Business Strategy",
                    experience: "Former Fortune 500 Executive",
                    image: industryMentor15
                },
                {
                    name: "Kenji Tanaka",
                    expertise: "Business Strategy",
                    experience: "Former Fortune 500 Executive",
                    image: industryMentor16
                },

            ]
        };
    },
};
</script>

<style scoped>
.mentors-section {
    padding: 80px 0;
    background: #F7F9FC;
    min-height: 100vh;
}

/* Section Header */
.section-header {
    text-align: center;
    margin-bottom: 60px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 16px;
    position: relative;
    display: inline-block;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #4299e1, #667eea);
    border-radius: 2px;
}

.section-subtitle {
    font-size: 1.125rem;
    color: #718096;
    line-height: 1.6;
    margin-top: 24px;
}

/* Tab Navigation */
.tab-navigation {
    margin-bottom: 40px;
}

.tab-buttons {
    display: flex;
    justify-content: center;
    gap: 8px;
    max-width: 764px;
    margin: 0 auto;
    background: white;
    padding: 8px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.tab-button {
    flex: 1;
    padding: 16px 24px;
    border: none;
    background: transparent;
    color: #4a5568;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 8px;
    position: relative;
    min-width: 160px;
}

.tab-button:hover {
    background: #edf2f7;
    color: #2d3748;
}

.tab-button.active {
    background: linear-gradient(135deg, #9A8EBC, #3D2C5E);
    color: white;
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
}

.tab-indicator {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 3px;
    background: white;
    border-radius: 1.5px;
}

/* Tab Content */
.tab-content-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.tab-content {
    animation: fadeIn 0.5s ease;
}

.tab-intro {
    text-align: center;
    margin-bottom: 48px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.tab-title {
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 16px;
    font-weight: 600;
}

.tab-description {
    color: #718096;
    line-height: 1.7;
    font-size: 1.125rem;
}

/* Mentor Grid */
.mentor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 32px;
    padding: 20px 0;
}

.mentor-grid.compact {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
}

/* Mentor Card */
.mentor-card {
    background: transparent;
    border-radius: 16px;
    overflow: hidden;
    /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); */
    transition: all 0.3s ease;
}

.mentor-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.mentor-card.compact {
    text-align: center;
    padding: 24px;
}

.mentor-image-wrapper {
    position: relative;
    overflow: hidden;
    /* aspect-ratio: 4/3; */
}

.mentor-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.mentor-card:hover .mentor-image {
    transform: scale(1.05);
}

.mentor-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 24px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.mentor-card:hover .mentor-overlay {
    opacity: 1;
}

.view-profile-btn {
    padding: 10px 24px;
    background: white;
    color: #2d3748;
    border: none;
    border-radius: 24px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.view-profile-btn:hover {
    background: #4299e1;
    color: white;
    transform: translateY(-2px);
}

.mentor-info {
    padding: 24px;
}

.mentor-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 8px;
}

.mentor-position {
    color: #4299e1;
    font-weight: 500;
    margin-bottom: 4px;
    font-size: 0.95rem;
}

.mentor-company {
    color: #718096;
    font-size: 0.875rem;
}

/* Mentor List (for Masters tab) */
.mentor-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.mentor-item {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 24px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.mentor-item:hover {
    transform: translateX(8px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.mentor-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
}

.mentor-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.mentor-details h4 {
    font-size: 1.25rem;
    color: #2d3748;
    margin-bottom: 8px;
    font-weight: 600;
}

.mentor-expertise {
    color: #4299e1;
    font-weight: 500;
    margin-bottom: 4px;
    font-size: 0.95rem;
}

.mentor-experience {
    color: #718096;
    font-size: 0.875rem;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.5s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }

    .tab-buttons {
        flex-direction: column;
        gap: 4px;
    }

    .tab-button {
        min-width: auto;
    }

    .mentor-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .mentor-item {
        flex-direction: column;
        text-align: center;
        gap: 16px;
    }

    .mentor-overlay {
        opacity: 1;
    }
}
</style>