<template>
  <div class="academic-page">
    <section class="academic-intro">
      <div>
        <p class="academic-kicker">{{ t('academic.kicker') }}</p>
        <h1>{{ t('profile.name') }}</h1>
        <p class="academic-role">{{ t('academic.role') }}</p>
        <p class="academic-bio">{{ t('academic.bio') }}</p>
        <div class="academic-links">
          <a :href="'https://' + t('profile.github')" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a :href="`mailto:${email}`">{{ email }}</a>
          <router-link to="/projects">{{ t('nav.projects') }}</router-link>
        </div>
      </div>
      <img src="/0007.jpg" :alt="t('profile.name')" class="academic-portrait" />
    </section>

    <section class="academic-section">
      <h2>{{ t('academic.aboutTitle') }}</h2>
      <p>{{ t('academic.about') }}</p>
      <p class="academic-affiliation">{{ t('academic.affiliation') }} · {{ t('profile.location') }}</p>
    </section>

    <section class="academic-section">
      <h2>{{ t('academic.researchTitle') }}</h2>
      <div class="research-list">
        <article v-for="(item, index) in researchIndexes" :key="item" class="research-item">
          <span class="research-number">0{{ index + 1 }}</span>
          <div>
            <h3>{{ t(`academic.research[${index}].title`) }}</h3>
            <p>{{ t(`academic.research[${index}].description`) }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="academic-section">
      <h2>{{ t('academic.newsTitle') }}</h2>
      <div class="news-list">
        <div v-for="index in newsIndexes" :key="index" class="news-row">
          <time>{{ t(`academic.news[${index}].date`) }}</time>
          <p>{{ t(`academic.news[${index}].text`) }}</p>
        </div>
      </div>
    </section>

    <section class="academic-section">
      <div class="section-heading academic-heading">
        <h2>{{ t('academic.selectedTitle') }}</h2>
        <router-link to="/projects" class="text-link">{{ t('academic.allProjects') }} →</router-link>
      </div>
      <div class="publication-list">
        <article v-for="index in selectedIndexes" :key="index" class="publication-row">
          <div>
            <h3>{{ t(`academic.selected[${index}].title`) }}</h3>
            <p class="publication-meta">{{ t(`academic.selected[${index}].meta`) }}</p>
            <p>{{ t(`academic.selected[${index}].description`) }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="academic-section academic-end">
      <h2>{{ t('academic.educationTitle') }}</h2>
      <p><strong>{{ t('education.school') }}</strong> · {{ t('education.degree') }}</p>
      <p class="academic-muted">{{ t('education.period') }} · {{ t('education.location') }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const email = computed(() => t('profile.email').replace("{'@'}", '@'))
const researchIndexes = [0, 1, 2]
const newsIndexes = [0, 1, 2, 3]
const selectedIndexes = [0, 1, 2, 3]
</script>
