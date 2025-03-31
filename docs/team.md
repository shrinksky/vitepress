---
layout: home
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/shrinksky.png',
    name: 'shrinksky',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/shrinksky' }
    ],
    org:'超自然科技非盈利组织',
    orgLink:'https://github.com/shrinksky',
    desc: '一名热爱编程的学生，热衷于分享自己的编程经验。',
    sponsor:'https://github.com/shrinksky',
    actionText: '加入我们'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      shinksky 是一个热爱编程的学生，热衷于分享自己的编程经验。目前只有一个成员，但我们会不断壮大。欢迎加入我们！
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
    size="medium"
  />
</VPTeamPage>

