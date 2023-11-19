let nextJson: any;

export const signIn = async (params: any) => {
  if (nextJson) {
    // Simulate a delay in response
    if (nextJson.timeout)
      await new Promise((resolve) =>
        setTimeout(resolve, nextJson.timeout * 1000),
      );
    return nextJson;
  }
  nextJson = null;
};

// The decorator to be used in ./storybook/preview to apply the mock to all stories

export function decorator(story: any, { parameters }: any) {
  if (parameters && parameters.signIn) {
    nextJson = parameters.signIn;
  }
  return story();
}
