export const calculateMatch = (
  resumeText,
  jobDescription
) => {

  if (!jobDescription) return 0;

  const words =
    jobDescription
      .toLowerCase()
      .split(/\W+/);

  let matched = 0;

  words.forEach((word) => {

    if (
      word.length > 3 &&
      resumeText
        .toLowerCase()
        .includes(word)
    ) {
      matched++;
    }

  });

  return Math.round(
    (matched / words.length) * 100
  );
};