const TEAM_EMAIL = "contact@prodly.tech";

const TEAM_SUBJECT = "Talk to the Prodily team";

const TEAM_BODY = `Hi Prodily team,

I'd like to learn more about Prodily and how it could work for my team.

A bit about us:
- Company:
- Team size:
- What we're hoping to solve:

Looking forward to hearing from you.

Thanks!`;

const DEMO_SUBJECT = "Book a Prodily demo";

const DEMO_BODY = `Hi Prodily team,

I'd like to book a demo to see Prodily in action.

A bit about us:
- Company:
- Team size:
- Preferred demo time(s):
- What we're hoping to see:

Looking forward to scheduling a time.

Thanks!`;

const openEmail = (subject: string, body: string) => {
  const mailto = `mailto:${TEAM_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
};

export const openTeamEmail = () => openEmail(TEAM_SUBJECT, TEAM_BODY);

export const openDemoEmail = () => openEmail(DEMO_SUBJECT, DEMO_BODY);
