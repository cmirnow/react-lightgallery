module.exports = function override(config) {
  // console.log("Original rules:", config.module.rules);

  // Find an existing rule for source-map-loader
  const sourceMapLoaderRule = config.module.rules.find(
    (rule) =>
      rule.enforce === "pre" &&
      rule.loader &&
      rule.loader.includes("source-map-loader")
  );

  if (sourceMapLoaderRule) {
    // Convert exclude to an array if it is not an array
    const currentExclude = Array.isArray(sourceMapLoaderRule.exclude)
      ? sourceMapLoaderRule.exclude
      : [sourceMapLoaderRule.exclude]; // Если это RegExp, оборачиваем в массив

    // Add an exception for lightgallery
    sourceMapLoaderRule.exclude = [
      ...currentExclude, // Используем преобразованный массив
      /node_modules\/lightgallery/,
    ];
  // console.log("Updated sourceMapLoaderRule:", sourceMapLoaderRule);
  } else {
    console.log("Source-map-loader rule not found, adding manually");
    config.module.rules.push({
      test: /\.css$/,
      enforce: "pre",
      use: ["source-map-loader"],
      exclude: [/node_modules\/lightgallery/],
    });
  }

  // console.log("Updated rules:", config.module.rules);
  return config;
};
