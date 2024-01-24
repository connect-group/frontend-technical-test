export const parser = (templateObject) => {
  if (
    typeof templateObject === "object"
    && templateObject
    && "template" in templateObject
  ) {
    const { template, ...values } = templateObject;

    let parsedTemplate = template;

    Object.keys(values).forEach((key) => {
      const variable = new RegExp(`\\$${key}`, "g");
      parsedTemplate = parsedTemplate.replace(variable, values[key]);
    });

    return parsedTemplate;
  }
  return undefined;
};
