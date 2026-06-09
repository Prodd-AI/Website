const TEAM_EMAIL = "contact@prodly.tech";

const SUBJECT = "Talk to the Prodily team";

const BODY = `Hi Prodily team,

I'd like to learn more about Prodily and how it could work for my team.

A bit about us:
- Company:
- Team size:
- What we're hoping to solve:

Looking forward to hearing from you.

Thanks!`;

export const openTeamEmail = () => {
  const mailto = `mailto:${TEAM_EMAIL}?subject=${encodeURIComponent(
    SUBJECT
  )}&body=${encodeURIComponent(BODY)}`;
  window.location.href = mailto;
};
