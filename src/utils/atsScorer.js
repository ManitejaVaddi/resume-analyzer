export const calculateATS = (resumeText) => {

  let score = 0;

  const checks = [
    /skills/i,
    /education/i,
    /experience/i,
    /project/i,
    /certification/i,
    /\S+@\S+\.\S+/,
    /\d{10}/,
    /github/i,
    /linkedin/i,
    /internship/i
  ];

  checks.forEach((item) => {
    if(item.test(resumeText)){
      score += 10;
    }
  });

  return Math.min(score,100);
};