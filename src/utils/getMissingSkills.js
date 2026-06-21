export const getMissingSkills = (
  resumeText,
  jobDescription
) => {

  if (!jobDescription)
    return [];

  const jdWords =
    jobDescription
      .toLowerCase()
      .split(/\W+/);

  const resume =
    resumeText.toLowerCase();

  const missing = [];

  jdWords.forEach((word) => {

    if (
      word.length > 3 &&
      !resume.includes(word)
    ) {
      missing.push(word);
    }

  });

  return [
    ...new Set(missing)
  ].slice(0, 10);

};