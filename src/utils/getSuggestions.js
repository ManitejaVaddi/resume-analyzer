export const getSuggestions = (resume) => {

  const suggestions = [];

  if (
    !/skills/i.test(resume)
  ) {
    suggestions.push("Add Skills Section");
  }

  if (
    !/experience|internship/i.test(resume)
  ) {
    suggestions.push("Add Experience Section");
  }

  if (
    !/project/i.test(resume)
  ) {
    suggestions.push("Add Projects Section");
  }

  if (
    !/education/i.test(resume)
  ) {
    suggestions.push("Add Education Section");
  }

  if (
    !/certification|certificate/i.test(resume)
  ) {
    suggestions.push("Add Certifications");
  }

  if (
    !/linkedin/i.test(resume)
  ) {
    suggestions.push("Add LinkedIn");
  }

  if (
    !/github/i.test(resume)
  ) {
    suggestions.push("Add GitHub");
  }

  return suggestions;
};