<template>
  <div class="academic-page">
    <section class="page-intro academic-project-intro">
      <router-link to="/" class="text-link">← {{ t('nav.back') }}</router-link>
      <p class="academic-kicker">{{ t('academic.kicker') }}</p>
      <h1>{{ t('sections.projects') }}</h1>
      <p>{{ t('academic.projectsIntro') }}</p>
    </section>

    <section class="academic-section">
      <div class="publication-list project-archive">
        <article v-for="index in projectIndexes" :key="index" class="publication-row">
          <span class="publication-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h2>{{ t(`projects[${index}].title`) }}</h2>
            <p class="publication-meta">{{ t(`projects[${index}].meta`) }}</p>
            <p>{{ t(`projects[${index}].description`) }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="academic-section">
      <h2>{{ t('sections.contributions') }}</h2>
      <div class="news-list contribution-archive">
        <div v-for="index in contributionIndexes" :key="index" class="news-row">
          <strong>{{ t(`contributions[${index}].title`) }}</strong>
          <p>{{ t(`contributions[${index}].description`) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const projectIndexes = Array.from({ length: 17 }, (_, index) => index)
const contributionIndexes = [0, 1, 2, 3, 4]
</script>
