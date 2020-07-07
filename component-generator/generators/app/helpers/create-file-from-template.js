module.exports = (
  contextObject,
  {templatePath, destinationPath},
  {componentName, componentFileName},
) => {
  contextObject.fs.copyTpl(
    contextObject.templatePath(templatePath),
    contextObject.destinationPath(destinationPath),
    {
      componentName,
      componentFileName,
    },
  );
};
